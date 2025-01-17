import { OAuth2RequestError } from "arctic";
import { github, lucia } from "$lib/server/auth";
import { prisma } from "$lib/database";

import { redirect, type RequestEvent } from "@sveltejs/kit";

export async function GET(event: RequestEvent): Promise<Response> {
    const code = event.url.searchParams.get("code");
    const state = event.url.searchParams.get("state");
    const storedState = event.cookies.get("github_oauth_state") ?? null;

    if (!code || !state || !storedState || state !== storedState) {
        return new Response(null, {
            status: 400
        });
    }

    try {
        const tokens = await github.validateAuthorizationCode(code);
        const githubUserResponse = await fetch("https://api.github.com/user", {
            headers: {
                Authorization: `Bearer ${tokens.accessToken}`
            }
        });
        const githubUser: GitHubUser = await githubUserResponse.json();

        // Replace this with your own DB client.
        const existingUser = await prisma.user.findUnique({
            where: {
                githubId: githubUser.id
            }
        });

        if (existingUser) {
            const session = await lucia.createSession(existingUser.id, {});
            const sessionCookie = lucia.createSessionCookie(session.id);
            event.cookies.set(sessionCookie.name, sessionCookie.value, {
                path: ".",
                ...sessionCookie.attributes
            });
        } else {
            // Replace this with your own DB client.
            await prisma.user.create({
                data: {
                    githubId: githubUser.id,
                    username: githubUser.login
                }
            });

            const user = await prisma.user.findUnique({
                where: {
                    githubId: githubUser.id
                }
            });

            if (!user) {
                console.error("User not found");
                return new Response(null, {
                    status: 500
                });
            }

            const session = await lucia.createSession(user.id, {});
            const sessionCookie = lucia.createSessionCookie(session.id);
            event.cookies.set(sessionCookie.name, sessionCookie.value, {
                path: ".",
                ...sessionCookie.attributes
            });
        }
        return new Response(null, {
            status: 302,
            headers: {
                Location: "/"
            }
        });
    } catch (e) {
        // the specific error message depends on the provider
        if (e instanceof OAuth2RequestError) {
            // invalid code
            console.error(e);
            return new Response(null, {
                status: 400
            });
        }
        console.error(e);
        return new Response(null, {
            status: 500
        });
    }
}

interface GitHubUser {
    id: number;
    login: string;
}

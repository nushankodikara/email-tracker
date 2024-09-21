import { fail, redirect, type Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { lucia } from "@/server/auth";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async (event) => {
	if (!event.locals.user) redirect(302, "/login");

	return {
		username: event.locals.user.username
	};
};


export const actions: Actions = {
    default: async (event) => {
        if (!event.locals.session) {
            return fail(401);
        }
        await lucia.invalidateSession(event.locals.session.id);
        const sessionCookie = lucia.createBlankSessionCookie();
        event.cookies.set(sessionCookie.name, sessionCookie.value, {
            path: ".",
            ...sessionCookie.attributes
        });
        redirect(302, "/login");
    }
};


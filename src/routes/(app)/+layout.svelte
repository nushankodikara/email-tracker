<script>
	import '../../app.css';
	import Menu from 'lucide-svelte/icons/menu';
	import Bug from 'lucide-svelte/icons/bug';
	import Search from 'lucide-svelte/icons/search';
	import CircleUser from 'lucide-svelte/icons/circle-user';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { Input } from '$lib/components/ui/input';
	import * as Sheet from '$lib/components/ui/sheet';
	import { Button } from '$lib/components/ui/button';
	import { enhance } from '$app/forms';
</script>

<div class="flex min-h-screen w-full flex-col">
	<header class="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
		<nav
			class="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6"
		>
			<a href="/" class="flex items-center gap-2 text-lg font-semibold md:text-base">
				<Bug class="h-6 w-6" />
				<span class="sr-only">Mail Bug</span>
			</a>
			<a href="/" class="text-foreground transition-colors hover:text-foreground"> Dashboard </a>
			<a href="/trackers" class="text-muted-foreground transition-colors hover:text-foreground">
				Trackers
			</a>
			<a href="/statistics" class="text-muted-foreground transition-colors hover:text-foreground">
				Statistics
			</a>
		</nav>
		<Sheet.Root>
			<Sheet.Trigger asChild let:builder>
				<Button variant="outline" size="icon" class="shrink-0 md:hidden" builders={[builder]}>
					<Menu class="h-5 w-5" />
					<span class="sr-only">Toggle navigation menu</span>
				</Button>
			</Sheet.Trigger>
			<Sheet.Content side="left">
				<nav class="grid gap-6 text-lg font-medium">
					<a href="/" class="flex items-center gap-2 text-lg font-semibold">
						<Bug class="h-6 w-6" />
						<span class="sr-only">Mail Bug</span>
					</a>
					<a href="/" class="hover:text-foreground"> Dashboard </a>
					<a href="/trackers" class="hover:text-foreground"> Trackers </a>
					<a href="/statistics" class="text-muted-foreground hover:text-foreground"> Statistics </a>
				</nav>
			</Sheet.Content>
		</Sheet.Root>
		<div class="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
			<form class="ml-auto flex-1 sm:flex-initial">
				<div class="relative">
					<Search class="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
					<Input
						type="search"
						placeholder="Search emails..."
						class="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
					/>
				</div>
			</form>
			<DropdownMenu.Root>
				<DropdownMenu.Trigger asChild let:builder>
					<Button builders={[builder]} variant="secondary" size="icon" class="rounded-full">
						<CircleUser class="h-5 w-5" />
						<span class="sr-only">Toggle user menu</span>
					</Button>
				</DropdownMenu.Trigger>
				<DropdownMenu.Content align="end">
					<DropdownMenu.Label>My Account</DropdownMenu.Label>
					<DropdownMenu.Separator />
					<DropdownMenu.Item>Settings</DropdownMenu.Item>
					<DropdownMenu.Item>Support</DropdownMenu.Item>
					<DropdownMenu.Separator />
					<DropdownMenu.Item
						><form method="post" action="/" use:enhance>
							<button>Sign out</button>
						</form></DropdownMenu.Item
					>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		</div>
	</header>
	<slot />
</div>

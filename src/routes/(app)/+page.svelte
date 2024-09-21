<script lang="ts">
	import MousePointerClick from 'lucide-svelte/icons/mouse-pointer-click';
	import ArrowUpRight from 'lucide-svelte/icons/arrow-up-right';
	import Users from 'lucide-svelte/icons/users';
	import * as Avatar from '$lib/components/ui/avatar';
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import * as Table from '$lib/components/ui/table';
	import { Compass } from 'lucide-svelte';
</script>

<main class="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
	<div class="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
		<Card.Root>
			<Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
				<Card.Title class="text-sm font-medium">Total Clicks</Card.Title>
				<MousePointerClick class="h-8 w-8 text-muted-foreground" />
			</Card.Header>
			<Card.Content>
				<div class="text-2xl font-bold">256</div>
				<p class="text-xs text-muted-foreground">+20% from last month</p>
			</Card.Content>
		</Card.Root>
		<Card.Root>
			<Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
				<Card.Title class="text-sm font-medium">Active Trackers</Card.Title>
				<Users class="h-8 w-8 text-muted-foreground" />
			</Card.Header>
			<Card.Content>
				<div class="text-2xl font-bold">20</div>
				<p class="text-xs text-muted-foreground">+12 this month</p>
			</Card.Content>
		</Card.Root>
		<Card.Root>
			<Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
				<Card.Title class="text-sm font-medium">Campaigns</Card.Title>
				<Compass class="h-8 w-8 text-muted-foreground" />
			</Card.Header>
			<Card.Content>
				<div class="text-2xl font-bold">5</div>
				<p class="text-xs text-muted-foreground">+2 this month</p>
			</Card.Content>
		</Card.Root>
	</div>
	<div class="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
		<Card.Root class="xl:col-span-2">
			<Card.Header class="flex flex-row items-center">
				<div class="grid gap-2">
					<Card.Title>Trackers</Card.Title>
					<Card.Description>Recent trackers you created.</Card.Description>
				</div>
				<Button href="##" size="sm" class="ml-auto gap-1">
					View All
					<ArrowUpRight class="h-4 w-4" />
				</Button>
			</Card.Header>
			<Card.Content>
				<Table.Root>
					<Table.Header>
						<Table.Row>
							<Table.Head>Tracker</Table.Head>
							<Table.Head class="xl:table.-column">Type</Table.Head>
							<Table.Head class="xl:table.-column">Status</Table.Head>
							<Table.Head class="xl:table.-column">Created on</Table.Head>
							<Table.Head class="text-right">Opens</Table.Head>
						</Table.Row>
					</Table.Header>
					<Table.Body>
						<Table.Row>
							<Table.Cell class="flex flex-col">
								<a href="/trackers/1" class="font-medium hover:underline">Email Subject</a>
								<div class="hidden text-sm text-muted-foreground md:inline">example@email.com</div>
							</Table.Cell>
							<Table.Cell class="xl:table.-column">General</Table.Cell>
							<Table.Cell class="xl:table.-column">
								<Badge class="text-xs" variant="default">Active</Badge>
							</Table.Cell>
							<Table.Cell class="md:table.-cell xl:table.-column">2023-06-23</Table.Cell>
							<Table.Cell class="text-right">10</Table.Cell>
						</Table.Row>
					</Table.Body>
				</Table.Root>
			</Card.Content>
		</Card.Root>
		<Card.Root>
			<Card.Header>
				<Card.Title>Latest Opens</Card.Title>
			</Card.Header>
			<Card.Content class="grid gap-8">
				<div class="flex items-center gap-4">
					<Avatar.Root class="hidden h-9 w-9 sm:flex">
						<Avatar.Fallback>ET</Avatar.Fallback>
					</Avatar.Root>
					<div class="grid gap-1">
						<p class="text-sm font-medium leading-none">Example Tracker</p>
						<p class="text-sm text-muted-foreground">example@email.com</p>
					</div>
					<div class="ml-auto font-medium">2023-06-23 12:00</div>
				</div>
			</Card.Content>
		</Card.Root>
	</div>
</main>

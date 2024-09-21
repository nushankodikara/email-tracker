<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
</script>

<div class="min-h-screen w-full lg:grid lg:grid-cols-2">
	<div class="flex items-center justify-center py-12">
		<div class="mx-auto grid w-[350px] gap-6">
			<div class="grid gap-2 text-center">
				<h1 class="text-3xl font-bold">Login</h1>
				<p class="text-balance text-muted-foreground">
					Use your GitHub account to login to your account
				</p>
			</div>
			<div class="grid gap-4">
				<Button href="/login/github" class="w-full">Login with GitHub</Button>
			</div>
		</div>
	</div>
	<div class="hidden bg-muted lg:block">
		<!-- <img
			src="/images/placeholder.svg"
			alt="placeholder"
			width="1920"
			height="1080"
			class="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
		/> -->
	</div>
</div>

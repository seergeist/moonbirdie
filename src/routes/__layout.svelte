<script lang="ts">
	import 'uno.css';
	import Header from '$lib/header/Header.svelte';
	import Bird from '$lib/bird/Bird.svelte';
	import Image from 'svimg';
	import '../app.scss';
</script>

<body class="min-h-100vh min-w-100vw m-0">
	<Header />
	<Bird />
	<main class="flex z-10 flex-1 flex-col p-4 w-full mx-auto">
		<slot />
	</main>

	<footer class="flex flex-col content-center items-center p-10 w-full bottom-0 absolute bg-gradient-to-b from-orange-500/0 to-orange-700/40">
		<p text-white>
			Thank you for staking with <a class="font-bold text-gray-200" href="https://moonbirdie.com">moonbirdie.com</a>
		</p>
	</footer>
</body>

<style>
	main {
		max-width: 1024px;
		box-sizing: border-box;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>

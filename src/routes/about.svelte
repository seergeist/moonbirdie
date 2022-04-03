<script context="module">
	import { browser, dev } from '$app/env';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script>

<svelte:head>
	<title>Moonbirdie - About</title>
</svelte:head>

<div class="mx-auto p-5 lg:w-4/5 w-9/10 bg-white bg-opacity-50 rounded-lg z-40">
	<h1>About</h1>
	<div class="m-4 lg:m-8">	
		<p>
			Moonbirdie got kickstarted as a Kusama Validator with a mission to provide the required security for the base layer of the new more permissionless internet. 
			We share the belief that Kusama providing security and interoperability for a hundred specific task parachains lays down the groundwork required for the Web3 to
			become a reality. We love the Linux mindset of the parachain simplicity being task specific providing cost-efficient services to each others over the relay chain. 
		</p>
		<p>
			Ethereum's upcoming pitfall is trying to be general purpose computer with way too many services competing the block space and drive price tag off the limits which has been clear downfall of the Ethereum. 
			Kusama's only task is to provide security for parachains and functionality will only be expanded through common-good parachains to provide further tooling for parachains living on Kusama.
			Good example of this is the first parachain on Kusama, the Statemine which purpose is to host arbitrary fungible and non-fungible assets and provide low-cost hold and transaction layer for 
			the tokens.
		</p>
		<p>
		Moonbirdie's primary task in the ecosystem is to validate the blockchain against possible attacks and guarantee best possible staking ground for the nominators 
		through providing secure node operations with a guarantee for high returns with algoritmic control of best possible nominator pool.
		</p>  
	</div>
</div>

<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	let apy = '17';
	let comission = '10';
</script>

<svelte:head>
	<title>Moonbirdie - Trusted validator</title>
</svelte:head>

<section class="flex z-10 flex-col flex-1 items-center justify-center">
	<div class="flex flex-col md:flex-row py-20">
	  <div class="flex bg-white/50 hover:bg-white/60 transition duration-300 ease-linear px-4 py-8 md:mx-4 mx-auto mb-4 rounded-xl shadow-xl">
	    <div class="text-center space-y-2">
	      <div class="space-y-0.5">
	        <p class="text-lg text-black dark:text-white font-semibold mb-2">
	          Moonbirdie Validator-01
	        </p>
	        <ul class="text-left text-gray-500 dark:text-gray-300 font-medium pb-3">
	          <li>Comission: {comission}%</li>
	          <li>Historic APY: ~{apy}%</li>
	        </ul>
	      </div>
	      <a href="https://www.cryptolab.network/benchmark?refKey=3RzKrCCwSEJxnrLw3BUMDTwChzPxXjr43r9bsitZgKRRR4zSefHzvWtx1gwYAiRZgK9XA1mVhR2gn1wsjWgbjPy5Zzk47iGfLaef2FtoytzTD41ZBxqxWiZDhr&signature=0x2ec0ec218b263e3d750b8114370b68fbba19c0369971bedaedc9ab5f9fe7d3094cdce1fa45da9f9f0a535d7a379eb1983e7486988f3743e0271317d700ae768f&switchNetwork=Kusama">
			<button class="bg-orange-500/50 hover:bg-orange-500/70 shadow-xl text-white px-8 py-4 mt-4 rounded-lg border-1">
			Nominate now
			</button>
		  </a>
	    </div>
	  </div>
	  <div class="flex bg-white/50 hover:bg-white/60 transition duration-300 ease-linear px-4 py-8 md:mx-4 mx-auto mb-4 rounded-xl shadow-xl">
 	    <div class="text-center space-y-2">
 	      <div class="space-y-0.5">
 	        <p class="text-lg text-black dark:text-white font-semibold mb-2">
 	          Moonbirdie Validator-02
 	        </p>
 	        <ul class="text-left text-gray-500 dark:text-gray-300 font-medium pb-3">
 	          <li>Comission: {comission}%</li>
 	          <li>Historic APY: ~{apy}%</li>
 	        </ul>
 	      </div>
		  <a href="">
			<button class="bg-orange-500/50 hover:bg-orange-500/70 shadow-xl text-white px-8 py-4 mt-4 rounded-lg border-1">
			Nominate now
			</button>
		  </a>
 	    </div>
 	  </div>
	</div>

</section>

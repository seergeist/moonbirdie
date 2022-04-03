<script lang="ts">
	import { page } from '$app/stores';
/*	import Logo from './moonbirdie-logo.svg'; */
</script>

<header class="justify-between">
	<div class="w-2/10 md:w-1/3">
		<a class="flex flex-row items-center" href="https://moonbirdie.com">
			<!--Logo class="object-contain fill-purple-800 w-3 h-3" src={logo} alt="Moonbirdie logo"/-->
			<svg class="px-1 w-10 h-16 text-shadow-xl fill-white opacity-90" id="svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="400" height="471.67630057803467" viewBox="0, 0, 400,471.67630057803467"><g id="svgg"><path id="path0" d="M259.398 82.177 C 231.281 96.243,214.401 118.575,183.446 182.659 C 131.676 289.833,116.688 306.262,70.520 306.438 C 47.806 306.524,41.603 311.658,55.922 318.522 C 75.410 327.862,112.298 338.916,142.197 344.376 L 163.006 348.176 163.669 370.769 C 164.311 392.600,164.506 393.338,169.450 392.635 C 174.247 391.953,174.608 390.588,175.228 370.774 C 175.883 349.840,175.949 349.629,182.151 348.443 C 191.506 346.655,191.908 347.594,191.908 371.235 C 191.908 391.111,192.299 393.064,196.284 393.064 C 202.250 393.064,203.468 388.761,203.468 367.688 C 203.468 348.318,204.412 346.821,216.618 346.821 C 225.923 346.821,249.872 339.997,262.191 333.835 C 305.230 312.309,319.748 279.298,327.152 186.127 C 332.281 121.572,335.538 111.038,353.179 101.942 C 364.670 96.017,357.284 89.029,329.766 79.791 C 302.896 70.771,280.692 71.524,259.398 82.177 M305.380 99.244 C 318.772 112.636,309.784 136.416,291.329 136.416 C 280.781 136.416,270.520 125.585,270.520 114.451 C 270.520 103.317,280.781 92.486,291.329 92.486 C 296.306 92.486,300.767 94.631,305.380 99.244 M286.137 111.561 C 284.384 116.327,286.809 120.231,291.522 120.231 C 294.708 120.231,295.954 118.606,295.954 114.451 C 295.954 108.260,288.191 105.975,286.137 111.561 M311.561 172.556 C 315.431 173.593,316.763 175.657,316.763 180.616 L 316.763 187.283 298.123 187.283 C 235.530 187.283,194.557 263.990,225.346 323.530 C 229.894 332.325,228.450 335.260,219.576 335.260 C 204.016 335.260,194.030 283.611,203.258 250.867 C 218.176 197.939,269.040 161.160,311.561 172.556 " stroke="none" fill-rule="evenodd"></path></g></svg>
			<h1 class="hidden md:block text-xl text-white font-bold opacity-90">Moonbirdie</h1>
		</a>
	</div>

	<nav class="w-7/10 md:w-1/3">
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<ul>
			<li class:active={$page.url.pathname === '/'}><a sveltekit:prefetch href="/">Home</a></li>
			<li class:active={$page.url.pathname === '/about'}><a sveltekit:prefetch href="/about">About</a></li>
		</ul>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	</nav>

	<div class="md:w-1/3 w-1/10">
		<!-- TODO put something else here? github link? -->
		
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}
/*
	.corner {
		width: 3em;
		height: 3em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 3em;
		height: 3em;
		object-fit: contain;
	}
*/
	nav {
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
	}

	nav svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li.active::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--accent-color);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1em;
		color: var(--heading-color);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--accent-color);
	}
</style>

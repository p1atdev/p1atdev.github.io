<template>
	<div class="flex flex-col h-screen background">
		<header
			class="h-auto shadow-sm space-x-4 light:bg-white dark:bg-gray-900"
		>
			<a
				class="inline-block px-6 m-4 font-bold text-3xl dark:text-white hover:underline"
				href="/"
			>
				Platina
			</a>

			<a
				class="inline-block px-4 ml-4 m-2 font-semibold text-2xl dark:text-gray-300 hover:underline"
				href="/apps"
			>
				Apps
			</a>
			<a
				class="inline-block px-4 m-2 font-semibold text-2xl dark:text-gray-300 hover:underline"
				href="/repo/index.html"
			>
				Repo
			</a>

			<a
				class="inline-block px-4 m-2 font-semibold text-2xl text-blue-300 hover:underline"
				href="https://zenn.dev/platina"
			>
				Zenn
			</a>

			<div class="inline-block p-6 absolute inset-y-0 right-0">
				<DarkToggleButton />
			</div>
		</header>

		<div class="flex-1 overflow-y-auto">
			<Nuxt />
		</div>
	</div>
</template>

<script>
import DarkToggleButton from "~/components/DarkToggleButton"

export default {
	components: {
		DarkToggleButton,
	},
}
</script>

<style>
html {
	font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont,
		"Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
	font-size: 16px;
	word-spacing: 1px;
	-ms-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
	-moz-osx-font-smoothing: grayscale;
	-webkit-font-smoothing: antialiased;
	box-sizing: border-box;
}

*,
*::before,
*::after {
	box-sizing: border-box;
	margin: 0;
}

.button--green {
	display: inline-block;
	border-radius: 4px;
	border: 1px solid #3b8070;
	color: #3b8070;
	text-decoration: none;
	padding: 10px 30px;
}

.button--green:hover {
	color: #fff;
	background-color: #3b8070;
}

.button--grey {
	display: inline-block;
	border-radius: 4px;
	border: 1px solid #35495e;
	color: #35495e;
	text-decoration: none;
	padding: 10px 30px;
	margin-left: 15px;
}

.button--grey:hover {
	color: #fff;
	background-color: #35495e;
}

.background {
	@apply bg-gray-200 dark:bg-gray-800 transition duration-500;
}
</style>

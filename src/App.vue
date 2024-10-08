<template>
	<HeaderMenu/>
	<HelloWorld/>
</template>

<script>
import HeaderMenu from './components/HeaderMenu.vue';
import HelloWorld from './components/HelloWorld.vue';

export default {
	name: 'App',
	components: {
		HelloWorld,
		HeaderMenu
	}
}
</script>

<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}
</style>
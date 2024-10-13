<template>
	<HeaderMenu/>
	<router-view></router-view> <!-- Local onde as páginas serão renderizadas -->
	<FooterComponent/>
</template>

<script>
import FooterComponent from './components/FooterComponent.vue';
import HeaderMenu from './components/HeaderMenu.vue';

export default {
	name: 'App',
	components: {
		HeaderMenu,
		FooterComponent
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
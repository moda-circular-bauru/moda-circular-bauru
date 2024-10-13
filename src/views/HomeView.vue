<template>
    <BannerComponent banner="/images/banner_desktop.webp" />
    <NextPageComponent page-name="Impacto Ambiental" page-link="/impacto-ambiental" />
</template>
  
<script>
	import BannerComponent from '@/components/BannerComponent.vue';
	import NextPageComponent from '@/components/NextPageComponent.vue';

	export default {
		name: 'HomeView',
		components: {
			BannerComponent,
			NextPageComponent,
		}
    };
</script>

<style scoped>

</style>
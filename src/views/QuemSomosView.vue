<template>
    <BannerComponent banner="images/banner_home.webp" />
	<section id="about">
		<div class="container">
			<div class="about__head">
				<h1 class="title">Quem somos</h1>
			</div>
			<MediaComponent
				subtitle="Elisa"
				type="video"
				source="videos/test_video.mp4"
				alt="Elisa"
                width="100%"
			/>
			<MediaComponent
				subtitle="Gabriela"
				type="video"
				source="videos/test_video.mp4"
				alt="Gabriela"
                width="100%"
			/>
			<MediaComponent
				subtitle="Giovana"
				type="video"
				source="videos/test_video.mp4"
				alt="Giovana"
                width="100%"
			/>
			<MediaComponent
				subtitle="Lara"
				type="video"
				source="videos/test_video.mp4"
				alt="Lara"
                width="100%"
			/>
		</div>
	</section>
    <section id="other-page">
		<div class="container">
			<div class="other-page">
                <NextPageComponent page-name="Quem faz a moda circular?" page-link="/sujeito" :toNext="false"/>
				<NextPageComponent page-name="Home" page-link="/" />
			</div>
		</div>
	</section>
</template>
  
<script>
	import BannerComponent from '@/components/BannerComponent.vue';
	import NextPageComponent from '@/components/NextPageComponent.vue';
	import MediaComponent from '@/components/MediaComponent.vue';

	export default {
		name: 'QuemSomosView',
		components: {
			BannerComponent,
			NextPageComponent,
			MediaComponent,
		}
    };
</script>

<style scoped>
	.home__head {
		margin-bottom: 32px;
	}
</style>
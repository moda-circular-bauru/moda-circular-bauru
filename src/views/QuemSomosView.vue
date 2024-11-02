<template>
	<BannerComponent banner="images/banner_home.webp" />
	<section id="about">
		<div class="container">
			<div class="about__head">
				<h1 class="title">Quem somos</h1>
			</div>
			<div class="about__body">
				<MediaComponent
					subtitle="Elisa"
					type="video"
					source="videos/presentation_elisa.mp4"
					alt="Elisa"
					width="100%"
					height="100%"
				/>
				<MediaComponent
					subtitle="Gabriela"
					type="video"
					source="videos/presentation_gabriela.mp4"
					alt="Gabriela"
					width="100%"
					height="100%"
				/>
				<MediaComponent
					subtitle="Giovana"
					type="video"
					source="videos/presentation_giovana.mp4"
					alt="Giovana"
					width="100%"
					height="100%"
				/>
				<MediaComponent
					subtitle="Lara"
					type="video"
					source="videos/presentation_lara.mp4"
					alt="Lara"
					width="100%"
					height="100%"
				/>
			</div>
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
	.about__head {
		margin-bottom: 32px;
	}

	.about__body {
		display: grid;
		gap: 16px;
		grid-template-columns: repeat(4, 1fr);
	}
	
	@media screen and (max-width: 1199px) {
		.about__body {
			grid-template-columns: repeat(2, 1fr);
		}
	}
	
	@media screen and (max-width: 767px) {
		.about__body {
			grid-template-columns: repeat(1, 1fr);
		}
	}
</style>
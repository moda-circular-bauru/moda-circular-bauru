<template>
	<BannerComponent banner="images/banner_about.webp" />
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
			<h1 class="title credits">Créditos</h1>
			<div class="about__credits">
				<div class="Reportagem">
					<h3 class="subtitle">Reportagem</h3>
					<p>Elisa Romera De Freitas</p>
					<p>Gabriela Rufino Armelin</p>
					<p>Giovana Cordero Cerantola</p>
					<p>Lara Vitória Daniel Duarte</p>
				</div>
				<div class="Entrevista">
					<h3 class="subtitle">Entrevista</h3>
					<p>Elisa Romera De Freitas</p>
					<p>Gabriela Rufino Armelin</p>
					<p>Giovana Cordero Cerantola</p>
					<p>Lara Vitória Daniel Duarte</p>
				</div>
				<div class="Roteiro e Produção Mesacast">
					<h3 class="subtitle">Roteiro e Produção Mesacast</h3>
					<p>Elisa Romera De Freitas</p>
					<p>Gabriela Rufino Armelin</p>
					<p>Giovana Cordero Cerantola</p>
					<p>Lara Vitória Daniel Duarte</p>
				</div>
				<div class="Apresentação Mesacast">
					<h3 class="subtitle">Apresentação Mesacast</h3>
					<p>Elisa Romera De Freitas</p>
					<p>Giovana Cordero Cerantola</p>
				</div>
				<div class="Captação Mesacast">
					<h3 class="subtitle">Captação Mesacast</h3>
					<p>TV Unesp</p>
				</div>
				<div class="Design">
					<h3 class="subtitle">Design</h3>
					<p>Gabriela Rufino Armelin</p>
				</div>
				<div class="Edição audiovisual">
					<h3 class="subtitle">Edição audiovisual</h3>
					<p>Gabriela Rufino Armelin</p>
				</div>
				<div class="Edição textual">
					<h3 class="subtitle">Edição textual</h3>
					<p>Elisa Romera De Freitas</p>
				</div>
				<div class="Revisão textual">
					<h3 class="subtitle">Revisão textual</h3>
					<p>Elisa Romera De Freitas</p>
					<p>Gabriela Rufino Armelin</p>
					<p>Giovana Cordero Cerantola</p>
					<p>Lara Vitória Daniel Duarte</p>
				</div>
				<div class="Desenvolvimento e edição do site">
					<h3 class="subtitle">Desenvolvimento do site</h3>
					<p>Jeferson Patrick Dietrich Filho</p>
				</div>
				<div class="Desenvolvimento e edição do site">
					<h3 class="subtitle">Orientador</h3>
					<p> Prof. Assoc. Denis Porto Renó</p>
				</div>
			</div>
		</div>
	</section>
	<section id="other-page">
		<div class="container">
			<div class="other-page">
				<NextPageComponent page-name="Quem faz a moda circular?" page-link="/quem-faz-a-moda" :toNext="false"/>
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
	
	.about__credits {
		display: grid;
		gap: 32px 0;
		grid-template-columns: repeat(3, 1fr);
	}

	.title.credits {
		margin-top: 32px;
	}


	@media screen and (max-width: 1199px) {
		.about__body {
			grid-template-columns: repeat(2, 1fr);
		}
	}
	
	@media screen and (max-width: 991px)  {
		.about__credits {
			display: grid;
			gap: 32px 0;
			grid-template-columns: repeat(2, 1fr);
		}
	}
	
	
	@media screen and (max-width: 767px) {
		.about__body {
			grid-template-columns: repeat(1, 1fr);
		}
		.about__credits {
			display: grid;
			gap: 32px 0;
			grid-template-columns: repeat(1, 1fr);
		}
	}
</style>
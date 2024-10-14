<template>
    <BannerComponent banner="/images/banner_desktop.webp" />

	<section id="home">
		<div class="container">
			<div class="home__head">
				<h1 class="title">Moda Circular: uma alternativa para delírios e consumos</h1>
				<h3 class="subtitle">Veja como é possível comprar em lojas bauruenses e mudar o impacto socioambiental da indústria fashion</h3>
			</div>
			<div class="home__body">
				<p>A moda circular, disponível em brechós e bazares em Bauru, tem ganhado força como uma segunda via que traz a sustentabilidade e a acessibilidade como pilares motrizes. Esse novo jeito de comprar propõe a reutilização de roupas e acessórios, prolongando a vida útil das peças e reduzindo a produção feroz da indústria têxtil. Além de ser uma escolha mais consciente do ponto de vista ambiental, ela também oferece o custo-benefício a itens de qualidade por preços mais baratos, permitindo que consumidores a explorem de maneira econômica e responsável.</p>
				<p>No cinema, o cenário oniomaníaco já foi tema de comédia romântica. A Garota da Echarpe Verde do filme “Os Delírios e Consumos de Becky Bloom” é uma persona movida a um consumo de produtos fashion: bolsas, roupas e sapatos estampados nas vitrines de grandes lojas despertam um desejo veemente de comprar. A protagonista leva uma vida baseada num vício que, num primeiro momento, traz uma efêmera sensação de prazer, mas logo é impulsionada a gastar com as novas coleções e tendências do mercado. Para quem ama adquirir, essa subordinação também está atrelada a problemas paralelos, como a produção de lixo marcada pelo alto descarte de uma indústria insustentável. Embora essa informação não tenha sido retratada no longa, ela existe e é possível refletir sobre isso, não é mesmo?</p>
			</div>
		</div>
	</section>

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
	.home__head {
		margin-bottom: 32px;
	}

	.home__body p:not(:last-child) {
		margin-bottom: 16px;
	}
</style>
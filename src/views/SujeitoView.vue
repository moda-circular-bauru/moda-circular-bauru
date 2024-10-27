<template>
    <BannerComponent banner="images/banner_subject.webp" />
    <section id="sujeito">
        <div class="container">
            <div class="sujeito__head">
                <h1 class="title">Quem faz a moda circular?</h1>
            </div>
            <div class="sujeito__body">
                <div class="sujeito__body--share types">
                    <h3 class="subtitle">Share</h3>
                    <p>A marca lançada em abril de 2024, é fruto da ideia da proprietária Núbia Maria Vital, que após uma experiência de trabalho em um brechó de luxo, conheceu o conceito e a aplicabilidade da moda circular na cidade de Bauru. A pequena empresária já fazia esse mesmo trabalho, emprestando roupas para amigas e parentes e, após certo período de estudo de mercado e tendências, passou a monetizar o empréstimo das roupas casuais. O lema da marca é que ao invés de comprar uma peça para usar uma única vez, é possível alugá-la, compartilhando o guarda-roupa, estando bem vestida e, ainda, dentro do orçamento.</p>
                    <MediaComponent
                        type="video"
                        source="videos/test_video.mp4"
                        width="100%"
                        alt="Moça"
                    />
                </div>
            <div class="sujeito__body--bazar-espirita types">
                <h3 class="subtitle">Bazar Centro Espírita Chico Xavier</h3>
                <p>O Bazar é um braço dentro das atividades do Centro Espírita Chico Xavier. A manutenção e  funcionamento do bazar é feita por um grupo de voluntárias, que se dividem em dois dias da semana, às terças-feiras no período da tarde e aos sábados, no período da manhã. As peças de roupas, sapatos, acessórios, toalhas e roupas de cama são doadas pelos próprios frequentadores do centro espírita. As voluntárias realizam a triagem desses itens, separando aqueles que serão vendidos, doados ou descartados. Toda a renda arrecadada é revertida para o pagamento das despesas fixas do Centro, como conta de luz e água e, também, para a compra de mais de 200 cestas básicas, que são doadas para famílias carentes, assistidas pelo Centro Espírita Chico Xavier.</p>
                <MediaComponent
                    type="video"
                    source="videos/test_video.mp4"
                    width="100%"
                    alt="Moça"
                />
                <MediaComponent
                    title="Abertura do Bazar"
                    type="video"
                    source="videos/test_video.mp4"
                    width="100%"
                    alt="Moça"
                />
            </div>
                <div class="sujeito__body--bazar-burguesinha types">
                    <h3 class="subtitle">Burguesinha Brechó Chic</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget odio molestie, sollicitudin sem eu, condimentum turpis. Fusce viverra vulputate ligula eget ultricies. Ut et magna id lorem scelerisque malesuada. Maecenas porttitor tristique tellus vitae egestas. Nulla blandit, velit eu molestie commodo, nulla magna interdum nibh, et venenatis nunc turpis vitae diam. Vivamus viverra metus quis velit facilisis, id accumsan nunc gravida. Ut nulla est, ornare vitae nulla sed, dignissim eleifend leo. Sed aliquam convallis sapien in ullamcorper. Nulla lobortis ex fringilla mollis ullamcorper. In mattis dolor est, sit amet hendrerit metus rutrum eget. Proin dignissim mattis lectus eu vulputate. Ut ultricies hendrerit felis a suscipit. Donec et volutpat arcu. Proin placerat efficitur eros, sit amet eleifend nisi mattis nec. Nunc lobortis cursus diam eget maximus. Sed ultrices porta massa non feugiat.</p>
                </div>
            </div>
        </div>
    </section>
    <section id="other-page">
		<div class="container">
			<div class="other-page">
				<NextPageComponent page-name="Bauru" page-link="/bauru" :toNext="false" />
                <NextPageComponent page-name="Quem Somos" page-link="/quem-somos" />
			</div>
		</div>
	</section>
</template>

<script>
import BannerComponent from '@/components/BannerComponent.vue';
import NextPageComponent from '@/components/NextPageComponent.vue';
import MediaComponent from '@/components/MediaComponent.vue';

export default {
    name: 'SujeitoView',
    components: {
        BannerComponent,
        NextPageComponent,
        MediaComponent,
    }
};
</script>

<style scoped>
  .tipos-moda__head {
    margin-bottom: 32px;
  }

  .sujeito__body p:not(:last-child) {
    margin-bottom: 16px;
  }

  .sujeito__body .types:not(:last-child) {
    margin-bottom: 32px;
  }
</style>
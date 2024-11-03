<template>
    <BannerComponent banner="images/banner_subject.webp" />
    <section id="sujeito">
        <div class="container">
            <div class="sujeito__head">
                <h1 class="title">Quem faz a moda circular?</h1>
            </div>
            <div class="sujeito__body">
                <div class="sujeito__body--share types">
                    <h3 class="subtitle">Núbia Vital</h3>
                    <p>Desde que se lembra, Núbia é ligada à moda. Sua mãe conta histórias de que a garota chorava à noite para não colocar pijamas, pois sempre queria estar bem vestida. E foi a partir dessa paixão nata que a empresária se inspirou para abrir seu próprio negócio. Após trabalhar em um brechó, Núbia se aproximou do movimento sustentável fashion e teve uma ideia completamente inovadora: uma loja de aluguel de roupas casuais. Para uma pessoa que sempre compartilhou roupas com amigas e suas três irmãs, foi como simplesmente estender o convite para, agora, suas clientes.</p>
                    <p>Então, colocou as mãos na massa: fez uma reciclagem com peças dos guarda-roupas de seus familiares e montou um catálogo. Uma empresa familiar, foi estruturada assim, pelas mulheres da família. Hoje, Marta Vital, mãe da empreendedora, trabalha na confecção da próxima coleção a ser lançada.</p>
                    <p>Núbia é formada em administração e, além de trabalhar com a Share, se especializou em consultoria de imagem e também empreende um segundo negócio: a Vital Serviços Financeiros.</p>
                    <MediaComponent
                        type="image"
                        source="images/nubia_compilation.jpg"
                        alt="Fotos da Núbia"
                        width="100%"
                        description="Reprodução/Elisa Romera De Freitas, Giovana Cordero Cerantola e Lara Vitória Daniel Duarte"
                    />
                    <MediaComponent
                        type="video"
                        source="videos/nubia_serving_customer.mp4"
                        alt="Núbia Atendendo um Cliente"
                        width="100%"
                        height="100%"
                        description="Reprodução/Elisa Romera De Freitas, Giovana Cordero Cerantola e Lara Vitória Daniel Duarte"
                    />
                </div>
                <div class="sujeito__body--bazar-espirita types">
                    <h3 class="subtitle">As voluntárias do bazar</h3>
                    <p>Helen Ribeiro, Vaneska Hortolan, Roberta Ariani, Blaca Royo e Joelma de Oliveira são algumas das colaboradoras que fazem o Bazar do Centro Espírita Chico Xavier funcionar, participando desde a seleção das peças, nas vendas e até na organização do espaço. Sendo um trabalho movido pela identificação com os propósitos de uma moda positiva no quesito socioambiental, as mulheres relatam como a experiência no bazar mudou seus guarda roupas. “Entra uma peça, sai outra. Dar sempre lugar para o novo, dar oportunidade ao novo, nós vamos reciclando. Se está em um bom estado, mas não serve mais pra mim, serve para outra pessoa que vá usar. E	vai ficar feliz de estar usando aquilo que nós doamos. É muito importante ter esse pensamento, não serve mais para mim, serve para o outro”, conta Roberta Ariani.</p>
                    <MediaComponent
                        type="audio"
                        source="audios/bazar_guarda_roupas.mp3"
                        alt="Bazar Guarda Roupas"
                    />
                </div>
                <div class="sujeito__body--bazar-espirita types">
                    <h3 class="subtitle">Andressa Martins</h3>
                    <p>Andressa Martins é sócia proprietária do Burguesinha Brechó Chic e nos confidenciou que a moda circular é uma temática nova em sua vida. A ideia de abrir a franquia na cidade de Bauru surgiu há cerca de um ano por indicação de alguns amigos a respeito dessa nova tendência. Andressa não possuía experiência ou interesse pelo âmbito fashion e sustentável, mas embarcou nessa novidade. Hoje, à frente de um brechó que faz parte de uma das maiores franquias do Brasil, ela demonstra ter mergulhado de cabeça nesse universo, entendendo a importância da moda circular e compreendendo as tendências atuais femininas.</p>
                    <MediaComponent
                        type="audio"
                        source="audios/andressa_circle_fashion.mp3"
                        alt="Reels da Burguesinha's"
                    />
                    <MediaComponent
                        type="video"
                        source="videos/burguesinha_reels.mp4"
                        alt="Reels da Burguesinha's"
                        width="50%"
                        height="50%"
                        align="center"
                        description="Reprodução/Elisa Romera De Freitas e Gabriela Rufino Armelin"
                    />
                </div>
            </div>
        </div>
    </section>
    <section id="other-page">
		<div class="container">
			<div class="other-page">
				<NextPageComponent page-name="Em Bauru" page-link="/bauru" :toNext="false" />
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
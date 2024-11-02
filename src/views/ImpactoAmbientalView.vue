<template>
    <BannerComponent banner="images/banner_environment.webp" />
    <section id="impacto-ambiental">
        <div class="container">
            <div class="impacto-ambiental__head">
                <h1 class="title">Impacto Socioambiental: a roupa sustentável é a que existe</h1>
            </div>
            <div class="impacto-ambiental__body">
                <p>Pois bem, essa produção excessiva de roupas e a rápida obsolescência da moda resultaram em um aumento substancial de resíduos têxteis em território nacional. Segundo a Associação Brasileira de Empresas de Limpeza Pública e Resíduos Especiais (Abrelpe), mais de 4 milhões de toneladas de resíduos têxteis são descartadas anualmente no Brasil.</p>
                <p>No âmbito internacional, o cenário também é catastrófico: o segmento é responsável por 10% das emissões anuais de dióxido de carbono e, até 2050, terá utilizado até um quarto do orçamento mundial de carbono, como foi levantado pela Stand.earth.</p>
                <p>Essa indústria é o segundo setor mais poluente, atrás apenas da indústria petrolífera, como foi apontado por Júlia Galante. Um levantamento de 2022 realizado pelo Global Fashion Agenda revelou que a moda foi responsável por 92 milhões de toneladas de resíduos, com uma projeção de aumento de 60% para o futuro.</p>
                <p>Também é uma das maiores consumidoras de água. De acordo com a Ellen MacArthur Foundation, a produção de roupas e tecidos consome 93 bilhões de metros cúbicos de água anualmente, o equivalente a 37 milhões de piscinas olímpicas. Desde o cultivo de fibras naturais até o processo de lavagem e tingimento, a quantidade de água utilizada é enorme, não obstante a utilização de produtos químicos na produção contamina fontes de água, afetando a qualidade da água e a vida aquática.</p>
				<MediaComponent
                    type="video"
                    source="videos/2_enviroment_impact.mov"
                    alt="Julia Helena Galante Fast fashion e o impacto ambiental"
                    width="100%"
                    height="100%"
                />
                <p>Os tecidos de poliéster e outros materiais sintéticos não biodegradáveis são utilizados na produção das peças; esse é um dos motivos que eles não podem ser enviados aos aterros sanitários para uma decomposição orgânica.</p>
                <p>Nesse sentido, as roupas têm um destino clandestino quando se trata do descarte correto. Dentro do espaço geográfico latinoamericano, o deserto do Atacama, no Chile, se destaca negativamente como um cemitério a céu aberto desses produtos que são colocados para o esquecimento.</p>
                <p>Lá, as roupas de segunda mão chegam da Europa para serem comercializadas, as que não são vendidas, são descartadas em solo chileno. A estimativa é que 60 mil toneladas chegam todos os anos por conta dessa dinâmica de mercado e de um consumo excessivo.</p>
                <MediaComponent
                    type="video"
                    source="videos/3_Atacama_desert.mov"
                    alt="Julia Helena Galante Deserto do Atacama"
                    width="100%"
                    height="100%"
                />
                <p>Num panorama histórico da moda, desde a sua revolução em meados de 2014, o consumidor final comprou cerca de 60% mais roupas, quando comparado aos anos 2000. Além disso, elas são mantidas no closet por metade do tempo, o que consta como uma banalização do descarte dentro desse comparativo.</p>
                <p>Importante dizer que, o caso do Atacama não é único e isolado: a Europa e outros países dominantes do setor mandam descartar em países subdesenvolvidos, fazendo com que surjam os verdadeiros lixões fashion.</p>
                <p>O impacto não é somente ambiental, mas também econômico. Essa prática insustentável deixa de contribuir com o próprio comércio. As roupas teriam valor se fossem inseridas, gerando aproximadamente 500 bilhões de dólares ano a ano.</p>
                <p>Mediante a essa realidade, fica difícil imaginar uma metamorfose considerável, mas ela não é impossível. O novo conceito de Moda Circular, se torna o principal caminho para transformar o cenário da sociedade do consumo e suas contradições. Ao estimular o reaproveitamento e reduzir o descarte, esses mercados alternativos contribuem diretamente para a preservação ambiental.</p>
                <div class="impacto-ambiental__infografico">
                    <MediaComponent
                        type="image"
                        source="images/infograpic_environment.jpg"
                        alt="Infográfico Meio Ambiente"
                        width="auto"
                    />
                </div>
            </div>
        </div>
    </section>
    <section id="other-page">
		<div class="container">
			<div class="other-page">
				<NextPageComponent page-name="Home" page-link="/" :toNext="false" />
                <NextPageComponent page-name="Tipos de moda circular" page-link="/tipos-de-moda" />
			</div>
		</div>
	</section>
</template>

<script>
	import BannerComponent from '@/components/BannerComponent.vue';
	import NextPageComponent from '@/components/NextPageComponent.vue';
	import MediaComponent from '@/components/MediaComponent.vue';
  
  export default {
    name: 'ImpactoAmbientalView',
    components: {
        BannerComponent,
        NextPageComponent,
        MediaComponent,
    }
};
</script>

<style scoped>
	.impacto-ambiental__head {
		margin-bottom: 32px;
	}

	.impacto-ambiental__body p {
		margin-bottom: 16px;
	}

    .impacto-ambiental__infografico {
        display: flex;
        justify-content: center;
    }
</style>
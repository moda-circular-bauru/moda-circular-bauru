<template>
    <BannerComponent banner="/images/banner_desktop.webp" />

    <section id="impacto-ambiental">
        <div class="container">
            <div class="impacto-ambiental__head">
            <h1 class="title">Impacto Ambiental</h1>
            </div>
            <div class="impacto-ambiental__body">
                <p>Pois bem, essa produção excessiva de roupas e a rápida obsolescência da moda resultaram em um aumento substancial de resíduos têxteis em território nacional. Segundo a Associação Brasileira de Empresas de Limpeza Pública e Resíduos Especiais (Abrelpe), mais de 4 milhões de toneladas de resíduos têxteis são descartadas anualmente no Brasil. No âmbito internacional, é ainda mais lacrimejante: o segmento é responsável por 10% das emissões anuais de dióxido de carbono e, até 2050, terá utilizado até um quarto do orçamento mundial de carbono, como foi levantado pela Stand.earth. Ainda, existem dados que mostram essa indústria como o segundo setor mais poluente, atrás apenas da indústria petrolífera. Um levantamento de 2022 realizado pelo Global Fashion Agenda revelou que a moda foi responsável por 92 milhões de toneladas de resíduos, com uma projeção de aumento de 60% para o futuro.</p>
                <p>Ademais, é uma das maiores consumidoras de água. De acordo com a Ellen MacArthur Foundation, a produção de roupas e tecidos consome 93 bilhões de metros cúbicos de água anualmente, o equivalente a 37 milhões de piscinas olímpicas. Desde o cultivo de fibras naturais até o processo de lavagem e tingimento, a quantidade de água utilizada é enorme, não obstante a utilização de produtos químicos na produção contamina fontes de água, afetando a qualidade da água e a vida aquática.</p>
                <p>Mediante a essa realidade, fica difícil imaginar uma metamorfose considerável, mas ela não é impossível. O novo conceito de Moda Circular, torna-se o principal caminho para transformar o cenário da sociedade do consumo e suas contradições. Ao estimular o reaproveitamento e reduzir o descarte, esses mercados alternativos contribuem diretamente para a preservação ambiental.</p>
            </div>
            <iframe width="100%"
                height="300"
                scrolling="no"
                frameborder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1938089780&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            ></iframe>
            <!-- <div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;">
                <a href="https://soundcloud.com/jefinho-dietrich"
                    title="Jefinho Dietrich"
                    target="_blank"
                    style="color: #cccccc; text-decoration: none;">Jefinho Dietrich</a> · 
                <a href="https://soundcloud.com/jefinho-dietrich/gravacao_compradora"
                    title="gravacao_compradora"
                    target="_blank"
                    style="color: #cccccc; text-decoration: none;">gravacao_compradora</a>
            </div> -->
            <!-- <MediaComponent
                title="Trilha Sonora"
                type="audio"
                source="/audios/gravacao_compradora.mp3"
                audioType="audio/mp3"
            /> -->
        </div>
    </section>
    <NextPageComponent page-name="Tipos de moda circular" page-link="/tipos-de-moda" />
</template>

<script>
	import BannerComponent from '@/components/BannerComponent.vue';
	import NextPageComponent from '@/components/NextPageComponent.vue';
	// import MediaComponent from '@/components/MediaComponent.vue';
  
  export default {
    name: 'ImpactoAmbientalView',
    components: {
        BannerComponent,
        NextPageComponent,
        // MediaComponent,
    }
};
</script>

<style scoped>
	.impacto-ambiental__head {
		margin-bottom: 32px;
	}

	/* .impacto-ambiental__body p:not(:last-child) {
		margin-bottom: 16px;
	} */

	.impacto-ambiental__body p {
		margin-bottom: 16px;
	}
</style>
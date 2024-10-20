<template>
  <BannerComponent banner="/images/banner_bauru.webp" />

    <section id="bauru">
    <div class="container">
        <div class="bauru__head">
            <h1 class="title">Bauru</h1>
        </div>
        <div class="bauru__body">
            <p>Em Bauru, diversas são as oportunidades para conhecer, aderir ao consumo sustentável e incentivar os pequenos empreendedores locais e lojas que possuem um espaço físico na cidade. O público que frequenta essas lojas, brechós e bazares é variado, desde os pequenos até os mais velhos e, dentre os motivos, pode-se dizer que são pessoas que já aderiram ao consumo consciente, que buscam por roupas atemporais, vintages e com maior durabilidade ou, ainda, aqueles que desejam pagar pouco em uma peça em bom estado.</p>
            <p>Apesar de lento, o processo de difusão e, até mesmo, aceitação para esse novo tipo de consumo está em constante crescimento e tem se popularizado nos últimos anos.</p>
            <p>Dentre os mais conhecidos, o Bazar Centro Espírita Chico Xavier, localizado próximo a avenida Nuno de Assis, recebe doação de roupas e outros itens durante os horários de funcionamento do centro. Às terças-feiras e sábados, um grupo de voluntárias reserva parte de seu dia para separar as roupas, selecionando quais estão em boas condições de uso e podem seguir no bazar, quais não estão em condição de venda e serão doadas e quais peças são para descarte.</p>
            <MediaComponent
                title="Fluxo no bazar e adeptos"
                type="video"
                source="/videos/test_video.mp4"
                videoType="video/mp4"
                width="100%"
            />
            <p>O Bazar da Vila Vicentina oferece um leque maior de possibilidades: são roupas, acessórios, móveis e, até, eletrodomésticos. Lá, o dinheiro arrecadado é revertido para a manutenção da própria instituição, um lar para idosos, próximo à avenida Duque de Caxias.</p>
            <p>Localizada na rua Gustavo Maciel, a Feira do Rolo, feira livre, realizada aos domingos, conta com bancas de roupas usadas, além das trocas de utensílios e objetos usados entre os presentes.</p>
            <p>O brechó Garimpos da Jô, em atividade há mais de 30 anos, é fonte de renda para  Joelma Cristina de Oliveira. A pequena empreendedora garimpa e seleciona as peças no Bazar Centro Espírita Chico Xavier e revende para seus clientes diretamente de sua própria loja, situada na rua Azarias Leite.</p>
            <MediaComponent
                title="Fluxo no bazar e adeptos"
                type="video"
                source="/videos/test_video.mp4"
                videoType="video/mp4"
                width="100%"
            />
            <p>A Vogue Casa de Moda, localizada na Avenida Nossa Senhora de Fátima, intitula-se como o maior acervo de vestidos de festa para aluguel do interior paulista. São peças bordadas, costuradas à mão, com pedraria e muito brilho, com o intuito de colocar em circulação no mercado bauruense vestidos únicos e muito marcantes, que seriam usados apenas uma vez.</p>
            <p>Ainda na cidade, existem opções luxuosas, conhecidas como “bazar de luxo”. As peças circulares são objetos de desapegos, vindos dos próprios consumidores, que trocam itens pessoais por crédito na loja ou por valor em dinheiro. As peças passam por um processo de curadoria e higienização.</p>
            <MediaComponent
				title="Burguesinha"
				subtitle="Subtítulo"
				type="image"
				source="/images/test_image.webp"
                width="100%"
				alt="Moça"
			/>
            <p>Ainda no contexto de moda circular, a pequena empresária Núbia Maria Vital propôs  um tipo de serviço diferente, através da loja Share. A marca é a primeira na cidade de Bauru que realiza o serviço de aluguel de roupas casuais, para o dia a dia e não tão sofisticadas para um evento luxuoso, tratam-se de roupas para festas casuais e  para convidadas. A loja fica próximo à Avenida Orlando Ranieri, dentro da casa da proprietária.</p>
            <MediaComponent
                title="Fluxo no bazar e adeptos"
                type="video"
                source="/videos/test_video.mp4"
                videoType="video/mp4"
                width="100%"
            />
        </div>
    </div>
</section>

  <NextPageComponent page-name="Quem faz a moda circular?" page-link="/sujeito" />
</template>

<script>
import BannerComponent from '@/components/BannerComponent.vue';
import NextPageComponent from '@/components/NextPageComponent.vue';
import MediaComponent from '@/components/MediaComponent.vue';

export default {
    name: 'BauruView',
    components: {
        BannerComponent,
        NextPageComponent,
        MediaComponent,
    }
  };
</script>

<style scoped>
.bauru__head {
  margin-bottom: 32px;
}

.bauru__body p:not(:last-child) {
  margin-bottom: 16px;
}
</style>
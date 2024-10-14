<template>
  <BannerComponent banner="/images/banner_desktop.webp" />

<section id="bauru">
  <div class="container">
    <div class="bauru__head">
      <h1 class="title">Bauru</h1>
    </div>
    <div class="bauru__body">
      <p>Em Bauru, diversas são as oportunidades para conhecer, aderir ao consumo sustentável e incentivar os pequenos empreendedores locais. O público que frequenta essas lojas, brechós e bazares é variado, desde os pequenos até os mais velhos e, dentre os motivos, pode-se dizer que são pessoas que já aderiram ao consumo consciente, que buscam por roupas atemporais, vintages e com maior durabilidade ou, ainda, aqueles que desejam pagar pouco em uma peça em bom estado.</p>
      <p>Em entrevista, Núbia Maria (se não tiver citado ela anteriormente vou contextualizar melhor), (continua)</p>
      <p>Dentre os mais conhecidos, o Bazar Centro Espírita Chico Xavier, localizado próximo a uma famosa avenida Nuno de Assis, recebe a doação de roupas e outros itens durante os horários de funcionamento do centro. Às terças-feiras e sábados, um grupo de voluntárias reserva parte de seu dia para separar as roupas, selecionando quais estão em boas condições de uso e podem seguir no bazar, quais não estão em condição de venda e serão doadas e quais peças são para descarte.</p>
      <p>O Bazar da Vila Vicentina oferece um leque de possibilidades: são roupas, acessórios, móveis e, até, eletrodomésticos. Lá, o dinheiro arrecadado é revertido para a manutenção da própria instituição, um lar para idosos, próximo à avenida Duque de Caxias.</p>
      <p>Localizada na rua Gustavo Maciel, a Feira do Rolo, feira livre realizada aos domingos, conta com bancas de roupas usadas, além das trocas de utensílios e objetos usados entre os presentes. (inserir sobre aquela entrevistada do bazar) (continua)</p>
      <p>Ainda na cidade, existem opções luxuosas, conhecidas como “bazar de luxo”. As peças circulares são desapegos, vindos dos próprios consumidores, que trocam itens pessoais por crédito na loja ou por valor em dinheiro. As peças passam por um processo de curadoria e higienização.</p>
    </div>
  </div>
</section>

  <NextPageComponent page-name="Quem faz a moda circular?" page-link="/sujeito" />
</template>

<script>
import BannerComponent from '@/components/BannerComponent.vue';
import NextPageComponent from '@/components/NextPageComponent.vue';

export default {
  name: 'BauruView',
  components: {
    BannerComponent,
    NextPageComponent,
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
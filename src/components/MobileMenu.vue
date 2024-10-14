<template>
      <div class="mobile-menu" v-if="isOpen">
        <ul class="mobile-menu__list">
          <li class="mobile-menu__item">
            <router-link @click="closeMenu" to="/">Home</router-link>
          </li>
          <li class="mobile-menu__item">
            <router-link @click="closeMenu" to="/impacto-ambiental">Impacto Ambiental</router-link>
          </li>
          <li class="mobile-menu__item">
            <router-link @click="closeMenu" to="/tipos-de-moda">Tipos de Moda</router-link>
          </li>
          <li class="mobile-menu__item">
            <router-link @click="closeMenu" to="/bauru">Bauru</router-link>
          </li>
          <li class="mobile-menu__item">
            <router-link @click="closeMenu" to="/sujeito">Sujeito</router-link>
          </li>
        </ul>
      </div>
  </template>
  
  <script>
  export default {
    props: {
      isOpen: {
        type: Boolean,
        required: true,
      }
    },
    methods: {
      closeMenu() {
        this.$emit('close-menu'); // Emite um evento para o componente pai fechar o menu
      }
    }
  };
  </script>
  
  <style scoped>
  .mobile-menu {
    background-color: #efefef;
    width: 100%;
    position: absolute;
    padding: 20px;
  }
  
  .mobile-menu__list {
    list-style: none;
    padding: 0;
    margin: 0;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  
  .mobile-menu__item {
    margin-bottom: 20px;
  }
  
  .mobile-menu__item a {
    text-decoration: none;
    color: #333;
    font-size: 18px;
  }
  
  /* Adicionando transição para o menu aparecer suavemente */
  .slide-down-enter-active, .slide-down-leave-active {
    transition: max-height 0.3s ease;
  }
  
  .slide-down-enter, .slide-down-leave-to {
    max-height: 0;
    overflow: hidden;
  }
  
  .slide-down-enter-to, .slide-down-leave {
    max-height: 500px; /* Altura máxima do menu ao abrir */
  }
  </style>
  
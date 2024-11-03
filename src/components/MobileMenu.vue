<template>
    <transition name="slide-fade">
        <div class="mobile-menu" v-if="isOpen">
            <div class="mobile-menu__row">
                <div class="mobile-menu__row--link">
                    <router-link @click="closeMenu" to="/">Home</router-link>
                </div>
                <div class="mobile-menu__row--link">
                    <router-link @click="closeMenu" to="/impacto-ambiental">Impacto ambiental</router-link>
                </div>
            </div>
            <div class="mobile-menu__row">
                <div class="mobile-menu__row--link">
                    <router-link @click="closeMenu" to="/quem-somos">Quem somos</router-link>
                </div>
                <div class="mobile-menu__row--title">
                    <h4 class="title">Moda Circular em Bauru</h4>
                </div>
                <div class="mobile-menu__row--link">
                    <router-link @click="closeMenu" to="/tipos-de-moda">Tipos de Moda</router-link>
                </div>
            </div>
            <div class="mobile-menu__row">
                <div class="mobile-menu__row--link">
                    <router-link @click="closeMenu" to="/quem-faz-a-moda">Quem faz a Moda</router-link>
                </div>
                <div class="mobile-menu__row--link">
                    <router-link @click="closeMenu" to="/bauru">Em Bauru</router-link>

                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    closeMenu() {
      this.$emit('close-menu'); // Emite o evento para o componente pai
    },
  },
};
</script>

<style scoped>
    .mobile-menu {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 48px;

        background-color: var(--color-3);
        width: 100%;
        position: absolute;
        top: 80px;
        left: 0;
        padding: 20px;
        z-index: 10;
        border-radius: 0 0 10px 10px;
    }

    /* Lista do menu */
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

    /* Transições */
    .slide-fade-enter-active, .slide-fade-leave-active {
        transition: all 0.3s ease;
    }

    .slide-fade-enter-from {
        transform: translateY(-20px);
        opacity: 0;
    }

    .slide-fade-enter-to {
        transform: translateY(0);
        opacity: 1;
    }

    .slide-fade-leave-from {
        transform: translateY(0);
        opacity: 1;
    }

    .slide-fade-leave-to {
        transform: translateY(-20px);
        opacity: 0;
    }

    .mobile-menu__row {
        display: flex;
        flex-direction: row;
        gap: 64px;
    }

    .mobile-menu__row--link {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--color-6);
        border-radius: 100%;

        width: 120px;
        height: 120px;
    }

    .mobile-menu__row--link a {
        font-size: 18px;
        color: var(--color-2);
        font-weight: 700;
        max-width: 100px;
    }

    .mobile-menu__row--title {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 150px;
    }

    .mobile-menu__row--title .title {
        margin-bottom: 0;
    }

    .mobile-menu__row--title .title{
        text-align: center;
    }
    
    @media screen and (max-width: 768px) {
        .mobile-menu__row {
            gap: 48px;
        }

        .mobile-menu__row--title {
            width: 100px;
        }
    }

    @media screen and (max-width: 450px) {
        .mobile-menu {
            gap: 32px;
        }

        .mobile-menu__row {
            gap: 32px;
        }

        .mobile-menu__row--link {
            width: 100px;
            height: 100px;
        }
    }

    @media screen and (max-width: 375px) {
        .mobile-menu__row {
            gap: 16px;
        }
    }

    @media screen and (max-width: 350px) {
        .mobile-menu {
            gap: 24px;
        }

        .mobile-menu__row--link {
            width: 90px;
            height: 90px;
        }
    }
</style>

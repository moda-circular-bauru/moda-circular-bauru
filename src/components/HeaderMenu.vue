<template>
    <header id="header">
        <div class="main-header container">
            <div class="main-header__mobile only-mobile">
                <button class="mobile-menu-btn" @click="toggleMenu">
                    <img src="images/svg/hamburgerMenu.svg" alt="Menu Mobile" width="20" height="20" v-if="!menuOpen"/>
                    <img src="images/svg/closeMenu.svg" alt="Menu Mobile" width="20" height="20" v-else/>
                </button>
            </div>
            <div class="main-header__logo">
                <router-link to="/" class="logo">
                    <img class="logo" src="images/svg/logo.svg" width="120" height="80" alt="Logo">
                </router-link>
            </div>
            <nav class="main-header__navigation only-desktop">
                <ul class="main-header__navigation-list">
                    <li class="main-header__navigation-list--item"><router-link to="/">Home</router-link></li>
                    <li class="main-header__navigation-list--item"><router-link to="/impacto-ambiental">Impacto Ambiental</router-link></li>
                    <li class="main-header__navigation-list--item"><router-link to="/tipos-de-moda">Tipos de Moda</router-link></li>
                    <li class="main-header__navigation-list--item"><router-link to="/bauru">Bauru</router-link></li>
                    <li class="main-header__navigation-list--item"><router-link to="/sujeito">Sujeito</router-link></li>
                    <li class="main-header__navigation-list--item"><router-link to="/quem-somos">Quem Somos</router-link></li>
                </ul>
            </nav>
        </div>
    </header>
    <MobileMenu :isOpen="menuOpen" @close-menu="toggleMenu" />
</template>

<script>
    import MobileMenu from './MobileMenu.vue';

    export default {
    name: 'HeaderMenu',
        data() {
            return {
                menuOpen: false, // Controle para abrir ou fechar o menu mobile
            };
        },
        components: {
            MobileMenu
        },
        methods: {
            toggleMenu() {
                this.menuOpen = !this.menuOpen; // Alterna entre aberto e fechado
            }
        }
    };
</script>

<style scoped>
    header#header {
        min-height: 80px;
        background-color: var(--color-3);
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

        display: flex;
        align-items: center;
    }

    .main-header {
        display: flex;
        justify-content: space-between;
    }

    .main-header  .main-header__logo {
        width: 20%;
    }
    
    .main-header .main-header__navigation {
        display: flex;
        align-items: center;
    }
    
    .main-header .main-header__navigation-list {
        display: flex;
        list-style-type: none;
        
        width: 100%;
        padding-left: 0;
        margin-bottom: 0;
    }
    
    .main-header .main-header__navigation-list--item {
        padding: 8px 16px;
    }

    .main-header .main-header__navigation-list--item:not(:last-child) {
        border-right: 2px solid var(--color-2);
    }

    .main-header .main-header__navigation-list--item a {
        color: var(--color-2);
        text-decoration: none;
        font-weight: 700;
        
        padding: 28px 16px;
    }
    
    .main-header .main-header__navigation-list--item a:hover,
    .main-header__navigation-list--item .router-link-active {
        border-bottom: 3px solid var(--color-2);
    }

    @media screen and (max-width: 1200px) {
        .main-header .main-header__navigation-list--item {
            padding: 8px 4px;
        }
    }

    @media screen and (max-width: 1023px) {
        .main-header .main-header__navigation-list--item {
            padding: 8px 8px;
        }
        
        .main-header .main-header__mobile {
            display: flex;
            align-items: center;
        }

        .main-header  .main-header__logo {
            display: flex;
            justify-content: flex-end;
            width: 75%;
        }
    }
</style>
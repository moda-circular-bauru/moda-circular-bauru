<template>
    <header id="header">
        <div class="main-header container">
            <div class="main-header__mobile only-mobile">
                <span>=</span>
            </div>
            <div class="main-header__logo">
                <router-link to="/" class="logo">
                    <img class="logo" src="images/vue-logo.svg" width="120" height="80" alt="Logo">
                </router-link>
            </div>
            <nav class="main-header__navigation only-desktop">
                <ul class="main-header__navigation-list">
                    <li class="main-header__navigation-list--item"><router-link to="/">Home</router-link></li>
                    <li class="main-header__navigation-list--item"><router-link to="/impacto-ambiental">Impacto Ambiental</router-link></li>
                    <li class="main-header__navigation-list--item"><router-link to="/tipos-de-moda">Tipos de Moda</router-link></li>
                    <li class="main-header__navigation-list--item"><router-link to="/bauru">Bauru</router-link></li>
                    <li class="main-header__navigation-list--item"><router-link to="/sujeito">Sujeito</router-link></li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'HeaderMenu',
    }
</script>

<style scoped>
    header#header {
        min-height: 80px;
        background-color: #F3F3F3;
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
        padding: 8px 32px;
    }

    .main-header .main-header__navigation-list--item:not(:last-child) {
        border-right: 1px solid black;
    }

    .main-header .main-header__navigation-list--item a {
        color: black;
        text-decoration: none;
        font-weight: 700;
        
        padding: 30px 16px;
    }
    
    .main-header .main-header__navigation-list--item a:hover,
    .main-header__navigation-list--item .router-link-active {
        border-bottom: 3px solid black;
    }

    @media screen and (max-width: 1200px) {
        .main-header .main-header__navigation-list--item {
            padding: 8px 16px;
        }
    }

    @media screen and (max-width: 1024px) {
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
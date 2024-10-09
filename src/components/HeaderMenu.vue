<template>
    <header id="header">
        <div class="main-header container">
            <a href="/" class="logo">
                <img src="images/vue-logo.svg" width="120" height="80" alt="Logo">
            </a>
            <nav class="main-header__navigation">
                <ul class="main-header__navigation-list">
                    <li class="main-header__navigation-list--item"><a href="#">Home</a></li>
                    <li class="main-header__navigation-list--item"><a href="#">Impacto Ambiental</a></li>
                    <li class="main-header__navigation-list--item"><a href="#">Tipos de Moda</a></li>
                    <li class="main-header__navigation-list--item"><a href="#">Bauru</a></li>
                    <li class="main-header__navigation-list--item"><a href="#">Sujeito</a></li>
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
        background-color: #F3F3F3;
        padding: 16px 0;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    }

    .main-header {
        display: flex;
        justify-content: space-between;
        gap: 32px;
    }

    .main-header .main-header__navigation {
        display: flex;
        align-items: center;
    }
    
    .main-header .main-header__navigation-list {
        display: flex;
        list-style-type: none;
        justify-content: space-between;
        
        width: 100%;

        margin-bottom: 0;
        padding-left: 0;
    }
    
    .main-header .main-header__navigation-list--item a {
        color: black;
        text-decoration: none;
        font-weight: 700;

        padding: 24px 48px;
    }
    
    .main-header .main-header__navigation-list--item:hover a {
        border-bottom: 3px solid black;
    }

    .main-header .main-header__navigation-list--item:not(:last-child) a {
        border-right: 1px solid black;
    }

    @media screen and (max-width: 1199px) {
        .main-header .main-header__navigation-list--item a {
            padding: 16px 32px;
        }
    }

    /* TODO: Header mobile com menu hamburguer para resolução menor que 768px (width) */
    /* FIXME: Responsividade para resoluç~eos entre 990 e 1024 */
    @media screen and (max-width: 1024px) {
        .main-header .main-header__navigation-list--item a {
            padding: 16px 8px;
        }
    }

</style>
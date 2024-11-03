<template>
    <section id="footer">
        <div class="sub-footer"></div>
        <div class="container">
            <div class="footer">
                <div class="footer__text">
                    <div class="footer__text__logo">
                        <router-link to="/" class="logo">
                            <img class="logo" src="images/logo.jpg" width="80" height="80" alt="Logo">
                        </router-link>
                    </div>
                    <p>Reportagem Multimídia produzida como Trabalho de Conclusão de Curso</p>
                    <p>Jornalismo, Unesp/Bauru</p>
                </div>
                <nav class="footer__navigation">
                    <ul class="footer__navigation-list">
                        <li class="footer__navigation-list--title"><h5>Navegação</h5></li>
                        <li class="footer__navigation-list--item"><router-link to="/">Home</router-link></li>
                        <li class="footer__navigation-list--item"><router-link to="/impacto-ambiental">Impacto ambiental</router-link></li>
                        <li class="footer__navigation-list--item"><router-link to="/tipos-de-moda">Tipos de Moda</router-link></li>
                        <li class="footer__navigation-list--item"><router-link to="/bauru">Em Bauru</router-link></li>
                        <li class="footer__navigation-list--item"><router-link to="/quem-faz-a-moda">Quem faz a Moda</router-link></li>
                        <li class="footer__navigation-list--item"><router-link to="/quem-somos">Quem somos</router-link></li>
                    </ul>
                </nav>
                <div class="footer__undergraduates">
                    <h5 class="footer__undergraduates--title">Grupo de Jornalismo</h5>
                    <p class="footer__undergraduates--item">Elisa Romera De Freitas</p>
                    <p class="footer__undergraduates--item">Gabriela Rufino Armelin</p>
                    <p class="footer__undergraduates--item">Giovana Cordero Cerantola</p>
                    <p class="footer__undergraduates--item">Lara Vitória Daniel Duarte</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'FooterComponent',
    }
</script>

<style scoped>
    section#footer {
        padding: 0;
    }
    
    .sub-footer {
        width: 100%;
        height: 50px;
        background-color: var(--color-2);
    }

    #footer {
        width: 100%;
        background-color: var(--color-3);
    }

    .footer {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        justify-items: center;
        padding: 64px 0;
    }

    .footer__text,
    .footer__navigation,
    .footer__undergraduates {
        width: 100%;
        padding: 0 16px;
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 8px;
    }


    .footer__text {
        align-items: end;
    }

    .footer__text p {
        text-align: end;
    }

    .footer__navigation {
        align-items: center;
        gap: 4px;
    }

    .footer__undergraduates {
        align-items: start;
    }

    .footer__navigation-list {
        display: flex;
        flex-direction: column;
        align-items: start;
    }

    .footer__navigation-list--title,
    .footer__undergraduates--title {
        color: var(--color-2);
        margin-bottom: 8px;
    }

    .footer .footer__text p,
    .footer__navigation-list--item,
    .footer__undergraduates--item {
        color: var(--color-4);
    }

    .footer__navigation-list--item:hover {
        color: var(--color-2);
    }

    @media screen and (max-width: 767px) {
        .footer {
            display: flex;
            flex-direction: column;
            gap: 32px;
        }
        
        .footer__text,
        .footer__navigation,
        .footer__undergraduates {
            align-items: start;
        }
        .footer__text p {
            text-align: start;
        }
    }

</style>
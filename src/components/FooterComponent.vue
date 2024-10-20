<template>
    <section id="footer">
        <div class="sub-footer"></div>
        <div class="container">
            <div class="footer">
                <div class="footer__text">
                    <div class="footer__text__logo">
                        <router-link to="/" class="logo">
                            <img class="logo" src="images/svg/vue-logo.svg" width="120" height="80" alt="Logo">
                        </router-link>
                    </div>
                    <p>Reportagem multimídia produzida como Trabalho de Conclusão de Curso</p>
                    <p>Jornalismo, Unesp/Bauru</p>
                </div>
                <!-- TODO: Validar com o grupo se seria válido ter a logo no footer -->
                <nav class="footer__navigation">
                    <ul class="footer__navigation-list">
                        <li class="footer__navigation-list--title"><h5>Navegação</h5></li>
                        <li class="footer__navigation-list--item"><router-link to="/">Home</router-link></li>
                        <li class="footer__navigation-list--item"><router-link to="/impacto-ambiental">Impacto Ambiental</router-link></li>
                        <li class="footer__navigation-list--item"><router-link to="/tipos-de-moda">Tipos de Moda</router-link></li>
                        <li class="footer__navigation-list--item"><router-link to="/bauru">Bauru</router-link></li>
                        <li class="footer__navigation-list--item"><router-link to="/sujeito">Sujeito</router-link></li>
                    </ul>
                </nav>
                <div class="footer__undergraduates">
                    <p>Elisa Romera</p>
                    <p>Gabriela</p>
                    <p>Giovanna</p>
                    <p>Lara Duarta</p>
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
        background-color: var(--primary-color);
    }

    #footer {
        width: 100%;
        background-color: #D9D9D9;
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
    }


    .footer__text {
        align-items: end;
    }

    .footer__text p {
        text-align: end;
    }

    .footer__navigation {
        align-items: center;
    }

    .footer__undergraduates {
        align-items: start;
    }

    .footer__navigation-list {
        display: flex;
        flex-direction: column;
        align-items: start;
    }

    .footer__navigation-list--title {
        margin-bottom: 8px;
    }

    .footer__navigation-list--item {
        transition: var(--transition);
    }

    .footer__navigation-list--item:hover {
        color: var(--primary-color);
        transition: var(--transition);
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
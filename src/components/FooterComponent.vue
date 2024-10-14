<template>
    <section id="footer">
        <div class="sub-footer"></div>
        <div class="container">
            <div class="footer">
                <!-- TODO: Validar com o grupo se seria válido ter a logo no footer -->
                <!-- <div class="footer__logo">
                    <router-link to="/" class="logo">
                        <img class="logo" src="images/svg/vue-logo.svg" width="120" height="80" alt="Logo">
                    </router-link>
                </div> -->
                <div class="footer__text">
                    <p>Reportagem multimídia produzida como Trabalho de Conclusão de Curso</p>
                    <p>Jornalismo, Unesp/Bauru</p>
                </div>
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
        /* grid-template-columns: repeat(3, 1fr); */
        grid-template-columns: repeat(2, 1fr);
        justify-items: center;
        padding: 64px 0;
    }
</style>
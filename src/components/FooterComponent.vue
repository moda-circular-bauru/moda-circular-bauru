<template>
    <section id="footer">
        <div class="sub-footer"></div>
        <div class="footer">
            <div class="container">
                <div class="footer__text">
                    <p>Reportagem multimídia produzida como Trabalho de Conclusão de Curso</p>
                    <p>Jornalismo, Unesp/Bauru</p>
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
        background-color: #E23131;
    }

    .footer {
        width: 100%;
        background-color: #D9D9D9;
    }
    
    .footer .footer__text {
        padding: 64px 0;
    }
</style>
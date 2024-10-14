<template>
    <section id="next-page">
        <div class="container">
            <div class="next-page">
                <router-link :to="pageLink" class="next-page__link">

                    <div class="next-page__link--text">
                        <p class="next-page--body">Próxima página</p>
                        <p class="next-page--title">{{ pageName }}</p>
                    </div>
                    <div class="next-page__link--image">
                        <img src="/images/svg/arrow-next.svg" alt="Next Page">
                    </div>

                </router-link>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'NextPageComponent',
        props: {
            pageName: {
                type: String,
                required: true,
            },
            pageLink: {
                type: String,
                required: true,
            }
        }
    }
</script>

<style scoped>
    #next-page {
        padding: 0 0 64px 0;
    }

    .next-page {
        display: flex;
        justify-content: flex-end;
    }

    .next-page__link {
        display: flex;
        justify-content: flex-end;
        gap: 36px;

        max-width: 400px;
    }

    .next-page__link--text {
        display: flex;
        flex-direction: column;

        justify-content: center;
    }

    .next-page__link--text p {
        text-align: end;
    }

    .next-page--title {
        font-size: 18px;
        font-weight: 700;
    }
</style>
<template>
    <div id="next-page">
        <div class="container">
            <div class="next-page" :class="toNext ? 'next' : 'previous'">
                <router-link :to="pageLink" class="next-page__link">
                    <div class="next-page__link--text">
                        <p class="next-page--body" v-if="toNext">Próxima página</p>
                        <p class="next-page--body" v-else>Página anterior</p>
                        <p class="next-page--title">{{ pageName }}</p>
                    </div>
                    <div class="next-page__link--image">
                        <img src="images/svg/arrow-next.svg" :alt="'To page ' + pageName">
                    </div>
                </router-link>
            </div>
        </div>
    </div>
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
            },
            toNext: {
                type: Boolean,
                default: true,
            }
        }
    }
</script>

<style scoped>
    #next-page {
        padding: 8px;
        border-radius: 10px;
        transition: var(--transition);
    }
    
    #next-page:hover {
        box-shadow: 1px 0 10px rgba(0, 0, 0, 0.1);
        transition: var(--transition);
    }

    .next-page {
        display: flex;
        justify-content: flex-end;
    }

    .next-page__link {
        display: flex;
        justify-content: flex-end;
        gap: 12px;

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

    .next-page__link--text .next-page--title {
        color: var(--color-4);
    }

    .next-page--title {
        font-size: 18px;
        font-weight: 700;
    }

    .next-page.previous .next-page__link {
        flex-direction: row-reverse;
    }

    .next-page.previous .next-page__link--text {
        align-items: flex-start;
    }

    .next-page.previous .next-page__link--image img {
        transform: rotate(180deg);
    }
</style>
<template>
    <div class="banner">
        <picture class="banner-image">
            <source :srcset="banner" media="(max-width: 1023px)" />
            <source :srcset="banner" media="(min-width: 1024px)" />
            <img :src="banner" alt="Banner" class="banner-image" />
        </picture>
    </div>
</template>

<script>
    export default {
        name: 'BannerComponent',
        props: {
            banner: {
                type: String,
                required: true, // A prop é obrigatória para garantir que o caminho da imagem seja fornecido
            },
        },
    }
</script>

<style scoped>
.banner {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    max-height: 600px;
}

.banner-image {
    margin: 0 auto;
    max-width: 1280px;
    width: 100%;
    height: auto;
}
</style>
<template>
    <div>
        <h1 class="title">{{ title }}</h1>
        <h3 class="subtitle">{{ subtitle }}</h3>
  
        <div style="margin-bottom: 16px;">
            <div v-if="type === 'image'" :style="'display: flex; justify-content: ' + align">
                <img :src="source" :alt="alt" :width="width"/>
            </div>
      
            <div v-else-if="type === 'audio'">
                <audio :width="width" controls>
                <source :src="source" :type="audioType" />
                Seu navegador não suporta áudio.
                </audio>
            </div>
      
            <div v-else-if="type === 'video'" :style="'display: flex; justify-content: ' + align">
                <video controls :width="width" :height="height">
                    <source :src="source" :type="videoType" />
                    Seu navegador não suporta vídeo.
                </video>
            </div>
            <p class="media-description">{{description}}</p>
        </div>
    </div>
</template>
  
<script>
export default {
    props: {
        title: String,
        subtitle: String,
        type: String,
        source: String,
        alt: String,
        audioType: String,
        videoType: String,
        align: String,
        description: String,
        width: {
            type: Number,
            default: 640
        },
        height: {
            type: Number,
            default: 360
        }
    }
  };
</script>
  
<style scoped>
    .title {
        margin-top: 16px;
    }

    .media-description {
        font-size: 18px;
        color: var(--color-gray);
        text-align: start;
    }

    .impacto-ambiental__infografico .media-description {
        position: relative;
        left: 5%;
    }
    
    .sujeito__body--bazar-espirita .media-description {
        position: relative;
        left: 25%;
        width: 50%;
    }
</style>
  
<template>
    <div>
        <h2 class="title">{{ title }}</h2>
        <h3 class="subtitle">{{ subtitle }}</h3>
  
        <div style="margin-bottom: 16px;">
            <div v-if="type === 'image'">
                <img :src="source" :alt="alt" />
            </div>
      
            <div v-else-if="type === 'audio'">
                <audio controls>
                <source :src="source" :type="audioType" />
                Seu navegador não suporta áudio.
                </audio>
            </div>
      
            <div v-else-if="type === 'video'">
                <video controls :width="width" :height="height">
                    <source :src="source" :type="videoType" />
                    Seu navegador não suporta vídeo.
                </video>
            </div>
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
</style>
  
<template>
    <div class="video-player">
        <!-- Player Here Temporarily -->
        <div class="player-container">
            <div class="close-button">
                <router-link to="/">
                    <v-icon small>far fa-window-close</v-icon>
                </router-link>
            </div>
            <video
            controls 
            width="640"
            height="360"
            frameborder="0" 
            allow="autoplay;encrypted-media" 
            allowfullscreen>
                <source
                v-for="act in active" :key="act.id"
                :src="act.url" 
                :type="act.type"
                />
            </video>
            <!-- 
            :src="videos[0].files[0].url"
            type="videos[0].files[0].type"
            -->
        </div>
        <router-view></router-view>
    </div>
</template>

<script>

export default {
    name: 'Player',
    props: ['active'],
    data() {
        return {}
    }
}
</script>

<style>
.video-player {
    box-sizing: border-box;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    margin: 0;
    padding: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    background-color: rgba(0,0,0,0.5);
}

.v-icon.fa-window-close {
    color: white;
}

.video-data {
    border: 2px solid red;
    display: flex;
    align-items: center;
    flex-direction: flelx-end;
}

</style>

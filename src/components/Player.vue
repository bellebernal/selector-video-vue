<template>
    <div class="video-player" id="player" :key="componentKey">
        <div class="player-container">
            <div class="close-button" id="close">
                <v-icon small @click="close()">far fa-window-close</v-icon>
            </div>
            <video
            controls
            frameborder="5" 
            allow="autoplay;encrypted-media" 
            allowfullscreen>
                <source
                    v-for="act in active" :key="act.id"
                    :src="act.url" 
                    :type="'video/' + act.type + ';codecs=' + act.codecs"
                />
            </video>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Player',
    props: ['active'],
    data() {
        return {
            componentKey: 0
        }
    },
    methods: {
        close() {
            this.componentKey += 1;
            document.getElementById('close').addEventListener('click',
                () => {
                    document.getElementById('player').style.display='none';
                }
            );
        }
    }
}
</script>

<style>
.player-container { 
    width: 860px;
    height: auto;
}

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

video {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: auto;
}

@media screen and (orientation: portrait) and (min-width: 311px) and (max-width: 768px) {
    .player-container { 
        width: 100%;
        height: auto;
    }

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
}

</style>

<template>
    <div class="video-player" id="player">
        <!-- Player Here Temporarily -->
        <div class="player-container">
            <div class="close-button" id="close">
                <v-icon small @click="close()">far fa-window-close</v-icon>
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
        return {}
    },
    methods: {
        close() {
            document.getElementById('close').addEventListener('click',
                function() {
                    document.getElementById('player').style.display="none";
                }
            );
        }
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

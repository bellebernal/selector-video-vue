<template>
    <div class="video-player">
        <!-- Player Here Temporarily -->
        <div class="player-container">
            <div class="close-button">
                <router-link to="/">
                    <v-icon small>far fa-window-close</v-icon>
                </router-link>
            </div>
            <!-- put indside video tag: v-if="selectors.id = (videos.id + 'Player')" -->
            <video
            @activeVideo="files = $event"
            controls 
            width="640"
            height="360"
            frameborder="0" 
            allow="autoplay;encrypted-media" 
            allowfullscreen
            >
            **** CHECK OUT data-src, watch object (e.g. watch.name) ****

            <source 
            :value="files"
            v-for="file in files" :key=file.id
            :src="file.url" 
            :type="file.type"
            />
            <!-- 
            src="http://test-cdn.selectablemedia.com/test/a/sintel/assets/video/sintel_trailer-1080p.mp4"
            :src="videos[0].files[0].url"
            type="videos[0].files[0].type"
            -->
                <!-- v-for="video in videos" :key="video.id" -->
                <!-- <source 
                v-for="file in videos.files" :key="file.id"
                :src="file.url"
                :type="file.type"/> -->
            </video>
            <!-- <player-video/> -->
            <!-- <playerovdep :videos="activeVideo"/> -->
        </div>
        <router-view></router-view>
        <!-- <ul>
            <v-list-item v-for="file in videos.files" :key="file.id">
            src = {{file.url}}
            type = {{file.type}}
            </v-list-item>
        </ul> -->
    </div>
</template>

<script>
import Vue from 'vue'

// const videoPlayer = {
//     props: ['videos'],
//     template: `
//         <video controls 
//             width="640"
//             height="360"
//             frameborder="0" 
//             allow="autoplay;encrypted-media" 
//             allowfullscreen>
//             // <source 
//             // v-for="file in videos.files" :key="video.id"
//             // :src="video.files.url"
//             // :type="video.files.type"/>
//         </video>
        
//     `
// }

export default Vue.extend({
    name: 'Player',
    props: ['files'],
    data() {
        return {
            files: [],
            activeVideo: null,
            methods: {
                changeVideo(event) {
                    this.files = event.target.dataset['files'];
                    // this.files = event.target.setAttriibute('files');
                    this.$emit('activeVideo', this.files);
                }

            }
        }
    },
    
})
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

</style>

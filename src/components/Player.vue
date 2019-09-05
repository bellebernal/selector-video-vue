<template>
    <div class="video-player">
        <!-- Player Here Temporarily -->
        <div class="player-container">
            <div class="close-button">
                <router-link to="/home">
                    <v-icon small>far fa-window-close</v-icon>
                </router-link>
            </div>
            <!-- put indside video tag: v-if="selectors.id = (videos.id + 'Player')" -->
            <video 

            controls 
            width="640"
            height="360"
            frameborder="0" 
            allow="autoplay;encrypted-media" 
            allowfullscreen
            :src="videos[0].files[0].url"
            >
            <!-- 
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
        <ul>
            <v-list-item v-for="file in videos.files" :key="file.id">
            src = {{file.url}}
            type = {{file.type}}
            </v-list-item>
        </ul>
    </div>
</template>

<script lang="ts">
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
    // name: 'Player',
    props: ['source'],
    data() {
        return {
           videos: [
               {
                    id: "sintelPlayer",
                    files: [
                            {
                                type: "mp4",
                                codecs: "h264,aac",
                                url: "http://test-cdn.selectablemedia.com/test/a/sintel/assets/video/sintel_trailer-1080p.mp4"
                            },
                            {
                                type: "mp4",
                                codecs: "avc1.42E01E,mp4a.40.2",
                                url: "http://test-cdn.selectablemedia.com/test/a/sintel/assets/video/sintel_trailer-1080p.mp4"
                            },
                            {
                                type: "ogv",
                                codecs: "theora,vorbis",
                                url: "http://test-cdn.selectablemedia.com/test/a/sintel/assets/video/sintel_trailer-1080p.ogv"
                            },
                            {
                                type: "flv",
                                codecs: "h264,aac",
                                url: "http://test-cdn.selectablemedia.com/test/a/sintel/assets/video/sintel_trailer-1080p.flv"
                            }
                    ]
               },
               {
                    id: "bbbPlayer",
                    files: [
                        {
                            type: "mp4",
                            codecs: "h264,aac",
                            url: "http://test-cdn.selectablemedia.com/test/a/bbb/assets/video/bbb_trailer_1080p.mp4"
                        },
                        {
                            type: "mp4",
                            codecs: "avc1.42E01E,mp4a.40.2",
                            url: "http://test-cdn.selectablemedia.com/test/a/bbb/assets/video/bbb_trailer_1080p.mp4"
                        },
                        {
                            type: "ogv",
                            codecs: "theora,vorbis",
                            url: "http://test-cdn.selectablemedia.com/test/a/bbb/assets/video/bbb_trailer_1080p.ogv"
                        },
                        {
                            type: "flv",
                            codecs: "h264,aac",
                            url: "http://test-cdn.selectablemedia.com/test/a/bbb/assets/video/bbb_trailer_1080p.flv"
                        }
                    ]
               },
               {
                    id: "wallePlayer",
                    files: [
                        {
                            type: "mp4",
                            codecs: "h264,aac",
                            url: "http://test-cdn.selectablemedia.com/test/a/walle/assets/video/wall-e-trailer-3_9_1280x544.mp4"
                        },
                        {
                            type: "mp4",
                            codecs: "avc1.42E01E,mp4a.40.2",
                            url: "http://test-cdn.selectablemedia.com/test/a/walle/assets/video/wall-e-trailer-3_9_1280x544.mp4"
                        },
                        {
                            type: "ogv",
                            codecs: "theora,vorbis",
                            url: "http://test-cdn.selectablemedia.com/test/a/walle/assets/video/wall-e-trailer-3_9_1280x544.ogv"
                        },
                        {
                            type: "flv",
                            codecs: "h264,aac",
                            url: "http://test-cdn.selectablemedia.com/test/a/walle/assets/video/wall-e-trailer-3_9_1280x544.flv"
                        }
                    ]
               }
           ],
           activeVideo: null,
           methods: {
                // selectVideo: function(video: any) {
                //     this.activeVideo = video[0];
                // },

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

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
                @changeVideo="updateVideo($event)"
                v-for="file in playerFiles" :key="file.id"
                :src="file.url" 
                :type="file.type"
                />
            </video>
            <!-- 
            :src="videos[0].files[0].url"
            type="videos[0].files[0].type"
            -->
            <!-- the below div is just to check if "files" subarray is properly being grabbed -->
            <div class="video-data"> 
                {{ playerFiles }}
            </div>
        </div>
        <router-view></router-view>
        
        <!-- <div class="video-data"
            @changeVideo="updateVideo($event)"
            v-for="file in videoFiles" :key="file.id"
            > src: {{file.url}}, type: {{file.type}}
        </div> -->
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Player',
    // props: ['files'],
    data() {
        return {
            videosJson: [],
            playerFiles: [],
            methods: {
                updateVideo(updatedVideo) {
                    this.playerFiles = updatedVideo;
                }

            }
        }
    },
    mounted() {
      axios
        .get('./videos.json')
        .then((response) => {
          this.videosJson = response.data;  // <-- this correctly grabs the full videos.json data
          this.playerFiles = this.videosJson.files; //<-- trying to target the sub-array in json data called "files"
        });
    },
    
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

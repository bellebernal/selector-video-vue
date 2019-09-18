<template>
  <v-layout row wrap id="layout_row">
    <v-flex xs8 sm4 md3 lg3 xl3  v-for="video in videos" :key="video.id">
      <!-- <router-link to="/player"> -->
      <v-card class="ma-3" elevation="15" @change-video="handleVideoChange">
        <v-layout column fill-height class="text-left">
          <v-img
            class="orange--text"
            fill-height
            :src="video.thumbnail">
            <v-card-title id="title" class="align-end fill-height font-weight-bold">{{ video.title }}</v-card-title>
          </v-img>
          <v-card-text>
            <span class="text--primary">
              <div>{{ video.description }}</div>
              <p/>
              <div>Duration: {{ video.info }}</div>
              <p/>
              <!-- // to see if video.files correctly grabs the files subarray - it does!
                   // ...this correctly assigns the array of player files to each card-->
              <!-- <div v-for="file in video.files" :key="file.id">
                <p/>
                codecs: {{ file.codecs }}
                type: {{ file.type }}
                url: {{ file.url }}
              </div> -->
              <div v-for="file in video.files" 
                :key="file.id"
                :codecs="file.codecs"
                :type="file.type"
                :url="file.url">
              </div>
            </span>
          </v-card-text>
          <v-card-actions>
            <router-link to="/player"
              :codecs="video.files.codecs"
              :type="video.files.type"
              :url="video.files.url"
              >
              <v-btn class="orange gray--text" @click="addToPlayer(video)">
                <v-icon small>fas fa-play</v-icon>
                <span>play video</span>
              </v-btn>
            </router-link>
          </v-card-actions>
        </v-layout>
      </v-card>
      <!-- </router-link> -->
    </v-flex>
    <router-view></router-view>
  </v-layout>
</template>


<script>
import axios from 'axios';

export default {
  name: 'Selector',
  // props:["videos"],
  data() {
    return {
      videos: [],
      videoFiles: [],
      currentVideo: {}
    };
  },
  mounted() {
      axios
        .get('./videos.json')
        .then((response) => {
          this.videos = response.data;
          // console.log(this.videos);
        })
        .then(() => {
          // console.log(this.videos)
          this.videos.forEach((video) => {
            this.videoFiles.push(video.files);
          });
          // console.log(this.videoFiles);  
        });
    },
  methods: {
    addToPlayer(video) {
      // console.log(this.videoFiles);
      // *todo* need logic here to grab the array of files obects for the selected video item
      // *... selected video item === user clicks on play button on video card
      // video below is the array of the 4 file objects
      this.$emit('change-video', video);
    },
    handleVideoChange(files) {
      this.currentVideo.push(files);
      // console.log(this.currentVideo);
    }
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
}
.row {
  justify-content: center;
  flex-wrap: wrap;
}

.v-card {
  text-decoration: none;
  min-height: 100;
  min-width: 100;
  max-width: 200;
  max-height: 200; 
}

.v-icon:hover {
  color: red;
}

.v-card:hover {
  background:  rgba(0,153,224,0.9);
  cursor: default;
}

.v-card:hover #title {
    border: 2px solid rgba(0,153,224,0.9);
    /* color: rgba(0,153,224,0.9); */
}

.v-btn span{
  text-decoration: none;
}

@media screen and (min-width: 300px) and (max-width: 960px){
    #layout_row {
      padding: 20px;
    }

    /* .v-card {
      -ms-flex-preferred-size: 50%;
      flex-basis: 50%;
      -webkit-box-flex: 0;
      -ms-flex-positive: 0;
      flex-grow: 0;
      max-width: 75%;
    } */
}

</style>

<template>
  <v-layout row wrap id="layout_row">
    <!-- <div>
      <v-btn @click="getData"></v-btn>
      <div>{{ videos }}</div>
    </div> -->
    <v-flex xs8 sm4 md3 lg3 xl3  v-for="video in videos" :key="video.id">
      <!-- <router-link to="/player"> -->
      <v-card href class="ma-3" elevation="15">
        <v-layout column fill-height class="text-left">
          <v-img
            class="orange--text"
            fill-height
            :src="video.thumbnail"
          >
            <v-card-title id="title" class="align-end fill-height font-weight-bold">{{ video.title }}</v-card-title>
          </v-img>

          <v-card-text>
            <span class="text--primary">
              <div>{{ video.description }}</div>
              <p/>
              <div>Duration: {{ video.info }}</div>
            </span>
          </v-card-text>

          <v-card-actions>
            <router-link to="/player" :files="files" >
              <v-btn class="orange gray--text" @click="updateCurrent">
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
      selectedVideo: 0,
      videos: [],
      files: []
    };
  },
  mounted() {
      axios
        .get('./videos.json')
        .then((response) => {
          this.videos = response.data;
        });
    },
  methods: {
    updateCurrent(event){
      this.files = event.target.dataset['files']
      this.$emit('activeVideo', this.videos.files)
    }
    // addVideo() {
    //     this.$emit('add-video', this.selectors[this.selected].id);
    // },


    // getVideoId() {
    //   this.videoId = selector.id;
    // }
    // when user clicks play button,
    // user routed to player component,
    // (need player component to play specific )
    // assign a video id to this component's current id,
    // 
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

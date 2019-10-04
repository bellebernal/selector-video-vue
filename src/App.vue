<template>
  <!-- root -->
  <v-app>
    <v-app-bar app dark elevation height="100">
      <v-toolbar-title class="headline text-uppercase">
        <span>Video</span>
        <span class="font-weight-light">SELECTOR</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-img
          src="https://www.meredith.com/sites/all/themes/meredith/logo.png"
          contain
          height="30px"
          width="30px"
        ></v-img>
    </v-app-bar>
    <v-content>
          <Selector :videos="videos"/>
    </v-content>
  </v-app>
</template>

<script>
import Vue from 'vue';
import Selector from './components/Selector.vue';
import axios from 'axios';

export default Vue.extend({
  name: 'App',
  components: {
    Selector
  },
  data() {
    return {
      videos: [],
      videoFiles: []
    };
  },
  mounted() {
      axios
        .get('./videos.json')
        .then((response) => {
          this.videos = response.data;
        })
        .then(() => {
          this.videos.forEach((video) => {
            this.videoFiles.push(video.files);
          });
        });
    }
});
</script>

<style>
  .v-toolbar span {
    color:rgba(0,153,224,0.9);
  }

  .v-content {
    background: lightgray;
  }

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

.v-card:hover {
  border: 2px solid rgba(0,153,224,0.9);
  background:  rgba(0,153,224,0.9);
  cursor: default;
}
.v-btn span{
  text-decoration: none;
}

@media screen and (min-width: 300px) and (max-width: 960px){
    #layout_row {
      padding: 20px;
    }
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

.video-data {
    border: 2px solid red;
    display: flex;
    align-items: center;
    flex-direction: flelx-end;
}

</style>

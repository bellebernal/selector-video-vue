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
          <Selector :selectorData="selectorData"/>
    </v-content>
  </v-app>
</template>

<script>
import Vue from 'vue';
import Selector from './components/Selector.vue';
import axios from 'axios';
import map  from 'rxjs/operators';

export default Vue.extend({
  name: 'App',
  components: {
    Selector
  },
  data() {
    return {
      videos: [],
      selectorData: [],
      videoData: [],
      playerData: []
    };
  },
  mounted() {
<<<<<<< HEAD
    axios
      .get('./response.json')
      .then((response) => {  // then we take the response, search for config data to create the video cards, and add the views object to a separate videoData array 
        this.videos = response.data.screens;
        this.selectorData = this.videos[0].config.views;
        for (let i = 1; i < this.videos.length; i++) {
          this.videoData.push(this.videos[i].config.views);
        }
      })
      .then(() => {  //  then search the videoData to find the actual player files we need and put them in a separate array
        let playFiles = this.videoData;
        for (let key in playFiles) {
          if (playFiles.hasOwnProperty(key) && !isNaN(parseInt(key,10))) {
            let value = playFiles[key];
            value.filter(subarray => {
              let id = subarray.id;
              if (id.includes('Player')) {
                this.playerData.push(subarray);
              }
            });
          }
        }
      })
      .then(() => {  // this block combines 2 arrays from above by creating a new files prop to each selector and assiging the corresponding play files
        let playables = this.playerData;
        this.selectorData.forEach((selector) => {
          selector['files']; 
          playables.forEach((play) => { 
            if (play.id.includes(selector.id)) {
              selector['files']= play.files;
            }
=======
      axios
        .get('./videos.json')
        .then((response) => {
          this.videos = response.data;
          this.videos.forEach((video) => {
            this.videoFiles.push(video.files);
>>>>>>> 7dc6849f86735ea131cf1261589179724cc2abc8
          });
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
  border: 2px solid rgba(0,153,224,0.9);
  cursor: default;
}
<<<<<<< HEAD

=======
>>>>>>> 7dc6849f86735ea131cf1261589179724cc2abc8
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

</style>

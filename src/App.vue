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
          src="./assets/film_logo.png"
          contain
          height="130px"
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
    axios
      .get('./response.json')
      .then((response) => {  // then we take the response, search for config data to create the video cards, and add the views object to a separate videoData array 
        this.videos = response.data.screens;
        this.selectorData = this.videos[0].config.views;
        this.videos.forEach((video) => {
          this.videoData.push(video.config.views)
        })
      })
      .then(() => {  //  then search the videoData to find the actual player files we need and put them in a separate array
        const playFiles = this.videoData;
        playFiles.forEach((value,index) => {
          if (playFiles.hasOwnProperty(index) && !isNaN(parseInt(index,10))) {
            value.filter(subarray => {
              const id = subarray.id;
              if(id.includes('Player')) {
                this.playerData.push(subarray);
              }
            });
          }
        })
        // same function as above but uses (outdated) for..in loop:
        // for (let key in playFiles) {  //  Looping over property names (not indexes!) is what for..in is for!
        //   if (playFiles.hasOwnProperty(key) && !isNaN(parseInt(key,10))) {
        //     let value = playFiles[key];
        //     value.filter(subarray => {  // for each of the element (i.e. subarray) find the id, initialize it and if it has 'Player' in the id then grab that element and it contents
        //       let id = subarray.id;
        //       if (id.includes('Player')) {
        //         this.playerData.push(subarray);
        //       }
        //     });
        //   }
        // }
      })
      .then(() => {  // this block combines 2 arrays from above by creating a new files prop to each selector and assiging the corresponding play files
        const playables = this.playerData;
        this.selectorData.forEach((selector) => {
          selector['files']; 
          playables.forEach((play) => { 
            if (play.id.includes(selector.id)) {
              selector['files']= play.files;
            }
          });
        });
      });
  }
});
</script>

<style>
  .v-responsive__content {
    display: flex;
    justify-content: center;
  }

  .v-toolbar span {
    color:rgba(0,153,224,0.9);
  }

  .v-content {
    background: lightgray;
  }

  a {
  text-decoration: none;
  }

  #layout_row {
    padding: 20px;
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
  .v-btn span{
    text-decoration: none;
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

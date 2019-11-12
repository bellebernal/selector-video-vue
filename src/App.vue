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
import * as firebase from 'firebase/app';

const config = {
    apiKey: "AIzaSyAzhYuONm41KLqw7Bed4-OPax2DkQQsFh0",
    authDomain: "videos-db.firebaseapp.com",
    databaseURL: "https://videos-db.firebaseio.com",
    projectId: "videos-db",
    storageBucket: "videos-db.appspot.com",
    messagingSenderId: "119171243284",
    appId: "1:119171243284:web:60b3210e49e55a2a5ab601"
};

firebase.initializeApp(config);

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
      .get('https://videos-db.firebaseio.com/screens.json')
      .then((response) => {  // then we take the response, search for config data to create the video cards, and add the views object to a separate videoData array 
        this.videos = response.data;
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
    color: darkcyan;
    font-size: xx-large;
  }

  .v-content {
    background: darkgray;
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

  .card-title {
    color: orange;
    font-weight: bolder;
  }

  .v-card:hover {
    border: 2px solid lightsalmon;
    background:  lightsalmon;
    border: 2px solid lightsalmon;
    cursor: default;
  }

  .v-card:hover .card-title {
    color: darkcyan;
    font-weight: bolder;
  }

  button {
    color: black;
  }

  .v-btn span{
    text-decoration: none;
    color: darkcyan;
    /* background: black; */
  }

  .v-icon.fa-window-close {
      color: white;
  }

</style>

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
      <Selector :video="video"/>
      <!-- <Player/> -->
      <!-- <Player 
      v-if="handleVideoChange()"
      :src="current"
      /> -->
    </v-content>
  </v-app>
</template>

<script>
import Vue from 'vue';
import Selector from './components/Selector.vue';
// import Player from './components/Player.vue';

export default Vue.extend({
  name: 'App',
  props: ['video'],
  components: {
    Selector,
    // Player
  }
//   data: () => ({
//     currentVideo: null
//   }),
//   methods: {
//     handleVideoChange(files){
//       this.currentVideo.push(files);
//       console.log(this.currentVideo);
//     }
//   }
});
</script>

<style>
  .v-toolbar span {
    color:rgba(0,153,224,0.9);
  }

  .v-content {
    background: lightgray;
  }
</style>

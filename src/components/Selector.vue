<template>
  <v-layout row wrap id="layout_row">
    <v-flex xs8 sm4 md3 lg3 xl1  v-for="video in selectorData" :key="video.id">
      <v-card class="ma-3" elevation="15">
        <v-layout column fill-height class="text-left">
          <v-img
            :video="video"
            class="orange--text"
            fill-height
            :src="video.thumbnail">
          </v-img>
          <v-card-title class="card-title">{{ video.title }}</v-card-title>
          <v-card-text>
            <span class="text--primary">
              <div>{{ video.description }}</div>
              <p/>
              <div>Duration: {{ video.info }}</div>
            </span>
          </v-card-text>
          <v-card-actions>
              <v-btn
                class="orange gray--text"
                @click="addToPlayer(video)"
                >
                <v-icon small>fas fa-play</v-icon>
                <span id="play">play</span>
              </v-btn>
          </v-card-actions>
        </v-layout>
      </v-card>
    </v-flex>
    <Player v-if="!hide" :active="active" :key="componentKey"/>
    <div v-else>
      <Player v-show="display" :active="active" :key="componentKey"/>
    </div>
  </v-layout>
</template>


<script>
import Player from './Player.vue'

export default {
  name: 'Selector',
  components: { Player },
  props:['selectorData'],
  data() {
    return {
      active: [],
      componentKey: 0 // force reload component
    };
  },
  computed: {
    hide() {
      return this.active.length === 0; // if there is no data in active[], then hide the Player component
    },
    display() {
      if (this.active.length > 0) {
      document.getElementById('play').addEventListener('click',
          function() {
              document.getElementById('player').style.display='flex';
          });
      }
    }
  },
  methods: {
    addToPlayer(video) {
      this.componentKey += 1; 
      this.active = [];  // resets active array state to empty
      this.active = video.files; // then, assigns the current selected video's files
      this.$emit('update-video', this.active);
    }
  }
};
</script>

 <!-- * test with duplicate player files too * -->

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

</style>

<template>
  <v-layout row wrap id="layout_row">
    <v-flex xs8 sm4 md3 lg3 xl3  v-for="video in videos" :key="video.id">
      <v-card class="ma-3" elevation="15">
        <v-layout column fill-height class="text-left">
          <v-img
            :video="video"
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
            </span>
          </v-card-text>
          <v-card-actions>
              <v-btn
                class="orange gray--text"
                @click="addToPlayer(video)"
                >
                <v-icon small>fas fa-play</v-icon>
                <span id="play">play video</span>
              </v-btn>
          </v-card-actions>
        </v-layout>
      </v-card>
    </v-flex>
    <Player v-if="!display" :active="active" :key="componentKey"/>
    <div v-else>
      <Player v-if="doDisplay" :active="active" :key="componentKey"/>
    </div>
  </v-layout>
</template>


<script>
import Player from './Player.vue'

export default {
  name: 'Selector',
  components: { Player },
  props:['videos'],
  data() {
    return {
      active: [],
      componentKey: 0
    };
  },
  computed: {
    display() {
      return this.active.length === 0; // if there is no data in active[], then hide the Player component
    },
    doDisplay() {
      if (this.active.length > 0) {
      document.getElementById('play').addEventListener('click',
          function() {
              document.getElementById('player').style.display="flex";
          });
      }
    }
  },
  methods: {
    addToPlayer(video) {
      this.componentKey += 1;
      this.active = [];  // resets active array to empty
      this.active = video.files; // then, assigns the current selected video's files
      this.$emit('update-video', this.active);
    }
  }
};
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

</style>

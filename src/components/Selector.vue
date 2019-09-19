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
              <!-- <div>src: {{ video.files[0].url[0] }}</div> -->
            </span>
          </v-card-text>
          <v-card-actions>
            <router-link to="/player" 
              >
              <!-- > :active="active"
              v-for="file in video.files"
              :key="file.id"
              :codecs="file.codecs"
              :type="file.type"
              :src="file.url" -->
              <v-btn 
                class="orange gray--text"
                @click="addToPlayer(video)"
                :active="active">
                <v-icon small>fas fa-play</v-icon>
                <span>play video</span>
              </v-btn>
            </router-link>
          </v-card-actions>
        </v-layout>
      </v-card>
    </v-flex>
    <router-view></router-view>
  </v-layout>
</template>


<script>

export default {
  name: 'Selector',
  props:['videos'],
  data() {
    return {
      active: []
    };
  },
  methods: {
    addToPlayer(video) {
      this.active = [];  // resets active array set to empty the array
      video = video.files;
      this.active.push(video);
      console.log(this.active);
      this.$emit('update-video', video);
    }
  }
};
</script>

<style>


</style>

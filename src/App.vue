<template>
  <!-- root -->
  <v-app>
    <v-app-bar app dark elevation>
      <v-toolbar-title class="headline text-uppercase">
        <span>Video</span>
        <span class="font-weight-light">SELECTOR</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-img src="./assets/video-logo.svg"></v-img>
      <v-img src="./assets/library-logo.svg"></v-img>
    </v-app-bar>
    <v-content>
      <!-- <Search :search="search" @search="handleSearch"/> -->
      <!-- <Selector v-if="handleSearch" :selectorData="selectorData"/> -->
      <Selector :selectorData="selectorData"/>
    </v-content>
  </v-app>
</template>

<script>
import Vue from "vue";
import { reactive, watch } from "@vue/composition-api";
import Search from "./components/Search.vue";
import Selector from "./components/Selector.vue";
import axios from "axios";
import * as firebase from "firebase/app";

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
  name: "App",
  components: {
    Search,
    Selector
  },
  props: ["search"],
  data() {
    return {
      // search,
      videos: [],
      selectorData: [],
      videoData: [],
      playerData: []
    };
  },
  methods: {
    handleSearch(searchItem) {
      this.search = searchItem;
    }
  },
  mounted() {
    axios
      .get("https://videos-db.firebaseio.com/screens.json")
      .then(response => {
        // then we take the response, search for config data to create the video cards, and add the views object to a separate videoData array
        this.videos = response.data;
        this.selectorData = this.videos[0].config.views;
        this.videos.forEach(video => {
          this.videoData.push(video.config.views);
        });
      })
      .then(() => {
        //  then search the videoData to find the actual player files we need and put them in a separate array
        const playFiles = this.videoData;
        playFiles.forEach((value, index) => {
          if (playFiles.hasOwnProperty(index) && !isNaN(parseInt(index, 10))) {
            value.filter(subarray => {
              const id = subarray.id;
              if (id.includes("Player")) {
                this.playerData.push(subarray);
              }
            });
          }
        });
      })
      .then(() => {
        // this block combines 2 arrays from above by creating a new files prop to each selector and assiging the corresponding play files
        const playables = this.playerData;
        this.selectorData.forEach(selector => {
          selector["files"];
          playables.forEach(play => {
            if (play.id.includes(selector.id)) {
              selector["files"] = play.files;
            }
          });
        });
      });
  }
});
</script>

<style lang="scss">
.v-app-bar {
  display: flex;
  height: 10%;
  width: 100%;
  align-items: center;

  &.v-toolbar {
    height: 9%;
    width: 100%;
  }

  & .v-image {
    margin-left: 10px;
    height: 50px;
    width: 50px;
  }
}

.search {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 50%;
  margin-left: 30%;

  & .v-text-field {
    // border: 2px solid darkcyan;
    margin: 10px;
    text-align: center;
    font-weight: 500;
    font-size: 1.2em;
  }

  & .v-btn {
    width: 10%;
    margin: 0px;
    font-weight: 500;
  }
}

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
  width: -webkit-fill-available;
}

a {
  text-decoration: none;
}

#layout_row {
  padding: 20px;
  width: 100%;
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

  & .card-title {
    color: orange;
    font-weight: bolder;
  }

  &:hover {
    border: 2px solid lightsalmon;
    background: lightsalmon;
    cursor: default;

    .card-title {
      color: darkcyan;
      font-weight: bolder;
    }
  }
}

.v-btn span {
  text-decoration: none;
  color: darkcyan;
}

.v-icon.fa-window-close {
  color: white;
}

input:focus,
select:focus,
textarea:focus,
button:focus {
  outline: none;
}

@media screen and (orientation: portrait) and (min-width: 320px) and (max-width: 589px) {
  .v-app-bar {
    &.v-toolbar span {
      font-size: x-large;

      &.v-toolbar__title {
        font-size: medium;
      }
    }

    &.v-image {
      height: 20px;
      width: 20px;
    }
  }

  #layout_row {
    width: 100%;
  }
}
</style>

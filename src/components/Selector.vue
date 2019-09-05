<template>
  <v-layout row wrap id="layout_row">
    <v-flex xs8 sm4 md3 lg3 xl3 v-for="selector in selectors" :key="selector.id">
      <!-- <router-link to="/player"> -->
      <v-card href class="ma-3" elevation="15">
        <v-layout column fill-height class="text-left">
          <v-img
            class="orange--text"
            fill-height
            :src="selector.thumbnail"
          >
            <v-card-title id="title" class="align-end fill-height font-weight-bold">{{ selector.title }}</v-card-title>
          </v-img>

          <v-card-text>
            <span class="text--primary">
              <div>{{ selector.description }}</div>
              <p/>
              <div>Duration: {{ selector.info }}</div>
            </span>
          </v-card-text>

          <v-card-actions>
            <router-link to="/player">
              <v-btn 
              class="orange gray--text"
              v-on:click="updateCurrent(video)"
              >
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
import Vue from 'vue'

export default Vue.extend({
  name: 'Selector',
  // props:["videos"],
  data: () => {
    return {
      selected: 0,
      selectors: [
        {
          id: "sintel",
          thumbnail: "http://test-cdn.selectablemedia.com/test/a/sintel/assets/img/thumb_sintel.png",
          title: "Sintel",
          description: "Small video. HTML5, native controls, start poster. Bottom, right social. Video + grid",
          info: "00:51" 
        },
        {
          id: "bbb",
          thumbnail: "http://test-cdn.selectablemedia.com/test/a/bbb/assets/img/thumb_bbb.png",
          title: "Big Buck Bunny",
          description: "Large video. HTML5, custom controls, social hover. Video + replay",
          info: "00:33"
        },
        {
          id: "walle",
          thumbnail: "http://test-cdn.selectablemedia.com/test/a/walle/assets/img/thumb_walle.png",
          title: "WALL-E",
          description: "Small video. Youtube, custom controls. Left social. Video + carousel.",
          info: "02:30"
        }
      ],
      videos: [
               {
                    id: "sintelPlayer",
                    files: [
                            {
                                type: "mp4",
                                codecs: "h264,aac",
                                url: "http://test-cdn.selectablemedia.com/test/a/sintel/assets/video/sintel_trailer-1080p.mp4"
                            },
                            {
                                type: "mp4",
                                codecs: "avc1.42E01E,mp4a.40.2",
                                url: "http://test-cdn.selectablemedia.com/test/a/sintel/assets/video/sintel_trailer-1080p.mp4"
                            },
                            {
                                type: "ogv",
                                codecs: "theora,vorbis",
                                url: "http://test-cdn.selectablemedia.com/test/a/sintel/assets/video/sintel_trailer-1080p.ogv"
                            },
                            {
                                type: "flv",
                                codecs: "h264,aac",
                                url: "http://test-cdn.selectablemedia.com/test/a/sintel/assets/video/sintel_trailer-1080p.flv"
                            }
                    ]
               },
               {
                    id: "bbbPlayer",
                    files: [
                        {
                            type: "mp4",
                            codecs: "h264,aac",
                            url: "http://test-cdn.selectablemedia.com/test/a/bbb/assets/video/bbb_trailer_1080p.mp4"
                        },
                        {
                            type: "mp4",
                            codecs: "avc1.42E01E,mp4a.40.2",
                            url: "http://test-cdn.selectablemedia.com/test/a/bbb/assets/video/bbb_trailer_1080p.mp4"
                        },
                        {
                            type: "ogv",
                            codecs: "theora,vorbis",
                            url: "http://test-cdn.selectablemedia.com/test/a/bbb/assets/video/bbb_trailer_1080p.ogv"
                        },
                        {
                            type: "flv",
                            codecs: "h264,aac",
                            url: "http://test-cdn.selectablemedia.com/test/a/bbb/assets/video/bbb_trailer_1080p.flv"
                        }
                    ]
               },
               {
                    id: "wallePlayer",
                    files: [
                        {
                            type: "mp4",
                            codecs: "h264,aac",
                            url: "http://test-cdn.selectablemedia.com/test/a/walle/assets/video/wall-e-trailer-3_9_1280x544.mp4"
                        },
                        {
                            type: "mp4",
                            codecs: "avc1.42E01E,mp4a.40.2",
                            url: "http://test-cdn.selectablemedia.com/test/a/walle/assets/video/wall-e-trailer-3_9_1280x544.mp4"
                        },
                        {
                            type: "ogv",
                            codecs: "theora,vorbis",
                            url: "http://test-cdn.selectablemedia.com/test/a/walle/assets/video/wall-e-trailer-3_9_1280x544.ogv"
                        },
                        {
                            type: "flv",
                            codecs: "h264,aac",
                            url: "http://test-cdn.selectablemedia.com/test/a/walle/assets/video/wall-e-trailer-3_9_1280x544.flv"
                        }
                    ]
               }
           ],
      methods: {
        updateCurrent(video){
          this.$emit('select-video', video)
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
  },
  
});
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

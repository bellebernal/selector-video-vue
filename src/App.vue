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
      <!-- <Selector @add-video="updateVideo"/> -->
      <Selector v-on:select-video="handleVideoChange"/>
      <Player 
      v-if="handleVideoChange()"
      :src="current"
      />
    </v-content>
  </v-app>
</template>

<script>
import Vue from 'vue';
import Selector from './components/Selector.vue';
import Player from './components/Player.vue';

export default Vue.extend({
  name: 'App',
  components: {
    Selector,
    Player
  },
  data: () => ({
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
            type: "smPlayerIframe",
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
    current: null
  }),
  methods: {
    handleVideoChange(video){
      this.current = video;
    }
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
</style>

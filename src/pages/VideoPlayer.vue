<template> 
<div class="video-overlay">
  <video-player  class="video-player-box vjs-16-9" width="100%"
                 ref="videoPlayer"
                 :options="playerOptions"
                 :playsinline="true"         

              >
  </video-player>
</div>
</template>

<script>
import "video.js/dist/video-js.css";
import { videoPlayer } from "vue-video-player";

export default {
  data() {
    return {
      playerOptions: {
        // videojs options
        muted: false,
        language: "en",
        autoplay: true, 
       
        sources: [
          {
            type: "video/mp4",
            src:
              "https://sps.ams3.digitaloceanspaces.com/Test/TEST%20trailer.mp4"
          }
        ],
        poster: "https://sps.ams3.digitaloceanspaces.com/Test/test_poster_yellow.jpg"
      }
    };
  },
  components: {
    videoPlayer
  },
  mounted() {
    console.log("this is current player instance object", this.player);
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player;
    }
  },
  methods: {   
    
    onPlayerPlay(player) {
        // console.log('player play!', player)
      },
      onPlayerPause(player) {
        // console.log('player pause!', player)
      },
      // ...player event

      // or listen state event
      playerStateChanged(playerCurrentState) {
        // console.log('player current update state', playerCurrentState)
      },

      // player is ready
      playerReadied(player) {
        console.log('the player is readied', player)
        // you can use it to do something...
        // player.[methods]
      } 
 
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
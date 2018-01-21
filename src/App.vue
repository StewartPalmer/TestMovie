<template>
  <div id="app">
  <Navigation></Navigation>
  <videocontainer></videocontainer>
  <transition name="fade" mode="out-in">
    <router-view/>
   </transition> 
  </div>  
</template>

<script>
import '../node_modules/slick-carousel/slick/slick.css'
import Navigation from '@/pages/Navigation'
import videocontainer from '@/pages/VideoPlayer'

export default {
  name: 'app',
    metaInfo: {
       title: 'Home',
       titleTemplate: '%s | Test: A Classic American Story....On Steroids'
     },
   components: {
     Navigation,
    videocontainer
  },
  watch: {
  '$route' (to, from) {
    const toDepth = to.path.split('/').length
    const fromDepth = from.path.split('/').length
    this.transitionName = 'fade'
    } 
  }
}
</script>

<style lang="scss">

@import './styles/style';

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}


</style>

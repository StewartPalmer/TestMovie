<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import '../node_modules/slick-carousel/slick/slick.css'

export default {
  name: 'app'
}
</script>

<style>
.slick-prev {
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 9999;

}

.slick-next {
    position: absolute;
    bottom: 0;
    right: 0;
     z-index: 9999;
    
}


</style>

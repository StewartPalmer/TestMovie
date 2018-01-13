

<template>
<div class="slider_container"> 
 <slick ref="slick" :options="slickOptions">
 <div class="slider_element"> 
 <div class="slider_inner slider_one">
   <div class="slider_content"> 
     <h1>About Test</h1>
 <h2 class='title-block__subtitle'>Find out more about the film...</h2>
  </div>
 </div>
 
 </div>
  <div class="slider_element slider_two">
   <div class="slider_content"> 
     <h1>The Team</h1>
 <h2>Find out more about the cast and crew...</h2>
 </div>

  </div>
  <div class="slider_element slider_three">
       <div class="slider_content"> 
     <h1>About Test</h1>
 <h2>Find out more about the film...</h2>
 </div>
    </div>  
    </slick>
    </div>
 


</template>

<script>
import Slick from "vue-slick";

export default {
  name: "HelloWorld",
  data() {
    return {
      slickOptions: {
        slidesToShow: 1.5,
        slidesToScroll: 1,
        infinite: false,
        arrows: true
      }
    };
  },

  methods: {
    next() {
      this.$refs.slick.next();
    },

    prev() {
      this.$refs.slick.prev();
    },

    reInit() {
      this.$nextTick(() => {
        this.$refs.slick.reSlick();
      });
    }
  },

  components: {
    slick: Slick
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

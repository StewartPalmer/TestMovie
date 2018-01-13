

<template>
 <slick ref="slick" :options="slickOptions">
 <div class="slider_element slider_one"> 
   <div class="slider_inner slider_inner--black"> 
     <h1 class='title-block__title'>About Test</h1>
 <h2 class='title-block__subtitle'>Find out more about the film...</h2>
 </div>
 
 </div>
  <div class="slider_element slider_two">
   <div class="slider_inner"> 
     <h1>The Team</h1>
 <h2>Find out more about the cast and crew...</h2>
 </div>

  </div>
  <div class="slider_element slider_three">
       <div class="slider_inner"> 
     <h1>About Test</h1>
 <h2>Find out more about the film...</h2>
 </div>
    </div>  
 
</slick>

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
        arrows: true,
        


        // Any other options that can be got from plugin documentation
      }
    };
  },

  // All slick methods can be used too, example here
  methods: {
    next() {
      this.$refs.slick.next();
    },

    prev() {
      this.$refs.slick.prev();
    },

    reInit() {
      // Helpful if you have to deal with v-for to update dynamic lists
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
.slider_element {
  height: 100vh;
}

.slider_one {
  background-image: url(../assets/POSTER_v3.jpg);
  background-position: center;
  background-size: cover;
}

.slider_two {
  background-image: url(../assets/IMG_9030.jpg);
  background-position: center;
  background-size: cover;
}

.slider_three {
  background-image: url(../assets/tank.jpeg);
  background-position: center;
  background-size: cover;
}
</style>



<template>
 <slick ref="slick" :options="slickOptions">
 <div class="slider_element slider_one"><h3>1</h3> </div>
  <div class="slider_element slider_two"><h3>2</h3></div>
  <div class="slider_element slider_three"><h3>3</h3></div>  
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
        infinite: false

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

.slider_one{

  background-image: url(../assets/POSTER_v3.jpg);
  background-position: center;
  background-size: cover;

}

.slider_two{

  background-image: url(../assets/IMG_9030.jpg);
  background-position: center;
  background-size: cover;

}

.slider_three{

  background-image: url(../assets/tank.jpeg);
  background-position: center;
  background-size: cover;
}



</style>

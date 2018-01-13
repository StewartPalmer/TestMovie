<template>
  <transition name="fade" transition-mode="in-out">
    
  <div class="slider_container">
    <slick ref="slick" :options="slickOptions">
      <div v-for="slider in sliderData" class="slider_element" :key="slider.title">
        <router-link  :to="slider.navigation" >
          <div class="slider_inner" :style="{ 'background-image': 'url(' + slider.background + ')' }">
            <div class="slider_content">
              <h1>{{slider.title}}</h1>
              <h2 class="slider_sub-title">{{slider.subTitle}}</h2>
            </div>
          </div>
        </router-link>
      </div>
    </slick>
  </div>
    </transition>
</template>

<script>
import Slick from "vue-slick";

export default {
  name: "MainSlider",
  data() {
    return {
      slickOptions: {
        slidesToShow: 1.5,
        slidesToScroll: 1,
        infinite: false,
        arrows: true,
        responsive: [{
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }       
        ]
      },
      sliderData: [{
          title: "About Test",
          subTitle: "Find out more about the film",
          background: "static/POSTER_v3.jpg",
          navigation: './About'
        },
        {
          title: "The Crew",
          subTitle: "Find out more about the film",
          background: "static/IMG_9030.JPG",
          navigation: './Team'
        }
      ]
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

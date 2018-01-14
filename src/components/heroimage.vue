<template> 

   <div class="hero-image" id='scroll-down-js' :style="{ 'background-image': 'url(' + imageProp + ')' }">
        <div class="hero-image_inner"> 

<div class="hero-image_content">
<h1>{{titleProp}}</h1>

</div>
        </div>

        <div   v-on:click="scrollToEnd()" class="hero-image_scroll"> </div>


    </div>
</template>

<script>
export default {
  name: 'Name',
  props: { imageProp: String,
  titleProp: String}
  ,
  data () {
    return {
    
    }
  },
   methods: {
 scrollToEnd: function() {    
        
     window.scrollTo(0, 300, 0)
    }


  }, 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
<template> 
 
<div>   
    <Heroimage :titleProp="title" :imageProp="image">
    </Heroimage>
    <Sidebyside v-for='node in content' :content="node" >
     </Sidebyside>



</div>


</template>

<script>
import Heroimage from '@/components/heroimage'
import Sidebyside from '@/components/sidebyside'
export default {
  name: "About",
  
    metaInfo: {
       title: 'About',
     
     },
  data() {
    return {
      title: "About Test",
      image: 'static/brock5.jpg',
      content: [
          {
              pretitle: null,
              title: 'What is TEST',
              subtitle: null,
              body: "<p> TEST is a Feature film about a young amateur Bodybuilder, Eddie, who must balance his relationship with his suffocating, religious mother and his manipulative coach, who introduces Eddie to the world of steroids and exploitation, all in the name of the sport of Bodybuilding. </p> <p>I competed in my first bodybuilding show when I was 20, and I won first place in the middle weight division. I lost terribly in the overall division, but that's a story for another time. During my time competing, I met some of the most dedicated and determined men and women. In Film, bodybuilders are a punchline. They're portrayed as big, clunky, neanderthal-types. But behind the stereotype is a vast world of intricate science, physically-demanding training, and more self-discipline than most can understand</p>",
              image: 'static/tank.jpeg',
              imageleft: false,

          },
           {
              pretitle: null,
              title: null,
              subtitle: null,
              body: "<p>However, my personal battle with steroid abuse is what prompted me to write TEST. I was addicted, and over the course of a couple years I lost a couple friends who were addicted as well, due to heart failure.</p> <p>Physical perfection is a huge issue in the world. We are bombarded with images every day of what we 'should' look like. The bodybuilding world is a testament to that. I want to explore the truth of the industry for a lot of young men and women. </p>",
              image: 'static/brock.test.needle_cropped.jpg',
              imageleft: true,

          }
      ]     
    };    
  },
  components: {
    Heroimage,
    Sidebyside
  }
    
  
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
<template> 
 
<div>   
    <Heroimage :titleProp="title" :imageProp="image">
    </Heroimage>
    <Sidebyside v-for='node in content' :content="node" :key="node.title" >
    </Sidebyside>



</div>


</template>

<script>
import Heroimage from '@/components/heroimage'
import Sidebyside from '@/components/sidebyside'
export default {
  name: "About",
  
    metaInfo: {
       title: 'Team',      
     
     },
  data() {
    return {
      title: "The Team",
      image: 'https://sps.ams3.digitaloceanspaces.com/Test/test_filming.jpg',
      content: [
          {
              pretitle: 'Actor & Writer',
              title: 'Brock Yurich',
              subtitle: null,
              body: "<p>Brock Yurich is an actor and filmmaker in New York City, where he's had starring roles in Tyler Perry's &#x22;The Haves and Have Nots,&#x22; HBO's &#x22;Succession&#x22; with Adam McKay, and &#x22;Goat&#x22; with James Franco. Brock's first short film, &#x22;T-County,&#x22; won Best Short Film at the Neo Film Festival and &#x22;Best Lead Actor&#x22; at the Melbourne International Film Festival.</p>",
              image: 'https://sps.ams3.digitaloceanspaces.com/Test/test_brock_04.jpg',
              imageleft: false,

          },
           {
              pretitle: 'Director',
              title: 'Mike Southerly',
              subtitle: null,
              body: '<p>Mike Southerly, a 20 year veteran in the motion picture marketing industry has held executive positions at Miramax Films and 20th Century Fox Films. Combining his experience as an editor, producer, and director in the advertising world, Mike has served as creative director at the top advertising firm Trailer Park for the last five years. Recently, Mike made his writing and directing debut with the short film Knock Knock Headlock.</p>',
              image: 'https://sps.ams3.digitaloceanspaces.com/Test/test_crew_02.jpg',
              imageleft: true,

          },
          {
              pretitle: 'Producer',
              title:'Paula Rossman',
              subtitle: null,
              body: '<p>Paula has been an actor, director and producer for over 40 years, in both live theater as well as film. Since moving to NYC six years ago, she has continued following her passion for both new play development and improvisation – performing for Samuel French OOB Short Play Festival and onstage at Upright Citizens Brigade. Paula has also worked on film sets in various production capacities, and been seen in several television shows, over a dozen short films, five new web series, and roles in two independent films (Landing Up and Women and Sometimes Men,) slated for release later this year.</p><p>Under her LLC, Wall is the Way: Works, Paula has involved in producing and directing several short films making the rounds on the film festival circuit: a satirical comedy, The Other Side, a horror/psychological thriller, Evil Rising, and the soon-to-be-released issue-driven drama, The Red Lotus. Along with a relationship drama, The Light Watcher, which just finished shooting in Martha’s Vineyard and is currently in post-production, Paula is involved in two other short films in various stages of pre-production. Working with her friend, Brock Yurick, on his feature, Test, is her debut as a producer on a feature.  </p>',
              image: 'https://sps.ams3.digitaloceanspaces.com/Test/test_crew_01.jpg',
              imageleft: false,

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
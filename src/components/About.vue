<template> 
 
<div >   
    <div class="hero-image" id='scroll-down-js' style="background-image:url(static/brock5.jpg)">
        <div class="hero-image_inner"> 

<div class="hero-image_content">
<h1>About Test</h1>

</div>
        </div>

        <div   v-on:click="scrollToEnd()" class="hero-image_scroll"> </div>


    </div>

<div class="sidebyside ">
    <div class="sidebyside__inner ">
        <div class="sidebyside__half">
            <div class="sidebyside__text">
                <div class="title-block">
                    <div class="title-block__pretitle">
                        <span>Lorem ipsum dolor sit amet</span>

                    </div>
                    <div class="title-block__title">
                        <h2>What is TEST</h2>
                    </div>
                    <div class="title-block__subtitle">
                        <span>Lorem ipsum dolor sit amet</span>
                    </div>
                </div>

                <div class="sidebyside__bodytext">
                    <p>
                        TEST is a Feature film about a young amateur Bodybuilder, Eddie, who must balance his relationship with his suffocating, religious mother and his manipulative coach, who introduces Eddie to the world of steroids and exploitation, all in the name of the sport of Bodybuilding.</p>         
                    <p>
                      I competed in my first bodybuilding show when I was 20, and I won first place in the middle weight division. I lost terribly in the overall division, but that's a story for another time. During my time competing, I met some of the most dedicated and determined men and women. In Film, bodybuilders are a punchline. They're portrayed as big, clunky, neanderthal-types. But behind the stereotype is a vast world of intricate science, physically-demanding training, and more self-discipline than most can understand
                    </p>

                </div>        

            </div>   

        </div>
        <div class="sidebyside__half sidebyside__half--image" style="background-image:url(static/tank.jpeg)"></div>
    </div>
</div>


<div class="sidebyside">
    <div class="sidebyside__inner ">
        <div class="sidebyside__half sidebyside__half--imageright" style="background-image:url(static/brock.test.needle_cropped.jpg)"></div>
        <div class="sidebyside__half">
            <div class="sidebyside__text">                
                    <div class="sidebyside__bodytext">
                        <p>
                         However, my personal battle with steroid abuse is what prompted me to write TEST. I was addicted, and over the course of a couple years I lost a couple friends who were addicted as well, due to heart failure. 
                        </p>
                        <p>
                           Physical perfection is a huge issue in the world. We are bombarded with images every day of what we "should" look like. The bodybuilding world is a testament to that. I want to explore the truth of the industry for a lot of young men and women.
                        </p>
                    </div>

                            
            </div>




        </div>

    </div>
</div>


</div>


</template>

<script>
export default {
  name: "About",
  data() {
    return {
      data: "adddatahere"
     
    };
    
  },
  methods: {
 scrollToEnd: function() {    
        
     window.scrollTo(0, 300, 0)
    }


  }
  
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
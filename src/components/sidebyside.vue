<template> 
<div>
<div v-if="content.imageleft == false" class="sidebyside ">
    <div class="sidebyside__inner ">
        <div class="sidebyside__half">
            <div class="sidebyside__text">
                <div v-if="content.title != null" class="title-block">
                    <div v-if="content.pretitle != null"  class="title-block__pretitle">
                        <span>{{content.pretitle}}</span>
                    </div>
                    <div class="title-block__title">
                        <h2>{{content.title}}</h2>
                    </div>
                    <div v-if="content.subtitle != null" class="title-block__subtitle">
                        <span>{{content.subtitle}}</span>
                    </div>
                </div>

                <div class="sidebyside__bodytext" v-html="content.body">
             

                </div>        

            </div>   

        </div>
        <div class="sidebyside__half sidebyside__half--image" :style="{ 'background-image': 'url(' + content.image + ')' }"></div>
    </div>
</div>


<div v-if="content.imageleft" class="sidebyside">
    <div class="sidebyside__inner ">
        <div class="sidebyside__half sidebyside__half--imageright" :style="{ 'background-image': 'url(' + content.image + ')' }"></div>
        <div class="sidebyside__half">
            <div class="sidebyside__text">  
                 <div v-if="content.title != null" class="title-block">
                    <div v-if="content.pretitle != null"  class="title-block__pretitle">
                        <span>{{content.pretitle}}</span>
                    </div>
                    <div class="title-block__title">
                        <h2>{{content.title}}</h2>
                    </div>
                    <div v-if="subtitle != null" class="title-block__subtitle">
                        <span>{{content.subtitle}}</span>
                    </div>
                </div>              
                    <div class="sidebyside__bodytext" v-html="content.body">
                        
                    </div>                            
            </div>

        </div>

    </div>
</div>
</div>


</template>

<script>
export default {
  name: 'Name',
  props: {
      content: {
              pretitle: String,
              title: String,
              subtitle: String,
              body: String,
              image: String,
              imageleft: Boolean,  }

         

  },
  data () {
    return {
      data: 'adddatahere'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
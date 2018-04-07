<template> 
<div>

  <button v-bind:class="[ 'menu-trigger',{ 'menu-trigger--open':showModal }]" @click="menuAction" style="z-index:100000;">Menu</button>
  <transition name="fade" mode="out-in">
    <div v-if="showModal" id="menu">
      <div id="menu_inner">
        <router-link v-for="item in items" :to="item.path" v-on:click.native="menuAction" :key="item.route" >
          <li> {{item.name}}</li>
        </router-link>
      </div>
    </div>
  </transition>

<div class="cta_fixed-bottom"> 


<a href="https://boxoffice.printtixusa.com/filmforum/sponsor?src=Brock%20Yurich-TEST" alt="Donate To The Film">
Donate

</a>

</div>
</div>


</template>

<script>
export default {
  name: 'Navigation',  

  data() {
    return {
      showModal: false,
    items: []
      
    }
  },
  methods: {
    menuAction: function () {

      var modelState = this.showModal
      if (this.showModal == false) {
        this.showModal = true
      } else {
        this.showModal = false;
      }
      return this.showModal;
    }

  },
  created() {
        this.$router.options.routes.forEach(route => {
            this.items.push({
                name: route.name
                , path: route.path
            })
        })
     
    }    
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
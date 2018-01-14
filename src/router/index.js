import Vue from 'vue'
import Router from 'vue-router'
import MainSlider from '@/components/MainSlider'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: MainSlider
    },
    {
      path: '/About/',
      name: 'About',
      component: About
    }
  ]
})

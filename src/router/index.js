import Vue from 'vue'
import Router from 'vue-router'
import MainSlider from '@/pages/MainSlider'
import About from '@/pages/About'
import VideoPlayer from '@/pages/VideoPlayer'
import Meta from 'vue-meta'
import Team from '@/pages/Team'

Vue.use(Router)
Vue.use(Meta)

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
    },
    {
      path: '/Team/',
      name: 'Team',
      component: Team
    },
    {
      path: '/Trailer/',
      name: 'Trailer',
      component: VideoPlayer
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

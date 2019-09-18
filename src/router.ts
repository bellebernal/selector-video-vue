import Vue from 'vue'
import Router from 'vue-router'
import Player from './components/Player.vue'
import Selector from './components/Selector.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/player',
      name: 'player',
      component: Player
    }
  ]
})

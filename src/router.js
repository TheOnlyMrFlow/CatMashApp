import Vue from 'vue'
import Router from 'vue-router'
import Mash from './components/Mash.vue'
import Ranking from './components/Ranking.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mash',
      component: Mash
    },
    {
      path: '/ranking',
      name: 'ranking',
      component: Ranking
    }
  ]
})

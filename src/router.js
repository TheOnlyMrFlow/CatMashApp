import Vue from 'vue'
import Router from 'vue-router'
import Mash from './components/Mash.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mash',
      component: Mash
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})

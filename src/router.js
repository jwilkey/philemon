import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Overview from './views/Overview'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/overview',
      name: 'overview',
      component: Overview
    }
  ]
})

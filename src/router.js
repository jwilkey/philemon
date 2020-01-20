import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Overview from './views/Overview'
import BookChooser from './views/BookChooser'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/books',
      name: 'books',
      component: BookChooser
    },
    {
      path: '/overview',
      name: 'overview',
      component: Overview
    }
  ]
})

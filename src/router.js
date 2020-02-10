import Vue from 'vue'
import Router from 'vue-router'
import store from './store'
import Home from './views/Home'
import Overview from './views/Overview'
import BookChooser from './views/BookChooser'

Vue.use(Router)

const router = new Router({
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

router.beforeEach((to, from, next) => {
  if (to.name !== 'books' && !store.getters.study) {
    next('/books')
  } else {
    next()
  }
})

export default router

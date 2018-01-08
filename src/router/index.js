import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/components/home'
import browse from '@/components/browse'
import profile from '@/components/profile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/browse',
      name: 'browse',
      component: browse
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile
    },
  ]
})

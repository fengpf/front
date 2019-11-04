import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'

Vue.use(Router)

const About = { template: '<p>about page</p>' }

export default new Router({
  mode: 'history',
  routes: [
    {
      mode: 'history',
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})

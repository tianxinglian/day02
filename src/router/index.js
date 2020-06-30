import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/Home.vue';
import BarList from '@/pages/BarList.vue' 
import Barpeo from '@/components/barpeo.vue';
import Topic from '@/components/Topic.vue';
import Hot from '@/components/Hot.vue';

import Index from '@/pages/Index.vue';
import Class from '@/pages/class.vue';
import Cart from '@/pages/Cart.vue';
import My from '@/pages/My.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      redirect:"/home"
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children:[
        {
          path:"index",
          component:Index
        },
        {
          path:"class",
          component:Class
        },
        {
          path:"cart",
          component:Cart
        },
        {
          path:"my",
          component:My
        },
      ]
    },
    {
      path: '/barlist',
      name: 'barlist',
      component: BarList
    },
    {
      path: '/barpeo',
      name: 'barpeo',
      component: Barpeo
    },
    {
      path: '/topic',
      name: 'topic',
      component: Topic
    },
    {
      path: '/hot',
      name: 'hot',
      component: Hot
    }
    
  ]
})

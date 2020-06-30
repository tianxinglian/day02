import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/Home.vue';
import BarList from '@/pages/BarList.vue' 
import Barpeo from '@/components/barpeo.vue';
import Topic from '@/components/Topic.vue';

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
      component: Home
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
    }
    
  ]
})

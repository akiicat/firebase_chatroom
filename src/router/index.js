import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Profile from '@/components/Profile'
import Static from '@/components/Static'
import Chatroom from '@/components/Chatroom'
import FirebaseChatroom from '@/components/FirebaseChatroom'
import Vuetify from 'vuetify'
import('../../node_modules/vuetify/dist/vuetify.min.css') // Ensure you are using css-loader

 
Vue.use(Router)
Vue.use(Vuetify)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: Hello,
      meta: { requiresAuth: true}
    },
    {
      path: '/static',
      name: 'Static',
      component: Static,
      meta: { requiresAuth: true}
    },
    {
      path: '/chatroom',
      name: 'Chatroom',
      component: Chatroom,
      meta: { requiresAuth: true}
    },
    {
      path: '/firebase-chatroom',
      name: 'FirebaseChatroom',
      component: FirebaseChatroom,
      meta: { requiresAuth: true}
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      meta: { requiresAuth: true}
    },
    {
      path: '/',
      redirect: { name: 'Hello' },
      meta: { requiresAuth: true}
    }
  ]
})



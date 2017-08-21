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
      component: Hello
    },
    {
      path: '/static',
      name: 'Static',
      component: Static
    },
    {
      path: '/chatroom',
      name: 'Chatroom',
      component: Chatroom
    },
    {
      path: '/firebase-chatroom',
      name: 'FirebaseChatroom',
      component: FirebaseChatroom
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    }
  ]
})

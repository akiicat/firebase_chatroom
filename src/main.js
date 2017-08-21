// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuetify from 'vuetify'
import router from './router'
import { store } from './store'
import * as firebase from 'firebase'

import Identicon from './filters/identicon'
import Username from './filters/username'

Vue.config.productionTip = false
Vue.use(Vuetify)

Vue.filter('identicon', Identicon)
Vue.filter('username', Username)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  created () {
    firebase.initializeApp({
      apiKey: "AIzaSyBRc5DlWQvRyejRlCkVqG_wTDJhbxXEu1A",
      authDomain: "test-cdb39.firebaseapp.com",
      databaseURL: "https://test-cdb39.firebaseio.com",
      projectId: "test-cdb39",
      storageBucket: "test-cdb39.appspot.com",
      messagingSenderId: "110683641857"
    })
    this.$store.dispatch('loadMessages')
  }
})


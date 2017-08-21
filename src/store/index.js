import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

function extend(base) {
  var parts = Array.prototype.slice.call(arguments, 1);
  parts.forEach(function (p) {
    if (p && typeof (p) === 'object') {
      for (var k in p) {
        if (p.hasOwnProperty(k)) {
          base[k] = p[k];
        }
      }
    }
  });
  return base;
}

export const store = new Vuex.Store({
  state: {
    loading: false,
    user: '',
    profile: '',
    messages: ''
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    },
    setLoadMessages (state, payload) {
      state.messages = payload
    },
    setProfile (state, payload) {
      state.profile = payload
    },
  },
  actions: {
    signUserUp (store, payload) {
      const user = payload.user
      const router = payload.router
      if (user.password !== user.confirmPassword) {
        let error = {
          code: "auth/invalid-email",
          message: "confirm password is not match"
        }
        console.log(error)
        return null
      }
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then((data) => {
          store.commit('setUser', data)
          store.dispatch('updateProfile', {
            uid: data.uid,
            profile: {
              email: data.email,
              uid: data.uid,
              displayName: '',
              photoURL: ''
            }
          })
          store.dispatch('loadProfile', data.uid)
          router.push('/firebase-chatroom')
        })
        .catch((error) => {
          console.log(error)
        })
    },
    signUserIn (store, payload) {
      const user = payload.user
      const router = payload.router
      firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then((data) => {
          store.commit('setUser', data)
          store.dispatch('loadProfile', data.uid)
          router.push('/firebase-chatroom')
        })
        .catch((error) => {
          console.log(error)
        })
    },
    loadProfile ({commit}, uid) {
      firebase.database().ref('users').child(uid).on('value', function (data) {
        console.log(data)
        commit('setProfile', data.val())
      })
    },
    updateProfile (store, payload) {
      firebase.database().ref('users').child(payload.uid).set(payload.profile)
      store.dispatch('loadProfile', payload.uid)
    },
    loadMessages (store) {
      const key = "T6AxwLVaFsXz6W93WDlZAfloVEk1"
      const db = firebase.database()
      const messagesRef = db.ref('messages')
      const usersRef = db.ref('users')
      const handle = []

      messagesRef.on('child_added', function (snap) {
        let userRef = usersRef.child(snap.val().uid)
        userRef.once('value', function (userSnap) {
          handle.unshift(extend({}, snap.val(), userSnap.val()))
          store.commit('setLoadMessages', handle.sort((a, b) => a.timestamp - b.timestamp))
        })
      })
    },
    submitMessage ({commit}, { user, message }) {
      let timestamp = Date.now()

      firebase.database().ref('messages').child(timestamp).set({
        timestamp, message,
        uid: user.uid
      })
    },
  },
  getters: {
    user (state) {
      return state.user
    },
    profile (state) {
      return state.profile
    },
    messages (state) {
      return state.messages
    }
  }
})

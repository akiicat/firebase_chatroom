<template>
  <v-navigation-drawer permanent clipped light>
    <v-list dense class="pt-0">
      <template v-for="item in navItems">
        <v-list-tile v-if="!user && item.beforeLogin || user && item.afterLogin" :key="item.title" :to="item.path">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              {{ item.title }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {
      navItems: [
        { beforeLogin: true,  afterLogin: false, icon: 'perm_identity', path: '/hello', title: '入口頁面' },
        { beforeLogin: false, afterLogin: true, icon: 'perm_identity', path: '/profile', title: '使用者設定' },
        { beforeLogin: false, afterLogin: false, icon: 'web', path: '/static', title: '樣板頁面' },
        { beforeLogin: false, afterLogin: false, icon: 'mode_comment', path: '/chatroom', title: '聊天室' },
        { beforeLogin: false, afterLogin: true, icon: 'whatshot', path: '/firebase-chatroom', title: 'Firebase 聊天室' }
      ]
    }
  },
  computed: {
    user () {
      return this.$store.getters.user
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

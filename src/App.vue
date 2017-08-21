<template>
  <v-app toolbar>
    <Navbar></Navbar>  
    <v-toolbar class="teal" dark fixed>
      <v-toolbar-title>Chat Room</v-toolbar-title>
    </v-toolbar>
    <main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </main>
  </v-app>
</template>

<script>
import Navbar from './components/partials/Navbar'

export default {
  name: 'app',
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
</style>

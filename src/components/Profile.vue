<template>
  <v-container>
    <v-layout row-sm column child-flex-sm>

      <v-flex xs12 sm6 class="ma-1">
        <v-card tile>
          <v-card-text>
            <form @submit.prevent="onUpdateProfile">
              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    name="displayName"
                    label="Display Name"
                    id="displayName"
                    v-model="profile.displayName"
                    type="text"></v-text-field>
                </v-flex>
              </v-layout>

              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    name="photoUrl"
                    label="Photo Url"
                    id="photoUrl"
                    v-model="profile.photoURL"
                    type="text"></v-text-field>
                </v-flex>
              </v-layout>

              <v-layout row>
                <v-flex xs12>
                  <v-btn type="submit" :disabled="loading" :loading="loading">
                    Update Profile
                    <span slot="loader" class="custom-loader">
                      <v-icon light>cached</v-icon>
                    </span>
                  </v-btn>
                </v-flex>
              </v-layout>
            </form>
          </v-card-text>
        </v-card>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  computed: {
    user () {
      return this.$store.getters.user
    },
    profile () {
      return this.$store.getters.profile
    },
    loading () {
      return this.$store.getters.loading
    }
  },
  methods: {
    onUpdateProfile () {
      this.$store.dispatch('updateProfile', {
        uid: this.user.uid,
        profile: this.profile
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

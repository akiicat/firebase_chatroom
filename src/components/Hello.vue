<template>
  <v-container>
    <v-layout row-sm column child-flex-sm>

      <v-flex xs12 sm6 class="ma-1">
        <v-card tile>
          <v-card-text>
            <form @submit.prevent="onSignin">
              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    name="email"
                    label="Email"
                    id="email"
                    v-model="signinUser.email"
                    type="email"
                    required></v-text-field>
                </v-flex>
              </v-layout>

              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    name="password"
                    label="Password"
                    id="password"
                    v-model="signinUser.password"
                    type="password"
                    required></v-text-field>
                </v-flex>
              </v-layout>

              <v-layout row>
                <v-flex xs12>
                  <v-btn type="submit" :disabled="loading" :loading="loading">
                    Sign in
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

      <v-flex xs12 sm6 class="ma-1">
        <v-card tile>
          <v-card-text>
            <form @submit.prevent="onSignup">
              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    name="email"
                    label="Email"
                    id="email"
                    v-model="signupUser.email"
                    type="email"
                    required></v-text-field>
                </v-flex>
              </v-layout>

              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    name="password"
                    label="Password"
                    id="password"
                    v-model="signupUser.password"
                    type="password"
                    required></v-text-field>
                </v-flex>
              </v-layout>

              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    name="confirmPassword"
                    label="Confirm Password"
                    id="confirmPassword"
                    v-model="signupUser.confirmPassword"
                    type="password"
                    required></v-text-field>
                </v-flex>
              </v-layout>

              <v-layout row>
                <v-flex xs12>
                  <v-btn type="submit" :disabled="loading" :loading="loading">
                    Sign up
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
      signupUser: {
        email: '',
        password: '',
        confirmPassword: ''
      },
      signinUser: {
        email: '',
        password: ''
      }
    }
  },
  computed: {
    loading () {
      return this.$store.getters.loading
    }
  },
  methods: {
    onSignup () {
      this.$store.dispatch('signUserUp', {
        user: this.signupUser,
        router: this.$router
      })
    },
    onSignin () {
      this.$store.dispatch('signUserIn', {
        user: this.signinUser,
        router: this.$router
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

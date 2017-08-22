<template>
  <v-container>
    <v-layout row>
      <v-flex xs12>
        <form @submit.prevent="submitMessage"> <v-layout row>
            <v-flex xs8>
              <v-text-field
                label="輸入對話"
                single-line
                v-model="tempMessage"
                @keyup.enter="submitMessage"
                :disabled="!user"
                ></v-text-field>
            </v-flex>

            <v-flex xs4>
              <v-btn type="submit" primary :disabled="!user">送出</v-btn>
            </v-flex>
          </v-layout>
        </form>
      </v-flex>
    </v-layout>

    <v-layout>
      <v-flex>
        <template v-for="item in messages">
          <v-card flat>
            <v-layout>
              <v-flex xs2>
                <v-card-media
                  :src="item.photoURL | identicon(item.uid)"
                  height="40px"
                  contain></v-card-media>
              </v-flex>
              <v-flex xs10>
                <strong>{{ item.displayName | username(item.email) }}</strong>
                <p>{{ item.message }}</p>
              </v-flex>
            </v-layout>
          </v-card>
        </template>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      tempUsername: null,
      tempMessage: null
    }
  },
  computed: {
    users () {
      return this.$store.getters.users
    },
    user () {
      return this.$store.getters.user
    },
    messages () {
      return Object.keys(this.$store.getters.messages).reverse().map((key) => {
        return this.$store.getters.messages[key]
      })
    }
  },
  methods: {
    updateUsername () {
      this.username = this.tempUsername
    },
    submitMessage () {
      if (!this.tempMessage) return null

      this.$store.dispatch('submitMessage', { 
        user: this.user,
        message: this.tempMessage
      })
      this.tempMessage = null
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>

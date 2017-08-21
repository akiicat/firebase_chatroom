<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 v-if="!username">
        <form @submit.prevent="updateUsername">
          <v-layout row>
            <v-flex xs8>
              <v-text-field
                label="請輸入個人姓名開始使用聊天室"
                single-line
                v-model="tempUsername" 
                @keyup.enter="updateUsername"
                ></v-text-field>
            </v-flex>

            <v-flex xs4>
              <v-btn type="submit" primary>送出</v-btn>
            </v-flex>
          </v-layout>
        </form>
      </v-flex>
      <v-flex xs12 v-else>
        {{ username }}
      </v-flex>
    </v-layout>

    <v-layout row>
      <v-flex xs12>
        <form @submit.prevent="submitMessage">
          <v-layout row>
            <v-flex xs8>
              <v-text-field
                label="輸入對話"
                single-line
                v-model="tempMessage"
                @keyup.enter="submitMessage"
                :disabled="!username"
                ></v-text-field>
            </v-flex>

            <v-flex xs4>
              <v-btn type="submit" primary :disabled="!username">送出</v-btn>
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
                  :src="item.photoURL"
                  height="40px"
                  contain></v-card-media>
              </v-flex>
              <v-flex xs10>
                <strong>{{ item.username }}</strong>
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
      tempMessage: null,
      username: null,
      messages: [
        {
          photoURL: "http://lorempixel.com/50/50/sports",
          username: "List-based media object",
          message: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
        },
        {
          photoURL: "http://lorempixel.com/50/50/sports",
          username: "List-based media object",
          message: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
        },
        {
          photoURL: "http://lorempixel.com/50/50/sports",
          username: "List-based media object",
          message: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
        }
      ]
    }
  },
  methods: {
    updateUsername () {
      this.username = this.tempUsername;
      console.log(this.username, this.tempUsername)
    },
    submitMessage () {
      if (!this.tempMessage) return null

      this.messages.push({
        username: this.username,
        message: this.tempMessage
      });
      this.tempMessage = null
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>

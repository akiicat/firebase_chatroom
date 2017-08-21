<template>
  <v-container>
    <v-layout row>
      <v-flex xs12>
        <form>
          <v-layout row>
            <v-flex xs8>
              <v-text-field
                label="輸入對話"
                single-line
                ></v-text-field>
            </v-flex>

            <v-flex xs4>
              <v-btn primary>送出</v-btn>
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
                  :src="item.avatar"
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
  data () {
    return {
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
  }
}
</script>

<style lang="scss" scoped>

</style>


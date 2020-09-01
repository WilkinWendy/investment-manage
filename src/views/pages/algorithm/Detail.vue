<template>
  <v-dialog scrollable fullscreen v-model="dialog" persistent>
    <v-card>
      <v-toolbar flat>
        <v-toolbar-title> View Detail</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon @click="closeMe">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-card-text>
        <form>
          <v-text-field
            v-model="formModel.param1"
            label="Name"
            required
          ></v-text-field>
          <v-text-field
            v-model="formModel.param2"
            label="Provider "
            required
          ></v-text-field>
          <v-text-field
            v-model="formModel.param3"
            label="Description"
            required
          ></v-text-field>
          <Train></Train>
        </form>
      </v-card-text>
      <v-card-actions>
        <v-btn @click="closeMe">cancel</v-btn>
        <v-spacer></v-spacer>
        <v-btn class="mr-4" rounded color="primary">
          Buy For Publishing Strategy
        </v-btn>
        <v-btn class="mr-4" rounded color="primary">
          Fee Structure
        </v-btn>
        <v-btn rounded color="primary">
          Buy For Private Investing
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import Train from './Train'
export default {
  components: {
    Train
  },
  data() {
    return {
      dialog: false,
      formModel: {
        param1: '123',
        param2: '123',
        param3: '123',
        param4: '123',
        param5: '123'
      }
    }
  },
  methods: {
    closeMe() {
      this.dialog = false
    },
    open(data) {
      this.dialog = true
    }
  }
}
</script>

<style></style>

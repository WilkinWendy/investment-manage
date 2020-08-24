<template>
  <v-dialog v-model="dialog" persistent>
    <v-card>
      <v-toolbar flat>
        <v-toolbar-title> View Detail</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon @click="closeMe">
          <v-icon>mdi-close</v-icon>
        </v-btn></v-toolbar
      >
      <v-card-text>
        <form>
          <v-text-field
            v-model="formModel.param1"
            label="Strategy Name"
            required
          ></v-text-field>
          <v-text-field
            v-model="formModel.param2"
            label="Strategy Provider"
            required
          ></v-text-field>
          <v-text-field
            v-model="formModel.param3"
            label="Algorithm Provider"
            required
          ></v-text-field>
          <v-text-field
            v-model="formModel.param4"
            label="Strategy Description"
            required
          ></v-text-field>

          <Train></Train>
          <v-divider class="mt-3 mb-3"></v-divider>

          <v-row>
            <v-btn @click="closeMe">cancel</v-btn>
            <v-spacer></v-spacer>
            <v-btn class="mr-4" rounded color="primary">
              Fee Structure
            </v-btn>
            <v-btn class="mr-4" rounded color="primary">
              Buy Automated Trading Robot
            </v-btn>
            <v-btn rounded color="primary">
              Buy Algorithm Analytics
            </v-btn>
          </v-row>
        </form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import Train from '../algorithm/Train'
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
    open(data) {
      this.dialog = true
    },
    closeMe() {
      this.dialog = false
    }
  }
}
</script>

<style></style>

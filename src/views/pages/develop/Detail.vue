<template>
  <v-dialog scrollable fullscreen v-model="dialog" persistent>
    <v-card>
      <v-toolbar flat>
        <v-toolbar-title>Full BackTest</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon @click="closeMe">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-card-text>
        <Train></Train>
      </v-card-text>
      <v-card-actions>
        <v-btn @click="closeMe">cancel</v-btn>
        <v-spacer></v-spacer>
      </v-card-actions>
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
      dialog: false
    }
  },
  methods: {
    closeMe() {
      this.dialog = false
    },
    open() {
      this.dialog = true
    }
  }
}
</script>

<style></style>

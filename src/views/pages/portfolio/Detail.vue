<template>
  <v-dialog scrollable v-model="dialog" max-width="100vh">
    <v-card>
      <v-toolbar flat>View Detail</v-toolbar>
      <v-card-text>
        <form>
          <v-text-field
            v-model="formModel.param1"
            :counter="10"
            label="param1"
            required
          ></v-text-field>
          <v-text-field
            v-model="formModel.param2"
            label="param2"
            required
          ></v-text-field>
          <v-text-field
            v-model="formModel.param3"
            label="param3"
            required
          ></v-text-field>
          <v-text-field
            v-model="formModel.param4"
            label="param4"
            required
          ></v-text-field>
          <v-text-field
            v-model="formModel.param5"
            label="param5"
            required
          ></v-text-field>
        </form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn>submit</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
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
    }
  }
}
</script>

<style></style>

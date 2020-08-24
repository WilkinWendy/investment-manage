<!--  -->
<template>
  <v-card>
    <v-toolbar flat>
      <v-toolbar-title>Exposed Params</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn>Train</v-btn>
    </v-toolbar>

    <v-card-text>
      <v-row>
        <v-col cols="4">
          <v-text-field
            hide-details
            v-model="formModel.param1"
            outlined
            label="param1"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-text-field
            hide-details
            outlined
            v-model="formModel.param2"
            label="param2"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-text-field
            hide-details
            outlined
            placeholder=""
            v-model="formModel.param3"
            label="param3"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-text-field
            hide-details
            outlined
            placeholder=""
            v-model="formModel.param4"
            label="param4"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-text-field
            hide-details
            outlined
            placeholder=""
            v-model="formModel.param5"
            label="param5"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-text-field
            hide-details
            outlined
            placeholder=""
            v-model="formModel.param6"
            label="param6"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-subheader>performance</v-subheader>
        </v-col>
        <v-col cols="12">
          <TrainResult></TrainResult>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import TrainResult from './TrainResult'
export default {
  components: {
    TrainResult
  },
  props: {},

  data() {
    return {
      formModel: {
        param1: '',
        param2: '',
        param3: '',
        param4: '',
        param5: '',
        param6: ''
      }
    }
  },
  computed: {},

  mounted() {},

  methods: {}
}
</script>
<style lang="scss" scoped></style>

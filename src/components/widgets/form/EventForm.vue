<template>
  <v-card>
    <v-app-bar text prominent extended color="primary" dark="">
      <v-toolbar-title class="body-2">Add New Event</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="closeDialog"> <v-icon>close</v-icon> </v-btn>
    </v-app-bar>
    <v-card-text>
      <v-form v-model="valid" ref="form" lazy-validation>
        <v-layout row wrap>
          <v-flex lg12 sm12>
            <v-text-field label="Title" name="title" v-model="title">
            </v-text-field>
          </v-flex>
          <v-flex sm6 lg6>
            <v-menu
              class="pr-2"
              ref="startDate"
              lazy
              :close-on-content-click="false"
              v-model="startDateMenu"
              transition="scale-transition"
              offset-y
              full-width
              :nudge-bottom="-22"
              max-width="290px"
              :return-value.sync="startDate"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  label="Start Date"
                  v-model="startDate"
                  append-icon="event"
                  readonly
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="startDate" no-title scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="startDateMenu = false"
                  >Cancel</v-btn
                >
                <v-btn
                  text
                  color="primary"
                  @click="$refs.startDate.save(startDate)"
                  >OK</v-btn
                >
              </v-date-picker>
            </v-menu>
          </v-flex>
          <v-flex sm6 lg6>
            <v-menu
              ref="startTime"
              lazy
              :close-on-content-click="false"
              v-model="startTimeMenu"
              transition="scale-transition"
              offset-y
              full-width
              :nudge-bottom="-24"
              max-width="290px"
              :return-value.sync="startTime"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  label="Start Time"
                  v-model="startTime"
                  append-icon="access_time"
                  readonly
                  v-on="on"
                ></v-text-field>
              </template>
              <v-time-picker v-model="startTime">
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="startTimeMenu = false"
                  >Cancel</v-btn
                >
                <v-btn
                  text
                  color="primary"
                  @click="$refs.startTime.save(startTime)"
                  >OK</v-btn
                >
              </v-time-picker>
            </v-menu>
          </v-flex>
          <v-flex sm6 lg6>
            <v-menu
              ref="endDate"
              lazy
              class="pr-2"
              :close-on-content-click="false"
              v-model="endDateMenu"
              transition="scale-transition"
              offset-y
              full-width
              :nudge-bottom="-22"
              min-width="290px"
              :return-value.sync="endDate"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  label="End Date"
                  v-model="endDate"
                  append-icon="event"
                  readonly
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="endDate" no-title scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="endDateMenu = false"
                  >Cancel</v-btn
                >
                <v-btn text color="primary" @click="$refs.endDate.save(endDate)"
                  >OK</v-btn
                >
              </v-date-picker>
            </v-menu>
          </v-flex>
          <v-flex sm6 lg6>
            <v-menu
              ref="endTime"
              lazy
              :close-on-content-click="false"
              v-model="endTimeMenu"
              transition="scale-transition"
              offset-y
              full-width
              :nudge-bottom="-24"
              max-width="290px"
              :return-value.sync="endTime"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  label="End Time"
                  v-model="endTime"
                  append-icon="access_time"
                  readonly
                  v-on="on"
                ></v-text-field>
              </template>
              <v-time-picker v-model="endTime">
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="endTimeMenu = false"
                  >Cancel</v-btn
                >
                <v-btn text color="primary" @click="$refs.endTime.save(endTime)"
                  >OK</v-btn
                >
              </v-time-picker>
            </v-menu>
          </v-flex>
          <v-flex lg12 sm12>
            <v-textarea no-resize="1" label="Description"> </v-textarea>
          </v-flex>
          <v-spacer></v-spacer>
        </v-layout>
      </v-form>
    </v-card-text>
    <v-card-actions class="pb-3">
      <v-spacer></v-spacer>
      <v-btn color="primary">Save</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    title: null,
    valid: true,
    startDateMenu: false,
    startDate: null,
    startTimeMenu: false,
    startTime: null,
    endDateMenu: false,
    endDate: null,
    endTimeMenu: false,
    endTime: null,
  }),
  methods: {
    closeDialog() {
      this.$parent.isActive = false
    },
  },
}
</script>

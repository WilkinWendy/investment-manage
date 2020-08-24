<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <!-- <LetterRadioGroup
          style="width:200px;"
          v-model="type"
          :items="items"
          label="I use a scoped slot"
          multiple
          chips
        /> -->

        <v-card>
          <v-toolbar flat>
            <v-text-field
              style="width:400px;flex:none;"
              hide-details
              solo
              append-icon="search"
            ></v-text-field>
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>mdi-plus</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </v-toolbar>
          <v-card-text>
            <linear-statistic
              style="margin-bottom:20px;"
              v-for="(item, index) in trending"
              :key="'trending' + index"
              @click.native="openDetail(item)"
              :title="item.subheading"
              :sub-title="item.caption"
              :icon="item.icon.label"
              :color="item.icon.color"
              :value="item.linear.value"
            />
          </v-card-text>
        </v-card>
      </v-col>

      <!-- <v-col
        cols="12"
        v-for="(item, index) in trending"
        :key="'trending' + index"
      >
      </v-col> -->
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-pagination v-model="page" :length="6"></v-pagination>
      </v-col>
    </v-row>
    <Detail ref="detail"></Detail>
  </v-container>
</template>
<script>
// import LetterRadioGroup from '@/components/widgets/radio/LetterRadioGroup'
import LinearStatistic from '@/components/widgets/statistic/LinearStatistic'
import Detail from './Detail'
export default {
  components: {
    LinearStatistic,
    Detail
    // LetterRadioGroup
  },
  methods: {
    openDetail(item) {
      this.$refs.detail.open(item)
    }
  },
  data() {
    return {
      type: '',
      page: 1,
      items: ['Programming', 'Design', 'Vue', 'Vuetify'],
      search: '',
      trending: [
        {
          subheading: 'algorithm1',
          headline: '2,55',
          caption: 'increase',
          percent: 15,
          icon: {
            label: 'trending_up',
            color: 'success'
          },
          linear: {
            value: 15,
            color: 'success'
          }
        },
        {
          subheading: 'algorithm2',
          headline: '6,553',
          caption: 'increase',
          percent: 10,
          icon: {
            label: 'trending_down',
            color: 'error'
          },
          linear: {
            value: 15,
            color: 'error'
          }
        },
        {
          subheading: 'algorithm3',
          headline: '5,00',
          caption: 'increase',
          percent: 50,
          icon: {
            label: 'arrow_upward',
            color: 'info'
          },
          linear: {
            value: 50,
            color: 'info'
          }
        },
        {
          subheading: 'algorithm4',
          headline: '5,00',
          caption: 'increase',
          percent: 50,
          icon: {
            label: 'arrow_upward',
            color: 'info'
          },
          linear: {
            value: 50,
            color: 'info'
          }
        }
      ]
    }
  }
}
</script>
<style lang="sass" scoped></style>

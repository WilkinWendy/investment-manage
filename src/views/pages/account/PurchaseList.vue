<!--  -->
<template>
  <e-chart
    :path-option="[
      ['dataset.source', locationData],
      ['legend.bottom', '0'],
      [
        'color',
        [
          color.lightBlue.base,
          color.indigo.base,
          color.pink.base,
          color.green.base,
          color.cyan.base,
          color.teal.base
        ]
      ],
      ['xAxis.show', false],
      ['yAxis.show', false],
      ['series[0].type', 'pie'],
      ['series[0].avoidLabelOverlap', true],
      ['series[0].radius', ['50%', '70%']]
    ]"
    height="400px"
    width="100%"
  />
</template>

<script>
import EChart from '@/components/chart/echart'
import API from '@/api'
import Material from 'vuetify/es5/util/colors'
export default {
  props: {},

  data() {
    return {
      color: Material,
      locationData: API.getLocation
    }
  },

  components: {
    EChart
  },

  computed: {},

  mounted() {},

  methods: {}
}
</script>
<style lang="scss" scoped></style>

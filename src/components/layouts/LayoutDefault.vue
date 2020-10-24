<template>
  <v-app id="inspire" class="app dashboard">
    <app-toolbar class="app--toolbar" @side-icon-click="handleDrawerVisiable" />
    <v-main>
      <!-- Page Header -->
      <div class="page-wrapper"><router-view /></div>
      <!-- App Footer -->
      <v-footer height="auto" class="pa-3 app--footer">
        <span>{{ roleTip }}</span>
        <v-spacer />
        <span>QuantFen &copy; {{ new Date().getFullYear() }}</span>
      </v-footer>
    </v-main>
  </v-app>
</template>

<script>
import AppToolbar from '@/components/AppToolbar'
export default {
  name: 'LayoutDefault',
  components: {
    AppToolbar
  },
  data() {
    return {
      showDrawer: true,
      roleTip: ''
    }
  },
  async mounted() {
    const userinfo = await this.$vlf.getItem('userinfo')
    this.roleTip = userinfo.role
  },
  methods: {
    handleDrawerVisiable() {
      this.showDrawer = !this.showDrawer
    }
  },
  created() {}
}
</script>

<style lang="sass" scoped>
.page-wrapper
  min-height: calc(100vh - 112px)
</style>

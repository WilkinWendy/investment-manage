<template>
  <v-card>
    <v-tabs background-color="transparent" color="basil" v-model="tab">
      <v-tab v-if="hasPermission('account-investor')" key="investor">
        investor
      </v-tab>
      <v-tab v-if="hasPermission('account-developer')" key="developer">
        developer
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item v-if="hasPermission('account-investor')" key="investor">
        <v-card flat>
          <InvestorAccount />
        </v-card>
      </v-tab-item>
      <v-tab-item v-if="hasPermission('account-developer')" key="developer">
        <v-card flat>
          <ProviderAccount />
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
import ProviderAccount from './ProviderAccount'
import InvestorAccount from './InvestorAccount'

export default {
  components: {
    InvestorAccount,
    ProviderAccount
  },
  data() {
    return {
      tab: ''
    }
  },
  async mounted() {
    // const userinfo = await this.$vlf.getItem('userinfo')
    // debugger
    // window.aaa = this
    // this.tab = userinfo.role
  },
  methods: {
    handleClick(row) {
      this.formModel = Object.assign(this.formModel, row)
      this.dialog = true
    },
    handleViewItem() {},
    handleEditItem() {},
    handleDeleteItem() {}
  }
}
</script>

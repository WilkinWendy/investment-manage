<template>
  <v-card>
    <v-tabs background-color="transparent" color="basil" v-model="tab">
      <v-tab key="investor">investor</v-tab>
      <v-tab key="provider">provider</v-tab>

      <v-tabs-items v-model="tab">
        <v-tab-item key="investor">
          <v-card flat>
            <InvestorAccount />
          </v-card>
        </v-tab-item>
        <v-tab-item key="provider">
          <v-card flat>
            <ProviderAccount />
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-tabs>
  </v-card>
</template>

<script>
import VWidget from '@/components/VWidget'
import PurchaseList from './PurchaseList'
import ProviderAccount from './ProviderAccount'
import InvestorAccount from './InvestorAccount'
import { Items as Users } from '@/api/user'
export default {
  components: {
    InvestorAccount,
    ProviderAccount
  },
  data() {
    return {
      tab: 'investor'
    }
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

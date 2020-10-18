<template>
  <v-app-bar color="primary" dark app>
    <v-icon large color="blue darken-2">mdi-domain</v-icon>

    <v-tabs>
      <v-tab
        @click="$router.push(item.path)"
        :key="i"
        v-for="(item, i) in computeMenu"
        v-permission="item.meta.permissionKey"
        >{{ item.meta.title }}</v-tab
      >
    </v-tabs>
    <v-spacer />
    <v-toolbar-items>
      <v-btn icon @click="handleFullScreen()">
        <v-icon>fullscreen</v-icon>
      </v-btn>
      <v-menu
        offset-y
        origin="center center"
        class="elelvation-1"
        transition="scale-transition"
      >
        <template v-slot:activator="{ on }">
          <v-btn icon text slot="activator" v-on="on">
            <v-badge color="red" overlap>
              <span slot="badge">3</span>
              <v-icon medium>notifications</v-icon>
            </v-badge>
          </v-btn>
        </template>
        <notification-list></notification-list>
      </v-menu>
      <v-menu offset-y origin="center center" transition="scale-transition">
        <template v-slot:activator="{ on }">
          <v-btn icon large text slot="activator" v-on="on">
            <v-avatar size="30px">
              <img
                :src="require('@/assets/avatar/man_4.jpg')"
                alt="Michael Wang"
              />
            </v-avatar>
          </v-btn>
        </template>
        <v-list class="pa-0">
          <v-list-item
            v-permission="item.permisstionKey"
            v-for="(item, index) in profileMenus"
            :to="!item.href ? { name: item.name } : null"
            :href="item.href"
            @click="item.click"
            ripple="ripple"
            :disabled="item.disabled"
            :target="item.target"
            rel="noopener"
            :key="index"
          >
            <v-list-item-action v-if="item.icon">
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-toolbar-items>
  </v-app-bar>
</template>
<script>
import { protectedRoute as routes } from '@/router/config'
import NotificationList from '@/components/widgets/list/NotificationList'
import { goAccount } from '@/jumper'
import { setRole } from '@/authConfig'
import Util from '@/util'
export default {
  name: 'AppToolbar',
  components: {
    NotificationList
  },
  data() {
    return {
      profileMenus: [
        {
          icon: 'settings',
          href: '#',
          title: 'Account',
          click: this.handleAccounts,
          permisstionKey: 'account'
        },
        {
          icon: 'fullscreen_exit',
          href: '#',
          title: 'Logout',
          click: this.handleLogut,
          permisstionKey: 'logout'
        },
        {
          icon: 'fullscreen_exit',
          href: '#',
          title: 'Login',
          click: this.handleLogin,
          permisstionKey: 'login'
        }
      ]
    }
  },
  computed: {
    toolbarColor() {
      return this.$vuetify.options.extra.mainNav
    },
    computeMenu() {
      return routes[0].children.filter((item) => !item.meta.hidden)
    }
  },
  methods: {
    handleDrawerToggle() {
      this.$emit('side-icon-click')
    },
    handleFullScreen() {
      Util.toggleFullScreen()
    },
    async handleLogut() {
      await setRole('')
      this.$router.push('/auth/login')
    },
    handleLogin() {
      this.$router.push('/auth/login')
    },
    handleAccounts() {
      goAccount()
    }
  },
  created() {}
}
</script>

<style lang="sass" scoped></style>

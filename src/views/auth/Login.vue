<template>
  <v-container class="page-login" fill-height>
    <v-row>
      <v-col>
        <v-card class="pa-3 page-login__card" tile>
          <v-card-title>
            <img
              :src="require('@/assets/m.png')"
              alt="Vue Material Admin"
              width="55"
            />
            <h1 class="primary--text display-1">
              QuantFen
            </h1>
          </v-card-title>
          <v-card-text>
            <v-form
              ref="form"
              class="my-10"
              lazy-validation
              v-model="formValid"
            >
              <v-text-field
                append-icon="person"
                autocomplete="off"
                name="login"
                label="Login"
                placeholder="Username or Email"
                type="text"
                required
                :rules="formRule.username"
                v-model="fromModel.username"
              />
              <v-text-field
                append-icon="lock"
                autocomplete="off"
                name="password"
                label="Password"
                placeholder="Password"
                type="password"
                :rules="formRule.password"
                required
                v-model="fromModel.password"
              />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn
              large
              tile
              color="primary"
              @click="prologin"
              :loading="loading"
            >
              Provider Login
            </v-btn>
            <v-spacer />
            <v-btn
              large
              tile
              color="primary"
              @click="investorlogin"
              :loading="loading"
            >
              Login
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { setRole } from '@/authConfig'

export default {
  name: 'PageLogin',
  data() {
    return {
      loading: false,
      formValid: false,
      fromModel: {
        username: '',
        password: ''
      },
      formRule: {
        username: [(v) => !!v || 'Username is required'],
        password: [(v) => !!v || 'Password is required']
      },
      socialIcons: ['mdi-google', 'mdi-twitter', 'mdi-facebook']
    }
  },
  computed: {
    prefix() {
      return ''
    }
  },
  methods: {
    async prologin() {
      await setRole('provider')
      this.login()
    },
    async investorlogin() {
      await setRole('investor')
      this.login()
    },
    async login() {
      if (this.$refs.form.validate()) {
        this.loading = true
        setTimeout(() => {
          this.$router.push('/')
        }, 1000)
      }
    },
    handleSocialLogin() {}
  }
}
</script>

<style lang="sass" scoped>
.page-login
  &__card
    max-width: 600px
    margin: 0 auto
</style>

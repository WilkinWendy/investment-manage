import Vue from 'vue'
import router from './router/'
import store from './store/'
import './registerServiceWorker'
import './plugins/vuetify'
import './plugins/localforage'
import './theme/default.sass'

import App from './App.vue'
import vuetify from './plugins/vuetify'
import '@mdi/font/css/materialdesignicons.css'
import VueCodemirror from 'vue-codemirror'

import 'codemirror/lib/codemirror.css'

Vue.use(VueCodemirror)

Vue.config.productionTip = false

import { setCurrentUserToGlodal } from '@/authConfig'
setCurrentUserToGlodal()
const app = new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App)
})

app.$mount('#app')

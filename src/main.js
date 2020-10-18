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
import { setCurrentUserToGlodal } from '@/authConfig'
import directivePlugin from '@/plugins/directive'
Vue.use(directivePlugin)
Vue.use(VueCodemirror)

Vue.config.productionTip = false

async function init() {
  await setCurrentUserToGlodal()

  const app = new Vue({
    router,
    store,
    vuetify,
    render: (h) => h(App)
  })

  app.$mount('#app')
}
init()

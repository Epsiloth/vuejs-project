import Vue from 'vue'
import App from './App.vue'

import PortalVue from 'portal-vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'

import Notes from './components/Notes.vue'
import News from './components/News.vue'
import Olympics from './components/Olympics.vue'

Vue.use(VueRouter)

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.use(PortalVue)

Vue.config.productionTip = false

const routes = [
  { path: '/notes', component: Notes },
  { path: '/news', component: News },
  { path: '*', component: Olympics }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
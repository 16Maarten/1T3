import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import './registerServiceWorker'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
// install router
Vue.use(VueRouter)

import RouterTest from './components/RouterTestPage.vue'
import Index from './components/Index.vue'

const RouterTestRoute = { path: '/router', component: RouterTest }
// const NotFoundRoute = { template: '<p>Page not found</p>' }
const IndexRoute = { path: '/', component: Index}


const routes = [
  RouterTestRoute,
  // NotFoundRoute,
  IndexRoute
]

const router = new VueRouter({ routes })

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) },
}).$mount('#app')

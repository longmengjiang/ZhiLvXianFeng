import App from './App'


// #ifndef VUE3
import Vue from 'vue'
import {request} from './util/api.js'
Vue.prototype.request = request
import {request2} from './util/api2.js'
Vue.prototype.request2 = request2

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif
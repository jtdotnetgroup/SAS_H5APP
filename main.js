import Vue from 'vue'
import App from './App'
import store from './store/index.js'
import moment from 'moment'

/* 全局配置 */
Vue.config.productionTip = false


moment.locale('cn')
Vue.prototype.$moment = moment
Vue.prototype.$IP = 'http://192.168.3.8:8096'

App.mpType = 'app'

const app = new Vue({
    ...App, store
})
app.$mount()

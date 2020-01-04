import Vue from 'vue'
import App from './App'
import store from './store/index.js'
import moment from 'moment'

/* 全局配置 */
Vue.config.productionTip = false


moment.locale('cn')
Vue.prototype.$moment = moment
Vue.prototype.$IP = 'http://40.73.75.101:8080'

App.mpType = 'app'

const app = new Vue({
    ...App, store
})
app.$mount()

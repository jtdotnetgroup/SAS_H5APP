import Vue from 'vue'
import App from './App'
import store from './store/index.js'
import moment from 'moment'

/* 全局配置 */
Vue.config.productionTip = false


moment.locale('cn')
Vue.prototype.$moment = moment

App.mpType = 'app'

const app = new Vue({
    ...App, store
})
app.$mount()

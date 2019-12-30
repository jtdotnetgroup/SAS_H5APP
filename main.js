import Vue from 'vue'
import App from './App'
import store from './store/index.js'
import moment from 'moment'

/* 全局配置 */
Vue.config.productionTip = false


moment.locale('cn')
Vue.prototype.$moment = moment
Vue.prototype.$IP = 'http://120.77.40.245:8080/sac'

App.mpType = 'app'

const app = new Vue({
    ...App, store
})
app.$mount()

import Vue from 'vue'
import App from './App'
import store from './store/index.js'
import moment from 'moment'

/* 全局配置 */
Vue.config.productionTip = false

/* 钉钉配置 */
Vue.prototype.$corpId = 'ding2ced2e5420af006835c2f4657eb6378f'	// 企业ID
Vue.prototype.$agentId = '344468113'
Vue.prototype.$url = 'http://120.77.40.245:8691/'

moment.locale('cn')
Vue.prototype.$moment = moment
Vue.prototype.$IP = 'http://120.77.40.245:8080/sac'

App.mpType = 'app'

const app = new Vue({
    ...App, store
})
app.$mount()

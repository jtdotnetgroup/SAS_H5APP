import Vue from 'vue'
import App from './App'
import store from './store/index.js'
import moment from 'moment'

/* 全局配置 */
Vue.config.productionTip = false

/* 钉钉配置 */
// 捷特
// Vue.prototype.$corpId = 'ding2ced2e5420af006835c2f4657eb6378f'	// 企业ID
// Vue.prototype.$agentId = '344468113'
// Vue.prototype.$url = 'http://120.77.40.245:8691/'	

// 索奥斯
Vue.prototype.$corpId = 'dinge122d3ee13ff396f35c2f4657eb6378f'	// 企业ID
Vue.prototype.$agentId = '346116753'
Vue.prototype.$url = 'http://40.73.75.101:8090/'	

moment.locale('cn')
Vue.prototype.$moment = moment
// Vue.prototype.$IP = 'http://120.77.40.245:8080/sac'//捷特
Vue.prototype.$IP = 'http://40.73.75.101:8080'// 索奥斯
// Vue.prototype.$IP = 'http://192.168.3.8:8096'// 

App.mpType = 'app'

const app = new Vue({
    ...App, store
})
app.$mount()

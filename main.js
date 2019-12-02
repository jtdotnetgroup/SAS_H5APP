import Vue from 'vue'
import App from './App'
<<<<<<< Updated upstream

=======
import store from './store/index.js'
import moment from 'moment'
>>>>>>> Stashed changes

Vue.config.productionTip = false

moment.locale('cn')
Vue.prototype.$moment = moment

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

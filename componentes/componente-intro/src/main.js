import Vue from 'vue'
import App from './App.vue'
import Contadores from './Contadores.vue'

Vue.config.productionTip = false
Vue.component('app-contadores', Contadores) // registro global do contador. 

new Vue({
  render: h => h(App),
}).$mount('#app')

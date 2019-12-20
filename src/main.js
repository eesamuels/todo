import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import VueFirestore from 'vue-firestore';

Vue.config.productionTip = false
Vue.use(VueFirestore)

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import vuelidate from './plugins/vuelidate';
import clipboard from './plugins/v-clipboard';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  vuelidate,
  clipboard,
  render: h => h(App)
}).$mount('#app');

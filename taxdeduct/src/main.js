import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import axios from 'axios';
import VueAxios from 'vue-axios';
// import Vuelidate from 'vuelidate';
Vue.use(VueAxios, axios);
Vue.config.productionTip = false;
// Vue.use(Vuelidate)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";
import VueCookies from "vue-cookies";
import './axios'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
import './assets/styles/main.css';

// import Vuelidate from 'vuelidate';
// Vue.use(Vuelidate);

Vue.use(VueCookies);
Vue.use(VueAxios, axios);
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

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
import firebase from 'firebase/app';
import 'firebase/analytics'
// import Vuelidate from 'vuelidate';
// Vue.use(Vuelidate);

Vue.use(VueCookies);
Vue.use(VueAxios, axios);
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyBm_oZ_Y4LilQKrj2XkBbpeV5RlUgnKL5I",
  authDomain: "taxdeduct-2bd59.firebaseapp.com",
  projectId: "taxdeduct-2bd59",
  storageBucket: "taxdeduct-2bd59.appspot.com",
  messagingSenderId: "396868824025",
  appId: "1:396868824025:web:2d5797b88abecceccf07c8",
  measurementId: "G-C6D0SRQGCL"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

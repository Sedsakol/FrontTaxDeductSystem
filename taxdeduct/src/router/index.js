import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Regis from "../views/Regis.vue";
import TaxCalculate from "../views/TaxCalculate.vue";
import TaxDeduct from "../views/TaxDeduct.vue";
import Suggestion from "../views/Suggestion.vue";
import About from "../views/About.vue";
import Profile from "../views/Profile.vue";
import Result from "../views/Result.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/regis",
    name: "Regis",
    component: Regis
  },
  {
    path: "/taxCalculate",
    name: "TaxCalculate",
    component: TaxCalculate
  },
  {
    path: "/taxDeduct",
    name: "TaxDeduct",
    component: TaxDeduct
  },
  {
    path: "/suggestion",
    name: "Suggestion",
    component: Suggestion
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile
  },
  {
    path: "/result",
    name: "Result",
    component: Result
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

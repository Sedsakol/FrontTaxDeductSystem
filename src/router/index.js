import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Regis from "../views/Regis.vue";
import TaxCalculate from "../views/TaxCalculate.vue";
import TaxDeduct from "../views/TaxDeduct.vue";
import Suggestion from "../views/Suggestion.vue";
import Question from "../views/Question.vue";
import Profile from "../views/Profile.vue";
import Result from "../views/Result.vue";
import Term from "../views/Term.vue";
import Policy from "../views/Policy.vue";
import About from "../views/About.vue";
import Howtodelete from "../views/Howtodelete.vue";
import Login2 from "../views/Login2.vue";
import Profile2 from "../views/Profile2.vue";
import Thank from "../views/Thank.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/question",
    name: "Question",
    component: Question
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
  },
  {
    path: "/term",
    name: "Term",
    component: Term
  },
  {
    path: "/policy",
    name: "Policy",
    component: Policy
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/how_to_delete",
    name: "Howtodelete",
    component: Howtodelete
  },
  {
    path: "/collectdata/login",
    name: "Login2",
    component: Login2
  },
  {
    path: "/collectdata/profile",
    name: "Profile2",
    component: Profile2
  },
  {
    path: "/collectdata/thankyou",
    name: "Thank",
    component: Thank
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

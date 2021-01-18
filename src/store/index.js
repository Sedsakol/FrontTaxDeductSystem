import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    profile: {
      email: '1234@12374.com',
      gender: 1, // 1: female, 2: ชาย
      birthdate : 'วัน/เดือน/ปี',
      salary : 0,
      other_income : 0,
      parent_num : 0,
      child_num : 0,
      risk : [],
      marriage : 1, // 1:โสด, 2:สมรส, 3:หย่า
      infirm: 1, // 1: ปกติ , 2: พิการ , 3:ทุพลลภาพ
      facebook_id : null
    },
    tax: {
      salary: 0,
      other_income: 0,
      marital: 1,
      parent_num_dis: 0,
      child_before_2561: 0,
      child_after_2561: 0,
      protege: 0,
    },
    allowance: {
      rmf : 0,
      ssf : 0,
      life_insurance : 0,
      pension_insurance : 0,
      donation : 0,
      edu_donation : 0,
      home_loans : 0,
      provident_fund : 0,
      social_security : 0,
      other : 0,
    },
    result_tax: { 
      allowance_100k : 0,
      other_allowance : 0,
      net_income : 0,
      tax : 0,
      stair: 0
    },
    is_login: false
  },
  mutations: {
    profile_change(state,payload) {
      if (payload.hasOwnProperty('gender')) {
        state.profile.gender = payload.gender
      }
      if (payload.hasOwnProperty('birthdate')) {
        state.profile.birthdate = payload.birthdate
      }
      if (payload.hasOwnProperty('salary')) {
        state.profile.salary = payload.salary
      }
      if (payload.hasOwnProperty('other_income')) {
        state.profile.other_income = payload.other_income
      }
      if (payload.hasOwnProperty('parent_num')) {
        state.profile.parent_num = payload.parent_num
      }
      if (payload.hasOwnProperty('child_num')) {
        state.profile.child_num = payload.child_num
      }
      if (payload.hasOwnProperty('marriage')) {
        state.profile.marriage = payload.marriage
      }
      if (payload.hasOwnProperty('facebook_id')) {
        state.profile.facebook_id = payload.facebook_id
      }
      if (payload.hasOwnProperty('email')) {
        state.profile.email = payload.email
      }
      if (payload.hasOwnProperty('risk')) {
        state.profile.risk = payload.risk
      }
    },
    tax_change(state,payload) {
      state.tax = payload
    },
    allowance_change(state,payload) {
      state.allowance = payload
    },
    result_tax_change(state,payload){
      state.result_tax = payload
    },
    is_login_change(state,payload){
      state.is_login = payload
    }

  },
  actions: {},
  modules: {},
  useEslint: false,
});

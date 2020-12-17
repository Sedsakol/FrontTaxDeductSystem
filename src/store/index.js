import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    profile:[
      {
      email: '1234@12374.com',
      gender: 'ชาย',
      birthdate : 'วัน/เดือน/ปี',
      salary : 'asdasd',
      other_income : 'asdasd',
      parent_num_dis : '0',
      child_num : '0',
      risk : '8',
      facebook_id : 'asdasd'
      }
    ],
    tax:[
      {
        salary: 0,
        other_income: 0,
        marital: 1,
        parent_num_dis: 0,
        child_before_2561: 0,
        child_after_2561: 0,
        protege: 0,
      }
    ],
    allowance:[
      {
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
      }
    ],
    result_tax:[
      { 
        allowance_100k : 0,
        other_allowance : 0,
        net_income : 0,
        tax : 0,
      }
    ],
    is_login: false
  },
  mutations: {
    profile_change(state,payload) {
      state.profile[0].gender = payload.gender
      state.profile[0].birthdate = payload.birthdate
      state.profile[0].salary = payload.salary
      state.profile[0].other_income = payload.other_income
      state.profile[0].parent_num = payload.parent_num
      state.profile[0].child_num = payload.child_num
    },
    tax_change(state,payload) {
      state.tax[0] = payload
    },
    allowance_change(state,payload) {
      state.allowance[0] = payload
    },
    result_tax_change(state,payload){
      state.result_tax[0] = payload
    },
    is_login_change(state,payload){
      state.is_login = payload
    }

  },
  actions: {},
  modules: {},
  useEslint: false,
});

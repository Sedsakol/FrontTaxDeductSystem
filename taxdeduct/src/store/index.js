import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    user:[
      {
      email: '1234@12374.com',
      gender: 'dsd',
      birthdate : 'asdasd',
      salary : 'asdasd',
      other_income : 'asdasd',
      parent_num: '0',
      child_num : '0',
      infirm : 'sdasd',
      risk : '8',
      facebook_id : 'asdasd'
      }
    ]
  },
  mutations: {
    profile_change(state,payload) {
      state.user[0] = payload.user
    }
  },
  actions: {},
  modules: {},
  useEslint: false,
});

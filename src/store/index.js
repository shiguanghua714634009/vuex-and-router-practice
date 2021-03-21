import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    count: 1,
  },
 mutations,
 actions,
 getters,
})
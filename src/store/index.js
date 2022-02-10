import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const credentials=localStorage.getItem("tytrol_keys");
export default new Vuex.Store({
  state: {
    credentials:{
      accessToken:null,
      refreshToken:null,
      idToken:null,
      email:null
    },    
  },

  mutations: {
    SAVE_CREDENTIALS(state,value){
      if(credentials){
        const credentials=localStorage.getItem("tytrol_keys");
        state.credentials.accessToken=credentials.accessToken;
        state.credentials.refreshToken=credentials.refreshToken;
        state.credentials.idToken=credentials.idToken;
        state.credentials.email=credentials.email;
      }else{
        state.credentials.accessToken=value.accessToken;
        state.credentials.refreshToken=value.refreshToken;
        state.credentials.idToken=value.idToken;
        state.credentials.email=value.user.email;
        localStorage.setItem("tytrol_keys",JSON.stringify(state.credentials))
      }
    }
  },

  actions: {
    saveCredentials({commit},value){
      commit("SAVE_CREDENTIALS",value)
    }
  },
  modules: {
  }
})

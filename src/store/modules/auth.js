import Auth from "../../services/Auth";
const state={
    credentials:{
        accessToken:null,
        refreshToken:null,
        idToken:null,
        email:null
    },

}
const getters={

}
const mutations={
    // SAVE_CREDENTIALS:(state,value){
    //     state.credentials.accessToken=value.
    // }
}
const actions={
    saveCredentials({commit},value){
        commit("SAVE_CREDENTIALS",value)
    }
}

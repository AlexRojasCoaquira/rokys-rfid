import axios from "axios"
const URL=`${process.env.VUE_APP_API_URL}`
export default{
    signin(data){
       return axios.post(`${URL}/user/login`,data)
    },
    setAuthHeaders(accessToken,remember){
       
        if (accessToken && !remember) {
            sessionStorage.setItem("app_accessToken", accessToken); //seteamos el token en el sessionstorage
        } 
        axios.defaults.headers.common["Authorization"] = 'Bearer '+accessToken;
    },
} 


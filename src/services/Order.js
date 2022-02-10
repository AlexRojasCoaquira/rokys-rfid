import axios from "axios"
const URL=`${process.env.VUE_APP_API_URL}/pedidos`
export default{
    createOrder(data){  
        return axios.post(`${URL}`,data)
    },
    getOrder(id){
        return axios.get(`${URL}`,{
            params:{
                mesaId:id
            }
        })
    }

}
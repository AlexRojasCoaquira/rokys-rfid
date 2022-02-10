import axios from "axios"
const URL=`${process.env.VUE_APP_API_URL}/mesas`
export default{
    getMesasList(id){
        return axios.get(`${URL}`,{
            params: {
                mozoId:id
            }
        })
    }
}
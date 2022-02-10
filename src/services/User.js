var listUser=[]
import axios from "axios"
const URL=`${process.env.VUE_APP_API_URL}/clientes`
export default{
    getListUser(){
        return [
            {id:1,nombres:'Martin',apellidos:'Vizcarra',dni:'61615143',estado:'active'},
            {id:2,nombres:'Lourdes',apellidos:'Flores',dni:'61455143',estado:'active'},
            {id:3,nombres:'Elon',apellidos:'Musk',dni:'75615143',estado:'active'},
            {id:4,nombres:'Cristian',apellidos:'Cueva',dni:'22215143',estado:'active'},
            {id:5,nombres:'Paolo',apellidos:'Guerrero',dni:'12313122',estado:'active'},
            {id:6,nombres:'Carlos',apellidos:'Zambrano',dni:'99289382',estado:'active'},
            {id:7,nombres:'Andres',apellidos:'Palacios',dni:'1123343',estado:'active'},
            {id:8,nombres:'Frankie',apellidos:'de Jong',dni:'9881543',estado:'active'},
            {id:9,nombres:'Antoine',apellidos:'Griezman',dni:'36775143',estado:'active'},
            {id:10,nombres:'Lionel',apellidos:'Messi',dni:'23365143',estado:'active'},
        ]
    },
    getListClient(data){
        return axios.get(URL,{
            params:data
        })
    },
    assignRFID1(id){
        return axios.patch(`${URL}/assignRFID/${id}`)
    }
}
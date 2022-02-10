import axios from "axios"
const URL=`${process.env.VUE_APP_API_URL}/productos`
var listOptions=[]
export default{
getOptionsSub(idOption){
    switch(idOption){
        case 1:
            listOptions=[
                {id:1,name:'Pollo a la Brasa',price:50},
                {id:2,name:'1/2 Pollo a la Brasa',price:26},
                {id:3,name:'1/4 Pollo a la Brasa',price:14},
                {id:4,name:'1/4 Pollo almuerzo',price:15},
                {id:5,name:'1/4 Pollo a lo pobre',price:8},
            ]
            break;
        case 2:
            listOptions=[
                {id:6,name:'Vino Tinto',price:20},
                {id:7,name:'Vino Blanco',price:30},
                {id:8,name:'Vino Rose',price:35},
                {id:9,name:'Pisco Puro',price:40},
                {id:10,name:'Pisco Acholado',price:32},
                {id:11,name:'Pisco Mosto Verde',price:40},
                {id:12,name:'Champagne',price:29},
            ]            
            break;
        case 3:
            listOptions=[
                {id:13,name:'Lomo Saltado',price:15},
                {id:14,name:'Arroz con Pollo',price:12},
                {id:15,name:'Tallarines Rojos',price:12},
                {id:16,name:'Arroz Chaufa',price:10},
            ]            
            break;
        case 4:
            listOptions=[
                {id:17,name:'Cristal',price:6},
                {id:18,name:'Pilsen',price:7},
                {id:19,name:'Cusqueña',price:8},
                {id:20,name:'Corona',price:9},
                {id:21,name:'Artesanal Calendaria',price:6},
                {id:22,name:'Harboe Beer Gold',price:8},
                {id:23,name:'Artesanal Maddok',price:10},
            ]            
            break;
        case 5:
            listOptions=[
                {id:24,name:'Pollo a la Brasa'},
                {id:25,name:'1/2 Pollo a la Brasa'},
                {id:26,name:'1/4 Pollo a la Brasa'},
                {id:27,name:'1/4 Pollo almuerzo'},
                {id:28,name:'1/4 Pollo a lo pobre'},
            ]            
            break;
        case 6:
            listOptions=[
                {id:29,name:'Pollo a la Brasa'},
                {id:30,name:'1/2 Pollo a la Brasa'},
                {id:31,name:'1/4 Pollo a la Brasa'},
                {id:32,name:'1/4 Pollo almuerzo'},
                {id:33,name:'1/4 Pollo a lo pobre'},
            ]            
            break;
        case 7:
            listOptions=[
                {id:1,name:'Pollo a la Brasa'},
                {id:2,name:'1/2 Pollo a la Brasa'},
                {id:3,name:'1/4 Pollo a la Brasa'},
                {id:4,name:'1/4 Pollo almuerzo'},
                {id:5,name:'1/4 Pollo a lo pobre'},
            ]            
            break;
        case 8:
            listOptions=[
                {id:1,name:'Pollo a la Brasa'},
                {id:2,name:'1/2 Pollo a la Brasa'},
                {id:3,name:'1/4 Pollo a la Brasa'},
                {id:4,name:'1/4 Pollo almuerzo'},
                {id:5,name:'1/4 Pollo a lo pobre'},
            ]            
            break;
    }
    return listOptions;
},
getCategorias(){
    return axios.get(`${URL}/categorias`)
}
}
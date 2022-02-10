<template>
  <div class="page d-flex">
      <v-col md="10" class=" page__content ">
          <p>Módulo de venta rápida</p>
          <div class="d-flex flex-wrap align-center justify-space-around mt-2">
            <div class="ma-2" v-for="(order,index) in orderList" :key="index">
                <table-rokys :item="order"></table-rokys>
            </div>          
          </div>
      </v-col>
      <v-col md="2"  class=" justify-center page__option d-flex flex-wrap align-center">
          <div class="options" v-for="(item,index) in imageList" :key="index">
            <v-tooltip bottom color="#F7971E" light >
              <template v-slot:activator="{ on, attrs }">
                <img :src="require('@/assets/images/'+item.img)" alt=""  v-bind="attrs" v-on="on">
              </template>
              <small>Solicitar {{item.name}}</small>
            </v-tooltip>
          </div>
      </v-col>
      
    
  </div>
</template>

<script>
import TableRokys from "../subcomponents/TableRokys/component"
export default {
name:'home-component',
components:{
    "table-rokys":TableRokys
},
data(){
    return{
        cards: [
        { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12 },
        { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
        { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
        ],
        imageList:[
          {name:'Delivery',img:'delivery.jpg'},
          {name:'Reserva',img:'reserva.jpg'},
          {name:'Recojo en tienda',img:'local.jpg'},
        ],
        orderList:[
          {id:'1',name:'a'},
          {id:'2',name:'a'},
          {id:'3',name:'a'},
          {id:'4',name:'a'},
          {id:'5',name:'a'},
          {id:'6',name:'a'},
          {id:'7',name:'a'},
          {id:'8',name:'a'},
          {id:'9',name:'a'},
        ]
    }
}
}
</script>

<style lang="scss" scoped>
    .page{
        padding: 10px;
        width: 100%;
        height: 100%;
        &__content{
            // width: 100%;
            // height: 10%;            
            p{
                font-size: 1.4em;
                font-weight: 600;
                color: #5f5f5f;
            }
        }
        &__option{
          .options{
            border: 1px solid #CDCDCD;
            border-radius: 2px;
            height: 120px;
            width: 120px;
            &:hover{
            border: 3px solid #5f5f5f;              
            }
            cursor: pointer;
            img{
                height: 100%;
                width: 100%;
                // border-radius: 50%;
            }
          }
            // height: 85%;
            // box-shadow: 1px 3px 8px 0.5px rgba(0, 0, 0, 0.342);
            // border: 1px solid #FFF;
            // border-radius: 4px;
            // background-color: #ffffff;
        }
    }
</style>
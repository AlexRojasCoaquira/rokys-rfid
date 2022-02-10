<template>
  <div class="page">
    <div class="page__head  pl-4 my-2">Primer piso</div>
    <div class="d-flex justify-space-around flex-wrap">
    <div class="table-card ma-2" v-for="(item,index) in tableList" :key="index">
          <v-card elevation="1" class="card">
            <v-img
              src="@/assets/images/mesa.jpg"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.4), rgba(0,0,0,.1)"
              height="105px"
            >
              <v-card-title >{{item.numMesa}}</v-card-title>
            </v-img>
          </v-card>        
    </div>
    </div>
      <div class="page__head pl-4 my-2">Segundo piso</div>
      <div class="d-flex justify-space-around flex-wrap">
    <div class="table-card ma-2" v-for="(item,index) in tableList" :key="index">
          <v-card elevation="1" class="card">
            <v-img
              src="@/assets/images/mesa.jpg"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.4), rgba(0,0,0,.1)"
              height="105px"
            >
              <v-card-title >{{item.numMesa}}</v-card-title>
            </v-img>
          </v-card>        
    </div>
    </div>
    <!-- <div class="ml-6">
    <v-btn color="#20252C" dark tile class="">
      Segundo piso
    </v-btn>
    </div> -->
  </div>
</template>

<script>
import TableRokys from "../subcomponents/TableRokys/component"
export default {
name:"table-component",
components:{
  "table-rokys":TableRokys
},
data() {
  return {
    tableList:[
      {numMesa:"M0001",clienteId:'1'},
      {numMesa:"M0002",clienteId:'21'},
      {numMesa:"M0003",clienteId:'3'},
      {numMesa:"M0004",clienteId:'4'},
      {numMesa:"M0005",clienteId:'5'},
      {numMesa:"M0006",clienteId:'6'},
      {numMesa:"M0007",clienteId:'7'},
      {numMesa:"M0008",clienteId:'1'},
      {numMesa:"M0009",clienteId:'21'},
      {numMesa:"M0010",clienteId:'3'},
      {numMesa:"M0011",clienteId:'4'},
      {numMesa:"M0012",clienteId:'5'},
      {numMesa:"M0001",clienteId:'6'},
      {numMesa:"M0001",clienteId:'7'},
      {numMesa:"M0001",clienteId:'1'},
      {numMesa:"M0001",clienteId:'21'},
      {numMesa:"M0001",clienteId:'3'},
      {numMesa:"M0001",clienteId:'4'},
      {numMesa:"M0001",clienteId:'5'},
      {numMesa:"M0001",clienteId:'6'},
      // {numMesa:"M0001",clienteId:'7'},
    ]
  }
},
}
</script>

<style lang="scss" scoped>
.page{
    height: 100%;
    overflow-y: auto;
    &__head{
    font-size: 1.4em;
    font-weight: 600;
    color: #5f5f5f;
        // font-weight: 600;
    }
    .table-card{

      .card{
        border-radius: 2px;
      }
        width: 220px;
        p{
            font-size: 0.95em;
            font-weight: 600;
        }
    }
}

</style>
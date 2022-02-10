<template>
    <div class="table-card">
          <v-card elevation="1" class="card">
            <v-img
              src="@/assets/images/back.jpg"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="85px"
            >
              <v-card-title >Mesa</v-card-title>
            </v-img>

            <v-card-actions class="d-flex justify-space-between" dense>
            <div class="">
                <div class="d-flex align-center">
                    <v-icon color="green" class="mr-2">stop_circle</v-icon>
                    <p>Disponible</p>     
                </div>
            </div>
            <div class="">
              <v-btn icon dense @click.prevent="showDetailOrder()">
                <v-icon>list_alt</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>playlist_add</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>credit_card</v-icon>
              </v-btn>
            </div>
            </v-card-actions>
          </v-card>        
    </div>
</template>

<script>
export default {
name:'table-rokys',
props:{
  item:{
    default:{},
    type:Object
  }
},
data() {
    return {
        
    }
},
methods:{
   showDetailOrder(){
     this.$router.push('order')
   }   
}
}
</script>

<style lang="scss" scoped>
    .table-card{
      .card{
        border-radius: 2px;
      }
        width: 250px;
        p{
            font-size: 0.95em;
            font-weight: 600;
        }
    }
    .v-icon{
        font-size: 18px !important;
    }
</style>
<template>
  <div class="dashboard ">
    <v-container fluid class="dashboard__nav  py-0 px-5">
      <img src="@/assets/images/logo-covid.svg" alt="">
      <div class="d-flex align-center">
       <p class="mr-3">Cerrar sesión</p> 
      <v-icon color="#FFFFFF">logout</v-icon>
      </div>
    </v-container>
    <v-container fluid class="pa-0 d-flex">
      <v-col md="2" class="dashboard__menu">
        <menuComponent></menuComponent>
      </v-col>
      <v-col md="10"  class="dashboard__content">
        <slot></slot>
      </v-col>
    </v-container>
  </div>
</template>

<script>
import menuComponent from "../components/subcomponents/MenuList/component"
export default {
  components:{
    menuComponent
  },
  data() {
    return {
          drawer: true,
          items: [
            { title: 'Home', icon: 'mdi-home-city' },
            { title: 'My Account', icon: 'mdi-account' },
            { title: 'Users', icon: 'mdi-account-group-outline' },
          ],
          mini: true,
    }
  },
  methods:{
    name(){
      console.log(window.location)
      // console.log(window.location.host)
      // console.log(window.location.host)
      // console.log(window.location.host)
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard{
  height: 100vh;
  width: 100%;
  &__nav{
    width: 100%;
    height: 12vh;
    background-color: #20252C;
    border-bottom: 2px solid #000;
    display: flex;
    justify-content: space-between;
    p{
      font-size: 1.1em;

      font-weight: 600;
      color: #ffffff;
    }
    img{
      height: 70px;
      width: 70px;
    }
  }
  &__menu{
        background-color: #ffffff;
        border: 1px solid #CDCDCD;
        height: 88vh;
        width: 18%;
  }
  &__content{
    width: 100%;
    height: 88vh;
    // background-color: #F2F2F2;
    // background-color: #8f1d1d;
  }
}
</style>
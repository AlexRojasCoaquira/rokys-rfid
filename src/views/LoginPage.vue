<template>
  <div class="login">
      <div class="login__content py-6">
          <img src="@/assets/images/logo-covid.svg" alt="logo__rokys">
        <p class="title">
            Bienvenidos a Rokys
        </p>
        <Login></Login>
      </div>
  </div>
</template>

<script>
import Login from "../components/Auth/Signin"
export default {
name:'login',
components:{
    Login
}
}
</script>

<style lang="scss" scoped>
.login{
    height: 100vh;
    width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
//   background-content:center;
    // background-attachment: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Helvetica' ,'serif';
    background-image: url('../assets/images/back3.jpg');
    &__content{
        background-color: #ffffff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 60vh;
        box-shadow: 1px 3px 8px 1px rgba(0, 0, 0, 0.342);
        width: 450px;
        border: 1px solid #CDCDCD;
        border-radius: 10px;
        .title{
            font-size: 1.7em !important;
            font-weight: bold;
        }
        .code{
            width: 320px;
        }
        img{
            width: 200px;
        }
    }
}
</style>
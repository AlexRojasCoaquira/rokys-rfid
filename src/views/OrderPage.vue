<template>
      <dashboard>
          <OrderComponent></OrderComponent>
      </dashboard>
</template>

<script>
import dashboard from "../layouts/dashboard"
import OrderComponent from "../components/OrderComponent/component"
export default {
name:'home-page',
components:{
    dashboard,
    OrderComponent
}
}
</script>

<style>

</style>
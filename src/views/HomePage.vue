<template>
      <dashboard>
          <HomeComponent></HomeComponent>
      </dashboard>
</template>

<script>
import dashboard from "../layouts/dashboard"
import HomeComponent from "../components/HomeComponent/component"
export default {
name:'home-page',
components:{
    dashboard,
    HomeComponent
}
}
</script>

<style>

</style>
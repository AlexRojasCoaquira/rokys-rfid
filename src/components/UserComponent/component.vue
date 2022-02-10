<template src="./template.html"></template>
<style src="./style.scss" scoped lang="scss"></style>
<script>
import User from "@/services/User"

export default {
name:"user-component",
async created(){
  try {
    let res = await User.getListClient()
    this.userList=res.data
    console.log(this.userList)

  } catch (error) {
    console.log(error)
  }
},
data() {
  return {
    userList:[
      // {id:'U0001',firstname:'Maria Angelica',lastname:'Villanueva Gutierrez', email:'mariavg142@gmail.com',address:'Av.Paseo Colón Crda.1002'},
      // {id:'U0001',firstname:'Maria Angelica',lastname:'Villanueva Gutierrez', email:'mariavg142@gmail.com',address:'Av.Paseo Colón Crda.1002'},
      // {id:'U0001',firstname:'Maria Angelica',lastname:'Villanueva Gutierrez', email:'mariavg142@gmail.com',address:'Av.Paseo Colón Crda.1002'},
      // {id:'U0001',firstname:'Maria Angelica',lastname:'Villanueva Gutierrez', email:'mariavg142@gmail.com',address:'Av.Paseo Colón Crda.1002'},
      // {id:'U0001',firstname:'Maria Angelica',lastname:'Villanueva Gutierrez', email:'mariavg142@gmail.com',address:'Av.Paseo Colón Crda.1002'},
      // {id:'U0001',firstname:'Maria Angelica',lastname:'Villanueva Gutierrez', email:'mariavg142@gmail.com',address:'Av.Paseo Colón Crda.1002'},
      // {id:'U0001',firstname:'Maria Angelica',lastname:'Villanueva Gutierrez', email:'mariavg142@gmail.com',address:'Av.Paseo Colón Crda.1002'},
      // {id:'U0001',firstname:'Maria Angelica',lastname:'Villanueva Gutierrez', email:'mariavg142@gmail.com',address:'Av.Paseo Colón Crda.1002'},
      // {id:'U0001',firstname:'Maria Angelica',lastname:'Villanueva Gutierrez', email:'mariavg142@gmail.com',address:'Av.Paseo Colón Crda.1002'},
    ]
  }
},
}
</script>


<template src="./template.html"></template>
<style src="./style.scss" scoped lang="scss"></style>
<script>
import User from "@/services/User"
export default {
name:'assign-modal',
data(){
    return{
        dialog:false,
        dni:'',
        userList:[]
    }
},
async created(){
        let option={
            query:this.dni?this.dni:''
        }
        let res=await User.getListClient(option)
        this.userList=res.data
},
methods:{
    async open(){
        // let option={
        //     query:this.dni?this.dni:''
        // }
        // let res=await User.getListClient(option)
        // this.userList=res.data
        console.log("lista clientes",this.userList)
        this.dialog=true;
    },
    async submit(){
        try {
            this.dialog=false;            
        } catch (error) {
            console.log(error)
        }
    },
    async filter(){
        try {
        let option={
            query:this.dni?this.dni:''
        }
        let res=await User.getListClient(option)
        this.userList=res.data            
        } catch (error) {
            console.log(error)
        }
        // const result =this.userList.filter(e=>e==val)
    },
    async assignRFID(id){
        try {
             await User.assignRFID1(id)
            let option={
                query:this.dni?this.dni:''
            }
            let res=await User.getListClient(option)
            this.userList=res.data                 
        } catch (error) {
            console.log(error)
        }
        // this.userList[index].estado='eating'
        // this.$emit('nombre',item.nombres+' '+item.apellidos)
        // localStorage.setItem('nombrerfid',item.nombres+' '+item.apellidos)
    }
}
}
</script>
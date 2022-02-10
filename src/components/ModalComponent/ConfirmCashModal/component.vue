<template src="./template.html"></template>
<style src="./style.scss" scoped lang="scss"></style>
<script>
import {  mapActions } from "vuex";
import Pedido from "@/services/Order"
export default {
name:"confirm-modal",
props:{
    title:String,
    warning:String,
    action:String,
    type:String,
    order:Object
},
data(){
    return{
        dialog:false,
        loading:false,
        id:null,
    
    }
},
methods:{
    ...mapActions(["displaySnackbar"]),
    async open(item){
        this.dialog=true;
    },
    async submit(){
        try {            
            this.dialog=false;  
            this.loading=true;           
            if(this.type==='save-changes'){
                let snackbar = {
                    color: "#00833e",
                    message: "El pedido se ha enviado a caja."
                };
                this.displaySnackbar(snackbar);   
                this.$router.push({name:'home'})
                await Pedido.createOrder(this.order)
                console.log("orden enviada",this.order)
            }
            this.loading=false;   
        } catch (error) {
            console.log(error)
        }
        this.loading=false;
    },
    cancel(){
        this.dialog=false;
    }
}
}
</script>


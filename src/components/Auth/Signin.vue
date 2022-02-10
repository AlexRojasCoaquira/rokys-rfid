<template>
    <div class="">
        <form @submit.prevent="signin" class="text-center">
            <v-text-field
            v-model="form.email"
            type="email"
            class="mt-3 "
            outlined
            dense
            hide-details
            color="#008C49"
            max-length="4"
            >
            </v-text-field>
            <v-text-field
            v-model="form.password"
            type="text"
            class="mt-3 "
            outlined
            dense
            hide-details
            color="#008C49"
            max-length="4"
            >
            </v-text-field>
            <v-btn type="submit" color="#FFFFFF" class="red  mt-2">INGRESAR</v-btn>
        </form>
    </div>  
</template>

<script>
import Auth from "@/services/Auth"
import {mapActions} from "vuex"
const defaultForm ={
  password:'AS90hy67$',
  email:"franklinra1999@gmail.com",
  companyId:1
}
export default {
data(){
    return{
        form:{...defaultForm}
    }
},
methods:{
    ...mapActions(['saveCredentials']),
    async signin(){
        try {
            let res = await Auth.signin(this.form);
            console.log(res)
            this.saveCredentials(res.data)
            
        } catch (error) {
            
        }
    }
}
}
</script>

<style>

</style>
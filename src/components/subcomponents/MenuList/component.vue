<template src="./template.html"></template>
<style src="./style.scss" lang="scss" scoped></style>
<script>
export default {
name:'sub-menu-list',
data() {
    return {
        menuList:[
            {label:'Principal',icon:'home',name:'home'},
            {label:'Clientes Rokys',icon:'group',name:'user'},
            {label:'Ver Mesas',icon:'visibility',name:'user'},
            {label:'Registrar Clientes',icon:'person_add',name:'user'},
            // {label:'Registrar Clientes',icon:'person_add',name:'user'},

        ]
    }
},
methods:{
    resolveRouter(path){
        if(this.$route.path !==('/'+path+'s')) this.$router.push({name:path})
    }    
}
}
</script>


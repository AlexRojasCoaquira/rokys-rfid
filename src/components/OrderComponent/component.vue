<template src="./template.html"></template>
<style src="./style.scss" scoped lang="scss"></style>
<script>
import AddProduct from "../ModalComponent/AddProductModal/component"
export default {
    name:'order-component',
    components:{
      "add-modal":AddProduct
    },
    data() {
      return {
        orderList:[
          {code:'P001',name:'Pollo a la brasa',price:'55.00',quantity:2},
          {code:'P012',name:'Pollo a la brasa',price:'55.00',quantity:2},
          {code:'P011',name:'Pollo a la brasa',price:'55.00',quantity:2},
          {code:'P003',name:'Pollo a la brasa',price:'55.00',quantity:2},
        ]
      }
    },
    methods:{
      AddProductOrder(){
        this.$refs.addProductModal.open()
      }
    }
}
</script>
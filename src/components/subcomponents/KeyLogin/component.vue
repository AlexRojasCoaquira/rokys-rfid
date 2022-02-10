<template>
  <div class="keylogin">
      <div class="keylogin__key">
          <div class="key-number style-button" v-for="(item,index) in keyList" :key="index" @click="$emit('value',item)">
           {{item}}
          </div>
      </div>
      <div class="keylogin__action">
          <div class="key-back style-button">
             C
          </div>
          <div class="key-enter style-button" @click="$emit('signin')">
             OK 
          </div>
          <div class="key-cancel style-button">
             Cancelar
          </div>
      </div>
  </div>
</template>

<script>
export default {
data() {
    return {
        keyList: ['1','2','3','4','5','6','7','8','9','00','0','000']
    }
},
}
</script>

<style lang="scss">
    .keylogin{
        // height: 280px;
        width: 320px;
        display: flex;
        background-color: #ffffff;

        &__key{
            // height: 50px;
            text-align: center;
            // width: 300px;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            // border: 1px solid #000;
            .key-number{              
                height: 50px;
                width: 70px;                
                margin: 0px 5px 5px 0px;              
            }

        }
        &__action{
            .key-back{                
                height: 50px;
                width: 95px;
                margin-bottom: 5px;                
            }
            .key-enter{                
                height: 105px;
                width: 95px; 
                margin-bottom: 5px;                
            }
            .key-cancel{

                height: 50px;
                width: 95px; 
                margin-bottom: 5px;                
            }
        }
        .style-button{
                display: flex;
                justify-content: center;
                align-items: center;                   
                border: 1px solid #CDCDCD; 
                border-radius: 5px;
                box-shadow: 3px 3px 5px -1px rgba(0,0,0,0.44);
                cursor:pointer;
                &:hover{
                    background-color: #b9b5b5;
                    color: #000;
                }
                // &:focus{
                // border: 1px solid #000;                     
                // }
        }
    }
</style>
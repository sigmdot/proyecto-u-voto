<template>
  <div class="listamisvotaciones container-fluid px-0">
    
      <div class="is-hidden-mobile">
        <HeaderLista></HeaderLista>
        <div class="row m-0">
          
        </div>
      </div>
    
  </div>
</template>

<script>
import HeaderLista from './HeaderLista.vue'
export default {
    name:'ListaMisVotaciones',
    components:{
      HeaderLista
    },
    data:function(){
        return{

        }
    }
}
</script>

<style>

</style>
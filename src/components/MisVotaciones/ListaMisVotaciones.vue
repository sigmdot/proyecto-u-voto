<template>
  <div class="listamisvotaciones container-fluid px-0">
    
      <div class="is-hidden-mobile">
        <HeaderLista></HeaderLista>
        <div class="row m-0">
          <VotacionItemPC></VotacionItemPC>
          <VotacionItemPC></VotacionItemPC>
          <VotacionItemPC></VotacionItemPC>
          <VotacionItemPC></VotacionItemPC>
          <VotacionItemPC></VotacionItemPC>
          <VotacionItemPC></VotacionItemPC>
          <VotacionItemPC></VotacionItemPC>
        </div>
      </div>
    
  </div>
</template>

<script>
import HeaderLista from './HeaderLista.vue'
import VotacionItemPC from './VotacionItemPC.vue'

export default {
    name:'ListaMisVotaciones',
    components:{
      HeaderLista,
      VotacionItemPC
    },
    data:function(){
        return{

        }
    }
}
</script>

<style>

</style>
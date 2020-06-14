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
      <div class="is-hidden-pc">
          <h4>Votaciones</h4>
          <div class="row m-0">
            <VotacionItemMobile></VotacionItemMobile>
            <VotacionItemMobile></VotacionItemMobile>
            <VotacionItemMobile></VotacionItemMobile>
            <VotacionItemMobile></VotacionItemMobile>

          </div>
        </div>
    
  </div>
</template>

<script>
import HeaderLista from './HeaderLista.vue'
import VotacionItemPC from './VotacionItemPC.vue'
import VotacionItemMobile from './VotacionItemMb.vue'

export default {
    name:'ListaMisVotaciones',
    components:{
      HeaderLista,
      VotacionItemPC,
      VotacionItemMobile
    },
    data:function(){
        return{

        }
    }
}
</script>

<style>

</style>
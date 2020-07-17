<template>
  <div class="listamisvotaciones container-fluid px-0">
    
      <div class="is-hidden-mobile">
        <HeaderLista></HeaderLista>
        <div class="row m-0 mt-3">
          <VotacionItemPC v-for="(votacion, index) in votacionesAMostrar" :key="index" :votacion="votacion" :mostrarBotonEliminar="votaciones.id_usuario === votacion.id_usuario_creador ? true : false" @cambiarVotaciones="cambiarListaVotaciones" />
          <div class="alert alert-warning"  style="margin: 0 auto" v-if="!votacionesAMostrar.length"> No hay votaciones </div>
        </div>
      </div>
      <div class="is-hidden-pc">
          <h4>Votaciones</h4>
          <div class="row m-0">
            <VotacionItemMobile v-for="(votacion, index) in votacionesAMostrar" :key="index" :votacion="votacion" :mostrarBotonEliminar="votaciones.id_usuario === votacion.id_usuario_creador ? true : false" />
            <div class="alert alert-warning"  style="margin: 0 auto" v-if="!votacionesAMostrar.length"> No hay votaciones </div>
            
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
  props:['votaciones'],
  data:function(){
      return{
        votacionesAMostrar : this.votaciones.votaciones_creadas
      }
  },
  methods: {
    cambiarListaVotaciones(value){
      if(value == 1){
        this.votacionesAMostrar = this.votaciones.votaciones_creadas
      }
      else{
        this.votacionesAMostrar = this.votaciones.votaciones_participe
      }
    }
  },
  mounted(){
    
  }
}
</script>

<style>

</style>
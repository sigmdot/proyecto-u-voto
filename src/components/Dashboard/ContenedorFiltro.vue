<template>
  <div class="col-12 p-2 row m-0 border contenedor">
        <TarjetaVotacionUltima></TarjetaVotacionUltima>
        <TarjetaVotacionUltima></TarjetaVotacionUltima>
        <TarjetaVotacionUltima></TarjetaVotacionUltima>
  </div>
</template>

<script>
import TarjetaVotacionUltima from '@/components/Dashboard/TarjetaVotacionUltima.vue'
export default {
    name:'ContenedorFiltro',
    components:{
        TarjetaVotacionUltima
    }
}
</script>

<style>

</style>
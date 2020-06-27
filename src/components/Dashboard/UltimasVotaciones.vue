<template>
  <div class="ultimasvotaciones container-fluid px-0">
    <h3>Mis ultimos resultados</h3>
    <hr />
    <div class="row m-0 justify-content-between border">
      <BotonesFiltroContenedor></BotonesFiltroContenedor>
      <ContenedorFiltro></ContenedorFiltro>
    </div>
  </div>
</template>

<script>
import BotonesFiltroContenedor from '@/components/Dashboard/BotonesFiltroContenedor.vue'
import ContenedorFiltro from '@/components/Dashboard/ContenedorFiltro.vue'

export default {
  name: "UltimasVotaciones",
  components: {
    BotonesFiltroContenedor,
    ContenedorFiltro
  },
  data: function() {
    return {
      
    };
  }
};
</script>

<style>
</style>
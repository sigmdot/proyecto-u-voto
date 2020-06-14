<template>
  <div class="ultimasvotaciones container-fluid px-0">
    <h3>Mis ultimos resultados</h3>
    <hr />
    <div class="row m-0 justify-content-between">
      <UltimosResultados></UltimosResultados>
      <UltimosResultados></UltimosResultados>
    </div>
  </div>
</template>

<script>
import UltimosResultados from "./UltimosResultados.vue";
export default {
  name: "UltimasVotaciones",
  components: {
    UltimosResultados
  },
  data: function() {
    return {};
  }
};
</script>

<style>
</style>
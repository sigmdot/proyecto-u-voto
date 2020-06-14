<template>
  <div class="ultimosresultados col-12 col-sm-12 col-md-5 col-lg-3 border row p-0 m-0 mb-1 shadow">
    <div class="col-12 border-bottom text-center">
      <h4> {{nombreVotacion}} </h4>
    </div>
    <div class="col-12 row m-0">
      <div class="col-6 border-right px-0 py-2 text-center">
        <h5>SÍ</h5>
      </div>
      <div class="col-6 px-0 py-2 text-center">{{cantidadVotos}} VOTOS</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UltimosResultados",
  components: {},
  data: function() {
    return {
      nombreVotacion:'Nombre votación',
      cantidadVotos:100000
    };
  }
};
</script>

<style>
</style>
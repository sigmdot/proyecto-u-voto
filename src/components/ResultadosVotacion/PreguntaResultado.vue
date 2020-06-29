<template>
  <div class="preguntaresultado col-12 p-0 row my-2 border bg-light">
      <h5 class="col-12 p-3 text-center">Nombre pregunta</h5>
      <div class="col-12 p-3">
          <BarGraph></BarGraph>
      </div>
      <div class="col-12 p-3 bg-success border text-center text-white">
          <h5>Ganador : Diciembre</h5>
      </div>
  </div>
</template>

<script>
import BarGraph from '@/components/Dashboard/BarGraph.vue'

export default {
 name:'PreguntaResultado',
 components:{
      BarGraph
 }
}
</script>

<style>

</style>
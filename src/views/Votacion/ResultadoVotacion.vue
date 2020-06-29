<template>
  <div class="resultadovotacion container">
      <div class="row m-0">
          <div class="col-12 p-0">
              <h3 class="text-center">Nombre votación</h3>
          </div>
          <PreguntaResultado></PreguntaResultado>
          <PreguntaResultado></PreguntaResultado>

      </div>
  </div>
</template>

<script>
import PreguntaResultado from '@/components/ResultadosVotacion/PreguntaResultado.vue'

export default {
    name:'ResultadoVotacion',
    components:{
       PreguntaResultado
    }
}
</script>

<style>

</style>
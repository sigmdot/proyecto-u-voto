<template>
  <div class="botonesfiltro row m-0 col-12 p-0 border">
    <!-- Inicio componentes botones para tipo votacion -->
    <b-form-group class="w-100 h-100 mb-0">
      <b-form-radio-group
        id="btn-radios-1"
        v-model="selected"
        :options="options"
        buttons
        button-variant="outline-primary"
        name="radios-btn-default"
        class="w-100 h-100"
      ></b-form-radio-group>
    </b-form-group>
  </div>
  <!-- Fin componentes botones para tipo votacion -->
</template>

<script>
export default {
  name : 'BotonesFiltroContenedor',
  data: function() {
    return {
      selected: "propias",
      options: [
        { text: "Propias", value: "propias" },
        { text: "Participe", value: "participe" }
      ]
    };
  }
};
</script>

<style>
</style>
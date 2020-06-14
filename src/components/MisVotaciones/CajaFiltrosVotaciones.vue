<template>
  <div class="cajafiltrovotaciones row m-0">
    <div class="col-12 p-0 ">
      <!-- Votaciones: propias, no propias | Periodo : Ultima semana, Ultimo Mes , Ultimo año | Fecha : 24 de Junio | Estado : Finalizado , Validando , Activa -->
      <form class="form-inline">
        <label class="mr-1 "  for="inlineFormInputName2">Tipo de votacion:</label>
        <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
          <option selected>Elige...</option>
          <option value="1">Propia</option>
          <option value="2">Participe</option>
        </select>

        <label class="mr-1"  for="inlineFormInputGroupUsername2">Periodo:</label>
        <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
          <option selected>Elige...</option>
          <option value="1">Hace una semana</option>
          <option value="2">Hace un mes</option>
          <option value="2">Hace un año</option>
        </select>


        <label class="mr-1"  for="inlineFormInputGroupUsername2">Fecha de Inicio:</label>
        <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
          <option selected>Elige...</option>
          <option value="1">19 de Enero</option>
          <option value="2">25 de Mayo</option>
          <option value="2">22 de Junio</option>
        </select>

        <label class="mr-1"  for="inlineFormInputName2">Estado de votacion:</label>
        <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
          <option selected>Elige...</option>
          <option value="1">Activa</option>
          <option value="2">Finalizada</option>
          <option value="2">Validando</option>

        </select>
        

        <!-- <button type="submit" class="btn btn-primary mb-2">Submit</button> -->
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "CajasFiltrosVotaciones",
  components: {},
  data: function() {
    return {};
  }
};
</script>

<style>
</style>
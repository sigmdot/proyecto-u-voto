<template>
  <form class="formularioregistro">
    <div class="form-group">
      <label for="Nombreyapellido">Nombres:</label>
      <input type="text" class="form-control" id="Nombreyapellido" aria-describedby="Nombreyapellido" />
    </div>
    <div class="form-group">
      <label for="Nombreyapellido">Apellidos:</label>
      <input type="text" class="form-control" id="Nombreyapellido" aria-describedby="Nombreyapellido" />
    </div>
    <div class="form-group">
      <label for="Email">Correo electronico:</label>
      <input type="email" class="form-control" id="Email" aria-describedby="Nombreyapellido" />
    </div>
    <div class="form-group">
      <label for="Email">Re-ingresar correo electronico:</label>
      <input type="email" class="form-control" id="Email" aria-describedby="Nombreyapellido" />
    </div>
    <div class="form-group">
      <label for="password">Contraseña:</label>
      <input type="password" class="form-control" id="password" />
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Re-ingresar contraseña:</label>
      <input type="password" class="form-control" id="exampleInputPassword1" />
    </div>
    <div class="form-group">
      <label for="Rut">RUT:</label>
      <input type="text" class="form-control" id="Rut" aria-describedby="Nombreyapellido" />
    </div>
    <button type="submit" class="btn btn-primary">¡Registrarme!</button>
  </form>
</template>

<script>
export default {
    name:'FormularioRegistro'
};
</script>

<style>
</style>
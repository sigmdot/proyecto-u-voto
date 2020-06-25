<template>
  <form>
    <div class="form-group">
      <label for="email">Correo electronico:</label>
      <input type="email" class="form-control" id="email" aria-describedby="email" />
    </div>
    <div class="form-group">
      <label for="password">Contraseña:</label>
      <input type="password" class="form-control" id="password" />
    </div>
    <div class="form-group form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1" />
      <label class="form-check-label" for="exampleCheck1">Recuerdáme!</label>
    </div>
    <button type="submit" class="btn btn-primary">Entrar</button>
  </form>
</template>

<script>
export default {
    name:'LoginFormulario'
};
</script>

<style>
</style>
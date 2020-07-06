<template>
  <form @submit="checkForm">
    <div class="form-group">
      <label for="email">Correo electronico:</label>
      <input type="email" class="form-control" id="email" aria-describedby="email" v-model="correo" />
      {{correo}}
    </div>
    <div class="form-group">
      <label for="password">Contraseña:</label>
      <input type="password" class="form-control" id="password" v-model="pass" />
      
    </div>
    <!-- <div class="form-group form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1" />
      <label class="form-check-label" for="exampleCheck1">Recuerdáme!</label>
    </div>-->

    <button type="submit" class="btn btn-primary">Entrar</button>
    <div v-if="errorCredenciales" class="alert alert-danger mt-4 py-4"> 
          {{mensajeError}}
        </div>
  </form>
</template>

<script>
export default {
  name: "LoginFormulario",
  data: function() {
    return {
      correo: null,
      pass: null,
      errorCredenciales: false,
      mensajeError: ''
    };
  },
  methods: {
    checkForm:function(e) {
      e.preventDefault();
      const h = this.$createElement;
      const vNodesTitle = h(
        "div",
        { class: ["d-flex", "flex-grow-1", "align-items-baseline", "mr-2"] },
        [h("strong", { class: "mr-2" }, "Atención")]
      );

      if (this.correo && this.pass) {

        this.$store.dispatch('login',{
          mail: this.correo,
          contrasena: this.pass
        }).
          then(() =>{
            this.$router.push('/')
            this.errorCredenciales = false
          }).
          catch(err =>{
            this.errorCredenciales = true
            this.mensajeError = err.response.data.msg
          })

        return true;
      }
      if (!this.correo) {
        const vNodesMsg = h("p", { class: ["text-center", "mb-0"] }, [
          h("strong"),
          ` El correo es necesario `
        ]);
        this.$bvToast.toast([vNodesMsg], {
          title: [vNodesTitle],
          solid: true,
          variant: "warning"
        });
      }
      if(!this.pass){
        const vNodesMsg = h("p", { class: ["text-center", "mb-0"] }, [
          h("strong"),
          `La contraseña es obligatoria `
        ]);
        this.$bvToast.toast([vNodesMsg], {
          title: [vNodesTitle],
          solid: true,
          variant: "warning"
        });
      }
      
    }
  }
};
</script>

<style>
</style>
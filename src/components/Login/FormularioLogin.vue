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
      {{pass}}
    </div>
    <!-- <div class="form-group form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1" />
      <label class="form-check-label" for="exampleCheck1">Recuerdáme!</label>
    </div>-->
    <button type="submit" class="btn btn-primary">Entrar</button>
  </form>
</template>

<script>
export default {
  name: "LoginFormulario",
  data: function() {
    return {
      correo: null,
      pass: null
    };
  },
  methods: {
    checkForm:function(e) {
      const h = this.$createElement;
      const vNodesTitle = h(
        "div",
        { class: ["d-flex", "flex-grow-1", "align-items-baseline", "mr-2"] },
        [h("strong", { class: "mr-2" }, "Atención")]
      );

      if (this.correo && this.pass) {
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
      e.preventDefault();
    }
  }
};
</script>

<style>
</style>
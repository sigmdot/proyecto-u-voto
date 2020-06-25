<template>
  <form class="formularioregistro" @submit="checkForm">
    <div class="form-group">
      <label for="Nombreyapellido">Nombres:</label>
      <input
        type="text"
        class="form-control"
        id="Nombreyapellido"
        aria-describedby="Nombreyapellido"
        v-model="nombres"
      />
    </div>
    <div class="form-group">
      <label for="Nombreyapellido">Apellidos:</label>
      <input
        type="text"
        class="form-control"
        id="Nombreyapellido"
        aria-describedby="Nombreyapellido"
        v-model="apellidos"
      />
    </div>
    <div class="form-group">
      <label for="Email">Correo electronico:</label>
      <input
        type="email"
        class="form-control"
        id="Email"
        aria-describedby="Nombreyapellido"
        v-model="correo"
      />
    </div>
    <div class="form-group">
      <label for="Email">Re-ingresar correo electronico:</label>
      <input
        type="email"
        class="form-control"
        id="Email"
        aria-describedby="Nombreyapellido"
        v-model="valicorreo"
      />
    </div>
    <div class="form-group">
      <label for="password">Contraseña:</label>
      <input type="password" class="form-control" id="password" v-model="pass" />
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Re-ingresar contraseña:</label>
      <input type="password" class="form-control" id="exampleInputPassword1" v-model="validapass" />
    </div>
    <div class="form-group">
      <label for="Rut">RUT:</label>
      <input type="text" class="form-control" id="Rut" aria-describedby="rut" v-model="rut" />
      <small class="text-info">Ejemplo = 12345678-9</small>
      {{rut}}
    </div>
    <button type="submit" class="btn btn-primary">¡Registrarme!</button>
  </form>
</template>

<script>
export default {
  name: "FormularioRegistro",
  data: function() {
    return {
      errors: [],
      nombres: null,
      apellidos: null,
      correo: null,
      valicorreo: null,
      boolcorreo: false,
      boolpass: false,
      pass: null,
      validapass: null,
      rut: null
    };
  },
  methods: {
    checkForm: function(e) {
      
      const h = this.$createElement;
      const vNodesTitle = h(
        "div",
        { class: ["d-flex", "flex-grow-1", "align-items-baseline", "mr-2"] },
        [h("strong", { class: "mr-2" }, "Atención")]
      );

      if (this.correo) {
        if (this.valicorreo) {
          if (this.correo.localeCompare(this.valicorreo) === 0) {
            this.boolcorreo = true;
          }
          else{
            this.boolcorreo = false;
          }
        }
      }
      if (this.pass) {
        if (this.validapass) {
          if (this.pass.localeCompare(this.validapass) === 0) {
            this.boolpass = true;
          }
        }
      }

      if (
        this.nombres &&
        this.apellidos &&
        this.correo &&
        this.boolcorreo &&
        this.pass &&
        this.boolpass &&
        this.rut
      ) {
        return true;
      }
      this.errors = [];
      if (!this.nombres) {
        const vNodesMsg = h("p", { class: ["text-center", "mb-0"] }, [
          h("strong"),
          ` El nombre es obligatorio `
        ]);
        this.$bvToast.toast([vNodesMsg], {
          title: [vNodesTitle],
          solid: true,
          variant: "warning"
        });
      }
      if (!this.apellidos) {
        const vNodesMsg = h("p", { class: ["text-center", "mb-0"] }, [
          h("strong"),
          ` El apellido es obligatorio `
        ]);
        this.$bvToast.toast([vNodesMsg], {
          title: [vNodesTitle],
          solid: true,
          variant: "warning"
        });
      }
      if (!this.correo) {
        const vNodesMsg = h("p", { class: ["text-center", "mb-0"] }, [
          h("strong"),
          ` El correo es obligatorio `
        ]);
        this.$bvToast.toast([vNodesMsg], {
          title: [vNodesTitle],
          solid: true,
          variant: "warning"
        });
      }
      if (!this.valicorreo) {
        const vNodesMsg = h("p", { class: ["text-center", "mb-0"] }, [
          h("strong"),
          ` Requerida validación `
        ]);
        this.$bvToast.toast([vNodesMsg], {
          title: [vNodesTitle],
          solid: true,
          variant: "warning"
        });
      } else {
        if (!this.boolcorreo) {
          const vNodesMsg = h("p", { class: ["text-center", "mb-0"] }, [
            h("strong"),
            ` Correos no coinciden `
          ]);
          this.$bvToast.toast([vNodesMsg], {
            title: [vNodesTitle],
            solid: true,
            variant: "warning"
          });
        }
      }
      if(!this.pass){
        const vNodesMsg = h("p", { class: ["text-center", "mb-0"] }, [
          h("strong"),
          ` La contraseña es obligatoria `
        ]);
        this.$bvToast.toast([vNodesMsg], {
          title: [vNodesTitle],
          solid: true,
          variant: "warning"
        });
      }
      if(!this.validapass){
        const vNodesMsg = h("p", { class: ["text-center", "mb-0"] }, [
          h("strong"),
          ` La validación de contraseña es obligatorio `
        ]);
        this.$bvToast.toast([vNodesMsg], {
          title: [vNodesTitle],
          solid: true,
          variant: "warning"
        });
      }else{
        if(!this.boolpass){
          const vNodesMsg = h("p", { class: ["text-center", "mb-0"] }, [
          h("strong"),
          ` Contraseñas no coinciden `
        ]);
        this.$bvToast.toast([vNodesMsg], {
          title: [vNodesTitle],
          solid: true,
          variant: "warning"
        });
        }
      }
      if(!this.rut){
        const vNodesMsg = h("p", { class: ["text-center", "mb-0"] }, [
          h("strong"),
          `Rut requerido`
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
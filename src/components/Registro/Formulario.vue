<template>
  <form class="formularioregistro" @submit.prevent="checkForm">
    <div class="form-group">
      <label for="Nombreyapellido">Nombre:</label>
      <input
        type="text"
        class="form-control"
        id="Nombre"
        aria-describedby="Nombr"
        v-model="nombres"
      />
    </div>
    <div class="form-group">
      <label for="Nombreyapellido">Apellido:</label>
      <input
        type="text"
        class="form-control"
        id="Apellido"
        aria-describedby="Apellido"
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
    <div class="form-group mb-1">
      <label for="password">Contraseña:</label>
      <input type="password" class="form-control" id="password" v-model="pass" />
      <div class="progress mt-2" style="height:10px">
        <div
          v-if="pass"
          class="progress-bar progress-bar-striped progress-bar-animated"
          :class="{'bg-success': pass.length >= 8, 'bg-warning': pass.length <=7 && pass.length >= 6, 'bg-danger':pass.length <6 }"
          role="progressbar"
          aria-valuemin="0"
          aria-valuemax="100"
          :style="{ 'width': (this.pass.length * 7) + '%' + ' !important'}"
        ></div>
      </div>
      <div v-if="pass">
        <span class="text-info" v-if="pass.length<5">Contraseña débil</span>
        <span class="text-info" v-if="pass.length>5 && pass.length<=7">Contraseña media segura</span>
        <span class="text-info" v-if="pass.length>7">Contraseña fuerte</span>
      </div>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Re-ingresar contraseña:</label>
      <input type="password" class="form-control" id="exampleInputPassword1" v-model="validapass" />
    </div>
    <div class="form-group">
      <label for="Rut">RUT:</label>
      <input
        type="text"
        class="form-control"
        id="Rut"
        aria-describedby="rut"
        v-model="rut"
        @change="validarRut"
      />
      <small class="text-info">Ejemplo = 12345678-9</small>
      {{rut}}
    </div>
    <div class="form-group row m-0">
      <label for="numerodoc" class="col-12 p-0">Numero documento:</label>
      <input
        type="text"
        class="form-control col-11"
        id="numeroDoc"
        aria-describedby="numeroDoc"
        v-model="ndoc"
        @change="validarRut"
      />
      <div class="col p-0 text-center">
        <div class="spinner-grow text-primary" role="status" v-if="load">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
      <small class="text-info col-12 p-0">Ejemplo = 25525525525</small>
      {{ndoc}}
    </div>
    <div class="form-group text-right">
      <button type="submit" class="btn btn-primary" :disabled="!validRut">¡Registrarme!</button>
    </div>
  </form>
</template>

<script>
import { isValid } from "validate-rut-serie";

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
      rut: null,
      validRut: false,
      ndoc: null,
      load: false
    };
  },
  methods: {
    checkForm: function(e) {
      console.log(
        this.nombres,
        this.apellidos,
        this.correo,
        this.pass,
        this.rut,
        this.validRut
      );
      const h = this.$createElement;
      const vNodesTitle = h(
        "div",
        { class: ["d-flex", "flex-grow-1", "align-items-baseline", "mr-2"] },
        [h("strong", { class: "mr-2" }, "Atención")]
      );

      this.boolcorreo = true;

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
        this.rut &&
        this.validRut
      ) {
        this.$emit(
          "datosRegistro",
          this.nombres,
          this.apellidos,
          this.correo,
          this.pass,
          this.rut
        );
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
      if (this.pass) {
        if (
          this.pass.length < 6 ||
          this.pass.length > 15 ||
          this.validapass.length < 6 ||
          this.validapass.length > 15
        ) {
          const vNodesMsg = h("p", { class: ["text-center", "mb-0"] }, [
            h("strong"),
            ` la contraseña debee tener entre 6 y 15 caracteres `
          ]);
          this.$bvToast.toast([vNodesMsg], {
            title: [vNodesTitle],
            solid: true,
            variant: "warning"
          });
        }
      }

      if (!this.pass) {
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
      if (!this.validapass) {
        const vNodesMsg = h("p", { class: ["text-center", "mb-0"] }, [
          h("strong"),
          ` La validación de contraseña es obligatorio `
        ]);
        this.$bvToast.toast([vNodesMsg], {
          title: [vNodesTitle],
          solid: true,
          variant: "warning"
        });
      } else {
        if (!this.boolpass) {
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
      if (!this.rut) {
        alert("washo falta el rut");
      }

      e.preventDefault();
    },
    async validarRut() {
      if (this.rut && this.ndoc) {
        this.load = true;
        try {
          const valid = await isValid({ rut: this.rut, serie: this.ndoc }).then(
            e => {
              this.load = false;
              this.validRut = e;
               const h = this.$createElement;
                const vNodesTitle = h(
                  "div",
                  {
                    class: [
                      "d-flex",
                      "flex-grow-1",
                      "align-items-baseline",
                      "mr-2"
                    ]
                  },
                  [h("strong", { class: "mr-2" }, "Atención")]
                );
              if (e === false) {
                const vNodesMsg = h("p", { class: ["text-center", "mb-0"] }, [
                  h("strong"),
                  ` Datos de documento incorrecto `
                ]);
                this.$bvToast.toast([vNodesMsg], {
                  title: [vNodesTitle],
                  solid: true,
                  variant: "warning"
                });
              }
              else{
                const vNodesMsg = h("p", { class: ["text-center", "mb-0"] }, [
                  h("strong"),
                  ` Datos de documento validados `
                ]);
                this.$bvToast.toast([vNodesMsg], {
                  title: [vNodesTitle],
                  solid: true,
                  variant: "warning"
                });
              }
            }
          );
          console.log(valid);
        } catch (error) {
          const h = this.$createElement;
          const vNodesTitle = h(
            "div",
            {
              class: ["d-flex", "flex-grow-1", "align-items-baseline", "mr-2"]
            },
            [h("strong", { class: "mr-2" }, "Atención")]
          );
          const vNodesMsg = h("p", { class: ["text-center", "mb-0"] }, [
            h("strong"),
            ` Hubo un error `
          ]);
          this.$bvToast.toast([vNodesMsg], {
            title: [vNodesTitle],
            solid: true,
            variant: "warning"
          });
          console.log("Hubo un error");
        }
      } else {
        this.validRut = false;
      }
    }
  }
};
</script>

<style>
</style>
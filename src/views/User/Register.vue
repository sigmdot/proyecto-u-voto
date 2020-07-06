<template>
  <div class="registerview container">
      <div class="row m-0 justify-content-center">
          <h3 class="col-12 text-center">Registro</h3>
          <p class="col-12 text-center">Buenas, para poder usar nuestra aplicación necesitamos un registro previo no tomará más de 5 minutos 😄</p>
          <div class="col-10 p-3 border">
              <FormularioRegistro @datosRegistro="captardatosregistro"></FormularioRegistro>
          </div>
          <div class="alert alert-success" v-if="registrado">
              usuario registrado existosamente
              
          </div>
          <div class="alert alert-danger mt-4" v-if="error">
              <p v-if="camposExistentes[0]"> {{camposExistentes[0].err}}</p>
              <br/>
              <p v-if="camposExistentes[1]"> {{camposExistentes[1].err}}</p>
          </div>
      </div>
  </div>
</template>

<script>
import {Service} from '../../service/Service'

import FormularioRegistro from '@/components/Registro/Formulario.vue'

const service = new Service()

export default {
    name:'Register',
    components:{
        FormularioRegistro
    },
    data:function(){
        return{
            usuario:{
                nombres:null,
                apellidos:null,
                correo:null,
                pass:null,
                rut:null
            },
            registrado: false,
            error: false,
            camposExistentes: []
        }
    },
    methods:{
        captardatosregistro(nombres,apellidos,correo,pass,rut){
            const captador={
                nombre:nombres,
                apellido:apellidos,
                mail:correo,
                contrasena:pass,
                rut:rut
            };
            this.usuario = captador;

           service.registrarse(this.usuario).
           then(res => {
               this.registrado = true
               this.error = false
                this.$router.push('/login')

               
               console.log(res)
           }).
           catch(err => {
               this.error = true
               this.registrado = false
               this.camposExistentes = err.response.data.camposExistentes
               console.log('errrorrr')
           })

        }
    }
}
</script>

<style>

</style>
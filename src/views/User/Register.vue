<template>
  <div class="registerview container">
      <div class="row m-0 justify-content-center">
          <h3 class="col-12 text-center">Registro</h3>
          <p class="col-12 text-center">Buenas, para poder usar nuestra aplicación necesitamos un registro previo no tomará más de 5 minutos 😄</p>
          <div class="col-10 p-3 border">
              <FormularioRegistro @datosRegistro="captardatosregistro"></FormularioRegistro>
          </div>
      </div>
      {{usuario}}
  </div>
</template>

<script>
import FormularioRegistro from '@/components/Registro/Formulario.vue'

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
            }
        }
    },
    methods:{
        captardatosregistro(nombres,apellidos,correo,pass,rut){
            const captador={
                nombres:nombres,
                apellidos:apellidos,
                correo:correo,
                pass:pass,
                rut:rut
            };
            this.usuario = captador;

            console.log(this.usuario);

        }
    }
}
</script>

<style>

</style>
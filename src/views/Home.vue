<template>
  <div class="home container">
    <div class="row m-0">
      <h3 class="col-12 p-0 text-center">¿Votaciones online?</h3>
      <p
        class="col-12 p-0 text-center"
      >DigiVote viene a solucionar tus problemas de democracia cuando más lo necesites, gracias a su flexibilidad y alcance cualquiera puede votar.</p>
      <div class="col-12 p-0 text-center">
        <img src="https://i.ibb.co/7zWFh7x/elecciones-peso-peso.jpg" class="img-thumbnail imgsrc" />
      </div>
      <div class="col-12 p-3 row m-0 justify-content-center marginpcnegativo max-imo-cnt">
        <div class="col-10 col-lg-4 col-sm-10 p-3 row m-0 justify-content-center border">
          <router-link to="crearvotacion"><button type="button" class="btn btn-primary  mr-1 max-imo" >Crear votación</button></router-link> 
          <button type="button" class="btn btn-secondary  max-imo" v-b-modal.modalvotacion>Unirse votación</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
/* import HelloWorld from '@/components/HelloWorld.vue' */

    
export default {

  name: "Home",
  components: {}
};
</script>
<style scoped>
.imgsrc {
  height: 70% !important;
  width: 80% !important;
}
@media(min-width: 992px){
  .marginpcnegativo{
    margin-top: -150px !important;
  }
  .max-imo{
    max-width: 82.438px;
    max-height: 60px;
  }
  .max-imo-cnt{
    max-height: 94px;
  }
}
</style>
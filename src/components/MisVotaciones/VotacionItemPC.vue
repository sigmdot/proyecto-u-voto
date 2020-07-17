<template>
  <div class="votacionitempc col-lg-12 row m-0 p-0 border-top border">
    <div class="col-lg-4 border-right p-0 text-center">{{votacion.titulo}}</div>
    <div class="col-lg-2 border-right p-0 text-center">{{votacion.id_votacion}}</div>
    <div class="col-lg border-right p-0 text-center">{{votacion.cantidad_votos}}</div>
    <div class="col-lg  border-right p-0 text-center"> <router-link :to="'/resultados/'+votacion.id_votacion">  <button type="button" class="btn btn-secondary btn-sm"> <b-icon icon="pie-chart"></b-icon> </button> </router-link></div>
    <!-- <div class="col-lg  p-0 text-center"><button type="button" class="btn btn-secondary btn-sm"> <b-icon icon="arrow-up-left-square"></b-icon> </button>  </div>
    <div class="col-lg  p-0 text-center"> <button type="button" class="btn btn-secondary btn-sm"> <b-icon icon="cloud-download"></b-icon> </button> </div> -->
    <div class="col-lg border-right p-0 text-center"> <button type="button" class="btn btn-secondary btn-sm" v-if="mostrarBotonEliminar"> <b-icon icon="trash" ></b-icon> </button>  </div>
  </div>
</template>

<script>
export default {
    name:'VotacionItemPC',
    components:{

    },
    props: ['votacion', 'mostrarBotonEliminar'],
    data:function(){
      return{
        nombreEncuesta:'Votación Divertida',
        totalVoto:99
      }
    }
};
</script>

<style>
</style>
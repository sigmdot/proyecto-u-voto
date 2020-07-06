<template>
  <div class="votacionitempc col-lg-12 row m-0 p-0 border-top border">
    <div class="col-lg-5 border-right p-0 text-center">{{nombreEncuesta}}</div>
    <div class="col-lg border-right p-0 text-center">{{totalVoto}}</div>
    <div class="col-lg  p-0 text-center"><button type="button" class="btn btn-secondary btn-sm"> <b-icon icon="pie-chart"></b-icon> </button></div>
    <div class="col-lg  p-0 text-center"><button type="button" class="btn btn-secondary btn-sm"> <b-icon icon="arrow-up-left-square"></b-icon> </button>  </div>
    <div class="col-lg  p-0 text-center"> <button type="button" class="btn btn-secondary btn-sm"> <b-icon icon="cloud-download"></b-icon> </button> </div>
    <div class="col-lg border-right p-0 text-center"> <button type="button" class="btn btn-secondary btn-sm"> <b-icon icon="trash"></b-icon> </button> </div>
  </div>
</template>

<script>
export default {
    name:'VotacionItemPC',
    components:{

    },
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
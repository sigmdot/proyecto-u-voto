<template>
  <div class="votacionitempc col-lg-12 row m-0 p-0 border-top border">
    <div class="col-lg-5 border-right p-0 text-center">{{nombreEncuesta}}</div>
    <div class="col-lg-1 border-right p-0 text-center">{{totalVoto}}</div>
    <div class="col-lg-1 border-right p-0 text-center"><b-icon icon="pie-chart"></b-icon></div>
    <div class="col-lg-1 border-right p-0 text-center"><b-icon icon="arrow-up-left-square"></b-icon></div>
    <div class="col-lg-1 border-right p-0 text-center"><b-icon icon="cloud-download"></b-icon></div>
    <div class="col-lg-1 border-right p-0 text-center"><b-icon icon="pencil-square"></b-icon></div>
    <div class="col-lg-1 border-right p-0 text-center"><b-icon icon="trash"></b-icon></div>
    <div class="col-lg-1  p-0 text-center"><b-icon icon="three-dots"></b-icon></div>
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
<template>
  <div class="sumarry container-fluid px-0">
      <div class="row m-0">
          <div class="col-12 col-sm-12 col-md-12 col-lg-3 p-0">
              <ListVote @seleccionadoDato="seleccionado"></ListVote>
          </div>
          <div class="col-12 col-sm-12 col-md-12 col-lg-9 p-0">
              <GraphVote></GraphVote>
          </div>
          
      </div>
  </div>
</template>

<script>
import ListVote from './ListVote.vue'
import GraphVote from './GraphVote.vue'


export default {
    name:'SumarryVotes',
    components:{
        ListVote,
        GraphVote
    },data:function(){
        return{
            index:null
        }
    },methods:{
        seleccionado(index){
            this.index= index;
            console.log('el index fue',this.index);
            
        }
    }
}
</script>

<style>

</style>
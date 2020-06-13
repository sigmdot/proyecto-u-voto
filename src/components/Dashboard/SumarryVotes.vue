<template>
  <div class="sumarry">
      <div class="col-12 row m-0">
          <div class="col-12 col-sm-12 col-md-12 col-lg-3">
              <ListVote></ListVote>
          </div>
          <div class="col-12 col-sm-12 col-md-12 col-lg-9">
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

        }
    }
}
</script>

<style>

</style>
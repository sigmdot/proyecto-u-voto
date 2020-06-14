<template>
  <div class="listvote">
    <ul class="list-group">
     <ListItemVote v-for="index in 5" :key="index"  v-bind:class="{ 'bg-primary' : seleccionado == index }" @seleccionado="seleccionarPadre(index)"></ListItemVote>
    </ul>
    
  </div>
</template>

<script>
import ListItemVote from './ListItemVote.vue'

export default {
  name: "ListVote",
  components: {
    ListItemVote
  },
  data: function() {
    return {
      seleccionado:1
    };
  },
  methods:{
    seleccionarPadre:function(index){
      this.seleccionado = index;
      this.$emit('seleccionadoDato',index);
      console.log(index);
    }
  }
};
</script>

<style>
</style>
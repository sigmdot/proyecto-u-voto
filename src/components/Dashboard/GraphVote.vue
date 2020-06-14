<template>
  <div class="graphvote">
      <div class="container-fluid">
          <BarGraph></BarGraph>
      </div>
    
  </div>
</template>

<script>
import BarGraph from './BarGraph.vue'
export default {
  name: "GraphVote",
  components: {
      BarGraph
  },
  data: function() {
    return {};
  }
};
</script>

<style>
</style>
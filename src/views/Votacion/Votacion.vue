<template>
  <div class="votarview container">
    <router-view></router-view>
  </div>

  
</template>

<script>
export default {
  name: "VotacionView",
  components: {
},
  data: function() {
    return {
      votacion: {
      }
    };
  }
};
</script>

<style>
</style>
<template>
  <div id="app">
    <Navbar></Navbar>
    <div class="mt-5 pt-3">
      <router-view/>
    </div>
  </div>
</template>
<script>

import Navbar from '@/components/Navbar.vue'

export default {
  name:"MainApp",
  components:{
    Navbar
  }
}
</script>
<style>



@media (min-width: 992px){
  .is-hidden-pc{
    display: none !important;
  }
}
@media (max-width: 991px){
  .is-hidden-mobile{
    display: none !important;
  }
}
</style>

<template>
      <li @click="seleccionar" class="list-group-item listitemvote">{{nombreVotacion}}</li>
</template>

<script>
export default {
    name:"ListItemVote",
    components:{
        
    },
    data:function(){
        return{
            nombreVotacion:'Votacion Super Hyper Divertida',
            seleccionado:false
        }
    },
    methods:{
        seleccionar(){
            this.$emit('seleccionado');
        }
    }
    
}
</script>

<style>

</style>
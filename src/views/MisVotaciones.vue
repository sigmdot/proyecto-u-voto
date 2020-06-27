<template>
    <div class="misvotaciones container">
        <div class="row m-0">
            <div class="col-12">
                <CajasFiltrosVotaciones></CajasFiltrosVotaciones>
            </div>
            <div class="col-12">
                <ListaMisVotaciones></ListaMisVotaciones>
            </div>
        </div>
    </div>
</template>

<script>
import ListaMisVotaciones from '@/components/MisVotaciones/ListaMisVotaciones.vue'
import CajasFiltrosVotaciones from '@/components/MisVotaciones/CajaFiltrosVotaciones.vue'


export default {
    name:'MisVotaciones',
    components:{
        ListaMisVotaciones,
        CajasFiltrosVotaciones
    },
    data:function(){
        return{

        }
    }
}
</script>

<style>

</style>
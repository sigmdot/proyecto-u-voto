<template>
    <div class="misvotaciones container">
        <div class="row m-0">
            <div class="col-12">
                <CajasFiltrosVotaciones  @cambiarVotaciones="cambiarListaVotaciones" />  
            </div>
            <div class="col-12">
                <ListaMisVotaciones v-if="votaciones.id_usuario" :votaciones="votaciones" ref="listaMisVotaciones" />
            </div>
        </div>
    </div>
</template>

<script>
import ListaMisVotaciones from '@/components/MisVotaciones/ListaMisVotaciones.vue'
import CajasFiltrosVotaciones from '@/components/MisVotaciones/CajaFiltrosVotaciones.vue'

import {Service} from '../service/Service'

const service = new Service()

export default {
    name:'MisVotaciones',
    components:{
        ListaMisVotaciones,
        CajasFiltrosVotaciones
    },
    data:function(){
        return{
            votaciones :{}
        }
    },
    methods:{
        getMisVotaciones(){
            service.getVotacionesUsuario().
            then(res => {
                this.votaciones = res
                console.log(this.votaciones)
            }).
            catch( err => {
                console.log(err)
            })
        },
        cambiarListaVotaciones(value){
            this.$refs.listaMisVotaciones.cambiarListaVotaciones(value)
        }
    },
    mounted(){
        this.getMisVotaciones()
    }
}
</script>

<style>

</style>
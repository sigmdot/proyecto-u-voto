<template>
    <div class="votacionitemmb col-md-12 col-sm 12 col-12 row m-0 border px-0 py-2 mt-4">
        <div class="col-10 row m-0 p-0 ">
            <div class="col-4">
               N° votos: {{votacion.cantidad_votos}}
            </div>
            <div class="col-8">
                <h5>{{votacion.titulo}}</h5>
            </div>
        </div>
        <div class="col-2">
            <b-icon icon="trash" v-if="mostrarBotonEliminar"></b-icon>
        </div>
        <div class="col-6 offset-3">
            <router-link :to="'/resultados/'+votacion.id_votacion"><div class="btn btn-info mt-2" ><b-icon icon="pie-chart" class="mr-1 text-white"/> <span class="text-white">Ver Resultados </span> </div></router-link>
            <hr/>
            Código Votación: {{votacion.id_votacion}}

        </div>

    </div>
</template>

<script>
export default {
    name:'VotacionItemMobile',
    components:{

    },
    props: ['votacion','mostrarBotonEliminar'],
    data:function(){
        return{
            nombreVotacion:'Elecciones CEE 200x',
            cantidadVoto:99,
            fechaUltimaModificacion:Date(Date.parse("12/01/2000"))
        }
    }
}
</script>

<style>

</style>
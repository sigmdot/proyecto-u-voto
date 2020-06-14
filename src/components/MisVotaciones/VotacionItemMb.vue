<template>
    <div class="votacionitemmb col-md-12 col-sm 12 col-12 row m-0 border px-0 py-2 mt-4">
        <div class="col-10 row m-0 p-0 ">
            <div class="col-3">
                <b-icon icon="file-spreadsheet"></b-icon>
            </div>
            <div class="col-9">
                <h5>{{nombreVotacion}}</h5>
            </div>
            <div class="col-12">
            <span class="text-info">Ultima fecha modificación: {{fechaUltimaModificacion}}</span>
        </div>
        </div>
        <div class="col-2">
            {{cantidadVoto}}
        </div>
    </div>
</template>

<script>
export default {
    name:'VotacionItemMobile',
    components:{

    },
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
<template>
    <div class="dashboard">
        <div class="container">
            <div class="row m-0">
                <SumarryVotes></SumarryVotes>
            </div>
            <div class="row m-0">
                <UltimasVotaciones></UltimasVotaciones>
            </div>
        </div>
    </div>
</template>

<script>
import SumarryVotes from '@/components/Dashboard/SumarryVotes.vue'
import UltimasVotaciones from '@/components/Dashboard/UltimasVotaciones.vue'
export default {
    name:"Dashboard",
    components:{
        SumarryVotes,
        UltimasVotaciones
    },
    data:function(){
        return{

        }
    }
}
</script>

<style>

</style>
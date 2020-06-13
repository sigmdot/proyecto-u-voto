<template>
    <div class="dashboard">
        <div class="container">
            <div class="row m-0">
                <SumarryVotes></SumarryVotes>
            </div>
        </div>
    </div>
</template>

<script>
import SumarryVotes from '@/components/Dashboard/SumarryVotes.vue'

export default {
    name:"Dashboard",
    components:{
        SumarryVotes
    },
    data:function(){
        return{

        }
    }
}
</script>

<style>

</style>
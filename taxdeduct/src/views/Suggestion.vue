<template>
    <div>
    </div>
</template>

<script>
// import ResultCard from "@/components/ResultCard.vue";
import QuestionTemplate from "@/components/QuestionTemplate.vue";
export default {
    name : 'Suggestion',
    components : {
        // ResultCard,
        QuestionTemplate,
    },
    data(){
        return{
            choice:['1','2','3','4']
        }
    }
}
</script>
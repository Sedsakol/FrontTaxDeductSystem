<template>
    <div>
        <!-- <ResultCard/> -->
        <QuestionTemplate>
            <template v-slot:question>
                <span>ข้อ1</span>
            </template>
            <template v-slot:choice>
                <ul>
                    <li v-for="(choice) in choice" :key="choice">{{choice}}</li>
                </ul>
            </template>
        </QuestionTemplate>

        <QuestionTemplate>
            <template v-slot:question>
                <span>ข้อ2</span>
            </template>
            <template v-slot:choice>
                <ul>
                    <li v-for="(choice) in choice" :key="choice">{{choice}}</li>
                </ul>
            </template>
        </QuestionTemplate>

        <QuestionTemplate/>
    </div>
</template>

<script>
// import ResultCard from "@/components/ResultCard.vue";
import QuestionTemplate from "@/components/QuestionTemplate.vue";
export default {
    name : 'Question',
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
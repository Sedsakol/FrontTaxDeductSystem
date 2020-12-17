<template>
    <div>
        <!-- <ResultCard/> -->
        <!-- <QuestionTemplate v-for="q in question" :key="q.number">
            <template v-slot:header>
                <span>คำถามความเสี่ยง</span>
            </template>
            <template v-slot:question>
                <span>ข้อ {{q.number}}. {{q.ask}}</span>
            </template>
            <template v-slot:choice>
                <ul>
                    <li v-for="c in q.choice" :key="c">{{q.choice.indexOf(c)+1}}. {{c}}</li>
                </ul>
            </template>
        </QuestionTemplate> -->

        <QuestionTemplate v-bind:question=question></QuestionTemplate>

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
            question:[
                {
                    number: 1,
                    ask: 'คำถาม1',
                    choice: ['1','2','3','4']
                },
                {
                    number: 2,
                    ask: 'คำถาม2',
                    choice: ['1','2','3','4']
                }
            ]
        }
    }
}
</script>
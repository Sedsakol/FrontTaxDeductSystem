<template>
    <div>

        <QuestionTemplate2 v-bind:question=question></QuestionTemplate2>

    </div>
</template>

<script>
import QuestionTemplate2 from "../../components/QuestionTemplate2.vue";
export default {
    name : 'Question2',
    components : {
        QuestionTemplate2,
    },
    data(){
        return{
            // scoree1: null,
            user: "",
            question:[
                {
                    type: 0, //0 = select, 1 = checkbox
                    ask: 'ปัจจุบันคุณอายุเท่าไหร่',
                    choice: [
                        { text: "มากกว่า 55 ปี" ,value: "1" },
                        { text: "45 – 55 ปี" ,value: "2" },
                        { text: "35 – 44 ปี" ,value: "3" },
                        { text: "น้อยกว่า 35 ปี" ,value: "4" }
                    ]
                },
                {
                    type: 0,
                    ask: 'ปัจจุบันคุณมีภาระค่าใช้จ่ายรายเดือน คิดเป็นกี่ % ของรายได้ทั้งหมด',
                    choice: [
                        { text: "มากกว่า 75%" ,value: "1" },
                        { text: "51 - 75%" ,value: "2"},
                        { text: "25 - 50%" ,value: "3"},
                        { text: "น้อยกว่า 25%" ,value: "4"}
                    ]
                },
                {
                    type: 0,
                    ask: 'คุณมีสถานะทางการเงินในปัจจุบันอย่างไร',
                    choice: [
                        { text: "มีทรัพย์สิน น้อยกว่า หนี้สิน" ,value: "1" },
                        { text: "มีทรัพย์สิน เท่ากับ หนี้สิน" ,value: "2"},
                        { text: "มีทรัพย์สิน มากกว่า หนี้สิน" ,value: "3"},
                        { text: "มั่นใจว่ามีเงินออม/เงินลงทุนพอสำหรับการใช้ชีวิตหลังเกษียณแล้ว" ,value: "4"}
                    ]
                },
                {
                    type: 1, 
                    ask: 'คุณมีประสบการณ์ หรือมีความรู้เกี่ยวกับการลงทุนในทรัพย์สินอะไรต่อไปนี้บ้าง (ตอบได้มากกว่า 1 ข้อ)',
                    choice: [
                        { text: "เงินฝากธนาคาร",value: "1"},
                        { text: "พันธบัตรรัฐบาล หรือกองทุนรวมพันธบัตรรัฐบาล" ,value: "2"},
                        { text: "หุ้นกู้ หรือกองทุนรวมตราสารหนี้" ,value: "3"},
                        { text: "หุ้นสามัญ หรือกองทุนรวมหุ้น หรือสินทรัพย์อื่นที่มีความเสี่ยงสูง" ,value: "4"}
                    ]
                },
                {
                    type: 0,
                    ask: 'ระยะเวลาที่คุณคาดว่าจะไม่มีเหตุจำเป็นต้องใช้เงินลงทุนส่วนนี้',
                    choice: [
                        { text: "ไม่เกิน 1 ปี",value: "1"},
                        { text: "1 – 3 ปี" ,value: "2"},
                        { text: "3 – 5 ปี" ,value: "3"},
                        { text: "มากกว่า 5 ปี" ,value: "4"}
                    ]
                },
                {
                    type: 0,
                    ask: 'เป้าหมายหลักในการลงทุนของคุณ คือ',
                    choice: [
                        { text: "เงินต้นต้องไม่ลดลง และรับได้ถ้าผลตอบแทนต่ำกว่า หรือใกล้เคียงอัตราเงินเฟ้อ",value: "1"},
                        { text: "ผลตอบแทนต้องสูงกว่าอัตราเงินเฟ้อเล็กน้อย และรับความเสี่ยงที่จะขาดทุนเงินต้นได้บ้าง" ,value: "2"},
                        { text: "ผลตอบแทนต้องสูงกว่าอัตราเงินเฟ้อ และรับความเสี่ยงที่จะขาดทุนเงินต้นได้มากขึ้น" ,value: "3"},
                        { text: "ผลตอบแทนต้องสูงมาก และรับความเสี่ยงที่จะขาดทุนเงินต้นส่วนใหญ่ได้" ,value: "4"}
                    ]
                },
                {
                    type: 0,
                    ask: 'เมื่อพิจารณารูปตัวอย่างผลตอบแทนของการลงทุนที่อาจเกิดขึ้น (ด้านล่าง) คุณเต็มใจที่จะลงทุนในแบบใด',
                    // ../../assets/images/no7.svg'
                    img: require('../../assets/images/no7.svg'),
                    choice: [
                        { text: "แบบที่ 1 มีโอกาสได้รับผลตอบแทนสูงสุด 2.5% โดยไม่ขาดทุนเลย" ,value: "1"},
                        { text: "แบบที่ 2 มีโอกาสได้รับผลตอบแทนสูงสุด 7% แต่อาจขาดทุนได้ถึง 1%" ,value: "2"},
                        { text: "แบบที่ 3 มีโอกาสได้รับผลตอบแทนสูงสุด 15% แต่อาจขาดทุนได้ถึง 5%" ,value: "3"},
                        { text: "แบบที่ 4 มีโอกาสได้รับผลตอบแทนสูงสุด 25% แต่อาจขาดทุนได้ถึง 15%" ,value: "4"}
                    ]
                },
                {
                    type: 0,
                    ask: 'ถ้าคุณเลือกลงทุนในทรัพย์สินที่มีโอกาสได้รับผลตอบแทนมาก แต่มีโอกาสขาดทุนสูงด้วยเช่นกัน คุณจะรู้สึกอย่างไร',
                    choice: [
                        { text: "กังวล กลัวจะขาดทุน" ,value: "1"},
                        { text: "ไม่สบายใจ แต่พอเข้าใจได้บ้าง" ,value: "2"},
                        { text: "เข้าใจ และรับความผันผวนได้ในระดับหนึ่ง" ,value: "3"},
                        { text: "ไม่กังวลกับโอกาสขาดทุนสูง และหวังกับผลตอบแทนที่อาจจะได้รับสูงเช่นกัน" ,value: "4"}
                    ]
                },
                {
                    type: 0,
                    ask: 'มูลค่าเงินลงทุนลดลงในสัดส่วนเท่าใด ที่จะทำให้คุณรู้สึกกังวล/รับไม่ได้',
                    choice: [
                        { text: "ต่ำกว่า 5%",value: "1"},
                        { text: "5 - 10%" ,value: "2"},
                        { text: "10 - 20%" ,value: "3"},
                        { text: "20% ขึ้นไป" ,value: "4"}
                    ]
                },
                {
                    type: 0,
                    ask: 'ถ้าปีที่แล้วคุณลงทุนไป 100,000 บาท ปี นี้คุณพบว่ามูลค่าเงินลงทุนลดลงเหลือ 85,000 บาท คุณจะทำอย่างไร',
                    choice: [
                        { text: "ตกใจ และต้องการขายการลงทุนที่เหลือทิ้ง",value: "1"},
                        { text: "กังวลใจ และจะปรับเปลี่ยนการลงทุนบางส่วนไปในทรัพย์สินที่เสี่ยงน้อยลง" ,value: "2"},
                        { text: "อดทนถือต่อเพื่อรอผลตอบแทนปรับตัวกลับมา" ,value: "3"},
                        { text: "ไม่กังวลใจ เพราะเข้าใจในการลงทุนระยะยาว และอาจเพิ่มเงินลงทุนในแบบเดิมเพื่อเฉลี่ยต้นทุน" ,value: "4"}
                    ]
                }
            // question tag
            ],
        }
    },
    methods: {

    }
}
</script>
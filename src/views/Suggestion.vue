<template>
    <div>
        <SuggestionCard v-bind:fund_list=fund_list v-bind:insurance_list=insurance_list />
    </div>
</template>
<script>
import SuggestionCard from "@/components/SuggestionCard.vue"
export default {
    name : 'Suggestion',
    components : {
        SuggestionCard,
    },
    data() {
        return {
            fund_list: [
                {
                    name: 'K-CHANGE-SSF',
                    description: 'ลงทุนในหุ้นนวัตกรรมทั่วโลกที่สร้างประโยชน์ให้สังคมและสิ่งแวดล้อม',
                    risk: 6,
                    type: [1,6,8],
                    link: 'https://www.kasikornasset.com/th/mutual-fund/fund-template/Pages/K-CHANGE-SSF.aspx'
                },
                {
                    name: 'K-GINCOME-SSF',
                    description: 'กระจายลงทุนหลากหลายสินทรัพย์ทั่วโลกกว่า 2,500 ตัว',
                    risk: 5,
                    type: [1,5,8],
                    link: 'https://www.kasikornasset.com/th/mutual-fund/fund-template/Pages/K-GINCOME-SSF.aspx'
                },
                {
                    name: 'K-FIXEDPLUS-SSF',
                    description: 'เน้นลงทุนในตราสารหนี้คุณภาพดี ระดับ A+ ขึ้นไป ทั้งในไทยและต่างประเทศ',
                    risk: 4,
                    type: [1,4,8],
                    link: 'https://www.kasikornasset.com/th/mutual-fund/fund-template/Pages/K-FIXEDPLUS-SSF.aspx'
                },
            ],
            insurance_list: [
                {
                    name: 'one_plus_10-1',
                    title: 'ประกันชีวิต วัน พลัส 10/1',
                    description: [
                        'จ่ายเบี้ยครั้งเดียว คุ้มครองนาน 10 ปี',
                        'รับเงินคืน 2%* ทุก 2 ปี',
                        'ไม่ต้องตรวจสุขภาพ',
                        'ลดหย่อนภาษีได้'
                    ],
                    link: 'https://kasikornbank.com/th/personal/Insure/life/Pages/OnePlus10-1.aspx'
                },
                {
                    name: 'pro_saving_1525',
                    title: 'ประกันชีวิตเพื่อสะสมทรัพย์ 1525',
                    description: [
                        'จ่ายเบี้ย 15 ปี คุ้มครองนาน 25 ปี',
                        'รับเงินคืนปีละ 1%',
                        'ลดหย่อนภาษีได้'
                    ],
                    link: 'https://kasikornbank.com/th/personal/Insure/life/Pages/pro-saving-1525.aspx'
                },
                {
                    name: 'retirement_60-5',
                    title: 'ประกันชีวิตเพื่อการเกษียณ 60/5',
                    description: [
                        'จ่ายเบี้ย 5 ปี คุ้มครองนานถึงอายุ 60 ปี',
                        'รับเงินคืน 2%* ทุก 2 ปี',
                        'ลดหย่อนภาษีได้'
                    ],
                    link: 'https://kasikornbank.com/th/personal/Insure/life/Pages/retirement-60-5.aspx'
                },
            ]
        }
    }
}
</script>
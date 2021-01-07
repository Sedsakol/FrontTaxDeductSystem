<template>
  <div id="questioncard">
    <div class="d-flex justify-content-md-center">
      <div class="card w-50 col-md-auto">
        <div class="card-body">
          <!-- start quiz -->
          <form @submit.prevent = "submit" id="quiz" v-if="doingquiz">
            <h4 class="text-center card-title mb-4 mt-1">แบบทดสอบระดับความเสี่ยงที่ยอมรับได้</h4>
            <!-- questionTitle -->
            <div v-for="(q, index) in question" :key="q.number">
              <h6>ข้อ {{index + 1}}. {{q.ask}}</h6>
              <!-- quizOptions -->
              <b-form-group class="optionContainer">
                <b-form-radio-group v-for="c in q.choice" :key="c.value" :id="'q'+ index">
                  <input type="radio" 
                    :name="'name' + index"
                    :id="'id' + index + c.value" 
                    v-model=" userResponses[index]"
                    :value="c.value" 
                    required />
                  <label class="option" 
                    :for="'id' + index + c.value" >
                    {{ c.text }}
                  </label>
                </b-form-radio-group>
              </b-form-group>
            </div>

            <div class="d-flex justify-content-md-center">
              <button @click="clear" type="button" class="btn btn-outline-primary" id="regularbutton">
                  ล้าง
              </button><div class="pr-4"/>
              <button type="submit" class="btn btn-primary" id="regularbutton">
                  คำนวณผล
              </button>
            </div>

          </form>
          <!-- end quiz -->
          
          <!-- start modal -->
          <b-modal size="lg" ref="modal-condition" ok-title="ตกลง" title="การทำแบบสอบถามประเมินระดับความเสี่ยง" ok-only centered> 
            <div>
              แบบทดสอบระดับความเสี่ยงที่ยอมรับได้นี้เป็นเพียงการประเมินเบี้องต้นเท่านั้น ระดับความเสี่ยงที่ยอมรับได้จะแตกต่างกันไปตามลักษณะเฉพาะของแต่ละบุคคล
              โดยผู้จัดทำได้อ้างอิงจาก 
              <a href="https://www.set.or.th/education/th/online_classroom/risk.html" 
                rel="external nofollow noopener" target="_blank">
                แบบทดสอบระดับความเสี่ยงที่ยอมรับได้ (TSI Risk Profile Questionnaire) SET
              </a>
            </div>
          </b-modal>
          <!-- end modal -->

          <!-- start result -->
          <div id="quizresult" v-if="!doingquiz">
            <h4 class="text-center card-title mb-4 mt-1">
              คุณอยู่ใน <span>"ระยะ{{type}}"</span> และ <span>"ยอมรับความเสี่ยงได้{{quizresult[risk_level].text}}"</span>
            </h4>
            <h6>คำอธิบาย</h6>
            <p class="pb-5">{{quizresult[risk_level].descrip}}</p>

            <div class="d-flex justify-content-md-center">
              <button @click="back" type="button" class="btn btn-outline-primary" id="regularbutton">
                  กลับ
              </button><div class="pr-4"/>
              <button @click="restart" class="btn btn-primary" id="regularbutton">
                  ทำใหม่อีกครั้ง
              </button>
            </div>
          </div>

          
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "QuestionTemplate",
  props: {
    question : Array,
  },
  data() {
    return {
      doingquiz: true,
      userResponses: [
        null, //score1 Accumulator, Consolidator, Spender
        null, //score2
        null, //score3
        null, //score4
        null, //score5
        null, //score6
        null, //score7
        null, //score8
        null, //score9
        null  //score10
      ], 
      type: '',
      risk_level: '0',
      quizresult: [
        { text: 'น้อย', descrip: 'คุณชอบการลงทุนที่มีความปลอดภัยสูง ต้องการเห็นเงินต้นอยู่ครบ คุณควรกระจายการลงทุนไปยังสินทรัพย์ที่มีความผันผวนต่ำ แม้ว่าผลตอบแทนอาจจะไม่มาก แต่ก็รู้ค่อนข้างแน่นอนว่าจะได้ผลตอบแทนเท่าไหร่และเมื่อไหร่ คุ้มค่าและปลอดภัยกับเงินลงทุนของคุณ' },
        { text: 'ปานกลาง', descrip: 'คุณยอมรับความเสี่ยงจากการลงทุนได้ปานกลาง ยอมรับความผันผวนได้ในระดับหนึ่งแต่ต้องไม่มากเกินไป เพื่อแลกกับผลตอบแทนที่มากกว่าเงินฝากธนาคารคุณควรกระจายการลุงทุนไปยังสินทรัพย์ที่ให้ได้ทั้งการเพิ่มมูลค่าในระยะยาวและกระแสเงินสดที่สม่ำเสมอจากการลงทุน' },
        { text: 'สูง', descrip: 'คุณยอมรับความเสี่ยงจากกการลงทุนได้ระดับสูง ไม่กังวลกับความผันผวนที่จะเกิดขึ้นระหว่างการลงทุนเท่าไหร่ และมีโอกาสจะได้รับผลตอบแทนในระดับที่สูงขึ้นด้วย แต่อย่างไรก็ไม่ควรประมาท คุณอาจกระจายการลงทุนไปยังสินทรัพย์ที่มีการเพิ่มมูลค่าได้สูงในระยะยาว' },
      ],
    }
  },
  computed: {

  },
  methods: {
    clear() {
      this.userResponses = [null, null, null, null, null, null, null, null, null, null];
      this.type = '';
      this.risk_level = '0';
    },
    submit() {
      this.$refs['modal-condition'].show()
      var score = 0;
      var type = '';
      var risk_level = '';
      type = this.userResponses[0];
      for(let i = 1; i < 10 ; i++) {
        score = score + Number(this.userResponses[i]);
      }
      //0 - 20
      if (score < 21) {
        risk_level = '0';
      }
      //21 - 28
      else if (score < 29) {
        risk_level = '1';
      }
      //29++
      else {
        risk_level = '2';
      }
      this.type = type;
      this.risk_level = risk_level;
      this.doingquiz = false
    },
    back() {
      this.doingquiz = true
    },
    restart() {
      this.clear()
      this.doingquiz = true
    },
    showModal() {
      this.$refs['modal-condition'].show()
    },
    hideModal() {
      this.$refs['modal-condition'].hide()
    },
    
  },

}
</script>

<style>

</style>
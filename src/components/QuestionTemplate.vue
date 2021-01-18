<template>
  <div id="questioncard">
    <div class="d-flex justify-content-md-center">
      <div class="card col-md-auto">
        <div class="card-body">
          <!-- start quiz -->
          <form @submit.prevent = "submit" id="quiz" v-if="doingquiz">
            <h4 class="text-center card-title mb-4 mt-1">แบบทดสอบระดับความเสี่ยงที่ยอมรับได้</h4>
            <!-- questionTitle -->
            <div v-for="(q, index) in question" :key="q.number">
              <h6>ข้อ {{index + 1}}. {{q.ask}}</h6>
              <b-img center fluid :src="q.img" alt=""/>
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
            <h4 class="text-center card-title mb-3 mt-1">
              คุณยอมรับความเสี่ยงได้ในระดับ <span>"{{quizresult[result].text}}"</span>
            </h4>
            <h6>คำอธิบาย</h6>
            <!-- {{quizresult[risk_level].descrip}} -->
            <p class="mb-5">{{quizresult[result].descrip}}</p>

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
import store from "../store/index.js"
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
      result: '0',
      risk_level: '0',
      quizresult: [
        { text: 'ต่ำ', descrip: 'คุณเป็นนักลงทุนประเภทเสี่ยงต่ำ ต้องการผลตอบแทนมากกว่าการฝากเงินธนาคาร ไม่ต้องการความเสี่ยง และมีวัตถุประสงค์การลงทุนในระยะสั้น' },
        { text: 'ปานกลางค่อนข้างต่ำ', descrip: 'คุณเป็นนักลงทุนประเภทเสี่ยงปานกลางค่อนข้างต่ำ ยอมรับความเสี่ยงได้น้อย เน้นปกป้องเงินลงทุน มุ่งหวังรายได้สม่ำเสมอจากการลงทุน' },
        { text: 'ปานกลางค่อนข้างสูง', descrip: 'คุณเป็นนักลงทุนประเภทเสี่ยงปานกลางค่อนข้างสูง สามารถยอมรับมูลค่าการลงทุนที่ลดลงเป็นครั้งคราวได้ ยอมรับความผันผวนได้ในระดับหนึ่งแต่ต้องไม่มากเกินไป' },
        { text: 'สูง', descrip: 'คุณเป็นนักลงทุนประเภทเสี่ยงสูง ยอมรับความเสี่ยงได้สูง รับความผันผวนของตลาดได้ สามารถยอมรับการขาดทุนได้ โดยมุ่งหวังการเติบโตของเงินลงทุนและผลตอบแทนระยะยาว' },
        { text: 'สูงมาก', descrip: 'คุณเป็นนักลงทุนประเภทเสี่ยงสูง ยอมรับความเสี่ยงได้สูงมาก ต้องการได้รับโอกาสที่จะได้รับผลตอบแทนสูง แม้จะมีความเสี่ยงสูงและยอมรับการขาดทุนได้ในระดับสูงพอสมควร' },
      ],
    }
  },
  computed: {

  },
  methods: {
    clear() {
      this.userResponses = [null, null, null, null, null, null, null, null, null, null];
      this.risk_level = 0;
      this.result = 0;
    },
    submit() {
      this.$refs['modal-condition'].show()
      this.save_risk()
      var score, result, risk_level  = 0;
      for(let i = 0; i < 10 ; i++) {
        score = score + Number(this.userResponses[i]);
      }
      if (score < 15) {
        risk_level = 1;
        result = 0;
      }
      //15 - 21
      else if (score < 22) {
        risk_level = 4;
        result = 1;
      }
      //22 - 29 
      else if (score < 30) {
        risk_level = 5;
        result = 2;
      }
      //30 - 36
      else if (score < 37) {
        risk_level = 7;
        result = 3;
      }
      else { //37 ++
        risk_level = 8;
        result = 4;
      }
      this.result = result
      this.risk_level = risk_level
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
    async save_risk(){

      let new_risk = {
        risk: this.userResponses
      }
      console.log(new_risk)
      let currentObj = this
      if (this.$cookies.get('token')){
        await this.axios
        .post("profile/", new_risk,{
          headers: {
            'Authorization': currentObj.$cookies.get('token'),
            'Content-Type': 'application/json'
          }
        })
        .then(async function(response) {
          console.log("saved risk");
          console.log(response.data)
          store.commit('profile_change', response.data)
          currentObj.$cookies.set('profile',store.state.profile)
        })
        .catch(function(error) {
          console.log(error);
        });
      }
      else{
        console.log('pls login naja')
      }
    },
  },

}
</script>

<style>

</style>
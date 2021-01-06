<template>
  <div id="questioncard">
    <div class="d-flex justify-content-md-center">
      <div class="card w-50 col-md-auto">
        <div class="card-body">
          <h4 class="text-center card-title mb-4 mt-1">แบบสอบถามเพื่อประเมินระดับความเสี่ยงในการลงทุนที่เหมาะสม</h4>

          <div v-for="(q, index) in question" :key="q.number">
            <!-- questionTitle -->
            <h6>ข้อ {{index + 1}}. {{q.ask}}</h6>

            <!-- quizOptions -->
            <b-form-group class="optionContainer">
              <b-form-radio-group v-for="c in q.choice" :key="c.value" :id="'q'+ index">
                <input type="radio" 
                  :name="'name' + index"
                  :id="'id' + index + c.value" 
                  v-model=" userResponses[index]"
                  :value="c.value" />
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
            <button @click="submit" class="btn btn-primary" id="regularbutton">
                คำนวณผล
            </button>
          </div>

          <b-modal size="lg" ref="modal-condition" ok-title="ตกลง" title="การทำแบบสอบถามประเมินระดับความเสี่ยง" ok-only centered> 
            <div>
              แบบสอบถามประเมินระดับความเสี่ยงในการลงทุนที่เหมาะสมนี้เป็นเพียงการประเมินเบี้องต้นเท่านั้น<br/>
                โดยผู้จัดทำได้อ้างอิงจาก 
                <a href="https://www.kasikornasset.com/DownloadDocument/%E0%B9%81%E0%B8%9A%E0%B8%9A%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%A1%E0%B8%B4%E0%B8%99%E0%B8%A3%E0%B8%B0%E0%B8%94%E0%B8%B1%E0%B8%9A%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B9%80%E0%B8%AA%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B8%87%E0%B9%83%E0%B8%99%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%A5%E0%B8%87%E0%B8%97%E0%B8%B8%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B9%80%E0%B8%AB%E0%B8%A1%E0%B8%B2%E0%B8%B0%E0%B8%AA%E0%B8%A1%20(Customer%20Risk%20Profile%20).pdf" 
                  rel="external nofollow noopener" target="_blank">
                  แบบสอบถามเพื่อประเมินระดับความเสี่ยงในการลงทุนที่เหมาะสม ธนาคารกสิกรไทย
                </a>
            </div>
          </b-modal>

          
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
      userResponses: [
        null, //score1
        null, //score2
        null, //score3
        null, //score4
        null, //score5
        null, //score6
        null, //score7
        null, //score8
        null, //score9
        null  //score10
      // userResponses tag
      ],
    }
  },
    computed: {

  },
  methods: {
    clear() {
        this.userResponses=[null, null, null, null, null, null, null, null, null];
        // console.log(this.userResponses);
    },
    submit() {
      this.$refs['modal-condition'].show()
      var score = 0;
      var risk_level = 0;
      for(let i = 0; i < 10 ; i++) {
        score = score + Number(this.userResponses[i]);
      }
      if (score < 15) {
        risk_level = 1;
      }
      //15 - 21
      else if (score < 22) {
        risk_level = 4;
      }
      //22 - 29 
      else if (score < 30) {
        risk_level = 5;
      }
      //30 - 36
      else if (score < 37) {
        risk_level = 7;
      }
      else { //37 ++
        risk_level = 8;
      }
      // console.log('score' + score);
      // console.log('risk_level' + risk_level);
      return risk_level;
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
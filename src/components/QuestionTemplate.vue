<template>
  <div id="card">
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
            <button class="btn btn-primary" id="regularbutton">
                ถัดไป
            </button>
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
  },

}
</script>

<style>

</style>
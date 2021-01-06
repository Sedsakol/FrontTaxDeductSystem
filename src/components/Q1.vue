<template>
  <div id="card">
    <div class="d-flex justify-content-md-center">
      <div class="card w-50 col-md-auto">
        <div class="card-body">
          <h4 class="text-center card-title mb-4 mt-1">แบบสอบถามเพื่อประเมินระดับความเสี่ยงในการลงทุนที่เหมาะสม</h4>

          <div v-for="q in question" :key="q.number">
            <!-- questionTitle -->
            <h6>ข้อ {{q.number}}. {{q.ask}}</h6>
            <!-- quizOptions -->
            <b-form-group class="optionContainer">
              <!-- {{q.choice.indexOf(c)+1}}. -->
              <b-form-radio-group class="option" :id="'q-'+ q.number" v-for="c in q.choice" :key="c">

                <b-form-radio>{{c.text}}</b-form-radio>  
                
              </b-form-radio-group>
            </b-form-group>
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
    isSelected : false
  },
  data() {
    return {
    }
  },
  methods: {
  },
  computed: {

  }
}
</script>

<style>

</style>
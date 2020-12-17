<template>
  <div id="card">
    <div class="d-flex justify-content-md-center">
      <div class="card w-50 col-md-auto">
        <div class="card-body">
          <h4 class="text-center card-title mb-4 mt-1">Header</h4>
          <div v-for="q in question" :key="q.number">
            <span>ข้อ {{q.number}}. {{q.ask}}</span>
            <ul>
              <li v-for="c in q.choice" :key="c">{{q.choice.indexOf(c)+1}}. {{c}}</li>
            </ul>
          </div>
          <!-- Question -->
          <!-- <slot name="question">Question</slot> -->
          <!-- Choose -->
          <!-- <slot name="choice"></slot> -->
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "QuestionTemplate",
  props: {
    question : Array
  },
  data() {
    return{
    }
  },
}
</script>

<style>

</style>
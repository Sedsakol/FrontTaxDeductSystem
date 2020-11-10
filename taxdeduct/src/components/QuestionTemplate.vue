<template>
  <div id="card">
    <div class="d-flex justify-content-md-center"> 
      <div class="card w-50 col-md-auto">
        <div class="card-body">
          <h4 class="text-center card-title mb-4 mt-1">(คำถามเพิ่มเติม ประกอบการแนะนำการลุงทุน)</h4>
          <!-- Question -->
          <slot name="question">Question</slot>
          <!-- Choose -->
          <slot name="choice"></slot>


        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuestionTemplate",
  data() {
    return{

    }
  }
}
</script>

<style>

</style>
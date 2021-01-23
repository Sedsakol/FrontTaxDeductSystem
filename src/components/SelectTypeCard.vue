<template>
  <div id="card">
    <div class="card w-75">
      <div class="card-body">

        <!-- start quiz -->
        <form @submit.prevent = "submit" id="quiz">
          <h4 class="text-center card-title mb-4 mt-1">รูปแบบการลงทุนแบบไหนที่ตรงความต้องการคุณมากที่สุด ?</h4>
          <b-form-group class="optionContainer">
            <b-row>
              <b-col lg>
                <b-form-radio-group>
                  <input type="radio" id="type1" v-model="userResponses" value="1" />
                  <label class="option" for="type1">
                    <b-img center fluid src="../assets/plan_type/1.svg" alt=""/><p/>
                    <h6 class="text-center"><b>ป้องกันความเสี่ยง</b></h6>
                    <div id="group">
                      <b-icon icon="check" font-scale="1.5"/>ลดหย่อนภาษี<br>
                      <b-icon icon="check" font-scale="1.5"/>เน้นประกันชีวิต<br>
                      <b-icon icon="check" font-scale="1.5"/>หมดห่วงเมื่อเกิดเหตุฉุกเฉิน<p/>
                    </div>
                  </label>
                </b-form-radio-group>
              </b-col>
              <b-col lg>
                <b-form-radio-group>
                  <input type="radio" id="type2" v-model="userResponses" value="2" />
                  <label class="option" for="type2">
                    <b-img center fluid src="../assets/plan_type/2.svg" alt=""/><p/>
                    <h6 class="text-center"><b>เน้นลงทุน</b></h6>
                    <div id="group">
                      <b-icon icon="check" font-scale="1.5"/>ลดหย่อนภาษี<br>
                      <b-icon icon="check" font-scale="1.5"/>เน้นกองทุน LTF หรือ SSF<br>
                      <b-icon icon="check" font-scale="1.5"/>เพิ่มโอกาสได้ผลตอบแทนที่มากขึ้น<p/>
                    </div>
                  </label>
                </b-form-radio-group>
              </b-col>
              <b-col lg>
                <b-form-radio-group>
                  <input type="radio" id="type3" v-model="userResponses" value="3" />
                  <label class="option" for="type3">
                    <b-img center fluid src="../assets/plan_type/3.svg" alt=""/><p/>
                    <h6 class="text-center"><b>เน้นเกษียณ</b></h6>
                    <div id="group">
                      <b-icon icon="check" font-scale="1.5"/>ลดหย่อนภาษี<br>
                      <b-icon icon="check" font-scale="1.5"/>เน้นกองทุน RMF และประกันชีวิตแบบบำนาญ<br>
                      <b-icon icon="check" font-scale="1.5"/>มีรายได้ที่ปลอดภัยในชีวิตเกษียณ<p/>
                    </div>
                  </label>
                </b-form-radio-group>
              </b-col>
            </b-row>
          </b-form-group>
        </form>

        <button @click="save_plan_type" class="btn btn-primary" block id="fullbutton">
          ถัดไป
        </button>
        
      </div>
    </div>
  </div>
</template>

<script>
import store from "../store/index.js";
export default {
  name: "SelectTypeCard",
  data() {
    return {
      userResponses: null, 
    };
  },
  methods: {
    async save_plan_type(){
      
      let currentObj = this
      if (this.$cookies.get('token') && this.userResponses){
        let obj = {
          'plan_type' : this.userResponses
        }
        console.log(obj)
        await this.axios
        .post("collect_dataset/", obj,{
          headers: {
            'Authorization': currentObj.$cookies.get('token'),
            'Content-Type': 'application/json'
          }
        })
        .then(async function(response) {
          console.log("saved dataset complete");
          console.log(response.data)
          await currentObj.$cookies.keys().forEach(cookie => currentObj.$cookies.remove(cookie))
          await currentObj.$router.push("/collectdata/thankyou");
          
        })
        .catch(function(error) {
          console.log(error);
        });
      }
    },
  }
};
</script>


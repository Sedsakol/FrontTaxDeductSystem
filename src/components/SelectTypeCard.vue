<template>
  <div id="collect">
    <div class="content-box w-75">
      <div>
        <!-- start quiz -->
        <form @submit.prevent = "submit" id="quiz">
          <h4 class="text-center card-title mb-4 mt-1">กรุณาเลือกรูปแบบการลงทุนที่ตรงความต้องการคุณมากที่สุด</h4>
          <!-- userResponses = {{ userResponses }} $v.userResponses = {{ $v.userResponses.$model }} -->
          <span class="text-danger" v-if="(!$v.userResponses.required && completeStatus.value === false)" >*กรุณาตอบคำถามข้อนี้</span>
          <b-form-group class="optionContainer">
            <b-row>
              <b-col lg>
                <b-form-radio-group>
                  <input type="radio" id="type1" v-model.trim="$v.userResponses.$model" value="1" />
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
                      <b-icon icon="check" font-scale="1.5"/>เน้นกองทุน RMF หรือ SSF<br>
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

        <div class="d-flex justify-content-md-center">
          <button @click="save_plan_type" class="btn btn-primary" block id="fullbutton">
            ถัดไป
          </button>
        </div>

        <b-modal ref="modal-save-plan-type" ok-title="ตกลง" :hide-header=true ok-only centered> 
          <p class="my-4 text-center">กรุณารอสักครู่ ระบบกำลังบันทึกข้อมูลของคุณ</p>
          <div class="d-flex justify-content-center mb-3">
            <b-spinner variant="dark"/>
          </div>
        </b-modal>
        
      </div>
    </div>

    <!-- collect data footer -->
    <b-container class="text-center caption">
      เก็บข้อมูลเพื่อใช้ในการทำโครงงาน ของนักศึกษาคณะวิศวกรรมศาสตร์<br>
      ภาควิชาวิศวกรรมคอมพิวเตอร์ สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง
      <p/><router-link to="/" class="text-subblue">กลับหน้าหลัก</router-link>
    </b-container>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength } from "vuelidate/lib/validators";
export default {
  name: "SelectTypeCard",
  components : {
  },
  mixins: [validationMixin],
  data() {
    return {
      userResponses: null, 
      completeStatus: {
        value: null,
        descrip: ""
      }
    };
  },
  validations: {
    userResponses: { required }, 
  },
  methods: {
    async save_plan_type(){
      console.log('submit next!')
      this.$v.userResponses.$touch();
      if (this.$v.userResponses.$anyError) {
        console.log("validation error");
        this.completeStatus.value = false
        this.completeStatus.descrip = "กรุณาตอบคำถามให้ครบทุกข้อ"
      }
      else {
        this.completeStatus.value = null
        this.completeStatus.descrip = ""
        let currentObj = this
        currentObj.$refs['modal-save-plan-type'].show()
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
            currentObj.$refs['modal-save-plan-type'].hide()
          });
        }
      }
      
    },
  }
};
</script>


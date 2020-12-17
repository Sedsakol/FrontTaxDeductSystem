<template>
  <div id="suggestioncard">
    <div class="d-flex justify-content-md-center">
      <div class="card w-75 col-md-auto">
        <!-- <div class="card-body" id="suggestion"> -->
          <!-- <h4 class="text-center card-title">แนะนำการลงทุนเพื่อลดหย่อนภาษี</h4> -->
          <b-row>
            <!-- left side -->
            <b-col cols="8" id = "leftside"> 
              <!-- top -->
              <b-row class="justify-content-md-center mb-4">
                <b-col cols = "6" class="bg-lightblue pt-3">
                  <p class="text-center">รวมเงินได้สุทธิ <span class="text-mainblue" >100,000{{ this.net_income }}</span> บาท</p>
                  <p class="text-center">ภาษีที่ต้องจ่าย <span class="text-mainblue">100,000{{ this.tax }}</span> บาท</p>
                </b-col>
              </b-row>
              <!-- down -->
              <b-row>
                <!-- suggest -->
                <b-col class="ml-5 mr-5" >
                  <h6 class="text-center">การลงทุนที่แนะนำ</h6><p/>
                  <b-img center fluid alt="Responsive image" src="../assets/steptax/step1.svg"></b-img><p/>
                  <p>การลงทุน</p>
                  <b-form-row>
                    <b-col cols = "5" md="auto" >ลงทุน RMF</b-col>
                    <b-col class="text-right">10,000</b-col>
                    <b-col cols = "2" class="text-right">บาท</b-col>
                  </b-form-row>
                  <b-form-row>
                    <b-col cols = "5" md="auto">ลงทุน SSF</b-col>
                    <b-col class="text-right">0</b-col>
                    <b-col cols = "2" class="text-right">บาท</b-col>
                  </b-form-row><p/>
                  <p>ประกันภัย</p>
                  <b-form-row>
                    <b-col cols = "5" md="auto">เบี้ยประกันชีวิต</b-col>
                    <b-col class="text-right">10,000</b-col>
                    <b-col cols = "2" class="text-right">บาท</b-col>
                  </b-form-row>
                  <b-form-row>
                    <b-col cols = "5" md="auto">เบี้ยประกันสุขภาพ</b-col>
                    <b-col class="text-right">10,000</b-col>
                    <b-col cols = "2" class="text-right">บาท</b-col>
                  </b-form-row>
                  <b-form-row>
                    <b-col cols = "5" >เบี้ยประกันชีวิตแบบบำนาญ</b-col>
                    <b-col class="text-right">10,000</b-col>
                    <b-col cols = "2" class="text-right">บาท</b-col>
                  </b-form-row><p/>
                  <b-form-row>
                    <b-col cols = "5" md="auto">ต้องจ่ายภาษีเพียง</b-col>
                    <b-col class="text-right">10,000</b-col>
                    <b-col cols = "2" class="text-right">บาท</b-col>
                  </b-form-row>
                </b-col>
                <!-- yours -->
                <b-col class="mr-5">
                  <h6 class="text-center">การลงทุนของฉัน</h6><p/>
                  <b-img center fluid alt="Responsive image" src="../assets/steptax/step1.svg"></b-img><p/>
                  <p>การลงทุน</p>
                  <b-form-row>
                    <b-col cols = "5" md="auto">ลงทุน RMF</b-col>
                    <b-col class="text-right">10,000</b-col>
                    <b-col cols = "2" class="text-right">บาท</b-col>
                  </b-form-row>
                  <b-form-row>
                    <b-col cols = "5" md="auto">ลงทุน SSF</b-col>
                    <b-col class="text-right">0</b-col>
                    <b-col cols = "2" class="text-right">บาท</b-col>
                  </b-form-row><p/>
                  <p>ประกันภัย</p>
                  <b-form-row>
                    <b-col cols = "5" md="auto">เบี้ยประกันชีวิต</b-col>
                    <b-col class="text-right">10,000</b-col>
                    <b-col cols = "2" class="text-right">บาท</b-col>
                  </b-form-row>
                  <b-form-row>
                    <b-col cols = "5" md="auto">เบี้ยประกันสุขภาพ</b-col>
                    <b-col class="text-right">10,000</b-col>
                    <b-col cols = "2" class="text-right">บาท</b-col>
                  </b-form-row>
                  <b-form-row>
                    <b-col cols = "5" >เบี้ยประกันชีวิตแบบบำนาญ</b-col>
                    <b-col class="text-right">10,000</b-col>
                    <b-col cols = "2" class="text-right">บาท</b-col>
                  </b-form-row><p/>
                  <b-form-row>
                    <b-col cols = "5" md="auto">ต้องจ่ายภาษีเพียง</b-col>
                    <b-col class="text-right">10,000</b-col>
                    <b-col cols = "2" class="text-right">บาท</b-col>
                  </b-form-row>
                </b-col>
              </b-row><p/>

              <!-- id="twobutton" -->
              <b-row class="mt-4">
                <b-col>
                  <router-link to = "/taxDeduct"><button type="button" class="btn btn-outline-primary">
                    ย้อนกลับ
                  </button></router-link>
                </b-col>
                <b-col>
                  <router-link to = "/"><button @click="next" class="btn btn-primary">
                    เสร็จสิน
                  </button></router-link> 
                </b-col>
              </b-row>

            </b-col>
            
            <!-- right side -->
            <b-col cols="4" class="bg-mainblue" id = "rightside">
              <b-img center fluid alt="Responsive image" src="../assets/images/undraw_2.svg"></b-img><p/>
              <h6 class="text-center text-white pt-4">รูปแบบการลงทุนที่เหมาะสมกับคุณ</h6>
              <h5 class="text-center"><span class="text-lightyell">แบบป้องกันความเสี่ยง{{ this.type }}</span></h5>
              <p class="text-center text-white">รายละเอียดการกระจายซื้อ</p>
              <div class="text-white">
                <b-row>
                  <b-col cols = "6">ประกันชีวิต</b-col>
                  <b-col cols = "4" class="text-right ">50,000</b-col>
                  <b-col cols = "2">บาท</b-col>
                </b-row>
                <b-row>
                  <b-col cols = "6">ประกันชีวิตแบบบำนาญ</b-col>
                  <b-col cols = "4" class="text-right">25,000</b-col>
                  <b-col cols = "2" >บาท</b-col>
                </b-row>
                <b-row>
                  <b-col cols = "6">กองทุน SSF</b-col>
                  <b-col cols = "4" class="text-right">25,000</b-col>
                  <b-col cols = "2" >บาท</b-col>
                </b-row>
                <b-row>
                  <b-col cols = "6">กองทุน RMF</b-col>
                  <b-col cols = "4" class="text-right">25,000</b-col>
                  <b-col cols = "2">บาท</b-col>
                </b-row>
              </div>
            </b-col>
          </b-row>
        <!-- </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SuggestionCard",
};
</script>

<style>


</style>

<template>
  <div id="home">
    <div class="text-center">

      <div>
        <h4>เครื่องมือในการคำนวณภาษี และแนะนำการลงทุนเพื่อลดหย่อนภาษี</h4>
        <h6>เว็บแอพพลิเคชั่นที่จะช่วยวางแผนภาษี และเตรียมข้อมูลภาษีได้ง่ายขึ้น</h6>
        <h6>พร้อมเสนอแนวทางในการลงทุนเพื่อลดหย่อนภาษีให้ใกล้เคียงกับความต้องการของคุณ</h6>
        <router-link to = "/tax/calculate">
          <button block class="btn btn-primary mt-4" id="regularbutton">เริ่มต้นคำนวณภาษี</button>
        </router-link>
        <b-img center fluid alt="Responsive image" src="../assets/images/home2.svg"></b-img><p/>
      </div>
      
      <!-- <div class="container pt-5">
        <h5>ขั้นตอนการคำนวณภาษี</h5>
        <b-img src="../assets/images/how_to_คำนวณภาษี_horizontal.svg"></b-img><p/>
      </div> -->
    </div>

    <b-alert variant="dark" :show="showDismissibleAlert" no-wrap>
      This site uses cookies to provide you with experience. By using TaxDeduct, 
      you accept our <router-link to="/term">Terms and Condition</router-link>
      <b-icon class="close" font-scale="1.5" shift-v="-1" icon="x" v-on:click="showAlert()" />
    </b-alert>

  </div>
</template>

<script>
// import axios from 'axios'

export default {
  name: "Home",
  data(){
    return{
      showDismissibleAlert: true
    }
  },
  methods : {
    showAlert() {
      this.showDismissibleAlert = !this.showDismissibleAlert;
    }
  }
};
</script>

<style scoped>

  
</style>

<template>
  <div id="home">
    <div class="text-center">
      <h4>เครื่องมือในการคำนวณภาษี และแนะนำการลงทุนเพื่อลดหย่อนภาษี</h4>
      <h6>เว็บแอพพลิเคชั่นที่จะช่วยวางแผนภาษี และเตรียมข้อมูลภาษีได้ง่ายขึ้น</h6>
      <h6>พร้อมเสนอแนวทางในการลงทุนเพื่อลดหย่อนภาษีให้ใกล้เคียงกับความต้องการ</h6>
      <b-img center fluid alt="Responsive image" src="../assets/images/home.svg"></b-img><p/>
      <router-link to = "/taxCalculate">
        <button block class="btn btn-primary mt-3" id="regularbutton">เริ่มต้นคำนวณภาษี</button>
      </router-link>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'

export default {
  name: "Home",
  data(){
    return{

    }
  },
  // async hello_member() {
  //   const response = await axios.get('user',{
  //     header:{
  //       Authorization: 'Bearer' + this.$cookies.getIterm('token')
  //     }
  //   });
  //   this.user = response.data;
  // }

};
</script>

<style scoped>

  
</style>

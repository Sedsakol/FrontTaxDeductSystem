<template>
    <div id="card">
    <div class="d-flex justify-content-md-center"> 
      <div class="card w-50 col-md-auto">
        <div class="card-body">
          <h4 class="text-center card-title">คำนวณภาษี</h4>

          <form id = "form-calculate">
            <b-form-group>
              <b-form-row>
                  <b-col cols = "6"><label class="col-form-label">เงินเดือน (ต่อเดือน)</label></b-col>
                  <b-col><b-form-input type="number" class="form-control" placeholder="0" 
                  v-model= "salary" min ="0" /></b-col>
                  <b-col cols = "1"><label class="col-form-label">บาท</label></b-col>
              </b-form-row>
            </b-form-group>

            <b-form-group>
              <b-form-row>
                  <b-col cols = "6"><label class="col-form-label">รายได้อื่น ๆ (ต่อปี)</label></b-col>
                  <b-col><b-form-input type="number" class="form-control" placeholder="0" 
                  v-model= "other_income" min ="0" /></b-col>
                  <b-col cols = "1"><label class="col-form-label">บาท</label></b-col>
              </b-form-row>
            </b-form-group>

            <b-form-group>
              <b-form-row>
                  <b-col cols = "6"><label class="col-form-label">สถานะภาพการสมรส</label></b-col>
                  <b-col cols = "5">
                    <b-form-select class="form-control" v-model= "marital" :options= "marital_ops"/>
                  </b-col>
              </b-form-row>
            </b-form-group>

            <b-form-group>
              <b-form-row>
                  <b-col cols = "6"><label class="col-form-label">ลดหย่อนพ่อแม่</label>
                    <b-icon font-scale="0.75" class="ml-2" id="popover-parent" icon="exclamation-circle"/>
                    <b-popover target="popover-parent" triggers="hover" placement= "rightbottom">
                      พ่อแม่ของตนเอง (<span class="terxt-dange">ต้องครบเงื่อนไขทุกข้อ</span>)
                      <ul>
                        <li>อายุมากกว่า 60 ปี</li>
                        <li>รายได้ทั้งปีไม่เกิน 30,000 บาท</li>
                        <li>เราต้องเป็นลูกแท้ ไม่ใช่ลูกบุญธรรม</li>
                      </ul>
                      พ่อแม่ของคู่สมรส (<span class="terxt-dange">ต้องครบเงื่อนไขทุกข้อ</span>)
                      <ul>
                        <li>อายุมากกว่า 60 ปี</li>
                        <li>รายได้ทั้งปีไม่เกิน 30,000 บาท</li>
                        <li>คู่สมรสไม่มีเงินได้</li>
                        <li>คู่สมรสต้องเป็นลูกแท้ ไม่ใช่ลูกบุญธรรม</li>
                      </ul>
                    </b-popover>
                  </b-col>
                  <!-- <b-col cols = "1" align-self="center">
                    <b-icon class="ml-2" id="popover-1" icon="exclamation-circle"/>
                    <b-popover target="popover-1" triggers="hover" placement= "rightbottom">
                    
                    </b-popover>
                  </b-col> -->
                  <b-col>
                    <b-form-select class="form-control" v-model= "parent_num" :options= "parent_ops" />
                  </b-col>
                  <b-col cols = "0.75"><label class="col-form-label">คน</label></b-col>
              </b-form-row>
            </b-form-group>

            <!-- <b-form-group>
              <b-form-row>
                <b-col cols = "6"> <b><label class="col-form-label">จำนวนลูก</label></b> 
                <b-icon font-scale="0.75" class="ml-2" id="popover-child" icon="exclamation-circle"/>
                      <b-popover target="popover-child" triggers="hover" placement= "rightbottom">
                        เกณฑ์อายุของลูก (<span class="terxt-dange">ข้อใดข้อหนึ่ง</span>)
                        <ul>
                          <li>น้อยกว่า 20 ปี (ยังไม่บรรลุนิติภาวะ)</li>
                          <li>ยังไม่แต่งงาน (ยังไม่บรรลุนิติภาวะ)</li>
                          <li>20-25 ปี (บรรลุนิติภาวะแล้ว) แต่กำลังศึกษาในระดับ ปวส. / ปวท. ปริญญาตรี และะปริญญาตรีขึ้นไป</li>
                          <li>ศาลสั่งให้เป็นผู้ไร้ความสามารถ/เสมือนไร้ความสามารถ</li>
                        </ul>
                        เกณฑ์รายได้ของลูก (<span class="terxt-dange">ข้อใดข้อหนึ่ง</span>)
                        <ul>
                          <li>ไม่มีรายได้</li>
                          <li>รายได้ทั้งปีน้อยกว่า 30,000 บาท</li>
                        </ul>
                        เกณฑ์ความสัมพันธ์
                        <ul>
                          <li>ลูกแท้ ๆ ที่ถูกต้องตามกฎหมาย</li>
                          <li>ลูกบุญธรรมที่จดทะเบียนรับแล้ว</li>
                        </ul>
                      </b-popover>
                </b-col>
              </b-form-row>
            </b-form-group> -->

            <b-form-group>
              <b-form-row>
                  <b-col cols = "6"><label class="col-form-label">ลูกแท้ที่เกิดก่อน พ.ศ.2561</label>
                  <b-icon font-scale="0.75" class="ml-2" id="popover-child" icon="exclamation-circle"/>
                  <b-popover target="popover-child" triggers="hover" placement= "rightbottom">
                    เกณฑ์ความสัมพันธ์
                    <ul>
                      <li>ลูกแท้ ๆ ที่ถูกต้องตามกฎหมาย</li>
                    </ul>
                    เกณฑ์อายุของลูก (<span class="terxt-dange">ข้อใดข้อหนึ่ง</span>)
                    <ul>
                      <li>น้อยกว่า 20 ปี (ยังไม่บรรลุนิติภาวะ)</li>
                      <li>ยังไม่แต่งงาน (ยังไม่บรรลุนิติภาวะ)</li>
                      <li>20-25 ปี (บรรลุนิติภาวะแล้ว) แต่กำลังศึกษาในระดับ ปวส. / ปวท. ปริญญาตรี และะปริญญาตรีขึ้นไป</li>
                      <li>ศาลสั่งให้เป็นผู้ไร้ความสามารถ/เสมือนไร้ความสามารถ</li>
                    </ul>
                    เกณฑ์รายได้ของลูก (<span class="terxt-dange">ข้อใดข้อหนึ่ง</span>)
                    <ul>
                      <li>ไม่มีรายได้</li>
                      <li>รายได้ทั้งปีน้อยกว่า 30,000 บาท</li>
                    </ul>
                  </b-popover>
                  </b-col>
                  <b-col><b-form-input type="number" class="form-control" placeholder="0" 
                  v-model= "child_before_2561" min ="0" /></b-col>
                  <!-- <b-col>
                    <b-form-select class="form-control" v-model= "child_before_2561" :options= "child_ops" />
                  </b-col> -->
                  <b-col cols = "1"><label class="col-form-label">คน</label></b-col>
              </b-form-row>
            </b-form-group>

            <b-form-group>
              <b-form-row>
                  <b-col cols = "6"><label class="col-form-label">ลูกแท้ที่เกิดหลัง พ.ศ.2561</label>
                  <b-icon font-scale="0.75" class="ml-2" id="popover-child2" icon="exclamation-circle"/>
                  <b-popover target="popover-child2" triggers="hover" placement= "rightbottom">
                        เกณฑ์ความสัมพันธ์
                        <ul>
                          <li>ลูกแท้ ๆ ที่ถูกต้องตามกฎหมาย</li>
                        </ul>
                        เกณฑ์อายุของลูก (<span class="terxt-dange">ข้อใดข้อหนึ่ง</span>)
                        <ul>
                          <li>น้อยกว่า 20 ปี (ยังไม่บรรลุนิติภาวะ)</li>
                          <li>ยังไม่แต่งงาน (ยังไม่บรรลุนิติภาวะ)</li>
                          <li>20-25 ปี (บรรลุนิติภาวะแล้ว) แต่กำลังศึกษาในระดับ ปวส. / ปวท. ปริญญาตรี และะปริญญาตรีขึ้นไป</li>
                          <li>ศาลสั่งให้เป็นผู้ไร้ความสามารถ/เสมือนไร้ความสามารถ</li>
                        </ul>
                        เกณฑ์รายได้ของลูก (<span class="terxt-dange">ข้อใดข้อหนึ่ง</span>)
                        <ul>
                          <li>ไม่มีรายได้</li>
                          <li>รายได้ทั้งปีน้อยกว่า 30,000 บาท</li>
                        </ul>
                  </b-popover>
                  </b-col>
                  <b-col><b-form-input type="number" class="form-control" placeholder="0" 
                  v-model= "child_after_2561" min ="0" /></b-col>
                  <!-- <b-col>
                    <b-form-select class="form-control" v-model= "child_after_2561" :options= "child_ops" />
                  </b-col> -->
                  <b-col cols = "1"><label class="col-form-label">คน</label></b-col>
              </b-form-row>
            </b-form-group>

            <b-form-group>
              <b-form-row>
                  <b-col cols = "6"><label class="col-form-label">ลูกบุญธรรม</label>
                  <b-icon font-scale="0.75" class="ml-2" id="popover-protege" icon="exclamation-circle"/>
                  <b-popover target="popover-protege" triggers="hover" placement= "rightbottom">
                        เกณฑ์ความสัมพันธ์
                        <ul>
                          <li>ลูกบุญธรรมที่จดทะเบียนรับแล้ว</li>
                        </ul>
                        เกณฑ์อายุของลูก (<span class="terxt-dange">ข้อใดข้อหนึ่ง</span>)
                        <ul>
                          <li>น้อยกว่า 20 ปี (ยังไม่บรรลุนิติภาวะ)</li>
                          <li>ยังไม่แต่งงาน (ยังไม่บรรลุนิติภาวะ)</li>
                          <li>20-25 ปี (บรรลุนิติภาวะแล้ว) แต่กำลังศึกษาในระดับ ปวส. / ปวท. ปริญญาตรี และะปริญญาตรีขึ้นไป</li>
                          <li>ศาลสั่งให้เป็นผู้ไร้ความสามารถ/เสมือนไร้ความสามารถ</li>
                        </ul>
                        เกณฑ์รายได้ของลูก (<span class="terxt-dange">ข้อใดข้อหนึ่ง</span>)
                        <ul>
                          <li>ไม่มีรายได้</li>
                          <li>รายได้ทั้งปีน้อยกว่า 30,000 บาท</li>
                        </ul>
                  </b-popover>
                  </b-col>
                  <b-col>
                  <!-- <b-form-input type="number" class="form-control" placeholder="0" 
                  v-model= "protege" min ="0" /></b-col> -->
                    <b-form-select class="form-control" v-model= "protege" :options= "protege_ops" />
                  </b-col>
                  <b-col cols = "1"><label class="col-form-label">คน</label></b-col>
              </b-form-row>
            </b-form-group>
            <router-link to="/taxDeduct"><button type="submit" class="btn btn-primary">
                        ถัดไป
            </button></router-link>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import PopoverTemplate from "@/components/PopoverTemplate.vue";
export default {
  name: "TaxCalculateCard",
  components : {
        // PopoverTemplate,
    },
  data() {
    return {
      salary:'',
      other_income: '',
      marital: null,
      parent_num: null,
      child_num: null,

      marital_ops: [
        { value: '', text: 'โสด' },
        { value: '', text: 'สมรสแล้ว (แยกยื่น)' },
        { value: '', text: 'สมรสแล้ว (คู่สมรสไม่มีเงินได้)' }
      ],
      parent_ops: [
        { value: '', text: '0' },
        { value: '', text: '1' },
        { value: '', text: '2' },
        { value: '', text: '3' },
        { value: '', text: '4' }
      ],
      protege_ops: [
        { value: '', text: '0' },
        { value: '', text: '1' },
        { value: '', text: '2' },
        { value: '', text: '3' }
      ]
    }
  },
};
</script>

<style>



</style>
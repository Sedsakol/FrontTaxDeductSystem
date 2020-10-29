<template>
    <div id="card">
    <div class="d-flex justify-content-md-center"> 
      <div class="card w-50 col-md-auto">
        <div class="card-body">
          <h4 class="text-center card-title mb-4 mt-1">คำนวณภาษี</h4>

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
                  <b-col cols = "6"><label class="col-form-label">ลดหย่อนบิดา-มารดาตนเอง</label></b-col>
                  <b-col>
                    <b-form-select class="form-control" v-model= "parent_num" :options= "parent_ops" />
                  </b-col>
                  <b-col cols = "1"><label class="col-form-label">คน</label></b-col>
              </b-form-row>
            </b-form-group>

            <b-form-group>
              <b-form-row>
                  <b-col cols = "6"><label class="col-form-label">จำนวนบุตร</label></b-col>
                  <b-col>
                    <b-form-select class="form-control" v-model= "child_num" :options= "child_ops" />
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
export default {
  name: "TaxCalculateCard",
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
        { value: '', text: '2' }
      ],
      child_ops: [
        { value: '', text: '0' },
        { value: '', text: '1' },
        { value: '', text: '2' },
        { value: '', text: '3' },
        { value: '', text: '4' },
        { value: '', text: '5' },
        { value: '', text: '...' }
      ]
    }
  },
};
</script>

<style>

</style>
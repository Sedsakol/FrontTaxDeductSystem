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
                  <b-col><b-form-input type="number" class="form-control" placeholder="0"/></b-col>
                  <b-col cols = "1"><label class="col-form-label">บาท</label></b-col>
              </b-form-row>
            </b-form-group>

            <b-form-group>
              <b-form-row>
                  <b-col cols = "6"><label class="col-form-label">รายได้อื่น ๆ (ต่อปี)</label></b-col>
                  <b-col><b-form-input type="number" class="form-control" placeholder="0"/></b-col>
                  <b-col cols = "1"><label class="col-form-label">บาท</label></b-col>
              </b-form-row>
            </b-form-group>

            <b-form-group>
              <b-form-row>
                  <b-col cols = "6"><label class="col-form-label">สถานะภาพการสมรส</label></b-col>
                  <b-col cols = "5">
                    <select class="form-control">
                      <option selected>โสด</option>
                      <option>สมรสแล้ว (แยกยื่น)</option>
                      <option>สมรสแล้ว (คู่สมรสไม่มีเงินได้)</option>
                    </select>
                  </b-col>
              </b-form-row>
            </b-form-group>

            <b-form-group>
              <b-form-row>
                  <b-col cols = "6"><label class="col-form-label">ลดหย่อนบิดา-มารดาตนเอง</label></b-col>
                  <b-col>
                    <select id="" class="form-control">
                      <option selected>0</option>
                      <option>1</option>
                      <option>2</option>
                    </select>
                  </b-col>
                  <b-col cols = "1"><label class="col-form-label">คน</label></b-col>
              </b-form-row>
            </b-form-group>

            <b-form-group>
              <b-form-row>
                  <b-col cols = "6"><label class="col-form-label">จำนวนบุตร</label></b-col>
                  <b-col>
                    <select id="" class="form-control">
                      <option selected>0</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>...</option>
                    </select>
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
};
</script>

<style>
#form-profile .form-row,
#form-calculate .form-row,
#form-deduct .form-row{
/* background: coral; */
width: 406px;
}
</style>
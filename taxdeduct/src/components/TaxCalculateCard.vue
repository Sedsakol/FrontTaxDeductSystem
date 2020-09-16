<template>
    <div>
    <div class="d-flex justify-content-md-center"> 
      <div class="card text-center w-50 col-md-auto">
        <div class="card-body ">
          <h4 class="card-title mb-4 mt-1">คำนวณภาษี</h4>
          <form>
            <div class="form-group row">
                <label class="col-sm-3 col-form-label">เงินเดือน (ต่อเดือน)</label>
                <div>
                    <input type="text" class="form-control" placeholder="0">
                </div>
                <label class="col-sm-2 col-form-label">บาท</label>
            </div>
            <div class="form-group row">
                <label class="col-sm-3 col-form-label">รายได้อื่น ๆ (ต่อปี)</label>
                <div>
                    <input type="text" class="form-control" placeholder="0">
                </div>
                <label class="col-sm-2 col-form-label">บาท</label>
            </div>
            <div class="form-group row">
                <label class="col-sm-3 col-form-label">สถานะภาพการสมรส</label>
                <div>
                  <select id="" class="form-control">
                    <option selected>โสด</option>
                    <option>สมรสแล้ว (แยกยื่น)</option>
                    <option>สมรสแล้ว (คู่สมรสไม่มีเงินได้)</option>
                  </select>
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-3 col-form-label">ลดหย่อนบิดา-มารดาตนเอง</label>
                <div>
                  <select id="" class="form-control">
                    <option selected>0</option>
                    <option>1</option>
                    <option>2</option>
                  </select>
                </div>
                <label class="col-sm-2 col-form-label">คน</label>
            </div>
            <div class="form-group row">
                <label class="col-sm-3 col-form-label">จำนวนบุตร</label>
                <div>
                  <select id="" class="form-control">
                    <option selected>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>...</option>
                  </select>
                </div>
                <label class="col-sm-2 col-form-label">คน</label>
            </div>
            <button type="submit" class="btn btn-primary btn-block">
              ถัดไป
            </button>
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

<style></style>
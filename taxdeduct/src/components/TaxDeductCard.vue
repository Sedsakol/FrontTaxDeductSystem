<template>
    <div id="card">
        <div class="d-flex justify-content-md-center">
            <div class="card text-center col-md-auto">
                <div class="card-body">
                    <h4 class="card-title mb-4 mt-1">ลดหย่อนภาษี</h4>
                    <form action="">
                        <div class="row">
                            <div class="col-6">
                                <p>การลงทุน</p>
                                <div class="form-group row">
                                    <label class="col-sm-3 col-form-label">ลงทุน RMF</label>
                                    <div>
                                    <input type="number" class="form-control" placeholder="0">
                                    </div>
                                    <label class="col-sm-2 col-form-label">บาท</label>
                                </div>
                                <div class="form-group row">
                                    <label class="col-sm-3 col-form-label">ลงทุน SSF</label>
                                    <div>
                                    <input type="number" class="form-control" placeholder="0">
                                    </div>
                                    <label class="col-sm-2 col-form-label">บาท</label>
                                </div>
                                <p>ประกันชีวิต</p>
                                <div class="form-group row">
                                    <label class="col-sm-3 col-form-label">เบี้ยประกันชีวิต</label>
                                    <div>
                                    <input type="number" class="form-control" placeholder="0">
                                    </div>
                                    <label class="col-sm-2 col-form-label">บาท</label>
                                </div>
                                <div class="form-group row">
                                    <label class="col-sm-3 col-form-label">เบี้ยประกันชีวิตแบบบำนาญ</label>
                                    <div>
                                    <input type="number" class="form-control" placeholder="0">
                                    </div>
                                    <label class="col-sm-2 col-form-label">บาท</label>
                                </div>
                                <p>บริจาค</p>
                                <div class="form-group row">
                                    <label class="col-sm-3 col-form-label">ยอดบริจาคทั่วไป</label>
                                    <div>
                                    <input type="number" class="form-control" placeholder="0">
                                    </div>
                                    <label class="col-sm-2 col-form-label">บาท</label>
                                </div>
                                <div class="form-group row">
                                    <label class="col-sm-3 col-form-label">ยอดบริจาคเพื่อการศึกษา</label>
                                    <div>
                                    <input type="number" class="form-control" placeholder="0">
                                    </div>
                                    <label class="col-sm-2 col-form-label">บาท</label>
                                </div>
                            </div>
                            <div class="col-6">
                                <p>อื่น ๆ</p>
                                <div class="form-group row">
                                    <label class="col-sm-3 col-form-label">ค่าดอกเบี้ยกู้บ้าน</label>
                                    <div>
                                    <input type="number" class="form-control" placeholder="0">
                                    </div>
                                    <label class="col-sm-2 col-form-label">บาท</label>
                                </div>
                                <div class="form-group row">
                                    <label class="col-sm-3 col-form-label">กองทุนสำรองเลี้ยงชีพ</label>
                                    <div>
                                    <input type="number" class="form-control" placeholder="0">
                                    </div>
                                    <label class="col-sm-2 col-form-label">บาท</label>
                                </div>
                                <div class="form-group row">
                                    <label class="col-sm-3 col-form-label">ประกันสังคม</label>
                                    <div>
                                    <input type="number" class="form-control" placeholder="0">
                                    </div>
                                    <label class="col-sm-2 col-form-label">บาท</label>
                                </div>
                                <div class="form-group row">
                                    <label class="col-sm-3 col-form-label">อื่น ๆ</label>
                                    <div>
                                    <input type="number" class="form-control" placeholder="0">
                                    </div>
                                    <label class="col-sm-2 col-form-label">บาท</label>
                                </div>
                            </div>
                        </div>
                        <router-link to="/taxCalculate"><button type="button" class="btn btn-outline-primary">
                            ย้อนกลับ
                        </button></router-link>
                        <button type="submit" class="btn btn-primary">
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
    name: "TaxDeductCard",
};
</script>
<style>

</style>
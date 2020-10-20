<template>
    <div id="card">
    <div class="d-flex justify-content-md-center">
        <div class="card col-md-auto">
            <div class="card-body">
                <h4 class="text-center card-title mb-4 mt-1">ลดหย่อนภาษี</h4>
                <form>
                    <b-row>
                        <b-col cols = "6">
                            <p>การลงทุน</p>
                            <b-form-row>
                                <b-col><label class="col-form-label">ลงทุน RMF</label></b-col>
                                <b-col><b-form-input type="number" class="form-control" placeholder="0"/></b-col>
                                <b-col><label class="col-form-label">บาท</label></b-col>
                            </b-form-row>
                            <b-form-row>
                                <b-col><label class="col-form-label">ลงทุน SSF</label></b-col>
                                <b-col><b-form-input type="number" class="form-control" placeholder="0"/></b-col>
                                <b-col><label class="col-form-label">บาท</label></b-col>
                            </b-form-row>
                            <p>ประกันชีวิต</p>
                            <b-form-row>
                                <b-col><label class="col-form-label">เบี้ยประกันชีวิต</label></b-col>
                                <b-col><b-form-input type="number" class="form-control" placeholder="0"/></b-col>
                                <b-col><label class="col-form-label">บาท</label></b-col>
                            </b-form-row>
                            <b-form-row>
                                <b-col><label class="col-form-label">เบี้ยประกันชีวิตแบบบำนาญ</label></b-col>
                                <b-col><b-form-input type="number" class="form-control" placeholder="0"/></b-col>
                                <b-col><label class="col-form-label">บาท</label></b-col>
                            </b-form-row>
                            <p>บริจาค</p>
                            <b-form-row>
                                <b-col><label class="col-form-label">ยอดบริจาคทั่วไป</label></b-col>
                                <b-col><b-form-input type="number" class="form-control" placeholder="0"/></b-col>
                                <b-col><label class="col-form-label">บาท</label></b-col>
                            </b-form-row>
                            <b-form-row>
                                <b-col><label class="col-form-label">ยอดบริจาคเพื่อการศึกษา</label></b-col>
                                <b-col><b-form-input type="number" class="form-control" placeholder="0"/></b-col>
                                <b-col><label class="col-form-label">บาท</label></b-col>
                            </b-form-row>
                        </b-col>
                        <b-col cols = "6">
                            <p>อื่น ๆ</p>
                            <b-form-row>
                                <b-col><label class="col-form-label">ค่าดอกเบี้ยกู้บ้าน</label></b-col>
                                <b-col><b-form-input type="number" class="form-control" placeholder="0"/></b-col>
                                <b-col><label class="col-form-label">บาท</label></b-col>
                            </b-form-row>
                            <b-form-row>
                                <b-col><label class="col-form-label">กองทุนสำรองเลี้ยงชีพ</label></b-col>
                                <b-col><b-form-input type="number" class="form-control" placeholder="0"/></b-col>
                                <b-col><label class="col-form-label">บาท</label></b-col>
                            </b-form-row>
                            <b-form-row>
                                <b-col><label class="col-form-label">ประกันสังคม</label></b-col>
                                <b-col><b-form-input type="number" class="form-control" placeholder="0"/></b-col>
                                <b-col><label class="col-form-label">บาท</label></b-col>
                            </b-form-row>
                            <b-form-row>
                                <b-col><label class="col-form-label">อื่น ๆ (ต่อปี)</label></b-col>
                                <b-col><b-form-input type="number" class="form-control" placeholder="0"/></b-col>
                                <b-col><label class="col-form-label">บาท</label></b-col>
                            </b-form-row>
                        </b-col>
                    </b-row>
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
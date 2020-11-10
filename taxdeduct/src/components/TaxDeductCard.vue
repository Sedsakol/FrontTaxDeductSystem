<template>
    <div id="card">
    <div class="d-flex justify-content-md-center">
        <div class="card col-md-auto">
            <div class="card-body">
                <h4 class="text-center card-title">ลดหย่อนภาษี</h4>
                <form id="form-deduct">
                    <b-row>
                        <b-col cols = "6">
                            <b>การลงทุน</b>
                            <b-form-group>
                                <b-form-row>
                                    <b-col cols = "6"><label class="col-form-label">ลงทุน RMF</label></b-col>
                                    <b-col><b-form-input type="number" class="form-control" placeholder="0" min ="0"/></b-col>
                                    <b-col cols = "1"><label class="col-form-label">บาท</label></b-col>
                                </b-form-row>
                            </b-form-group>
                            <b-form-group>
                                <b-form-row>
                                    <b-col cols = "6"><label class="col-form-label">ลงทุน SSF</label></b-col>
                                    <b-col><b-form-input type="number" class="form-control" placeholder="0" min ="0"/></b-col>
                                    <b-col cols = "1"><label class="col-form-label">บาท</label></b-col>
                                </b-form-row>
                            </b-form-group>
                            <b>ประกันชีวิต</b>
                            <b-form-group>
                                <b-form-row>
                                    <b-col cols = "6"><label class="col-form-label">เบี้ยประกันชีวิต</label></b-col>
                                    <b-col><b-form-input type="number" class="form-control" placeholder="0" min ="0"/></b-col>
                                    <b-col cols = "1"><label class="col-form-label">บาท</label></b-col>
                                </b-form-row>
                            </b-form-group>
                            <b-form-group>
                                <b-form-row>
                                    <b-col cols = "6"><label class="col-form-label">เบี้ยประกันชีวิตแบบบำนาญ</label></b-col>
                                    <b-col><b-form-input type="number" class="form-control" placeholder="0" min ="0"/></b-col>
                                    <b-col cols = "1"><label class="col-form-label">บาท</label></b-col>
                                </b-form-row>
                            </b-form-group>
                            <b>บริจาค</b>
                            <b-form-group>
                                <b-form-row>
                                    <b-col cols = "6"><label class="col-form-label">ยอดบริจาคทั่วไป</label></b-col>
                                    <b-col><b-form-input type="number" class="form-control" placeholder="0" min ="0"/></b-col>
                                    <b-col cols = "1"><label class="col-form-label">บาท</label></b-col>
                                </b-form-row>
                            </b-form-group>
                            <b-form-group>    
                                <b-form-row>
                                    <b-col cols = "6"><label class="col-form-label">ยอดบริจาคเพื่อการศึกษา</label></b-col>
                                    <b-col><b-form-input type="number" class="form-control" placeholder="0" min ="0"/></b-col>
                                    <b-col cols = "1"><label class="col-form-label">บาท</label></b-col>
                                </b-form-row>
                            </b-form-group>
                        </b-col>
                        <b-col cols = "6">
                            <b>อื่น ๆ</b>
                            <b-form-group>
                                <b-form-row>
                                    <b-col cols = "6"><label class="col-form-label">ค่าดอกเบี้ยกู้บ้าน</label></b-col>
                                    <b-col><b-form-input type="number" class="form-control" placeholder="0" min ="0"/></b-col>
                                    <b-col cols = "1"><label class="col-form-label">บาท</label></b-col>
                                </b-form-row>
                            </b-form-group>
                            <b-form-group>
                                <b-form-row>
                                    <b-col cols = "6"><label class="col-form-label">กองทุนสำรองเลี้ยงชีพ</label></b-col>
                                    <b-col><b-form-input type="number" class="form-control" placeholder="0" min ="0"/></b-col>
                                    <b-col cols = "1"><label class="col-form-label">บาท</label></b-col>
                                </b-form-row>
                            </b-form-group>
                            <b-form-group>
                                <b-form-row>
                                    <b-col cols = "6"><label class="col-form-label">ประกันสังคม</label></b-col>
                                    <b-col><b-form-input type="number" class="form-control" placeholder="0" min ="0"/></b-col>
                                    <b-col cols = "1"><label class="col-form-label">บาท</label></b-col>
                                </b-form-row>
                            </b-form-group>
                            <b-form-group>
                                <b-form-row>
                                    <b-col cols = "6"><label class="col-form-label">อื่น ๆ (ต่อปี)</label></b-col>
                                    <b-col><b-form-input type="number" class="form-control" placeholder="0" min ="0"/></b-col>
                                    <b-col cols = "1"><label class="col-form-label">บาท</label></b-col>
                                </b-form-row>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col><router-link to="/taxCalculate"><button type="button" class="btn btn-outline-primary">
                            ย้อนกลับ
                        </button></router-link></b-col>
                        <b-col><router-link to="/result"><button type="submit" class="btn btn-primary">
                            ถัดไป
                        </button></router-link></b-col>
                    </b-row>
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
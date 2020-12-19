<template>
    <div id="card">
    <div class="d-flex justify-content-md-center">
        <div class="card w-50 col-md-auto">
            <div class="card-body">
                <h4 class="text-center card-title">ลดหย่อนภาษี</h4>
                <form id="form-deduct">
                    <b-row>
                        <b-col>
                            <b-form-group label="การลงทุน" label-class="font-weight-bold pb-3">
                                <b-form-row>
                                    <b-col cols = "6"><label class="col-form-label">ลงทุน RMF</label>
                                    <b-icon font-scale="0.75" class="ml-2" id="popover-rmf" icon="exclamation-circle"/>
                                    <b-popover target="popover-rmf" triggers="hover" placement= "rightbottom">
                                        เงื่อนไข (<span class="terxt-dange">ต้องครบเงื่อนไขทุกข้อ</span>)
                                        <ul>
                                            <li>ซื้อต่อเนื่องทุกปี หรือปีเว้นปี</li>
                                            <li>ถือหน่วยลงทุนอย่างน้อย 5 ปี และไม่ขายจนกว่าจะอายุครบ 55 ปี หรือเสียชีวิต หรือทุพพลภาพก่อน</li>
                                        </ul>
                                    </b-popover></b-col>
                                    <b-col><b-form-input type="number" class="form-control"  
                                    v-model= "rmf" min ="0"/></b-col>
                                    <b-col cols = "1"><label class="col-form-label">บาท</label></b-col>
                                </b-form-row>
                            </b-form-group>
                            <b-form-group>
                                <b-form-row>
                                    <b-col cols = "6"><label class="col-form-label">ลงทุน SSF</label>
                                    <b-icon font-scale="0.75" class="ml-2" id="popover-ssf" icon="exclamation-circle"/>
                                    <b-popover target="popover-ssf" triggers="hover" placement= "rightbottom">
                                        เงื่อนไข (<span class="terxt-dange">ต้องครบเงื่อนไขทุกข้อ</span>)
                                        <ul>
                                            <li>ซื้อต่อเนื่องทุกปี หรือปีเว้นปี</li>
                                            <li>ถือหน่วยลงทุนอย่างน้อย 10 ปี หรือเสียชีวิต หรือทุพพลภาพก่อน</li>
                                        </ul>
                                    </b-popover></b-col>
                                    <b-col><b-form-input type="number" class="form-control" placeholder="0" 
                                    v-model= "ssf" min ="0"/></b-col>
                                    <b-col cols = "1"><label class="col-form-label">บาท</label></b-col>
                                </b-form-row>
                            </b-form-group>
                            <b-form-group label="ประกันชีวิต" label-class="font-weight-bold pb-3">
                                <b-form-row>
                                    <b-col cols = "6"><label class="col-form-label">เบี้ยประกันชีวิต</label>
                                    <b-icon font-scale="0.75" class="ml-2" id="popover-life_insurance" icon="exclamation-circle"/>
                                    <b-popover target="popover-life_insurance" triggers="hover" placement= "rightbottom">
                                        เงื่อนไข (<span class="terxt-dange">ต้องครบเงื่อนไขทุกข้อ</span>)
                                        <ul>
                                            <li>กรมธรรม์มีระยะเวลาคุ้มครอง 10 ปีขึ้นไป</li>
                                            <li>ทำกับบริษัทประกันชีวิตในประเทศไทย</li>
                                            <li>รวมทุกกรมธรรม์</li>
                                        </ul>
                                    </b-popover></b-col>
                                    <b-col><b-form-input type="number" class="form-control" placeholder="0" 
                                    v-model= "life_insurance" min ="0"/></b-col>
                                    <b-col cols = "1"><label class="col-form-label">บาท</label></b-col>
                                </b-form-row>
                            </b-form-group>
                            <b-form-group>
                                <b-form-row>
                                    <b-col cols = "6"><label class="col-form-label">เบี้ยประกันชีวิตแบบบำนาญ</label>
                                    <b-icon font-scale="0.75" class="ml-2" id="popover-pension_insurance" icon="exclamation-circle"/>
                                    <b-popover target="popover-pension_insurance" triggers="hover" placement= "rightbottom">
                                        เงื่อนไข (<span class="terxt-dange">ต้องครบเงื่อนไขทุกข้อ</span>)
                                        <ul>
                                            <li>กรมธรรม์มีระยะเวลาคุ้มครอง 10 ปีขึ้นไป</li>
                                            <li>ทำกับบริษัทประกันชีวิตในประเทศไทย</li>
                                            <li>จ่ายผลประโยชน์เป็นรายงวดสม่ำเสมอ โดยจ่ายเท่ากันทุกงวดหรือในสัดส่วนที่เพิ่มขึ้นตามระยะเวลาเอาประกันก็ได้</li>
                                            <li>ช่วงอายุการจ่ายผลประโยชน์ต้องมีอยู่ตั้งแต่ 55-85 ปี หรือมากกว่านั้น</li>
                                            <li>จ่ายเบี้ยประกันครบก่อนได้รับผลประโยชน์</li>
                                        </ul>
                                    </b-popover></b-col>
                                    <b-col><b-form-input type="number" class="form-control" placeholder="0" 
                                    v-model= "pension_insurance" min ="0"/></b-col>
                                    <b-col cols = "1"><label class="col-form-label">บาท</label></b-col>
                                </b-form-row>
                            </b-form-group>
                            <b-form-group label="บริจาค" label-class="font-weight-bold pb-3">
                                <b-form-row>
                                    <b-col cols = "6"><label class="col-form-label">ยอดบริจาคทั่วไป</label>
                                    <b-icon font-scale="0.75" class="ml-2" id="popover-donation" icon="exclamation-circle"/>
                                    <b-popover target="popover-donation" triggers="hover" placement= "rightbottom">
                                        <ul>
                                            <li>สามารถตรวจสอบรายชื่อองค์กรการกุศลที่มีสิทธ์ขอหักลดหย่อนเงินบริจาคได้ที่ www.rd.go.th</li>
                                            <li>สามารถบริจาคผ่านระบบอิเล้กทรอนิกส์ได้ (e-Donation)</li>
                                        </ul>
                                    </b-popover></b-col>
                                    <b-col><b-form-input type="number" class="form-control" placeholder="0"
                                    v-model= "donation" min ="0"/></b-col>
                                    <b-col cols = "1"><label class="col-form-label">บาท</label></b-col>
                                </b-form-row>
                            </b-form-group>
                            <b-form-group>    
                                <b-form-row>
                                    <b-col cols = "6"><label class="col-form-label">ยอดบริจาคเพื่อการศึกษา</label>
                                    <b-icon font-scale="0.75" class="ml-2" id="popover-edu_donation" icon="exclamation-circle"/>
                                    <b-popover target="popover-edu_donation" triggers="hover" placement= "rightbottom">
                                        <ul>
                                            <li>เพื่อการศึกษา การกีฬา การพัฒนาสังคม และเพื่อโรงพยาบาลรัฐ</li>
                                            <li>สามารถบริจาคผ่านระบบอิเล้กทรอนิกส์ได้ (e-Donation)</li>
                                        </ul>
                                    </b-popover></b-col>
                                    <b-col><b-form-input type="number" class="form-control" placeholder="0"
                                    v-model= "edu_donation" min ="0"/></b-col>
                                    <b-col cols = "1"><label class="col-form-label">บาท</label></b-col>
                                </b-form-row>
                            </b-form-group>
                            <b-form-group label="อื่น ๆ" label-class="font-weight-bold pb-3">
                                <b-form-row>
                                    <b-col cols = "6"><label class="col-form-label">ค่าดอกเบี้ยกู้บ้าน</label>
                                    <b-icon font-scale="0.75" class="ml-2" id="popover-home_loans" icon="exclamation-circle"/>
                                    <b-popover target="popover-home_loans" triggers="hover" placement= "rightbottom">
                                        เงื่อนไข (<span class="terxt-dange">ต้องครบเงื่อนไขทุกข้อ</span>)
                                        <ul>
                                            <li>นำบ้านไปจำนองเพื่อค้ำประกันหนี้</li>
                                            <li>เจ้าหนี้จำนองต้องเป็นสถาบันการเงิน หรือผู้ที่กฎหมายอนุญาต</li>
                                            <li>ต้องอาศัยในบ้านหลังนี้</li>
                                            <li>ระยะเวลาจำนอง ต้องเท่ากับระยะเวลากู้ยืม</li>
                                        </ul>
                                    </b-popover></b-col>
                                    <b-col><b-form-input type="number" class="form-control" placeholder="0" 
                                    v-model= "home_loans" min ="0"/></b-col>
                                    <b-col cols = "1"><label class="col-form-label">บาท</label></b-col>
                                </b-form-row>
                            </b-form-group>
                            <b-form-group>
                                <b-form-row>
                                    <b-col cols = "6"><label class="col-form-label">กองทุนสำรองเลี้ยงชีพ</label>
                                    <b-icon font-scale="0.75" class="ml-2" id="popover-provident_fund" icon="exclamation-circle"/>
                                    <b-popover target="popover-provident_fund" triggers="hover" placement= "rightbottom">
                                        <ul>
                                            <li>เงินสมบทของนายจ้าง ใช้ลดหย่อนภาษีไม่ได้</li>
                                        </ul>
                                    </b-popover></b-col>
                                    <b-col><b-form-input type="number" class="form-control" placeholder="0"
                                    v-model= "provident_fund" min ="0"/></b-col>
                                    <b-col cols = "1"><label class="col-form-label">บาท</label></b-col>
                                </b-form-row>
                            </b-form-group>
                            <b-form-group>
                                <b-form-row>
                                    <b-col cols = "6"><label class="col-form-label">ประกันสังคม (ต่อปี)</label></b-col>
                                    <b-col><b-form-input type="number" class="form-control" placeholder="0"
                                    v-model= "social_security" min ="0"/></b-col>
                                    <b-col cols = "1"><label class="col-form-label">บาท</label></b-col>
                                </b-form-row>
                            </b-form-group>
                            <b-form-group>
                                <b-form-row>
                                    <b-col cols = "6"><label class="col-form-label">อื่น ๆ (ต่อปี)</label></b-col>
                                    <!-- <b-icon font-scale="0.75" class="ml-2" id="popover-social_security" icon="exclamation-circle"/>
                                    <b-popover target="popover-social_security" triggers="hover" placement= "rightbottom">
                                        <ul>
                                            <li></li>
                                        </ul>
                                    </b-popover></b-col> -->
                                    <b-col><b-form-input type="number" class="form-control" placeholder="0"
                                    v-model= "other" min ="0"/></b-col>
                                    <b-col cols = "1"><label class="col-form-label">บาท</label></b-col>
                                </b-form-row>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    
                </form>

                <div class="d-flex justify-content-md-center">
                    <router-link to = "/taxCalculate" class="pr-4">
                        <button type="button" class="btn btn-outline-primary" id="regularbutton">
                            ย้อนกลับ
                        </button>
                    </router-link>  
                    <button @click="next" class="btn btn-primary" id="regularbutton">
                        ถัดไป
                    </button>
                </div>

            </div>
        </div>
    </div>
    </div>
</template>

<script>
import store from "../store/index.js"
export default {
    name: "TaxDeductCard",
    data() {
        return {
            rmf: 0,
            ssf: 0,
            life_insurance: 0,
            pension_insurance: 0,
            donation: 0,
            edu_donation: 0,
            home_loans: 0,
            provident_fund: 0,
            social_security: 0,
            other: 0,

            tax : store.state.tax,
            allowance : store.state.allowance,
        }
    },
    methods: {
    async next() {
        let new_allowance = {
            rmf: this.rmf,
            ssf: this.ssf,
            life_insurance: this.life_insurance,
            pension_insurance: this.pension_insurance,
            donation: this.donation,
            edu_donation: this.edu_donation,
            home_loans: this.home_loans,
            provident_fund: this.provident_fund,
            social_security: this.social_security,
            other: this.other,
        }
        

        store.commit('allowance_change', new_allowance)
        this.allowance = store.state.allowance
        console.log(this.tax)
        
        let a = {
            salary: this.tax.salary,
            other_income: this.tax.other_income,
            marital: this.tax.marital,
            parent_num_dis: this.tax.parent_num_dis,
            child_before_2561: this.tax.child_before_2561,
            child_after_2561: this.tax.child_after_2561,
            protege: this.tax.protege,

            rmf: this.allowance.rmf,
            ssf: this.allowance.ssf,
            life_insurance: this.allowance.life_insurance,
            pension_insurance: this.allowance.pension_insurance,
            donation: this.allowance.donation,
            edu_donation: this.allowance.edu_donation,
            home_loans: this.allowance.home_loans,
            provident_fund: this.allowance.provident_fund,
            social_security: this.allowance.social_security,
            other: this.allowance.other

        }
        console.log(a)
        let currentObj = this;
        this.axios.post('tax/', a)
        .then(async function (response) {
            currentObj.output = response.data;
            store.commit('result_tax_change', currentObj.output)
            currentObj.$router.push("/result")
            
        })
        .catch(function (error) {
            currentObj.msg = error;
        });
        
    }
  }
};
</script>


<style>

</style>
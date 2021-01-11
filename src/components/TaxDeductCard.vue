<template>
    <div id="card" :key="change_component_key">
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
                                    <b-col><b-form-input type="number" class="form-control"  placeholder="0" 
                                    v-model= "rmf"  min ="0" /></b-col>
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
                                    v-model= "ssf"  min ="0"/></b-col>
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
                                    v-model= "life_insurance"  min ="0"/></b-col>
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
                                    v-model= "pension_insurance"   min ="0"/></b-col>
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
                                    v-model= "donation"  min ="0"/></b-col>
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
                                    v-model= "edu_donation"  min ="0"/></b-col>
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
                                    v-model= "home_loans"  min ="0"/></b-col>
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
                                    v-model= "provident_fund"  min ="0"/></b-col>
                                    <b-col cols = "1"><label class="col-form-label">บาท</label></b-col>
                                </b-form-row>
                            </b-form-group>
                            <b-form-group>
                                <b-form-row>
                                    <b-col cols = "6"><label class="col-form-label">ประกันสังคม (ต่อปี)</label></b-col>
                                    <b-col><b-form-input type="number" class="form-control" placeholder="0"
                                    v-model= "social_security"  min ="0"/></b-col>
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
                                    v-model= "other"  min ="0"/></b-col>
                                    <b-col cols = "1"><label class="col-form-label">บาท</label></b-col>
                                </b-form-row>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    
                </form>

                <div class="d-flex justify-content-md-center">
                    <button @click="back" type="button" class="btn btn-outline-primary" id="regularbutton">
                        ย้อนกลับ
                    </button>
                    <div class="pl-4"/>
                    <b-overlay :show="busy" opacity="0.5" spinner-small @hidden="onHidden" >
                        <button @click="next" class="btn btn-primary" id="regularbutton" ref="nextbutton">
                            ถัดไป
                        </button>
                    </b-overlay>
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
            rmf: store.state.allowance.rmf,
            ssf: store.state.allowance.ssf,
            life_insurance: store.state.allowance.life_insurance,
            pension_insurance: store.state.allowance.pension_insurance,
            donation: store.state.allowance.donation,
            edu_donation: store.state.allowance.edu_donation,
            home_loans: store.state.allowance.home_loans,
            provident_fund: store.state.allowance.provident_fund,
            social_security: store.state.allowance.social_security,
            other: store.state.allowance.other,

            tax : store.state.tax,

            change_component_key: 0,

            busy: false,
        }
    },
    mounted(){
        this.load_new_tax_from_cookie()
        this.load_new_allowance_from_cookie()
    },
    methods: {
        async back(){
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

            console.log(new_allowance)
            
            this.$cookies.set('new_allowance',new_allowance)
            store.commit('allowance_change', new_allowance)

            this.change_component_key += 1
            this.$router.push("/taxCalculate")
        },
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
            console.log(new_allowance)
            this.$cookies.set('new_allowance',new_allowance);
            store.commit('allowance_change', new_allowance) 
            let a = {
                salary: this.tax.salary,
                other_income: this.tax.other_income,
                marital: this.tax.marital,
                parent_num_dis: this.tax.parent_num_dis,
                child_before_2561: this.tax.child_before_2561,
                child_after_2561: this.tax.child_after_2561,
                protege: this.tax.protege,

                rmf: new_allowance.rmf,
                ssf: new_allowance.ssf,
                life_insurance: new_allowance.life_insurance,
                pension_insurance: new_allowance.pension_insurance,
                donation: new_allowance.donation,
                edu_donation: new_allowance.edu_donation,
                home_loans: new_allowance.home_loans,
                provident_fund: new_allowance.provident_fund,
                social_security: new_allowance.social_security,
                other: new_allowance.other
            }
            let currentObj = this;
            this.busy = true
            this.axios.post('tax/', a)
            .then(async function (response) {
                currentObj.output = response.data;
                currentObj.$cookies.set('result_tax',currentObj.output);
                store.commit('result_tax_change', currentObj.output)
                //console.log(currentObj.output)
                currentObj.change_component_key += 1
                currentObj.$router.push("/result")
            })
            .catch(function (error) {
                currentObj.msg = error;
                this.busy = false
            });
            
        },
        load_new_allowance_from_cookie(){
            if (this.$cookies.isKey("new_allowance")){
                let new_allowance = this.$cookies.get("new_allowance")
                store.commit('allowance_change', new_allowance)

                this.rmf = store.state.allowance.rmf
                this.ssf = store.state.allowance.ssf
                this.life_insurance = store.state.allowance.life_insurance
                this.pension_insurance = store.state.allowance.pension_insurance
                this.donation = store.state.allowance.donation
                this.edu_donation = store.state.allowance.edu_donation
                this.home_loans = store.state.allowance.home_loans
                this.provident_fund = store.state.allowance.provident_fund
                this.social_security = store.state.allowance.social_security
                this.other = store.state.allowance.other

                this.change_component_key += 1
                
            }
        },
        load_new_tax_from_cookie(){
            if (this.$cookies.isKey("new_tax")){
                let new_tax = this.$cookies.get("new_tax")
                store.commit('tax_change', new_tax)
                this.tax = store.state.tax

                this.change_component_key += 1
            }
        },
        onHidden() {
        // Return focus to the button once hidden
        this.$refs.nextbutton.focus()
      },
    }
};
</script>


<style>

</style>
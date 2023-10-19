<template>
  <!DOCTYPE html>
  <html lang="en">
    <div v-if="this.showPdf">
      <vue-pdf-embed :source="source2" />
    </div>
    <head>
      <meta charset="UTF-8">
      <title>ยืนยันตัวตน</title>
      <link href="../assets/css/bootstrap.min.css" rel="stylesheet" />
      <link href="../assets/css/styles.min.css" rel="stylesheet" />
    </head>
      <div class="loading" v-if="this.loading === true"></div>
      <div v-show="this.showBody">
        <div class="container-sms">
          <div class="body-sms">
            <div class="top-flex">
              <img src="../assets/images/next-money-logo.png" class="mx-auto d-block img-fluid" style="width: 150px;" />
              <br/>
              <div class="text-center" v-if="this.carLicenseNumber != undefined">
                <label class="sms-top-text" >{{this.documentname}}</label><br />
                <label class="sms-top-text">เลขที่สัญญา &nbsp </label><label class="sms-loan-text">{{ this.loanId }} </label><br />
                <label class="sms-top-text">ทะเบียน &nbsp </label><label class="sms-loan-text">{{ this.carLicenseNumber }} </label>
              </div>
              <div class="text-center" v-if="this.carLicenseNumber === null">
                <label class="sms-top-text">{{this.documentNcbName}}</label><br />
                <label class="sms-top-text">เลขที่สัญญา &nbsp </label><label class="sms-loan-text">{{ this.loanId }} </label><br />
              </div>
              <div class="text-center" v-if="this.documentType === 'encbyearly'">
                <label class="sms-top-text">{{this.documentNcbName}}</label><br />
                <label class="sms-top-text">เลขที่สัญญา  &nbsp </label><label class="sms-loan-text">{{ this.loanId }} </label><br />
              </div>
            </div>
          </div>
          <div class="center-body-flex">
            <div class="center-body-1">
              <p class="sms-text-box">กรุณาใส่รหัสผ่าน 8 หลักของท่าน</p>
              <p class="text-warning-sms">ใช้รหัส วันเดือนปีเกิด เช่น 5 ม.ค พ.ศ. 2513 ใส่ 05011970</p>
              <div class="text-center">
                  <div class="id-card-passcode" v-if="showInput">
                      <input placeholder="รหัสผ่าน" maxlength="8" type="number" pattern="[0-9]*" inputmode="numeric" id="idCard" name="idCard" v-model="idcard" v-on:keypress="NumbersOnly($event)"/>
                  </div>
                  <div class="id-card-passcode-valid"  v-if="showValid">
                      <input placeholder="รหัสผ่าน" maxlength="8" type="number" pattern="[0-9]*" inputmode="numeric" id="idCard" name="idCard" v-model="idcard" v-on:num="NumbersOnly($event)"/>
                  </div>
                  <div class="flex-valid" v-if="showValid">
                    <img src="../assets/icons/warning.png" class="icon-warning" style="width: 20px;" />{{ validDataText }}
                  </div>
                  <div class="p-3 text-center" >
                    <numkeyboard v-model="num" ok-text="OK" text-align="left"></numkeyboard>
                    <button type="button" id="acceptBtn" class="btn-pass-code text-white" disabled @click="callPdf()">
                      ยืนยัน
                    </button>
                  </div>
              </div>
            </div>
            <div class="center-body-2">
                <div class="text-footer">
                  <label>ตรวจสอบและดาวน์โหลดเอกสาร </label><label class="text-red-sms">&nbsp ภายใน 90 วัน </label><br /><label>นับตั้งแต่ได้รับข้อความ</label>
                </div>
            </div>
          </div>
          <div class="flex-2">
            <div class="footer-sms">
              <div class="item">
                <img src="../assets/icons/authentication.png" class="mx-auto d-block img-fluid" style="width: 50px;" />
                <label>ปกป้องข้อมูลการใช้งาน</label>
              </div>
              <div class="">
                <img src="../assets/icons/insurance.png" class="mx-auto d-block img-fluid" style="width: 50px;" />
                <label>เข้าใช้งานด้วยรหัสผ่าน</label>
              </div>
            </div>
          </div>
        </div>
      </div>
  </html>
</template>


<script>
import VuePdfEmbed from 'vue-pdf-embed/dist/vue2-pdf-embed'
export default ({
  components: {
    VuePdfEmbed,
  },
  data(){
    return {
      idcard: '',
      pdf:'',
      bucketName: "",
      fileName: "",
      birthDate: '',
      loanId:'',
      param:{},
      checkBirthDay: false,
      listBirthDate:[],
      validData: false,
      showBody: true,
      showInput: true,
      showValid: false,
      showPdf: false,
      validDataText:"ระบุรหัสผ่านไม่ถูกต้อง",
      carLicenseNumber:'',
      acceptBirthDate: false,
      classValidInput: "id-card-passcode",
      documentname:"ใบแจ้งยอดบัญชี/ใบเสร็จอิเล็กทรอนิกส์",
      documentNcbName:"หนังสือแจ้งการส่งข้อมูลให้แก่บริษัทข้อมูลเครดิตแห่งชาติ จำกัดทางอิเล็กทรอนิกส์",
      loading: false,
      isMobileDevice: false,
      source2: ""
    }
  },
  mounted() {
    this.bucketName = this.$route.query.bucketName
    this.fileName = this.$route.query.fileName,
    this.loanId = this.$route.query.loanId,
    this.carLicenseNumber = this.$route.query.carLicenseNumber
  },
  watch: {
    idcard(newData, oldData) {
      if (newData.length === 8) {
        document.getElementById("acceptBtn").disabled = false;
      } else {
        this.showInput = true
        this.showValid = false
        document.getElementById("acceptBtn").disabled = true;
      }
    }
  },
  methods: {
    callPdf(){
      if(this.idcard.length === 8){
        this.loading = true
        this.checkBirthDate(this)
      }
    },
    checkBirthDate({$axios}){
      // $axios.$get("https://prod-api.nextmoney.co.th/APIEtax/api/EApplication/user-details?loanId=" + this.loanId)
      $axios.$get("https://uat-api.nextmoney.co.th/APIEtax/api/EApplication/user-details?loanId=" + this.loanId)
        .then((response) => {
          if(response.length === 0){
            this.showValid = true
            this.showInput = false
            this.loading = false
          }
          response.forEach(a => {
                let birthday = a.birthdate
                if(birthday === this.idcard){
                  this.checkBirthDay = true
                  this.openPdf(this)
                }else{
                  this.showInput = false
                  this.showValid = true
                }
            })
        })
        .catch(function (error)
        {
          console.log(error);
        });
    },
    openPdf({$axios}){
      let request = {
        bucketName: this.bucketName,
        filename: this.fileName
      }
      $axios.$post("https://synergy.nextcapital.co.th/APIS3/api/AWS/GetFile", request)
        .then((pdfFile) => {
          this.showBody = false
          this.pdf = pdfFile
          this.source2 = pdfFile
          this.isMobile()
        })
        .catch(function (error)
        {
            console.log(error);
        });
    },
    isMobile(){
      if( screen.width <= 760 ) {
        this.isMobileDevice = true;
        this.showPdf = true
        this.loading = false
      }
      else {
        this.isMobileDevice = false;
        let filename = ''
        if(this.carLicenseNumber != undefined){
          filename = this.documentname
        }else {
          filename = this.documentNcbName
        }
        showPdfInNewTab(this.pdf,filename)
        this.loading = false
      }
    },
    NumbersOnly(evt) {
      if(evt.key !== undefined)
      {
        var charCode = (evt.which) ? evt.which : evt.keyCode;
        if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
          evt.preventDefault();
        } 
        else {
          return true;
        }
      }
    }
  }
})
  function showPdfInNewTab(base64Data, fileName) {
      let pdfWindow = window.open("")
      pdfWindow.document.write("<html<head><title>"+fileName+"</title><style>body{margin: 0px;}iframe{border-width: 0px;}</style></head>");
      pdfWindow.document.write("<iframe width='100%' height='100%' src='" + (base64Data) + "'></iframe>","_self")
  }
</script>
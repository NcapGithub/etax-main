<template>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ลงทะเบียนรับ ใบแจ้งหนี้/ใบเสร็จ/ใบกำกับภาษีอิเล็กทรอนิคส์</title>
    <link href="../assets/css/bootstrap.min.css" rel="stylesheet" />
    <link href="../assets/css/styles.min.css" rel="stylesheet" />
</head>
<body>

    <header class="p-2 bg-blue">
        <h1 class="text-white text-center m-0">
            ลงทะเบียนรับ<br />
            <small class="md-font-size">ใบแจ้งหนี้/ใบเสร็จ/ใบกำกับภาษีอิเล็กทรอนิคส์</small>
        </h1>
    </header>
    <div class="text-center my-5">
        <img src="../assets/images/next-capital-logo.png" width="197" />
    </div>
    <div class="container" style="min-height: calc(100vh - 60vh);">
        <div class="row">
            <div class="col-md-4 offset-md-4">
                <p class="mb-4">กรุณากรอกข้อมูลผู้ทำสัญญา</p>
                <div :class="classIsValid">
                    <input placeholder="" type="text" id="idCard" name="idCard" class="w-100" v-model="idCard" v-on:keyup="idCardPattern($event)"/>
                    <label>เลขบัตรประชาชน</label>
                </div>
            </div>
        </div>
        <div class="row mt-4">
            <div class="col-md-4 offset-md-4">
                <p class="mb-2 text-blue">กรุณาระบุวันเดือนปีเกิด</p>
                <div class="d-flex justify-content-between">
                    <div :class="classYearInput" style="width: 30%;"> 
                        <select class="w-100" v-model="yearInput" @change="yaerChange()">
                            <option placeholder=" " value="" selected disabled>ระบุปี</option>
                            <option v-for="item in listYaer" :value="item" :key="item">{{ item }}</option>
                        </select>
                        <label>ปี ค.ศ.</label>
                    </div>
                    <div :class="classMonthInput" style="width: 45%;"> 
                        <select class="w-100" @change="getDaysInMonth($event.target.value)" v-model="monthInput">
                            <option placeholder=" " value="" selected disabled>ระบุเดือน</option>
                            <option v-for="item in monthNamesThai" :value="item.value" :key="item.value">{{ item.name }}</option>
                        </select>
                        <label>เดือน</label>
                    </div>
                    <div :class="classDayInput" style="width: 20%;"> 
                        <select class="w-100" v-model="dayInput">
                            <option placeholder=" " value="" selected disabled>ระบุวัน</option>
                            <option v-for="item in daysInMonthResponse" :value="item" :key="item">{{ item }}</option>
                        </select>
                        <label>วัน</label>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="bg-white p-3 text-center">
    <p class="text-red" id="allData" v-if="validData">{{this.validDataText}}</p>
        <button type="button" id="acceptBtn" class="btn text-white" @click="goToPage()">
            ถัดไป
        </button>
    </div>
</body>
</html>
</template>
<script>
import Vue from 'vue'
import loading from 'vuejs-loading-screen'
Vue.use(loading, {
    bg: 'rgb(255 255 255 / 60%)'
})
export default ({
    data(){
        return {
            idCard: "",
            validData: false,
            apiPostOtp:'http://172.20.1.154:9292/rest/v2/short-urls',
            customerInfo: {
                idCard: "",
                firstName: "",
                lastName:"",
                mobileNumber:"",
                contractModels:[],
            },
            consentApproved:[],
            validDataText: "กรุณากรอกข้อมูลให้ครบถ้วน",
            idcardValid: false,
            yearInput:"",
            listYaer:[],
            dayInput:"",
            monthInput:"",
            daysInMonthResponse:[],
            classIsValid:"material-textfield",
            classDayInput: "material-textfield",
            classMonthInput: "material-textfield",
            classYearInput: "material-textfield",
            monthNamesThai: [
                {name: "มกราคม", value:1},{name:"กุมภาพันธ์", value:2},{name:"มีนาคม", value:3},{name:"เมษายน", value:4},{name:"พฤษภาคม", value:5},{name:"มิถุนายน", value:6},{name:"กรกฎาคม", value:7},{name:"สิงหาคม", value:8},{name:"กันยายน", value:9},{name:"ตุลาคม", value:10},{name:"พฤษจิกายน", value:11},{name:"ธันวาคม", value:12}]
        }
    },
    mounted()
    {
        this.cuurentDate()
        this.consentApproved = JSON.parse(localStorage.getItem('listConsentIsApproved'))
    },
    created(){

    },
    methods: {
        yaerChange(){
            this.dayInput =""
            this.monthInput =""
        },
        getDaysInMonth(month) {
            this.dayInput =""
            let daysInMonth = new Date(this.yearInput, month, 0).getDate();
            for (let index = 1; index <= daysInMonth; index++) {
                this.daysInMonthResponse.push(index)
            }
        },
        cuurentDate(){
            let dateNow = new Date()
            let year = dateNow.getFullYear()
            let minYears = this.year - 75
            let listYears =[]
            for (let index = minYears; index <= year; index++) {
                listYears.push(index)
            }
            this.listYaer = listYears
        },
        async getCustomerInfo({$axios}){
            this.$isLoading(true)
            let request = {
                idCard: this.idCard.replaceAll('-', '')
            }
            await $axios.$post("https://uat-apirpt.nextcapital.co.th/APIEtax/api/contractControllers/details", request)
            .then((response) => {
                this.customerInfo = response
                localStorage.setItem('customerInfoModel', JSON.stringify(response))
                this.$isLoading(false)
                window.location = './otp';
            })
            .catch((error) =>
            {
                console.log(error);
                this.validDataText = "ไม่พบข้อมูล"
                this.validData = true
                this.$isLoading(false)
            });
        },
        goToPage() {
            
            if(this.idCard === ""){
                this.classIsValid = "valid-input"
                this.validData = true
            }if(this.yearInput === ""){
                this.classYearInput = "valid-input"
                this.validData = true
            }if(this.monthInput === ""){
                this.classMonthInput = "valid-input"
                this.validData = true
            } if(this.dayInput === ""){
                this.classDayInput = "valid-input"
                this.validData = true
            } if(this.idCard !== "" && this.yearInput !== "" && this.monthInput !== "" && this.dayInput !== ""){
                this.getCustomerInfo(this)
            }
            // if(this.idCard !== "" && this.yearInput !== "" && this.monthInput !== "" && this.dayInput !== ""){
            //     this.getCustomerInfo(this)
            // }
            // else{
            //     this.$isLoading(false)
            //     this.classIsValid = "valid-input"
            //     this.validData = true
            // }
        },
        idCardPattern(event){
            if(event.key !== undefined){
                this.idCard = formatDash(this.idCard, [2, 7, 13, 16], 17).replace(/[^0-9-]+/g, '')
            }
        }
    }
})
function formatDash (data, listIndex, maxLength = 20) {
  data = data.replace(/-/g, '')
  listIndex.forEach((value, index) => {
    if (data.length >= value - 1) {
      data = data.substr(0, value - 1) + '-' + data.substr(value - 1, data.length - 1)
    }
  })
  return data.substr(0, maxLength)
}

export function checkPID (value) {
  let allow = false
  if (value.length === 13) {
    var sum = 0
    for (let i = 0; i < 12; i++) {
      sum += parseFloat(value.charAt(i)) * (13 - i)
    }
    var num1 = (11 - (sum % 11)) % 10
    var charAt = value.charAt(12)
    var num2 = parseFloat(charAt)
    allow = num1 === num2
  }
  return allow
}
</script>
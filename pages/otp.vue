<template>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ระบบได้ทำการส่งรหัส OTP ไปยังเบอร์โทรศัพท์ของท่าน</title>

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
    <div class="card-top mt-4 text-center" style="padding-top: 60px;">
        <img src="../assets/images/otp-img.png" style="max-width: 320px;" />
        <h1 class="xl-font-size text-dark-grey mt-5 mb-3">
            ระบบได้ทำการส่งรหัส OTP<br />
            ไปยังเบอร์โทรศัพท์ของท่าน <span class="text-blue">{{phoneNumber}}</span>
        </h1>
        <p class="xl-font-size text-red">หมายเลขนี้จะเป็นหมายเลขที่ใช้จัดส่งใบแจ้งหนี้/ใบเสร็จ/ใบกำกับภาษี</p>
        <a href="#" class="text-blue text-decoration-underline">ต้องการ เปลี่ยนเบอร์โทรศัพท์ ติดต่อลูกค้าสัมพันธ์ 02 342 9699</a>
        <br /><br />
        <span class="text-grey mt-3" style="margin-right: 30px;">Ref: <span id="refCode">{{referenceOtp}}</span></span>
        <span class="text-grey mt-3">อายุรหัส <span id="otpCountdown"><span> {{countTime}}:</span>{{countDown}}</span> นาที</span>
        <div id="otp" class="d-flex justify-content-center mb-3">
            <input v-model="otp1" type="text" id="input1" class="text-center xl-font-size" maxlength="1" v-on:keyup="nextField($event,'input2')">
			<input v-model="otp2" type="text" id="input2" class="text-center xl-font-size" maxlength="1" v-on:keyup="nextField($event,'input3')">
			<input v-model="otp3" type="text" id="input3" class="text-center xl-font-size" maxlength="1" v-on:keyup="nextField($event,'input4')">
			<input v-model="otp4" type="text" id="input4" class="text-center xl-font-size" maxlength="1" v-on:keyup="nextField($event,'input5')">
			<input v-model="otp5" type="text" id="input5" class="text-center xl-font-size" maxlength="1" v-on:keyup="nextField($event,'input6')">
			<input v-model="otp6" type="text" id="input6" class="text-center xl-font-size" maxlength="1">
        </div>
        <span class="lg-font-size text-dark-grey">
            ไม่ได้รับรหัส OTP <a href="" id="reSendBtn" class="text-blue text-decoration-underline">ส่งใหม่อีกครั้ง</a>
        </span>
        <div class="text-center" style="margin-top: 83px;">
        <p class="text-red" id="validOtp" v-if="validOtp">รหัส OTP ไม่ถูกต้อง</p>
            <button type="button" id="confirmBtn" class="btn text-white mx-auto mb-5" v-on:click="summitOtp()">
                ยืนยัน
            </button>
        </div>
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
            referenceOtp: "",
            baseURlUAT: "https://uat-apirpt.nextcapital.co.th/APIOTP/",
            phoneNumber: "",
            countTime: 4,
            countDownTime: "",
            countDown: 59,
            otpNumberInput: "",
            otp1:"",
            otp2:"",
            otp3:"",
            otp4:"",
            otp5:"",
            otp6:"",
            validOtp: false,
            isLoading: false,
            fullPage: true,
            model:{}
        }
    },
    components:{
    },
    mounted()
    {
        this.model = JSON.parse(localStorage.getItem('customerInfoModel'))
        // this.phoneNumber = this.model.mobileNumber
        this.phoneNumber = "0909499157"
        this.postOtp(this);
        // localStorage.setItem('mobileNumber', this.phoneNumber)
    },
    watch: {

    },
    methods: {
        doAjax() {
            setTimeout(() => {
            }, 5000)
        },
        nextField(event,last){
            if(event.key !== undefined && event.key !== 'Backspace'){
                this.validOtp = false
                document.getElementById(last).focus();
            }
        },
        summitOtp(){
            this.otpNumberInput = this.otp1+this.otp2+this.otp3+this.otp4+this.otp5+this.otp6
            if(this.otpNumberInput.length == 6){
                this.verifyOTP()
            } else {
                this.validOtp = true
            }
        },
        countDownTimer () {
            if (this.countDown > 0) {
                setTimeout(() => {
                    this.countDown -= 1
                    if(this.countDown == 0 && this.countTime > 0){
                        this.countTime -= 1
                        this.countDown += 59
                    }
                    this.countDownTimer()
                }, 1000)
            }
        },
        sendOTP(){
            this.postOtp(this);
        },
        verifyOTP(){
            this.postVerifyOtp(this);
        },
        async postOtp({$axios}){
            this.$isLoading(true)
            let request = {
                phoneNumber: this.phoneNumber,
                message: "รหัส OTP คือ {0} (Ref:{1}) สำหรับลงทะเบียนรับ ใบแจ้งหนี้/ใบเสร็จ/ใบกำกับภาษีอิเล็กทรอนิคส์ หมดอายุใน 5 นาที"
            }
            const headers = {
                "CORRELATION_ID": "88e3f210-9063-4fe1-8fe3-037b830d5a95"
            }
            await $axios.$post(this.baseURlUAT + "api/SMS/SendOTP", request, {headers})
            .then((response) => {
                this.referenceOtp = response.OTPRefNo
                this.$isLoading(false)
            })
            .catch(function (error)
            {
                console.log(error);
            });
        },
        async postVerifyOtp({$axios}){
            let request = {
                phoneNumber: this.phoneNumber,
                otpRefNo: this.referenceOtp,
                otpNumber: this.otpNumberInput
            }
            const headers = {
                "CORRELATION_ID": "88e3f210-9063-4fe1-8fe3-037b830d5a95"
            }
            await $axios.$post(this.baseURlUAT + "api/SMS/VerifyOTP", request, {headers})
            .then((response) => {
                console.log("verify otp message", response.message)
                if(response.message == 'success'){
                    window.location = './success'
                }
            })
            .catch(function (error)
            {
                console.log(error);
            });
        }
    },
    created () {
        this.countDownTimer()
    }
})
</script>
<template>
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ลงทะเบียนรับ ใบแจ้งหนี้/ใบเสร็จ/ใบกำกับภาษีอิเล็กทรอนิคส์</title>

    <link href="../assets/css/bootstrap.min.css" rel="stylesheet" />
    <link href="../assets/css/styles.min.css" rel="stylesheet" />
</head>
<body class="bg-white-grey">

    <header class="p-2 bg-blue">
        <h1 class="text-white text-center m-0">
            ลงทะเบียนรับ<br />
            <small class="md-font-size">ใบแจ้งหนี้/ใบเสร็จ/ใบกำกับภาษีอิเล็กทรอนิคส์</small>
        </h1>
    </header>
    <div class="bg-white text-center p-2">
        <h2 class="lg-font-size text-blue fw-bold m-0">ข้อกำหนดและเงื่อนไข</h2>
    </div>
    <div class="mb-3" id="consentTemplateEtax">
    </div>
    <br>
    <input type="checkbox" id="acceptCheck" v-model="acceptValue" v-on:change="Acceptional(acceptValue)"/> <span class="text-black">{{this.consentDescription}}</span>
    <div class="bg-white p-3 text-center">
        <button type="button" id="acceptBtn" class="btn text-white" disabled @click="goToPage('./register')">
            {{conditionText}}
        </button>
    </div>
</body>
</html>
</template>
<script>
export default ({
    data(){
        return{
            acceptValue: "",
            conditionText: "ยอมรับเงื่อนไข",
            listConsentIsApproved:[],
            consentDescription:"ข้าพเจ้ายอมรับในนโยบายการเปิดเผยข้อมูล",
            consentType:"Consent_E-TAX",
            consentPdpaModel: {}
        }
    },
    mounted()
    {
        this.getTemplate(this)
        this.setDataConsent()
    },
    methods: {
        goToPage(urlPath) {
            window.location = urlPath;
        },
        setDataConsent(){
            this.listConsentIsApproved  = JSON.parse(localStorage.getItem('listConsentIsApproved'))
            let consentIsApproved = {
                    consentType: this.consentType,
                    consentItemDescription: this.consentDescription,
                    consentItemId: this.consentType
            }
            if(this.listConsentIsApproved != null){
                this.listConsentIsApproved.push(consentIsApproved)
            }
            else{
                let newListConsentIsApproved = []
                newListConsentIsApproved.push(consentIsApproved)
                this.listConsentIsApproved = newListConsentIsApproved
            }
            localStorage.setItem('listConsentIsApproved', JSON.stringify(this.listConsentIsApproved))
        },
        Acceptional(acceptValue){
            if (acceptValue) {
                document.getElementById("acceptBtn").disabled = false;
            } else {
                document.getElementById("acceptBtn").disabled = true;
            }
        },
        async getTemplate({$axios}){
            await $axios.$get("https://uat-apirpt.nextcapital.co.th/APIEtax/api/EApplication/template-consent", 
            {
                params:{
                    consentType: this.consentType
                }
            })
            .then((response) => {
                this.consentPdpaTemplateModel = response
                document.getElementById("consentTemplateEtax").innerHTML = this.consentPdpaTemplateModel.consentTemplate
            })
            .catch(function (error)
            {
                console.log(error);
            });
        }
    }
    
})
</script>
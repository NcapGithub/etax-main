<template>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ลงทะเบียนสำเร็จ - ลงทะเบียนรับ ใบแจ้งหนี้/ใบเสร็จ/ใบกำกับภาษีอิเล็กทรอนิคส์</title>
    <link href="../assets/css/bootstrap.min.css" rel="stylesheet" />
    <link href="../assets/css/styles.min.css" rel="stylesheet" />
</head>
<body class="bg-white-grey">

    <header class="p-4 bg-blue">
        <h1 class="text-white text-center m-0">
            ลงทะเบียนสำเร็จ
        </h1>
    </header>

    <div class="mt-5 text-center text-dark-grey">
        <img src="../assets/icons/success-icon.png" style="max-width: 60px;" />
        <p class="xl-font-size mt-4">
            ใบแจ้งหนี้ ใบเสร็จ และ ใบกำกับภาษี<br />
            จะถูกส่งให้ท่าน<br />
            <span class="text-blue"><b>ช่องทาง : SMS</b>  หมายเลข  </span>{{mobileNumber}}<br />
            โดยจะผลวันถัดไป
        </p>
        <p class="xl-font-size mt-4">สัญญาดังต่อไปนี้</p>
        <div class="card mx-auto mt-3 border-0 text-start" style="max-width: 500px;">
            <ul class="list-group">
                <li v-for="item in contractNumber" class="list-group-item p-0">
                    <a href="#" class="d-block py-3 px-4 lg-font-size">
                        <img src="../assets/icons/signature-icon.png" width="25" class="me-2" />
                        เลขที่สัญญา {{item}}
                    </a>
                </li>
            </ul>
        </div>

        <div class="text-center mt-4">
            <a href="/" type="submit" id="confirmBtn" class="btn text-white mx-auto mb-5">
                กลับหน้าหลัก
            </a>
        </div>
    </div>
</body>
</html>
</template>
<script>

export default{
    data(){
        return {
            mobileNumber:"0909499157",
            contractModel: [],
            customerInfoModel:{},
            consentIsApproved:[],
            correlationId:"",
            contractNumber:[]
        }
    },
    mounted()
    {
        // this.mobileNumber = localStorage.getItem('mobileNumber')
        this.customerInfoModel = JSON.parse(localStorage.getItem('customerInfoModel'))
        // this.contractModel = this.model.contractNumbers
        this.contractModel =  this.customerInfoModel.contractModels
        this.consentIsApproved = JSON.parse(localStorage.getItem('listConsentIsApproved'))
        this.correlationId =  this.randomString(8)
        this.setContractData()
        // this.postRegister(this)
    },
    methods: {
        randomString(len) {
            var str = ""; 
            let timeStemp = Math.floor(Date.now() / 1000)
                for (var i = 0; i < len; i++) {
                    var rand = Math.floor(Math.random() * 62);
                    var charCode = rand += rand > 9 ? (rand < 36 ? 55 : 61) : 48;
                    str += String.fromCharCode(charCode);
                }
            return timeStemp + "_" + str;
        },
        setContractData(){
            this.contractModel.forEach(a => {
                let applicationNumber = a.applicationNumber
                this.contractNumber.push(applicationNumber)
            })
        },
        async postRegister({$axios}){
            // this.$isLoading(true)
            let listRequest = []
            this.consentIsApproved.forEach(consent => {
                this.contractModel.forEach(a => {
                    let request = {
                        correlationId: this.correlationId,
                        consentType: consent.consentType,
                        consentVersion: 1,
                        citizenId: this.customerInfoModel.idCard,
                        consentItemId: consent.consentItemId,
                        consentItemDescription: consent.consentItemDescription,
                        answer:"Y",
                        status:"active",
                        isReported: "N",
                        EappNo: a.applicationNumber,
                        AgreementNo: a.agreementNumber
                    }
                    listRequest.push(request)
                })
            });
            console.log("listRequest", listRequest)
            await $axios.$post("https://uat-apirpt.nextcapital.co.th/APIEtax/api/EApplication/user-consent", listRequest)
            .then((response) => {
                console.log("response", response)
                // this.$isLoading(false)
            })
            .catch(function (error)
            {
                console.log(error);
            });
        }
    }
}
</script>
<template>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>บริการส่งใบแจ้งหนี้ ใบเสร็จ และใบกำกับภาษีอิเล็กทรอนิคส์ผ่าน บัญชีไลน์ หรือ SMS</title>
    
        <link href="../assets/css/bootstrap.min.css" rel="stylesheet" />
        <link href="../assets/css/styles.min.css" rel="stylesheet" />
    </head>
    <body class="bg-white-grey">
        <h1 class="text-blue text-center fw-bold my-5">
        บริการส่งใบแจ้งหนี้ ใบเสร็จ<br /> และใบกำกับภาษีอิเล็กทรอนิคส์<br />
        <small class="lg-font-size">ผ่าน บัญชีไลน์ หรือ SMS</small>
        </h1>
        <img src="../assets/images/landing-img.png" class="mx-auto d-block img-fluid" style="width: 500px;" />
        <div class="container text-center mb-5">
        <div class="card mx-auto mt-3 border-0" style="max-width: 500px;">
            <ul class="list-group">
                <li class="list-group-item p-0 expand">
                    <a href="#" class="d-block text-center p-2 fw-bold lg-font-size">ขั้นตอนการสมัคร</a>
                </li>
                <li class="list-group-item p-0 expand">
                    <a href="#" class="d-block text-center p-2 fw-bold lg-font-size">วิธีการใช้งาน</a>
                </li>
            </ul>
        </div>
        <p class="mt-3 text-blue fw-bold">เลือกกดสมัครตาม ช่องทางที่ต้องการรับ</p>
        <a @click="goToPage('./condition')" type="button" class="btn text-white">
            สมัครรับ ผ่านทางบัญชีไลน์
        </a>
        <br />
        <a @click="goToPage('./pdpa')" type="button" class="btn text-white mt-2">
            สมัครรับ ผ่านทาง SMS
        </a>
    </div>
    </body>
    </html>
</template>

<script>
export default ({
    data(){
        return {
            // userId:"U0001d0ac59706cec1283f7ed8653f9c6",
            hasLineccount: false,
        }
    },
    mounted()
    {
        // this.poDetailId = this.$route.params.id
        this.userId = this.$route.query.userId;
        localStorage.clear();
        sessionStorage.clear()
    },
    methods: {
        goToPage(urlPath) {
            window.location = urlPath;
        },
        async getAccountLine({$axios}){
            console.log("this.userId", this.userId)
            await $axios.$get("https://uat-apirpt.nextcapital.co.th/APIEtax/api/LineAccount/user", 
            {
                params:{
                    userId: this.userId
                }
            })
            .then((response) => {
                this.hasLineccount = response
            })
            .catch(function (error)
            {
                console.log(error);
            });
        }
    }
})
</script>
    
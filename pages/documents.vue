<template>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ใบแจ้งหนี้อิเล็กทรอนิกส์ - บริการส่งใบแจ้งหนี้ ใบเสร็จ และใบกำกับภาษีอิเล็กทรอนิคส์ผ่าน บัญชีไลน์ หรือ SMS</title>

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

    <h2 class="text-center text-blue mt-3 fw-bold lg-font-size">สัญญา และยอดชำระ/ยอดปรับปรุง</h2>
    <div class="mt-3 px-3 mx-auto text-black" style="max-width: 500px;">
        <div v-for="(item, index) in contractNumber"> 
            <a v-if="checkStyleindex(index, contractNumber.length)" :class="classStyle" style="background:#F0F0F0;" @click="">
                <div class="col-6">เลขที่สัญญา</div>
                <div class="col-6">{{ item }}</div>
            </a>
            <a v-else-if="!checkStyleindex(index, contractNumber.length)" :class="classStyle"  style="background:#E6E6E6;" @click="">
                <div class="col-6">เลขที่สัญญา</div>
                <div class="col-6">{{ item }}</div>
            </a>
        </div>
    </div>

    <h2 class="text-center text-blue mt-4 fw-bold lg-font-size">รายการเอกสารที่นำส่ง</h2>
    <p class="mt-2 text-blue text-center"><small>ใช้งานระบบปฏิการแอนดรอยต้องดาวน์โหลดโปรแกรมเพื่ออ่าน PDF 
        ก่อนเปิดดูเอกสาร</small></p>

    <div class="mx-auto px-3" style="max-width: 500px;">
        <div v-for="item in modelPdf" class="card mx-auto mt-2 border-0 text-start">
            <ul class="list-group">
                <li class="list-group-item p-0">
                    <a href="#" class="d-block py-3 px-4 lg-font-size">
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="d-flex align-items-center">
                                <img src="../assets/icons/signature-icon.png" width="25" class="me-2" />
                                <div class="d-inline-block">
                                    <b>{{item.type}}</b><br />
                                    <span class="md-font-size">เลขที่ </span>&nbsp;{{ item.number }}
                                </div>
                            </div>
                            <div class="text-end">
                                <button class="btn-view-detail ms-2">
                                    <img src="../assets/icons/chevron-right-icon.svg" />
                                </button>
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </div>

    <p class="text-center mt-4 mb-5" style="color:#FEB612;">
        <small>ลิ้งค์นี้จะหมดอายุภายใน 90 วัน โดยสามารถดูย้อนหลังได้ผ่าน Line Next Connect</small>
    </p>
</body>
</html>
</template>
<script>
export default{
    data(){
        return {
            contractNumber:["124567788", "124567788", "124567788"],
            receiptNumber:"RCPT438220303333",
            taxInvoiceNumber:"PSI438220302070",
            creditNoteNumber: "SI2203828538",
            receiptTaxInvoiceNumber: "SI2203828538",
            classStyle: "row m-0 py-2 px-3",
            modelPdf:[{type:"ใบเสร็จ",number: "RCPT438220303333"},{type:"ใบกำกับภาษี",number: "PSI438220302070"},{type:"ใบเสร็จ/ใบกำกับภาษี",number: "SI2203828538"},{type:"ใบลดหนี้",number: "SI2203828538"}]
        }
    },
    methods: {
        eventContractStyle( index ) {
            if(( index % 2 ) == 0 ) {
                return true
            } else {
                return false
            }
        },
        checkStyleindex( index, length ){
            let maxIndex = length - 1
            let response = this.eventContractStyle(index)
            if (index === 0){
                this.classStyle ="row rounded-top m-0 py-2 px-3"
                return response
            }
            if(index === maxIndex && index !== 0){
                this.classStyle = "row rounded-bottom m-0 py-2 px-3"
                return response

            } else {
                this.classStyle = "row m-0 py-2 px-3"
                return response
            }
        }
    }
}
</script>
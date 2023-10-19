<template>
    <html>
        <header class="p-2 bg-blue">
            <h1 class="text-white text-center m-0">
                ลงทะเบียนรับ<br />
                <small class="md-font-size">ใบแจ้งหนี้/ใบเสร็จ/ใบกำกับภาษีอิเล็กทรอนิคส์</small>
            </h1>
        </header>
        <div class="bg-white text-center p-2">
            <h2 class="lg-font-size text-blue fw-bold m-0">ประกาศความเป็นส่วนตัว</h2>
        </div>
        <div class="mb-3" id="consentTemplatePdpa">
        </div>
        <br>
        <input type="checkbox" id="acceptCheck" v-if="loadingDisable" v-model="acceptValue" v-on:change="Acceptional(acceptValue)"/> 
        <span class="text-black" v-if="loadingDisable">{{this.consentDescription}}</span>
        <div class="bg-white p-3 text-center">
            <button type="button" id="acceptBtn" v-if="loadingDisable" class="btn text-white" disabled @click="goToPage('./condition')">
                ยินยอม
            </button>
    </div>
    </html>
</template>

<script>
export default ({
    data(){
        return{
            acceptValue: "",
            conditionText: "",
            consentType:"Consent_PDPA",
            consentPdpaTemplateModel:{},
            loadingDisable: false,
            consentDescription: "ข้าพเจ้ายอมรับในนโยบายการเปิดเผยข้อมูล",
            insertConsentModelResponse:[],
            listConsentIsApproved:[]
        }
    },
    mounted()
    {
        this.getTemplate(this)
    },
    methods: {
        goToPage(urlPath) {
            let consentIsApproved = {
                consentType: this.consentType,
                consentItemDescription: this.consentDescription,
                consentItemId: this.consentType
            }
            this.listConsentIsApproved.push(consentIsApproved)
            localStorage.setItem('listConsentIsApproved', JSON.stringify(this.listConsentIsApproved))
            window.location = urlPath;
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
                document.getElementById("consentTemplatePdpa").innerHTML = this.consentPdpaTemplateModel.consentTemplate
                this.loadingDisable = true
            })
            .catch(function (error)
            {
                console.log(error);
            });
        },
        Acceptional(acceptValue){
            if (acceptValue) {
                document.getElementById("acceptBtn").disabled = false;
            } else {
                document.getElementById("acceptBtn").disabled = true;
            }
        }
    }
    
})
</script>
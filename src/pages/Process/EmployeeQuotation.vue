<template>
    <div style="width:90%;">
        <h2>项目报价</h2>
        <h3>项目号:{{ itemId }}</h3>
        <QuotationForm :writable="false" :form-id="itemId" :checking="false"></QuotationForm>
        <br>
        <el-button type="primary">报价</el-button>
    </div>
</template>

<script>
import QuotationForm from '../Forms/QuotationForm.vue';
export default {
    name: 'EmployeeQuotation',
    props: ['itemId'],
    components: {
        QuotationForm
    },
    data() {
        return {
            quotation: 0,
            reason: '',
        }
    },
    methods: {
        checkItemDetail(id) {
            this.$router.push({
                name: 'employeeItemDetail',
                query: { itemId: id }
            })
        },
    }
}
</script>

<style></style>
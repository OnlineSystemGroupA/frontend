<template>
    <div style="width:90%;">
        <h2>项目报价</h2>
        <h3>项目号:{{ processId }}</h3>
        <QuotationForm :writable="false" :process-id="processId" :checking="false"></QuotationForm>
        <br>
        <el-button type="primary">报价</el-button>
    </div>
</template>

<script>
import QuotationForm from '../Forms/QuotationForm.vue';

export default {
    name: 'EmployeeQuotation',
    props: ['processId'],
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
                query: { processId: id }
            })
        },
    }
}
</script>

<style></style>
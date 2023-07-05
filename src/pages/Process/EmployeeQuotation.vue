<template>
    <div style="width:90%;">
        <h2>项目报价</h2>
        <h3>项目号:{{ processId }}</h3>
        <QuotationForm :writable="true" :process-id="processId" :checking="true"></QuotationForm>
        <br>
        <el-button type="primary" @click="submit">报价</el-button>
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
        submit() {
            this.$bus.$emit('submitQuotation')
        }
    },
}
</script>

<style></style>
<template>
    <div style="width:90%;">
        <h2>项目报价</h2>
        <h3>项目号:{{ itemId }}</h3>
        <el-form>
            <el-form-item label="报价（单位：元）">
                <el-input-number v-model="quotation" placeholder='报价'></el-input-number>
            </el-form-item>
            <el-form-item label="报价理由">
                <el-input type="textarea" v-model="reason" placeholder='报价理由'></el-input>
            </el-form-item>
        </el-form>
        <el-button type="primary">报价</el-button>
    </div>
</template>

<script>
export default {
    name: 'EmployeeQuotation',
    props: ['itemId'],
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
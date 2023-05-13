<template>
    <div style="width:90%;">
        <h2>审核测试报告</h2>
        <h3>项目号:{{ itemId }}</h3>
        <el-button type="primary" @click="checkItemDetail(itemId)">查看项目详情</el-button>
        <el-button @click="checkTestReport" type="primary">查看测试报告</el-button>
        <el-button @click="writeReportVerification" type="primary">填写审核表格</el-button>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
export default {
    name: 'EmployeeVerifyTestReport',
    props: ['itemId'],
    data() {
        return {

        }
    },
    methods: {
        checkItemDetail(id) {
            this.$router.push({
                name: 'employeeItemDetail',
                query: { itemId: id }
            })
        },
        checkTestReport() {
            this.$router.push(
                {
                    name: 'checkTestReportForm',
                    query: {
                        writable: false,
                        checking: true,
                        formId: this.itemId,
                        itemId: this.itemId
                    }
                }
            )
        },
        writeReportVerification() {
            this.$router.push(
                {
                    name: 'reportVerifyForm',
                    query: {
                        writable: true,
                        checking: false,
                        formId: this.itemId,
                        itemId: this.itemId
                    }
                }
            )
        }
    }
}
</script>

<style></style>
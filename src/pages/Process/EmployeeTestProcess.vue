<template>
    <div style="width:90%;">
        <h2>项目测验过程</h2>
        <h3>项目号:{{ itemId }}</h3>
        <el-button type="primary" @click="checkItemDetail(itemId)">查看项目详情</el-button>
        <el-button type="primary" @click="writeTestRecord">填写测试记录</el-button>
        <el-button type="primary" @click="writeTestProblem">填写测试问题表</el-button>
        <el-button type="primary" @click="writeTestReport">填写测试报告</el-button>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
export default {
    name: "EmployeeTestProcess",
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
        writeTestRecord() {
            this.$router.push({
                name: 'testRecordsForm',
                query: {
                    writable: true,
                    checking: false,
                    formId: this.itemId,
                    itemId: this.itemId
                }
            })
        },
        writeTestProblem() {
            this.$router.push({
                name: 'testProblemForm',
                query: {
                    writable: true,
                    checking: false,
                    formId: this.itemId,
                    itemId: this.itemId
                }
            })
        },
        writeTestReport() {
            this.$router.push({
                name: 'testReportForm',
                query: {
                    writable: true,
                    checking: false,
                    formId: this.itemId,
                    itemId: this.itemId
                }
            })
        }
    }
};
</script>

<style></style>
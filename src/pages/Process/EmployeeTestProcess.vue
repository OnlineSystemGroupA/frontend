<template>
    <div>
        <h2>项目测验过程</h2>
        <h3>项目号:{{itemId}}</h3>
        <el-button type="primary" @click="readTestPlan">查看测试计划</el-button>
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
    props:['itemId'],
    data() {
        return{

        }
    },
    methods:{
        readTestPlan(){
            this.$router.push({
                name: 'readTestPlan',
                query: {
                    writable: false,
                    checking: false,
                    formId: this.itemId,
                    itemId: this.itemId
                }
            })
        },
        writeTestRecord(){
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
        writeTestProblem(){

        },
        writeTestReport(){
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
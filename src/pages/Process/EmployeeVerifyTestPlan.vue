<template>
    <div>
        <h2>测试计划审核</h2>
        <h3>项目号:{{itemId}}</h3>
        <el-button type="priamry" @click="checkTestPlan">查看测试计划</el-button>
        <el-button type="priamry" @click="verfiyTestPlan">填写审核表格</el-button>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'EmployeeVerifyTestPlan',
    data() {
        return {
            
        }
    },
    props: ['itemId'],
    methods:{
        checkTestPlan(){
            this.$router.push({
                name: 'checkTestPlanForm',
                query: {
                    writable: false,
                    checking: true,
                    itemId: this.itemId
                }
            })
        },
        verfiyTestPlan(){
            this.$router.push({
                name: 'testPlanVerifyForm',
                query: {
                    writable: true,
                    checking: false,
                    itemId: this.itemId
                }
            })
        }
    }
}
</script>

<style></style>
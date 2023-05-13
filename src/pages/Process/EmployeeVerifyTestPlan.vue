<template>
    <div style="width:90%;"> 
        <h2>测试计划审核</h2>
        <h3>项目号:{{ itemId }}</h3>
        <el-button type="primary" @click="checkItemDetail(itemId)">查看项目详情</el-button>
        <el-button type="priamry" @click="checkTestPlan">查看测试计划</el-button>
        <el-button type="priamry" @click="verfiyTestPlan">填写审核表格</el-button>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
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
    methods: {
        checkItemDetail(id) {
            this.$router.push({
                name: 'employeeItemDetail',
                query: { itemId: id }
            })
        },
        checkTestPlan() {
            this.$router.push({
                name: 'checkTestPlanForm',
                query: {
                    writable: false,
                    checking: true,
                    formId: this.itemId,
                    itemId: this.itemId
                }
            })
        },
        verfiyTestPlan() {
            this.$router.push({
                name: 'testPlanVerifyForm',
                query: {
                    writable: true,
                    checking: false,
                    formId: this.itemId,
                    itemId: this.itemId
                }
            })
        }
    }
}
</script>

<style></style>
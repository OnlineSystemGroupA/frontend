<template>
    <div>
        <h2>项目测试</h2>
        <h3>项目号:{{itemId}}</h3>
        <el-button type="primary" @click="checkApplication">查看申请表格</el-button>
        <el-button type="primary" @click="checkFunctionList">查看测试功能</el-button>
        <el-button type="primary" @click="writeTestPlan">创建测试方案</el-button>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
export default {
    name:'EmployeeWriteTestPlan',
    props:['itemId'],
    data(){
        return{
            
        }
    },
    methods:{
        checkApplication() {
            this.$router.push({
                name: 'readApplication',
                query: {
                    writable: false,
                    checking: false,
                    formId: this.itemId,
                    itemId: this.itemId
                }
            })
        },
        checkFunctionList(){
            this.$router.push({
                name: 'readFunctionList',
                query: {
                    writable: false,
                    checking: false,
                    formId: this.itemId,
                    itemId: this.itemId
                }
            })
        },
        writeTestPlan(){
            this.$router.push({
                name:'testPlanForm',
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
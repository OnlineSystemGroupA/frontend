<template>
    <div>
        <h2>任务分配</h2>
        <h3>项目号:{{itemId}}</h3>
        <el-button type="primary" @click="checkApplication">查看申请表格</el-button>
        <el-button type="primary" @click="checkFunctionList">查看测试功能</el-button>
        <el-button type="primary" @click="arrangeWork('verification')">分配审核任务</el-button>
        <el-button type="primary" @click="arrangeWork('testment')">分配测试任务</el-button>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
export default {
    name: 'EmployeeArrangeMission',
    props:['itemId'],
    data() {
        return {

        }
    },
    methods: {
        checkApplication(){
            this.$router.push({
                name: 'readApplicationFormForManager',
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
                name: 'readFunctionListForManager',
                query: {
                    writable: false,
                    checking: false,
                    formId: this.itemId,
                    itemId: this.itemId
                }
            })
        },
        arrangeWork(work){
            this.$router.push({
                name:'workArrangeTable',
                query:{
                    work:work,
                    itemId: this.itemId
                }
            })
        }
    }
}
</script>

<style></style>
<template>
    <div style="width:90%;">
        <h2>任务分配</h2>
        <h3>项目号:{{ processId }}</h3>
        <el-button type="primary" @click="checkItemDetail(processId)">查看项目详情</el-button>
        <el-button type="primary" @click="arrangeWork('verification')">分配审核任务</el-button>
        <el-button type="primary" @click="arrangeWork('testment')">分配测试任务</el-button>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'EmployeeArrangeMission',
    props: ['processId'],
    data() {
        return {}
    },
    methods: {
        checkItemDetail(id) {
            this.$router.push({
                name: 'employeeItemDetail',
                query: { processId: id }
            })
        },
        arrangeWork(work) {
            this.$router.push({
                name: 'workArrangeTable',
                query: {
                    work: work,
                    page: 1,
                    processId:this.processId
                }
            })
        }
    }
}
</script>

<style></style>
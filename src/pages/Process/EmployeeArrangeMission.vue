<template>
    <div style="width:90%;">
        <h2>任务分配</h2>
        <h3>项目号:{{ itemId }}</h3>
        <el-button type="primary" @click="checkItemDetail(itemId)">查看项目详情</el-button>
        <el-button type="primary" @click="arrangeWork('verification')">分配审核任务</el-button>
        <el-button type="primary" @click="arrangeWork('testment')">分配测试任务</el-button>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'EmployeeArrangeMission',
    props: ['itemId'],
    data() {
        return {

        }
    },
    methods: {
        checkItemDetail(id) {
            this.$router.push({
                name: 'clientItemDetail',
                query: { itemId: id }
            })
        },
        arrangeWork(work) {
            this.$router.push({
                name: 'workArrangeTable',
                query: {
                    work: work,
                    itemId: this.itemId
                }
            })
        }
    }
}
</script>

<style></style>
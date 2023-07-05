<template>
    <div style="width:90%;">
        <h2>测试工作检查</h2>
        <h3>项目号:{{ processId }}</h3>
        <el-button type="primary" @click="checkItemDetail(processId)">查看项目详情</el-button>
        <el-button type="primary" @click="checkTestWork()">测试工作检查表</el-button>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
export default {
    name: 'EmployeeCheckTestWork',
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
        checkTestWork() {
            this.$router.push(
                {
                    name: 'workCheckForm',
                    query: {
                        writable: true,
                        checking: false,
                        processId: this.processId,
                    }
                }
            )
        }
    }
}
</script>

<style></style>
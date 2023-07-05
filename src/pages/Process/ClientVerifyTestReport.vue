<template>
    <div style="width:90%;">
        <h2>审核测试报告</h2>
        <h3>项目号:{{ processId }}</h3>
        <el-button type="primary" @click="checkItemDetail(processId)">查看项目详情</el-button>
        <el-button type="primary" @click="checkTestReport">查看测试报告</el-button>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'ClientVerifyTestReport',
    props: ['processId'],
    data() {
        return {}
    },
    methods: {
        checkItemDetail(id) {
            this.$router.push({
                name: 'clientItemDetail',
                query: { processId: id }
            })
        },
        checkTestReport() {
            this.$router.push(
                {
                    name: 'clientCheckTestReportForm',
                    query: {
                        writable: false,
                        checking: true,
                        processId: this.processId,
                    }
                }
            )
        }
    }
}
</script>

<style></style>
<template>
    <div style="width:90%;">
        <h2>确认测试报告</h2>
        <h3>项目号:{{ processId }}</h3>
        <el-button type="primary" @click="readTestReport">查看测试报告</el-button>
        <el-button type="primary" @click="confirmReport">确认测试报告</el-button>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
export default {
    name: 'ClientConfirmReport',
    props: ['processId'],
    data() {
        return {}
    },
    methods: {
        readTestReport() {
            this.$router.push({
                name: 'readTestReportForm',
                query: {
                    writable: false,
                    checking: false,
                    processId: this.processId,
                }
            })
        },
        confirmReport() {
            this.$confirm('请确认您已经仔细阅读了测试报告', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning',
                center: true
            }).then(() => {
                this.$message({
                    type: 'success',
                    message: '确认成功!'
                });
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消操作'
                });
            });

        }
    }

}
</script>

<style></style>
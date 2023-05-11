<template>
    <div>
        <h2>任务分配</h2>
        <h3>项目号:{{ itemId }}</h3>
        <el-button type="primary" @click="checkTestReport">查看测试报告</el-button>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'ClientVerifyTestReport',
    props: ['itemId'],
    data() {
        return {

        }
    },
    methods:{
        checkTestReport() {
            this.$router.push(
                {
                    name:'clientCheckTestReportForm',
                    query:{
                        writable: false,
                        checking: true,
                        formId: this.itemId,
                        itemId: this.itemId
                    }
                }
            )
        }
    }
}
</script>

<style></style>
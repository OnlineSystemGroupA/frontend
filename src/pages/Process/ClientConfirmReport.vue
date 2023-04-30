<template>
    <div>
        <h2>确认测试报告</h2>
        <h3>项目号:{{itemId}}</h3>
        <el-button type="primary" @click="readTestReport">查看测试报告</el-button>
        <el-button type="primary">确认测试报告</el-button>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'ClientConfirmReport',
    props:['itemId'],
    data() {
        return {

        }
    },
    methods:{
        readTestReport(){
            this.$router.push({
                name:'readTestReportForm',
                query: {
                    writable: false,
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
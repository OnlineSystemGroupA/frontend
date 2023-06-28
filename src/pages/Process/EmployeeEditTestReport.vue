<template>
    <div style="width:90%;">
        <h2>修改测试报告</h2>
        <h3>项目号:{{ itemId }}</h3>
        <el-button type="primary" @click="checkItemDetail(itemId)">查看项目详情</el-button>
        <el-button type="primary" @click="editTestReportForm">修改测试报告</el-button>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
export default {
    name: "EmployeeEditTestReport",
    props: ['itemId'],
    data() {
        return {}
    },
    methods: {
        checkItemDetail(id) {
            this.$router.push({
                name: 'employeeItemDetail',
                query: { itemId: id }
            })
        },
        editTestReportForm() {
            this.$router.push({
                name: 'editTestReportForm',
                query: {
                    writable: true,
                    checking: false,
                    processId: this.itemId,
                    itemId: this.itemId
                }
            })
        },
    }
}
</script>

<style></style>
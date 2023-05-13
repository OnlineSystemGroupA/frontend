<template>
    <div style="width:90%;">
        <h2>项目测试</h2>
        <h3>项目号:{{ itemId }}</h3>
        <el-button type="primary" @click="checkItemDetail(itemId)">查看项目详情</el-button>
        <el-button type="primary" @click="writeTestPlan">创建测试方案</el-button>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
export default {
    name: 'EmployeeWriteTestPlan',
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
        writeTestPlan() {
            this.$router.push({
                name: 'testPlanForm',
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
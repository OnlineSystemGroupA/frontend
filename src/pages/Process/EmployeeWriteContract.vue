<template>
    <div style="width:90%;">
        <h2>员工填写合同</h2>
        <h3>项目号:{{ itemId }}</h3>
        <el-button type="primary" @click="checkItemDetail(itemId)">查看项目详情</el-button>
        <el-button type="primary" @click="writeContract">填写合同</el-button>
        <router-view></router-view>
        </div>
</template>

<script>
export default {
    name: 'EmployeeWriteContent',
    props: ['itemId'],
    data() {
        return {
            
        }
    },
    methods: {
        checkItemDetail(id) {
            this.$router.push({
                name: 'employeeItemDetail',
                query: { itemId: id }
            })
        },
        writeContract() {
            this.$router.push({
                name: 'employeeWriteContract',
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
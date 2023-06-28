<template>
    <div style="width:90%;">
        <h2>用户填写合同</h2>
        <h3>项目号:{{ itemId }}</h3>
        <el-button type="primary" @click="checkItemDetail(itemId)">查看项目详情</el-button>
        <el-button type="primary" @click="writeContract">填写合同</el-button>
        <el-button type="primary">下载pdf</el-button>
        <el-button type="primary">上传扫描件</el-button>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'ClientWriteContent',
    props: ['itemId'],
    data() {
        return {}
    },
    methods: {
        checkItemDetail(id) {
            this.$router.push({
                name: 'clientItemDetail',
                query: { itemId: id }
            })
        },
        writeContract() {
            this.$router.push({
                name: 'clientWriteContract',
                query: {
                    writable: true,
                    checking: false,
                    processId: this.itemId,
                    itemId: this.itemId
                }
            })
        }
    }
}
</script>

<style></style>
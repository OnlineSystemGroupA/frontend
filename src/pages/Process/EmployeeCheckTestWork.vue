<template>
    <div style="width:90%;"> 
        <h2>测试工作检查</h2>
        <h3>项目号:{{ itemId }}</h3>
        <el-button type="primary" @click="checkItemDetail(itemId)">查看项目详情</el-button>
        <el-button type="primary" @click="checkTestWork">测试工作检查表</el-button>
        <el-button type="primary" @click="documentReview">软件文档检查表</el-button>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
export default {
    name: 'EmployeeCheckTestWork',
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
        documentReview() {
            this.$router.push(
                {
                    name: 'documentReviewForm',
                    query: {
                        writable: true,
                        checking: false,
                        formId: this.itemId,
                        itemId: this.itemId
                    }
                }
            )
        },
        checkTestWork() {
            this.$router.push(
                {
                    name: 'workCheckForm',
                    query: {
                        writable: true,
                        checking: false,
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
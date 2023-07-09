<template>
    <div style="width:90%;">
        <h2>检查测试样品</h2>
        <h3>项目号:{{ processId }}</h3>
        <el-button type="primary" @click="checkItemDetail(processId)">查看项目详情</el-button>
        <el-button type="primary" @click="download">下载文件</el-button>
        <el-button type="primary" @click="documentReview">文档检查表</el-button>
        <el-button type="primary" @click="complete">完成流程</el-button>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
export default {
    name: 'EmployeeReviewSample',
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
        download() {

        },
        documentReview() {
            this.$router.push(
                {
                    name: 'documentReviewForm',
                    query: {
                        writable: true,
                        checking: false,
                        processId: this.processId,
                    }
                }
            )
        },
        complete() {
            this.axios.post('/api/workflow/processes/' + this.processId + '/complete_task')
                .then(
                    (res) => {
                        if (res.status === 200) {
                            this.$message.success("进入下一流程！")
                            this.$router.push(
                                {
                                    name: 'employeeItemDetail',
                                    query: { processId: this.processId }
                                }
                            )
                        }
                    },
                    (err) => {
                        this.$message.warning(err.data)
                    }
                )
        }
    }
}
</script>

<style></style>
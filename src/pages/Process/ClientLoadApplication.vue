<template>
    <div style="width:94%;">
        <h2>查看已保存申请</h2>
        <h3>项目号:{{ projectId }}</h3>
        <h3>项目名:{{ softwareName }}</h3>
        <el-button type="primary" @click="editApplicationForm">修改测试申请表</el-button>
        <el-button type="primary" @click="editFunctionList">修改测试功能表</el-button>
        <el-button type="success" @click="submit">提交申请</el-button>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
export default {
    name: 'ClientLoadApplication',
    props: ['processId'],
    data() {
        return {
            projectId: '',
            softwareName: '',
        }
    },
    methods: {
        editApplicationForm() {
            this.$router.push({
                name: 'editSavedApplicationForm',
                query: {
                    writable: true,
                    checking: false,
                    processId: this.processId,
                }
            })
        },
        editFunctionList() {
            this.$router.push({
                name: 'editSavedFunctionList',
                query: {
                    writable: true,
                    checking: false,
                    processId: this.processId,
                }
            })
        },
        submit() {
            this.axios.post('/api/workflow/processes/' + this.processId + '/complete_task')
                .then(
                    (res) => {
                        if (res.status === 200) {
                            this.$message.success("进入下一流程！")
                            this.$router.push(
                                {
                                    name: 'clientItemDetail',
                                    processId: this.processId
                                }
                            )
                        }
                    },
                    (err) => {
                        this.$message.warning(err.data)
                    }
                )
        },
        handleError(err) {
            if (err.status === 402) {
                this.$message.error('指定流程对该用户不可见')
            }
            else if (err.status === 404) {
                this.$message.error('指定流程不存在')
            }
        },
        handleResponse(res) {
            if (res.status === 200) {
                this.projectId = res.data.projectId
                this.softwareName = res.data.title
            }
        },

    },
    created() {
        this.axios.get('/api/workflow/processes/' + this.processId + '/details').then(this.handleResponse, this.handleError)
    },
}
</script>

<style></style>
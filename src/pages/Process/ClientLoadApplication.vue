<template>
    <div style="width:90%;">
        <h2>查看已保存申请</h2>
        <h3>项目号:{{ processId }}</h3>
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
        return {}
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
        }
    }
}
</script>

<style></style>
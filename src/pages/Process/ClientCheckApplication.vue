<template>
    <div style="width:90%;">
        <h2>查看已提交申请</h2>
        <h3>项目号:{{ processId }}</h3>
        <el-button type="primary" @click="editApplicationForm">修改测试申请表</el-button>
        <el-button type="primary" @click="editFunctionList">修改测试功能表</el-button>
        <el-button type="primary" @click="checkItemDetail(processId)">查看项目详情</el-button>
        <el-button type="primary" @click="resubmit">重新提交</el-button>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
export default {
    name: 'ClientCheckApplication',
    props: ['processId'],
    data() {
        return {}
    },
    methods: {
        editApplicationForm() {
            this.$router.push({
                name: 'editApplicationForm',
                query: {
                    writable: true,
                    checking: false,
                    processId: this.processId,
                }
            })
        },
        editFunctionList() {
            this.$router.push({
                name: 'editFunctionList',
                query: {
                    writable: true,
                    checking: false,
                    processId: this.processId,
                }
            })
        },
        checkItemDetail(id) {
            this.$router.push({
                name: 'clientItemDetail',
                query: { processId: id }
            })
        },
        resubmit() {
            this.axios.post('/api/workflow/processes/' + this.processId + '/complete_task').then(this.handleRes, this.handleErr)
        },
        handleRes(res) {
            if (res.status === 200) {
                 this.$alert('重新提交成功', '提交流程', {
                    confirmButtonText: '确定',
                    callback: () => {
                        this.$message({
                            type: 'success',
                            message: "重新提交"
                        });
                        this.$router.push({
                            name: 'clientItemDetail',
                            query: { processId: this.processId }
                        })
                    }
                });
            }
        },
        handleErr(err) {
            if (err.status === 403) {
                alert('指定流程对该用户不可见或当前用户无完成任务权限')
            }
            else if (err.status === 404) {
                alert('指定流程不存在')
            }
            else if (err.status === 460) {
                alert('未满足完成条件')
            }
        }
    }
}
</script>

<style></style>
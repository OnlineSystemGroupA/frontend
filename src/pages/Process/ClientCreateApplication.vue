<template>
    <div style="width: 100%">
        <h2>创建新项目</h2>
        <el-steps :active="active" finish-status="success" align-center style="width: 100%;">
            <el-step title="步骤 1" description="阅读说明"></el-step>
            <el-step title="步骤 2" description="填写申请表格"></el-step>
            <el-step title="步骤 3" description="填写测试功能表"></el-step>
        </el-steps>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
export default {
    name: 'ClientCreateApplication',
    data() {
        return {
            processId: '',
        }
    },
    mounted() {
        this.$bus.$on('getId', (processId) => {
            this.processId = processId
            this.$router.replace({
                name: 'applicationForm',
                query: {
                    writable: true,
                    processId: this.processId
                }
            })
        })
        this.$bus.$on('submitApplication', () => {
            this.$router.replace({
                name: 'functionList',
                query: {
                    writable: true,
                    processId: this.processId
                }
            })
        })
        this.$bus.$on('submitFunctionList', (processId) => {
            this.processId = processId
            console.log(this.processId)
            this.axios.post('/api/workflow/processes/' + this.processId + '/complete_task').then(this.handleRes, this.handleErr)
        })
    },
    beforeDestroy() {
        this.$bus.$off('submitApplication')
        this.$bus.$off('submitFunctionList')
        this.$bus.$off('getId')
    },
    computed: {
        active() {
            let path = this.$route.path
            //console.log(path)
            if (path.endsWith('applicationForm')) {
                return 1
            } else if (path.endsWith('functionList')) {
                return 2
            } else if (path.endsWith('applicationSuccess')) {
                return 3
            }
            return 0
        }
    },
    methods: {
        handleRes(res) {
            if (res.status === 200) {
                this.$router.replace({
                    name: 'applicationSuccess',
                })
            }
        },
        handleErr(err) {
            if (err.status === 403) {
                this.$message.error('指定流程对该用户不可见或当前用户无完成任务权限')
            } else if (err.status === 404) {
                this.$message.error('指定流程不存在')
            } else if (err.status === 460) {
                this.$message.error('未满足完成条件')
            }
        }
    }
}
</script>

<style></style>
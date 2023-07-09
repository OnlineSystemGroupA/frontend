<template>
    <div style="width:94%;">
        <h2>审核项目申请</h2>
        <h3>项目号:{{ projectId }}</h3>
        <h3>项目名:{{ softwareName }}</h3>
        <el-steps :active="active" finish-status="success">
            <el-step title="步骤 1" description="审核申请报告"></el-step>
            <el-step title="步骤 2" description="审核功能列表"></el-step>
            <el-step title="步骤 3" description="填写申请审核表"></el-step>
        </el-steps>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
        <el-button v-if="active === -1" @click="start">开始审核</el-button>
    </div>
</template>

<script>

export default {
    name: 'EmployeeCheckApplication',
    data() {
        return {
            passable: true,
            projectId: '',
            softwareName: ''
        }
    },
    props: ['processId'],
    methods: {
        start() {
            this.$router.push({
                name: 'checkApplicationForm',
                query: {
                    writable: false,
                    checking: true,
                    processId: this.processId,
                }
            })
        },
        handleRes(res) {
            if (res.status === 200) {
                if (this.passable) {
                    this.$alert('申请审核通过', '审核流程', {
                        confirmButtonText: '确定',
                        callback: () => {
                            this.$message({
                                type: 'success',
                                message: "审核确认"
                            });
                        }
                    });
                } else {
                    this.$alert('申请已驳回', '审核流程', {
                        confirmButtonText: '确定',
                        callback: () => {
                            this.$message({
                                type: 'info',
                                message: "审核驳回"
                            });
                        }
                    });
                    this.passable = true
                }
                this.$router.push(
                    {
                        name: 'employeeItemDetail',
                        query: {
                            processId: this.processId
                        }
                    }
                )
            }
        },
        handleErr(err) {
            if (err.status === 403) {
                alert('指定流程对该用户不可见或当前用户无完成任务权限')
            } else if (err.status === 404) {
                alert('指定流程不存在')
            } else if (err.status === 460) {
                alert('未满足完成条件')
            }
        },
        handleResponse(res) {
            if (res.status === 200) {
                this.projectId = res.data.projectId
                this.softwareName = res.data.title
            }
        },
        handleError(err) {
            if (err.status === 402) {
                alert('指定流程对该用户不可见')
            }
            else if (err.status === 404) {
                alert('指定流程不存在')
            }
        },
    },
    created() {
        this.axios.get('/api/workflow/processes/' + this.processId + '/details').then(this.handleResponse, this.handleError)
    },
    computed: {
        active() {
            let path = this.$route.path
            if (path.endsWith('checkApplicationForm')) {
                return 0
            } else if (path.endsWith('checkFunctionList')) {
                return 1
            } else if (path.endsWith('applicationVerifyForm')) {
                return 2
            }
            return -1
        }
    },
    mounted() {
        this.passable = true
        this.$bus.$on('passApplication', (pass) => {
            this.passable &= pass
            this.$router.push({
                name: 'checkFunctionList',
                query: {
                    writable: false,
                    checking: true,
                    processId: this.processId,
                }
            })
        })
        this.$bus.$on('passFunction', (pass) => {
            this.passable &= pass
            this.$router.push({
                name: 'applicationVerifyForm',
                query: {
                    writable: true,
                    processId: this.processId,
                }
            })
        })
        this.$bus.$on('submitApplicationVerifyForm', () => {
            //console.log(this.passable)
            this.axios.post('/api/workflow/processes/' + this.processId + '/complete_task?passable=' + this.passable).then(this.handleRes, this.handleErr)
        })
    },
    beforeDestroy() {
        this.$bus.$off('passApplication')
        this.$bus.$off('passFunction')
        this.$bus.$off('submitApplicationVerifyForm')
    }
}
</script>

<style></style>
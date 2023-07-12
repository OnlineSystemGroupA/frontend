<template>
    <div style="width:94%;">
        <h2>员工填写合同</h2>
        <h3>项目号:{{ projectId }}</h3>
        <h3>项目名:{{ softwareName }}</h3>
        <el-button type="primary" @click="checkItemDetail(processId)">查看项目详情</el-button>
        <el-button type="primary" @click="writeContract" v-if="writeIf">填写合同</el-button>
        <el-button type="primary" @click="writeConfidentiality" v-if="writeIf">填写保密协议</el-button>
        <el-button type="primary" @click="checkContract" v-if="verifyIf">审核合同</el-button>
        <el-button type="primary" @click="checkConfidentiality" v-if="verifyIf">查看保密协议</el-button>
        <el-button type="primary" @click="downloadContract" v-if="uploadIf">下载合同</el-button>
        <el-button type="primary" @click="downloadConfidentiality" v-if="uploadIf">下载保密协议</el-button>
        <el-button type="primary" @click="complete" v-if="uploadIf">完成流程</el-button>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'EmployeeWriteContent',
    props: ['processId'],
    data() {
        return {
            projectId: '',
            softwareName: '',
            curTaskName:''
        }
    },
    computed: {
        writeIf() {
            return (this.curTaskName === "市场部生成合同草稿" || this.curTaskName === "市场部修改合同草稿")
        },
        verifyIf() {
            return this.curTaskName === "市场部审核合同"
        },
        uploadIf() {
            return this.curTaskName === "市场部盖章合同"
        },
    },
    methods: {
        checkItemDetail(id) {
            this.$router.push({
                name: 'employeeItemDetail',
                query: { processId: id }
            })
        },
        writeContract() {
            this.$router.push({
                name: 'employeeWriteContract',
                query: {
                    writable: true,
                    checking: false,
                    processId: this.processId,
                }
            })
        },
        checkContract() {
            this.$router.push({
                name: 'employeeWriteContract',
                query: {
                    writable: false,
                    checking: true,
                    processId: this.processId,
                }
            })
        },
        writeConfidentiality() {
            this.$router.push({
                name: 'employeeWriteConfidentiality',
                query: {
                    writable: true,
                    processId: this.processId,
                }
            })
        },
        checkConfidentiality() {
            this.$router.push({
                name: 'employeeWriteConfidentiality',
                query: {
                    writable: false,
                    processId: this.processId,
                }
            })
        },
        handleRes(res) {
            if (res.status === 200) {
                this.$router.push({
                    name: 'employeeItemDetail',
                    query: {
                        processId: this.processId
                    },
                })
            }
        },
        async downloadContract() {
            await this.axios.get('/api/workflow/processes/' + this.processId + '/files/forms/ContractForm', {
                responseType: "blob" // 二进制流
            }).then(
                (res, type) => {
                    const blob = new Blob([res.data], { type: type });
                    const downloadElement = document.createElement("a");
                    const href = window.URL.createObjectURL(blob);
                    downloadElement.href = href;
                    downloadElement.download = decodeURIComponent(this.processId + "合同.pdf");
                    document.body.appendChild(downloadElement);
                    downloadElement.click();
                    document.body.removeChild(downloadElement);
                    window.URL.revokeObjectURL(href);
                },
                (err) => {
                    if (err.status === 403) {
                        this.$message.error('指定流程对该用户不可见或当前用户无完成任务权限')
                    } else if (err.status === 404) {
                        this.$message.error('指定流程不存在')
                    } else if (err.status === 460) {
                        this.$message.error('未满足完成条件')
                    }
                }
            )
        },
        downloadConfidentiality() {
            
        },
        handleErr(err) {
            if (err.status === 403) {
                this.$message.error('指定流程对该用户不可见或当前用户无完成任务权限')
            } else if (err.status === 404) {
                this.$message.error('指定流程不存在')
            } else if (err.status === 460) {
                this.$message.error('未满足完成条件')
            }
        },
        handleCheckRes(res) {
            if (res.status === 200) {
                if (this.pass) {
                    this.$alert('合同审核通过', '审核流程', {
                        confirmButtonText: '确定',
                        callback: () => {
                            this.$message({
                                type: 'success',
                                message: "合同确认"
                            });
                        }
                    });
                } else {
                    this.$alert('合同已驳回', '审核流程', {
                        confirmButtonText: '确定',
                        callback: () => {
                            this.$message({
                                type: 'info',
                                message: "合同驳回"
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
                        if (err.status === 403) {
                            this.$message.warning('指定流程对该用户不可见或当前用户无完成任务权限');
                        }
                        else if (err.status === 404) {
                            this.$message.warning(' 指定流程不存在')
                        }
                        else if (err.status === 460) {
                            this.$message.warning('未满足完成条件')
                        }
                    }
                )
        },
        handleResponse(res) {
            if (res.status === 200) {
                this.projectId = res.data.projectId
                this.softwareName = res.data.title
                this.curTaskName = res.data.currentTaskName
            }
        },
        handleError(err) {
            if (err.status === 402) {
                this.$message.error('指定流程对该用户不可见')
            }
            else if (err.status === 404) {
                this.$message.error('指定流程不存在')
            }
        },
    },
    created() {
        this.axios.get('/api/workflow/processes/' + this.processId + '/details').then(this.handleResponse, this.handleError)
    },
    mounted() {
        this.$bus.$on('submitContract', () => {
            this.axios.post('/api/workflow/processes/' + this.processId + '/complete_task?passable=true')
                .then(this.handleRes, this.handleErr)
        })
        this.$bus.$on('checkContract', (pass) => {
            this.pass = pass
            this.axios.post('/api/workflow/processes/' + this.processId + '/complete_task?passable=' + pass).then(this.handleCheckRes, this.handleErr)
        })
    },
    beforeDestroy() {
        this.$bus.$off('submitContract')
        this.$bus.$off('checkContract')
    }
}
</script>

<style></style>
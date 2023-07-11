<template>
    <div class="report-verification">
        <h1>测试报告审核</h1>
        <el-form label-position="left" label-width="100px" :disabled="disable">
            <h2>测试任务信息</h2>
            <el-form-item label="软件名称">
                <el-input v-model="form.softwareName" style="width: 50%"></el-input>
            </el-form-item>
            <el-form-item label="委托单位">
                <el-input v-model="form.client" style="width: 50%"></el-input>
            </el-form-item>
            <h2>检查内容</h2>
            <el-collapse v-model="activeParts">
                <el-collapse-item title="1. 基本项" name="1">
                    <h3>基本项</h3>
                    <el-row :gutter="20">
                        <el-col :span="12">
                            <el-form-item label="报告编号">
                                <el-radio-group v-model="form.reportIdChecked">
                                    <el-radio :label="true">是</el-radio>
                                    <el-radio :label="false">否</el-radio>
                                </el-radio-group>
                            </el-form-item>
                            <el-form-item label="页码">
                                <el-radio-group v-model="form.pagesChecked">
                                    <el-radio :label="true">是</el-radio>
                                    <el-radio :label="false">否</el-radio>
                                </el-radio-group>
                            </el-form-item>
                            <el-form-item label="软件名称">
                                <el-radio-group v-model="form.softwareNameChecked">
                                    <el-radio :label="true">是</el-radio>
                                    <el-radio :label="false">否</el-radio>
                                </el-radio-group>
                            </el-form-item>
                            <el-form-item label="版本号">
                                <el-radio-group v-model="form.softwareVersionChecked">
                                    <el-radio :label="true">是</el-radio>
                                    <el-radio :label="false">否</el-radio>
                                </el-radio-group>
                            </el-form-item>
                            <el-form-item label="委托单位">
                                <el-radio-group v-model="form.clientChecked">
                                    <el-radio :label="true">是</el-radio>
                                    <el-radio :label="false">否</el-radio>
                                </el-radio-group>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="完成日期">
                                <el-radio-group v-model="form.finishDateChecked">
                                    <el-radio :label="true">是</el-radio>
                                    <el-radio :label="false">否</el-radio>
                                </el-radio-group>
                            </el-form-item>
                            <el-form-item label="委托单位地址">
                                <el-radio-group v-model="form.clientAddressChecked">
                                    <el-radio :label="true">是</el-radio>
                                    <el-radio :label="false">否</el-radio>
                                </el-radio-group>
                            </el-form-item>
                            <el-form-item label="序号">
                                <el-radio-group v-model="form.indexChecked">
                                    <el-radio :label="true">是</el-radio>
                                    <el-radio :label="false">否</el-radio>
                                </el-radio-group>
                            </el-form-item>
                            <el-form-item label="测试样品">
                                <el-radio-group v-model="form.sampleChecked">
                                    <el-radio :label="true">是</el-radio>
                                    <el-radio :label="false">否</el-radio>
                                </el-radio-group>
                            </el-form-item>
                            <el-form-item label="软、硬件列表" label-position="top">
                                <el-radio-group v-model="form.softwareAndHardwareChecked">
                                    <el-radio :label="true">是</el-radio>
                                    <el-radio :label="false">否</el-radio>
                                </el-radio-group>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-collapse-item>
                <el-collapse-item title="2. 内容与格式" name="2">
                    <h3>内容与格式</h3>
                    <el-form-item label="错别字">
                        <el-radio-group v-model="form.characterChecked">
                            <el-radio :label="true">是</el-radio>
                            <el-radio :label="false">否</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="语句">
                        <el-radio-group v-model="form.sentenceChecked">
                            <el-radio :label="true">是</el-radio>
                            <el-radio :label="false">否</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="格式">
                        <el-radio-group v-model="form.formatChecked">
                            <el-radio :label="true">是</el-radio>
                            <el-radio :label="false">否</el-radio>
                        </el-radio-group>
                    </el-form-item>
                </el-collapse-item>
                <el-collapse-item title="3. 测试报告" name="3">
                    <h3>测试报告</h3>
                    <el-form-item label="报告准确性">
                        <el-radio-group v-model="form.reportChecked">
                            <el-radio :label="true">是</el-radio>
                            <el-radio :label="false">否</el-radio>
                        </el-radio-group>
                    </el-form-item>
                </el-collapse-item>
            </el-collapse>
        </el-form>
        <el-row v-show="!disable">
            <el-button type="success" @click="submit" :disabled="disable">提交</el-button>
            <el-button type="primary" @click="save" :disabled="disable">保存</el-button>
        </el-row>
    </div>
</template>

<script>
export default {
    name: "ReportVerifyForm",
    props: ['writable', 'checking', 'processId'],
    data() {
        return {
            form: {
                softwareName: '',
                client: '',
                reportIdChecked: false,
                pagesChecked: false,
                softwareNameChecked: false,
                softwareVersionChecked: false,
                clientChecked: false,
                finishDateChecked: false,
                clientAddressChecked: false,
                indexChecked: false,
                sampleChecked: false,
                softwareAndHardwareChecked: false,
                characterChecked: false,
                sentenceChecked: false,
                formatChecked: false,
                reportChecked: false,
            },
            activeParts: []
        }
    },
    methods: {
        submit() {
            this.doSubmit();
        },
        doSubmit() {
            if (this.writable) {
                console.log(JSON.stringify(this.form))
                console.log(this.processId)
                this.axios.put('/api/workflow/processes/' + this.processId + '/forms/' + 'ReportVerifyForm', JSON.stringify(this.form), {
                    headers: {
                        'Content-Type': 'text/plain'
                    }
                }).then(this.handleResult, this.handleError)
            }
        },
        save() {
            if (this.writable) {
                console.log(this.processId)
                this.axios.put('/api/workflow/processes/' + this.processId + '/forms/' + 'ReportVerifyForm', JSON.stringify(this.form), {
                    headers: {
                        'Content-Type': 'text/plain'
                    }
                }).then(this.handleSaveResult, this.handleError)
            }
        },
        handleResult(res) {
            console.log(res)
            this.$bus.$emit('submitTestReportVerify')
            if (res.status === 200) {
                this.$message.success('上传成功')
            }
        },
        handleSaveResult(res) {
            console.log(res)
            if (res.status === 200) {
                this.$message.success('保存成功')
            }
        },
        handleError(err) {
            if (err.response.status === 403) {
                this.$message.error('指定流程或表单对该用户不可见')
            } else if (err.response.status === 404) {
                this.$message.error('指定流程或表单不存在')
            }
        },
        autoFill() {
            this.axios.get('/api/workflow/processes/' + this.processId + '/details').then(
                (res) => {
                    if (res.status === 200) {
                        console.log(res.data)
                        this.form.softwareName = res.data.title
                        this.form.client = res.data.company
                    }
                },
                (err) => {
                    if (err.status === 402) {
                        this.$message.error('指定流程对该用户不可见')
                    } else if (err.status === 404) {
                        this.$message.error('指定流程不存在')
                    }
                }
            )

        }
    },
    computed: {
        disable() {
            if (this.writable === 'false') {
                return true
            } else if (this.writable === 'true') {
                return false
            } else if (!this.writable) {
                return true
            }
            return false
        },
        check() {
            if (this.checking === 'true') {
                return true
            } else if (this.checking === 'false') {
                return false
            } else if (this.checking) {
                return true
            }
            return false
        }
    },
    created() {
        this.axios.get('/api/workflow/processes/' + this.processId + '/forms/' + 'ReportVerifyForm').then(
            (res) => {
                if (res.status === 200) {
                    if (res.data) {
                        this.form = res.data
                        console.log('读取成功')
                    }
                    if (this.writable) {
                        this.autoFill()
                    }
                }

            },
            (err) => {
                if (err.response.status === 403) {
                    this.$message.error('指定流程或表单对该用户不可见')
                } else if (err.response.status === 404) {
                    this.$message.error('指定流程或表单不存在')
                }
            }
        )
    }
}
</script>

<style scoped>
.report-verification {
    width: 94%;
    margin-top: 2%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    padding: 5%;
}

.el-collapse-item {
    padding: 0 40px
}
</style>
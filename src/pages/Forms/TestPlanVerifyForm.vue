<template>
    <div class="verification">
        <h1>测试方案评审表</h1>
        <el-form label-width="100px" label-position="left" :disabled="disable">
            <el-row :gutter="20">
                <el-col :span="12">
                    <el-form-item label="软件名称">
                        <el-input placeholder="软件名称" v-model="form.softwareName"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="版本号">
                        <el-input placeholder="版本号" v-model="form.softwareVersion"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="12">
                    <el-form-item label="项目编号">
                        <el-input placeholder="项目编号" v-model="form.projectId"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="测试类别">
                        <el-input placeholder="测试类别" v-model="form.testType"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <h2>内容审核</h2>
            <el-table :data="form.verifyItems">
                <el-table-column label="审核内容" prop="content"></el-table-column>
                <el-table-column label="审核结果" align="center">
                    <template slot-scope="item">
                        <el-form-item label-width="0" class="table-form-item">
                            <el-radio-group v-model="item.row.passed">
                                <el-radio :label="true">是</el-radio>
                                <el-radio :label="false">否</el-radio>
                            </el-radio-group>
                        </el-form-item>
                    </template>
                </el-table-column>
                <el-table-column label="不通过原因" align="center">
                    <template slot-scope="item">
                        <el-form-item label-width="0" v-show="!item.row.passed" class="table-form-item">
                            <el-input type="textarea" v-model="item.row.explanation"
                                      placeholder="不通过原因"></el-input>
                        </el-form-item>
                        <p v-show="item.row.passed">无</p>
                    </template>
                </el-table-column>
            </el-table>
            <h2>审评意见</h2>
            <el-table :data="form.verifyEmployees">
                <el-table-column label="评审人" prop="position"></el-table-column>
                <el-table-column label="评审意见" align="center">
                    <template slot-scope="employee">
                        <el-form-item label-width="0" class="table-form-item">
                            <el-input type="textarea" v-model="employee.row.suggestions"
                                      placeholder="评审意见"></el-input>
                        </el-form-item>
                    </template>
                </el-table-column>
            </el-table>
        </el-form>
        <el-row v-show="!disable" style="margin-top: 20px">
            <el-button type="success" @click="submit" :disabled="disable">提交</el-button>
            <el-button type="primary" @click="save" :disabled="disable">保存</el-button>
        </el-row>
    </div>
</template>

<script>
import testPlanVerification from '../../assets/jsons/testPlanVerificationForm.json'

export default {
    name: 'TestPlanVerifyForm',
    props: ['writable', 'processId'],
    data() {
        return {
            form: {
                softwareName: '',
                softwareVersion: '',
                projectId: '',
                testType: '',
                verifyItems: [
                    {
                        content: '《测试方案》书写规范性',
                        passed: false,
                        explanation: '',
                    },
                    {
                        content: '测试环境是否具有典型意义以及是否符合用户要求',
                        passed: false,
                        explanation: '',
                    },
                    {
                        content: '测试内容的完整性，是否覆盖了整个系统',
                        passed: false,
                        explanation: '',
                    },
                    {
                        content: '测试方法的选取是否合理',
                        passed: false,
                        explanation: '',
                    },
                    {
                        content: '测试用例能否覆盖问题',
                        passed: false,
                        explanation: '',
                    },
                    {
                        content: '输入、输出数据设计合理性',
                        passed: false,
                        explanation: '',
                    },
                    {
                        content: '测试时间安排是否合理',
                        passed: false,
                        explanation: '',
                    },
                    {
                        content: '测试人力资源安排是否合理',
                        passed: false,
                        explanation: '',
                    },
                ],
                verifyEmployees: [
                    {
                        position: '测试工程师',
                        suggestions: '',
                    },
                    {
                        position: '测试室负责人',
                        suggestions: '',
                    },
                    {
                        position: '质量负责人',
                        suggestions: '',
                    },
                    {
                        position: '技术负责人',
                        suggestions: '',
                    },
                    {
                        position: '监督人',
                        suggestions: '',
                    },
                ]
            }
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
      
                this.axios.put('/api/workflow/processes/' + this.processId + '/forms/' + 'TestPlanVerifyForm', JSON.stringify(this.form), {
                    headers: {
                        'Content-Type': 'text/plain'
                    }
                }).then(this.handleResult, this.handleError)
            }
        },
        save() {
            if (this.writable) {
                sessionStorage.setItem('applicationForm', JSON.stringify(this.form))
                console.log(this.processId)
                this.axios.put('/api/workflow/processes/' + this.processId + '/forms/' + 'TestPlanVerifyForm', JSON.stringify(this.form), {
                    headers: {
                        'Content-Type': 'text/plain'
                    }
                }).then(this.handleSaveResult, this.handleError)
            }
        },
        handleResult(res) {
            console.log(res)
            this.$bus.$emit('submitTestPlanVerify')
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
                        this.form.softwareVersion = res.data.version
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
        }
    },
    mounted() {
        console.log(testPlanVerification)
    },
    created() {
        this.axios.get('/api/workflow/processes/' + this.processId + '/forms/' + 'TestPlanVerifyForm').then(
            (res) => {
                if (res.status === 200) {
                    if (res.data) {
                        this.form = res.data
                        console.log(res.data)
                        console.log('读取成功')
                    } else {
                        this.form = testPlanVerification
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
                this.form = testPlanVerification
            }
        )
    }
}
</script>

<style scoped>
.verification {
    width: 94%;
    margin-top: 2%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    padding: 5%;
}

.table-form-item {
    margin-bottom: 0;
}
</style>
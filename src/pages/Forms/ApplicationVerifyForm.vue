<template>
    <div class="verification">
        <h1>审核信息</h1>
        <el-form label-position="left" label-width="100px" :disabled="disable">
            <el-form-item label="密级">
                <el-radio-group v-model="form.confidentialLevel">
                    <el-radio label="无密级"></el-radio>
                    <el-radio label="秘密"></el-radio>
                    <el-radio label="机密"></el-radio>
                </el-radio-group>
            </el-form-item>
            <div class="virus">
                <el-form-item label="查杀病毒">
                    <el-radio-group v-model="form.virusCheck">
                        <el-radio label="已完成"></el-radio>
                        <el-radio label="无法完成"></el-radio>
                    </el-radio-group>
                    <el-form-item label="所用查杀工具">
                        <el-input placeholder="所用查杀工具" v-model="form.virusScanner"></el-input>
                    </el-form-item>
                </el-form-item>
            </div>
            <h2>材料检查</h2>
            <el-form-item label="测试样品">
                <el-checkbox-group v-model="form.softwareSamples">
                    <el-checkbox label="源代码"></el-checkbox>
                    <el-checkbox label="可执行文件"></el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="需求文档">
                <el-checkbox-group v-model="form.requirementDocuments">
                    <el-checkbox label="项目计划任务书"></el-checkbox>
                    <el-checkbox label="需求分析报告"></el-checkbox>
                    <el-checkbox label="合同"></el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="用户文档">
                <el-checkbox-group v-model="form.userDocuments">
                    <el-checkbox label="用户手册"></el-checkbox>
                    <el-checkbox label="用户指南"></el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="操作文件">
                <el-checkbox-group v-model="form.operatingDocuments">
                    <el-checkbox label="操作员手册"></el-checkbox>
                    <el-checkbox label="安装手册"></el-checkbox>
                    <el-checkbox label="诊断手册"></el-checkbox>
                    <el-checkbox label="支持手册"></el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="其他">
                <el-input placeholder="其他材料检查" v-model="form.otherDocument"></el-input>
            </el-form-item>
            <h2>确认意见</h2>
            <el-form-item>
                <el-radio-group v-model="form.confirmation">
                    <el-radio label="测试所需材料不全，未达到受理条件。"></el-radio>
                    <el-radio
                        label="属依据国家标准或自编非标规范进行的常规检测，有资质、能力和资源满足委托方要求。"></el-radio>
                    <el-radio label="无国家标准和规范依据，或中心缺乏检测设备和工具，无法完成检测。"></el-radio>
                    <el-radio label="超出中心能力和资质范围，无法完成检测。"></el-radio>
                </el-radio-group>
            </el-form-item>
            <h2>受理意见</h2>
            <el-form-item>
                <el-radio-group v-model="form.acceptance">
                    <el-radio label="受理-进入项目立项和合同评审流程"></el-radio>
                    <el-radio label="不受理"></el-radio>
                    <el-radio label="进一步联系"></el-radio>
                </el-radio-group>
            </el-form-item>
            <h2>测试项目编号</h2>
            <el-form-item>
                <el-input placeholder="测试项目编号" v-model="form.projectId"></el-input>
            </el-form-item>
            <h2>备注</h2>
            <el-form-item>
                <el-input type="textarea" placeholder="备注" v-model="form.notes"></el-input>
            </el-form-item>
        </el-form>
        <el-row v-show="!disable">
            <el-button type="primary" @click="submit" :disabled="disable">提交</el-button>
            <el-button type="primary" @click="save" :disabled="disable">保存</el-button>
        </el-row>
    </div>
</template>

<script>
export default {
    name: 'ApplicationVerifyForm',
    props: ['writable', 'processId'],
    data() {
        return {
            form: {
                confidentialLevel: '',
                virusCheck: '',
                virusScanner: '',
                softwareSamples: [],
                requirementDocuments: [],
                userDocuments: [],
                operatingDocuments: [],
                otherDocument: '',
                confirmation: '',
                acceptance: '',
                projectId: '',
                notes: ''
            }
        }
    },
    methods: {
        save() {

        },
        submit() {
            console.log(JSON.stringify(this.form))
            console.log(this.processId)
            this.axios.put('/api/workflow/processes/' + this.processId + '/forms/' + 'ApplicationVerifyForm', JSON.stringify(this.form), {
                headers: {
                    'Content-Type': 'text/plain'
                }
            }).then(this.handleResult, this.handleError)
        },
        handleResult(res) {
            console.log(res)
            if (res.status === 200) {
                alert('上传成功')
            }
        },
        handleSaveResult(res) {
            console.log(res)
            if (res.status === 200) {
                alert('保存成功')
            }
        },
        handleError(err) {
            if (err.response.status === 403) {
                alert('指定流程或表单对该用户不可见')
            } else if (err.response.status === 404) {
                alert('指定流程或表单不存在')
            }
        },
    },
    computed: {
        disable() {
            //console.log(this.writable)
            if (this.writable === 'false') {
                return true
            } else if (!this.writable) {
                return true
            }
            return false
        }
    },
    created() {
        this.axios.get('/api/workflow/processes/' + this.processId + '/forms/' + 'ApplicationVerifyForm').then(
            (res) => {
                console.log(res.data)
                if (res.data) {
                    this.form = res.data
                } 
                this.dataReady = true
            },
            (err) => {
                if (err.response.status === 403) {
                    alert('指定流程或表单对该用户不可见')
                } else if (err.response.status === 404) {
                    alert('指定流程或表单不存在')
                }
            }
        )
    },
}
</script>

<style scoped>
.verification {
    width: 94%;
    margin-top: 2%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    padding: 5%;
}

.virus {
    display: flex;
}
</style>
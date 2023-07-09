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
            <h3>基本项</h3>
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
            <h3>测试报告</h3>
            <el-form-item label="报告准确性">
                <el-radio-group v-model="form.reportChecked">
                    <el-radio :label="true">是</el-radio>
                    <el-radio :label="false">否</el-radio>
                </el-radio-group>
            </el-form-item>
        </el-form>
        <el-row v-show="!disable">
            <el-button type="success" @click="submit" :disabled="disabled">提交</el-button>
            <el-button type="primary" @click="save" :disabled="disabled">保存</el-button>
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
</style>
<template>
    <div class="record-form">
        <h1>软件测试记录</h1>
        <el-button @click="addRecord">新建测试记录</el-button>
        <el-form label-width="120px" label-position="left" :disabled="disable">
            <el-form-item v-for="(record, index) in form.records" :key="index" class="record">
                <h1>Testcase {{ index }}</h1>
                <table>
                    <tr>
                        <th>测试类型</th>
                        <td>
                            <el-input v-model="record.type"></el-input>
                        </td>
                        <th>设计说明</th>
                        <td>
                            <el-input v-model="record.description"></el-input>
                        </td>
                    </tr>

                    <tr>
                        <th>规约说明</th>
                        <td>
                            <el-input v-model="record.contract"></el-input>
                        </td>
                        <th>前提条件</th>
                        <td>
                            <el-input v-model="record.premise"></el-input>
                        </td>
                    </tr>

                    <tr>
                        <th>执行过程</th>
                        <td>
                            <el-input v-model="record.process"></el-input>
                        </td>
                        <th>预期结果</th>
                        <td>
                            <el-input v-model="record.prediction"></el-input>
                        </td>
                    </tr>

                    <tr>
                        <th>设计者</th>
                        <td>
                            <el-input v-model="record.designer"></el-input>
                        </td>
                        <th>实际结果</th>
                        <td>
                            <el-input v-model="record.result"></el-input>
                        </td>
                    </tr>

                    <tr>
                        <th>一致性</th>
                        <td>
                            <el-radio-group v-model="record.matched">
                                <el-radio :label="true">是</el-radio>
                                <el-radio :label="false">否</el-radio>
                            </el-radio-group>
                        </td>
                        <th>相关 bug 编号</th>
                        <td>
                            <el-input v-model="record.bugIndex"></el-input>
                        </td>
                    </tr>

                    <tr>
                        <th>执行者</th>
                        <td>
                            <el-input v-model="record.executor"></el-input>
                        </td>
                        <th>执行测试时间</th>
                        <td>
                            <el-input v-model="record.date"></el-input>
                        </td>
                    </tr>

                    <th>确认人</th>
                    <td>
                        <el-input v-model="record.verifier"></el-input>
                    </td>
                </table>

                <br>
                <el-button type="danger" @click="deleteRecord(index)">删除</el-button>
            </el-form-item>
        </el-form>
        <br>
        <el-row v-show="!disable">
            <el-button type="success" @click="submit" :disabled="disable">提交</el-button>
            <el-button type="primary" @click="save" :disabled="disable">保存</el-button>
        </el-row>
        <el-row v-show="check">
            <el-button type="success" @click="pass" :disabled="!disable">通过</el-button>
            <el-button type="danger" @click="refute" :disabled="!disable">驳回</el-button>
        </el-row>
    </div>
</template>

<script>
import testRecords from '../../assets/jsons/testRecordsForm.json'

export default {
    name: 'TestRecordForm',
    props: ['writable', 'processId', 'checking'],
    data() {
        return {
            form: {
                records: [{
                    type: '',
                    description: '',
                    contract: '',
                    premise: '',
                    process: '',
                    prediction: '',
                    designer: '',
                    result: '',
                    matched: false,
                    bugIndex: '',
                    executor: '',
                    date: '',
                    verifier: ''
                }]
            }

        }
    },
    methods: {
        addRecord() {
            this.form.records.push({
                type: '',
                description: '',
                contract: '',
                premise: '',
                process: '',
                prediction: '',
                designer: '',
                result: '',
                matched: false,
                bugIndex: '',
                executor: '',
                date: '',
                verifier: ''
            })
        },
        deleteRecord(index) {
            this.form.records.splice(index, 1)
        },
        submit() {
            this.doSubmit();
        },
        doSubmit() {
            if (this.writable) {
                console.log(JSON.stringify(this.form))
                console.log(this.processId)
                this.axios.put('/api/workflow/processes/' + this.processId + '/forms/' + 'TestRecordsForm', JSON.stringify(this.form), {
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
                this.axios.put('/api/workflow/processes/' + this.processId + '/forms/' + 'TestRecordsForm', JSON.stringify(this.form), {
                    headers: {
                        'Content-Type': 'text/plain'
                    }
                }).then(this.handleSaveResult, this.handleError)
            }
        },
        pass() {
            //this.$bus.$emit('passApplication', true)
            console.log('pass')
        },
        refute() {
            //this.$bus.$emit('passApplication', false)
            console.log('refute')
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
    },
    mounted() {
        console.log(testRecords)
    },
    created() {
        this.axios.get('/api/workflow/processes/' + this.processId + '/forms/' + 'TestRecordsForm').then(
            (res) => {
                if (res.status === 200) {
                    if (res.data) {
                        this.form = res.data
                        console.log('读取成功')
                    } else {
                        this.form = testRecords
                    }
                }

            },
            (err) => {

                if (err.response.status === 403) {
                    alert('指定流程或表单对该用户不可见')
                } else if (err.response.status === 404) {
                    alert('指定流程或表单不存在')
                }
                this.form = testRecords
            }
        )
    }
}
</script>

<style scoped>
.record-form {
    width: 94%;
    margin-top: 2%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    padding: 5%;
}

.record {
    margin: 30px;
    padding: 10px;
    border: 1px solid black;
}
</style>
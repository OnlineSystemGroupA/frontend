<template>
    <div class="record-form">
        <h1>软件测试记录</h1>
        <el-form label-width="120px" label-position="left" :disabled="disable">
            <el-table :data="form.records" ref="problemTable" @row-click="onRowClick" style="width: 100%">
                <el-table-column type="index"></el-table-column>
                <el-table-column type="expand">
                    <template slot-scope="record">
                        <div class="table-dropdown">
                            <h1>Testcase {{ record.$index + 1}}</h1>
                            <table>
                                <el-row :gutter="20">
                                    <el-col :span="12">
                                        <el-form-item label="测试类型">
                                            <el-input v-model="record.row.type"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="12">
                                        <el-form-item label="设计说明">
                                            <el-input v-model="record.row.description"></el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>

                                <el-row :gutter="20">
                                    <el-col :span="12">
                                        <el-form-item label="规约说明">
                                            <el-input v-model="record.row.contract"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="12">
                                        <el-form-item label="前提条件">
                                            <el-input v-model="record.row.premise"></el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>

                                <el-row :gutter="20">
                                    <el-col :span="12">
                                        <el-form-item label="执行过程">
                                            <el-input v-model="record.row.process"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="12">
                                        <el-form-item label="预期结果">
                                            <el-input v-model="record.row.prediction"></el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>

                                <el-row :gutter="20">
                                    <el-col :span="12">
                                        <el-form-item label="设计者">
                                            <el-input v-model="record.row.designer"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="12">
                                        <el-form-item label="实际结果">
                                            <el-input v-model="record.row.result"></el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>

                                <el-row :gutter="20">
                                    <el-col :span="12">
                                        <el-form-item label="一致性">
                                            <el-radio-group v-model="record.row.matched">
                                                <el-radio :label="true">是</el-radio>
                                                <el-radio :label="false">否</el-radio>
                                            </el-radio-group>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="12">
                                        <el-form-item label="相关 bug 编号">
                                            <el-input v-model="record.row.bugIndex"></el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>

                                <el-row :gutter="20">
                                    <el-col :span="12">
                                        <el-form-item label="执行者">
                                            <el-input v-model="record.row.executor"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="12">
                                        <el-form-item label="执行测试时间">
                                            <el-input v-model="record.row.date"></el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>

                                <el-row :gutter="20">
                                    <el-col :span="12">
                                        <el-form-item label="确认人">
                                            <el-input v-model="record.row.verifier"></el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                            </table>
                            <br>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column label="测试类型" prop="type"></el-table-column>
                <el-table-column label="设计说明" prop="description"></el-table-column>
                <el-table-column align="right">
                    <template slot="header">
                        <el-button size="mini" type="primary" plain circle icon="el-icon-plus"
                                   @click.native.stop="addRecord"></el-button>
                    </template>
                    <template slot-scope="record">
                        <el-button size="mini" type="danger" plain circle icon="el-icon-delete"
                                   @click.native.stop="deleteRecord(record.$index)"></el-button>
                    </template>
                </el-table-column>
            </el-table>
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
        onRowClick(row) {
            this.$refs.problemTable.toggleRowExpansion(row);
        },
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
                //sessionStorage.setItem('applicationForm', JSON.stringify(this.form))
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
                    this.$message.error('指定流程或表单对该用户不可见')
                } else if (err.response.status === 404) {
                    this.$message.error('指定流程或表单不存在')
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

.table-dropdown {
    width: 100%;
    padding: 0 10%;
}

.el-form-item {
    margin-bottom: 5px;
}
</style>
<template>
    <div class="test_plan">
        <h1>测试方案</h1>
        <el-form label-position="top" label-width="80px" :disabled="disable">
            <el-form-item label="版本号" style="width: 50%">
                <el-input v-model="form.version" placeholder="版本号"></el-input>
            </el-form-item>
            <h3>修改记录</h3>
            <el-table :data="form.editRecords">
                <el-table-column type="index"></el-table-column>
                <el-table-column align="center" label="版本">
                    <template slot-scope="scope">
                        <el-form-item :show-message="false" class="table-form-item">
                            <el-input v-model="scope.row.version" placeholder="版本"></el-input>
                        </el-form-item>
                    </template>
                </el-table-column>
                <el-table-column align="center" label="日期">
                    <template slot-scope="scope">
                        <el-form-item :show-message="false" class="table-form-item">
                            <el-input v-model="scope.row.date" placeholder="日期"></el-input>
                        </el-form-item>
                    </template>
                </el-table-column>
                <el-table-column align="center" label="AMD">
                    <template slot-scope="scope">
                        <el-form-item :show-message="false" class="table-form-item">
                            <el-input v-model="scope.row.amd" placeholder="AMD"></el-input>
                        </el-form-item>
                    </template>
                </el-table-column>
                <el-table-column align="center" label="修订者">
                    <template slot-scope="scope">
                        <el-form-item :show-message="false" class="table-form-item">
                            <el-input v-model="scope.row.editor" placeholder="修订者"></el-input>
                        </el-form-item>
                    </template>
                </el-table-column>
                <el-table-column align="center" label="说明">
                    <template slot-scope="scope">
                        <el-form-item :show-message="false" class="table-form-item">
                            <el-input v-model="scope.row.description" placeholder="说明"></el-input>
                        </el-form-item>
                    </template>
                </el-table-column>
                <el-table-column align="center" width="100">
                    <template slot="header">
                        <el-button
                            size="mini"
                            type="primary"
                            plain
                            circle
                            icon="el-icon-plus"
                            @click="addItem"></el-button>
                    </template>
                    <template slot-scope="item">
                        <el-button
                            size="mini"
                            type="danger"
                            plain
                            circle
                            icon="el-icon-delete"
                            @click="removeItem(item.$index)"></el-button>
                    </template>
                </el-table-column>
            </el-table>
            <h6>(A-添加，M-修改，D-删除)</h6>
            <el-collapse v-model="activeParts">
                <el-collapse-item name="1">
                    <template slot="title">
                        <h2>1. 引言</h2>
                    </template>
                    <div class="collapse-div">
                        <el-row :gutter="40">
                            <el-col :span="12">
                                <h3>1.1 标识</h3>
                                <el-form-item>
                                    <el-input type="textarea" placeholder="标识" v-model="form.marks"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <h3>1.2 系统概述</h3>
                                <el-form-item>
                                    <el-input type="textarea" placeholder="系统概述"
                                              v-model="form.systemOverview"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row :gutter="40">
                            <el-col :span="12">
                                <h3>1.3 文档概述</h3>
                                <el-form-item :show-message="false">
                                    <el-input type="textarea" placeholder="文档概述"
                                              v-model="form.documentOverview"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <h3>1.4 基线</h3>
                                <el-form-item :show-message="false">
                                    <el-input type="textarea" placeholder="基线" v-model="form.baselines"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </div>
                </el-collapse-item>
                <el-collapse-item name="2">
                    <template slot="title">
                        <h2>2. 引用文件</h2>
                    </template>
                    <div class="collapse-div">
                        <el-form-item label="引用文件" style="width: 50%">
                            <el-input type="textarea" placeholder="引用文件" v-model="form.reference"></el-input>
                        </el-form-item>
                    </div>
                </el-collapse-item>
                <el-collapse-item name="3">
                    <template slot="title">
                        <h2>3. 软件测试环境</h2>
                    </template>
                    <div class="collapse-div">
                        <el-row :gutter="40">
                            <el-col :span="12">
                                <h3>3.1 硬件</h3>
                                <el-form-item :show-message="false">
                                    <el-input type="textarea" placeholder="硬件" v-model="form.hardware"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <h3>3.2 软件</h3>
                                <el-form-item :show-message="false">
                                    <el-input type="textarea" placeholder="软件" v-model="form.software"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row :gutter="40">
                            <el-col :span="12">
                                <h3>3.3 其他</h3>
                                <el-form-item :show-message="false">
                                    <el-input type="textarea" placeholder="其他" v-model="form.other"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row :gutter="40">
                            <el-col :span="12">
                                <h3>3.4 参与组织</h3>
                                <el-form-item :show-message="false">
                                    <el-input type="textarea" placeholder="参与组织"
                                              v-model="form.organization"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <h3>3.5 人员</h3>
                                <el-form-item :show-message="false">
                                    <el-input type="textarea" placeholder="人员" v-model="form.staff"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </div>
                </el-collapse-item>
                <el-collapse-item name="4">
                    <template slot="title">
                        <h2>4. 计划</h2>
                    </template>
                    <div class="collapse-div">
                        <h3>4.1 总体设计</h3>
                        <el-row :gutter="40">
                            <el-col :span="12">
                                <el-form-item label="4.1.1 测试级别">
                                    <el-input type="textarea" placeholder="测试级别"
                                              v-model="form.testLevel"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="4.1.2 测试类别">
                                    <el-input type="textarea" placeholder="测试类别" v-model="form.testType"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row :gutter="40">
                            <el-col :span="12">
                                <el-form-item label="4.1.3 一般测试条件">
                                    <el-input type="textarea" placeholder="一般测试条件"
                                              v-model="form.testCondition"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row :gutter="40">
                            <el-col :span="12">
                                <h3>4.2计划执行的测试</h3>
                                <el-form-item :show-message="false">
                                    <el-input type="textarea" placeholder="计划执行的测试"
                                              v-model="form.plannedTest"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <h3>4.3测试用例</h3>
                                <el-form-item :show-message="false">
                                    <el-input type="textarea" placeholder="测试用例"
                                              v-model="form.testCases"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </div>
                </el-collapse-item>
                <el-collapse-item name="5">
                    <template slot="title">
                        <h2>5. 测试进度表格</h2>
                    </template>
                    <div class="collapse-div">
                        <div>
                            <p>此项目主要分为业务测试和文档审查两部分的工作,两部分的工作可以并行完成。</p>
                            测试方为完成本方案所述的测试所需时间大约为
                            <div style="display: inline-block">
                                <el-form-item :show-message="false">
                                    <el-input-number :min="0" :max="100000" v-model="form.time"></el-input-number>
                                </el-form-item>
                            </div>
                            个工作日，如测试需求产生变更会导致测试时间的变化。
                        </div>
                        <p>下表大致估计了本次测试各个阶段所需工作量及起止时间。</p>
                        <el-table :data="form.timeTables" height="auto" border style="width: 100%">
                            <el-table-column prop="task" label="里程碑任务" style="width: 25%"></el-table-column>
                            <el-table-column align="center" prop="lastTime" label="工作量" style="width: 25%">
                                <template slot-scope="scope">
                                    <el-form-item :show-message="false" class="table-form-item">
                                        <el-input-number v-model="scope.row.lastTime" placeholder="工作量"
                                                         style="width: 100%"></el-input-number>
                                    </el-form-item>
                                </template>
                            </el-table-column>
                            <el-table-column align="center" prop="startTime" label="开始时间" style="width: 25%">
                                <template slot-scope="scope">
                                    <el-form-item :show-message="false" class="table-form-item">
                                        <el-date-picker v-model="scope.row.startTime" placeholder="开始时间"
                                                        style="width: 100%"></el-date-picker>
                                    </el-form-item>
                                </template>
                            </el-table-column>
                            <el-table-column align="center" prop="endTime" label="结束时间" style="width: 25%">
                                <template slot-scope="scope">
                                    <el-form-item :show-message="false" class="table-form-item">
                                        <el-date-picker v-model="scope.row.endTime" placeholder="结束时间"
                                                        style="width: 100%"></el-date-picker>
                                    </el-form-item>
                                </template>
                            </el-table-column>
                        </el-table>
                    </div>
                </el-collapse-item>
                <el-collapse-item name="6">
                    <template slot="title">
                        <h2>6. 需求的可追踪性</h2>
                    </template>
                    <div class="collapse-div">
                        <el-form-item label="需求的可追踪性" style="width: 50%">
                            <el-input type="textarea" placeholder="需求的可追踪性"
                                      v-model="form.traceability"></el-input>
                        </el-form-item>
                    </div>
                </el-collapse-item>
            </el-collapse>
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
import testPlanForm from '../../assets/jsons/testPlanForm.json'

export default {
    name: 'TestPlanForm',
    props: ['writable', 'checking', 'processId'],
    data() {
        return {
            form: {
                version: '',
                editRecords: [
                    {
                        version: '',
                        date: '',
                        amd: '',
                        editor: '',
                        description: '',
                    }
                ],
                marks: '',
                systemOverview: '',
                documentOverview: '',
                baselines: '',
                reference: '',
                hardware: '',
                software: '',
                other: '',
                organization: '',
                staff: '',
                testLevel: '',
                testType: '',
                testCondition: '',
                plannedTest: '',
                testCases: '',
                time: '',
                timeTables: [
                    {
                        task: '制定测试计划',
                        lastTime: '',
                        startTime: '',
                        endTime: '',
                    },
                    {
                        task: '设计测试',
                        lastTime: '',
                        startTime: '',
                        endTime: '',
                    },
                    {
                        task: '执行测试',
                        lastTime: '',
                        startTime: '',
                        endTime: '',
                    },
                    {
                        task: '评估测试',
                        lastTime: '',
                        startTime: '',
                        endTime: '',
                    },
                ],
                traceability: '',
            },
            activeParts: []
        }
    },
    methods: {
        addItem() {
            const item = {
                version: '',
                date: '',
                amd: '',
                editor: '',
                description: '',
            }
            this.form.editRecords.push(item)
        },
        removeItem(index) {
            if (index !== -1) {
                this.form.editRecords.splice(index, 1)
            }
        },
        submit() {
            this.doSubmit();
        },
        doSubmit() {
            if (this.writable) {
                console.log(JSON.stringify(this.form))
                console.log(this.processId)
                this.axios.put('/api/workflow/processes/' + this.processId + '/forms/' + 'TestPlanForm', JSON.stringify(this.form), {
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
                this.axios.put('/api/workflow/processes/' + this.processId + '/forms/' + 'TestPlanForm', JSON.stringify(this.form), {
                    headers: {
                        'Content-Type': 'text/plain'
                    }
                }).then(this.handleSaveResult, this.handleError)
            }
        },
        pass() {
            this.$bus.$emit('checkTestPlan', true)
        },
        refute() {
            this.$bus.$emit('checkTestPlan', false)
        },
        handleResult(res) {
            console.log(res)
            if (res.status === 200) {
                this.$bus.$emit('submitTestPlan')
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
        },
    },
    mounted() {
        console.log(testPlanForm)
    },
    created() {
        this.axios.get('/api/workflow/processes/' + this.processId + '/forms/' + 'TestPlanForm').then(
            (res) => {
                if (res.status === 200) {
                    if (res.data) {
                        this.form = res.data
                        console.log('读取成功')
                    } else {
                        this.form = testPlanForm
                    }
                }

            },
            (err) => {

                if (err.response.status === 403) {
                    alert('指定流程或表单对该用户不可见')
                } else if (err.response.status === 404) {
                    alert('指定流程或表单不存在')
                }
                this.form = testPlanForm
            }
        )
    }
}
</script>

<style scoped>
.test_plan {
    width: 94%;
    margin-top: 2%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    padding: 5%;
}

.table-form-item {
    margin-bottom: 0;
}

.collapse-div {
    padding: 0 40px;
}
</style>
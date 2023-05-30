<template>
    <div class="test_plan">
        <h1>测试方案</h1>
        <el-form label-position="left" label-width="80px" :disabled="disable">
            <el-form-item label="版本号">
                <el-input v-model="form.version" placeholder="版本号"></el-input>
            </el-form-item>
            <h3>修改记录</h3>
            <el-form-item v-for="(record, index) in form.editRecords" :key=index :label="'记录' + (index + 1)">
                <el-form-item label="版本">
                    <el-input v-model="record.version" placeholder="版本" style="width:50%"></el-input>
                </el-form-item>
                <el-form-item label="日期">
                    <el-date-picker v-model="record.date" placeholder="日期" style="width:50%"></el-date-picker>
                </el-form-item>
                <el-form-item label="AMD">
                    <el-input v-model="record.AMD" placeholder="AMD" style="width:50%"></el-input>
                </el-form-item>
                <el-form-item label="修订者">
                    <el-input v-model="record.editor" placeholder="修订者" style="width:50%"></el-input>
                </el-form-item>
                <el-form-item label="说明">
                    <el-input v-model="record.description" placeholder="说明" style="width:50%"></el-input>
                </el-form-item>
                <el-button @click="removeItem(index)">删除表项</el-button>
            </el-form-item>
            <el-button @click="addItem">添加表项</el-button>
            <h6>(A-添加，M-修改，D-删除)</h6>
            <h2>1.引言</h2>
            <h3>1.1标识</h3>
            <el-input type="textarea" placeholder="标识" v-model="form.marks"></el-input>
            <h3>1.2系统概述</h3>
            <el-input type="textarea" placeholder="系统概述" v-model="form.systemOverview"></el-input>
            <h3>1.3文档概述</h3>
            <el-input type="textarea" placeholder="文档概述" v-model="form.documentOverview"></el-input>
            <h3>1.4基线</h3>
            <el-input type="textarea" placeholder="基线" v-model="form.baselines"></el-input>
            <h2>2.引用文件</h2>
            <el-input type="textarea" placeholder="引用文件" v-model="form.reference"></el-input>
            <h2>3.软件测试环境</h2>
            <h3>3.1硬件</h3>
            <el-input type="textarea" placeholder="硬件" v-model="form.hardware"></el-input>
            <h3>3.2软件</h3>
            <el-input type="textarea" placeholder="软件" v-model="form.software"></el-input>
            <h3>3.3其他</h3>
            <el-input type="textarea" placeholder="其他" v-model="form.other"></el-input>
            <h3>3.4参与组织</h3>
            <el-input type="textarea" placeholder="参与组织" v-model="form.organization"></el-input>
            <h3>3.5人员</h3>
            <el-input type="textarea" placeholder="人员" v-model="form.stuff"></el-input>
            <h2>4计划</h2>
            <h3>4.1总体设计</h3>
            <h4>4.1.1测试级别</h4>
            <el-input type="textarea" placeholder="测试级别" v-model="form.testLevel"></el-input>
            <h4>4.1.2测试类别</h4>
            <el-input type="textarea" placeholder="测试类别" v-model="form.testType"></el-input>
            <h4>4.1.3一般测试条件</h4>
            <el-input type="textarea" placeholder="一般测试条件" v-model="form.testCondition"></el-input>
            <h3>4.2计划执行的测试</h3>
            <el-input type="textarea" placeholder="计划执行的测试" v-model="form.plannedTest"></el-input>
            <h3>4.3测试用例</h3>
            <el-input type="textarea" placeholder="测试用例" v-model="form.testCases"></el-input>
            <h2>5.测试进度表格</h2>
            <p>此项目主要分为：业务测试和文档审查两部分的工作。两部分的工作可以并行完成。测试方为完成本方案所述的测试所需时间大约为
                <el-input-number controls-position="right" :min="0" :max="100000" v-model="form.time"></el-input-number>
                个工作日，如测试需求产生变更会导致测试时间的变化。
            </p>
            <p>下表大致估计了本次测试各个阶段所需工作量及起止时间。</p>
            <el-table :data="form.timeTable" height="auto" border style="width: 100%">
                <el-table-column prop="task" label="里程碑任务" style="width: 25%"> </el-table-column>
                <el-table-column prop="lastTime" label="工作量" style="width: 25%">
                    <template slot-scope="scope">
                        <el-input-number v-model="scope.row.lastTime" placeholder="工作量"
                            style="width: 100%"></el-input-number>
                    </template>
                </el-table-column>
                <el-table-column prop="startTime" label="开始时间" style="width: 25%">
                    <template slot-scope="scope">
                        <el-date-picker v-model="scope.row.startTime" placeholder="开始时间"
                            style="width: 100%"></el-date-picker>
                    </template>
                </el-table-column>
                <el-table-column prop="endTime" label="结束时间" style="width: 25%">
                    <template slot-scope="scope">
                        <el-date-picker v-model="scope.row.endTime" placeholder="结束时间" style="width: 100%"></el-date-picker>
                    </template>
                </el-table-column>
            </el-table>
            <h2>6.需求的可追踪性</h2>
            <el-input type="textarea" placeholder="需求的可追踪性" v-model="form.traceability"></el-input>
        </el-form>
        <br>
        <el-row v-show="!disable">
            <el-button type="primary" @click="submit" :disabled="disable">提交</el-button>
            <el-button type="primary" @click="save" :disabled="disable">保存</el-button>
        </el-row>
        <el-row v-show="check">
            <el-button type="primary" @click="pass" :disabled="!disable">通过</el-button>
            <el-button type="primary" @click="refute" :disabled="!disable">驳回</el-button>
        </el-row>
    </div>
</template>

<script>
import testPlanForm from '../../assets/jsons/testPlanForm.json'
export default {
    name: 'TestPlanForm',
    props: ['writable', 'checking', 'formId'],
    data() {
        return {
            form: {
                version: '',
                editRecords: [
                    {
                        version: '',
                        date: '',
                        AMD: '',
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
                stuff: '',
                testLevel: '',
                testType: '',
                testCondition: '',
                plannedTest: '',
                testCases: '',
                time: '',
                timeTable: [
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
            }
        }
    },
    methods: {
        addItem() {
            const item = {
                version: '',
                date: '',
                AMD: '',
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
            console.log(JSON.stringify(this.form))
        },
        save() {
            console.log(JSON.stringify(this.form))
        },
        pass() {

        },
        refute() {

        }
    },
    computed: {
        disable() {
            if (this.writable === 'false') {
                return true
            }
            else if (this.writable === 'true') {
                return false
            }
            else if (!this.writable) {
                return true
            }
            return false
        },
        check() {
            if (this.checking === 'true') {
                return true
            }
            else if (this.checking === 'false') {
                return false
            }
            else if (this.checking) {
                return true
            }
            return false
        },
    },
    mounted() {
        console.log(testPlanForm)
        this.form = (testPlanForm)
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
</style>
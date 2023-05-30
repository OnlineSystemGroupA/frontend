<template>
    <div class="verification">
        <h1>测试方案评审表</h1>
        <el-form label-width="100px" label-position="left" :disabled="disable">
            <el-form-item label="软件名称">
                <el-input placeholder="软件名称" v-model="form.softwareName"></el-input>
            </el-form-item>
            <el-form-item label="版本号">
                <el-input placeholder="版本号" v-model="form.version"></el-input>
            </el-form-item>
            <el-form-item label="项目编号">
                <el-input placeholder="项目编号" v-model="form.itemNum"></el-input>
            </el-form-item>
            <el-form-item label="测试类别">
                <el-input placeholder="测试类别" v-model="form.testType"></el-input>
            </el-form-item>
            <h2>内容审核</h2>
            <el-form-item v-for="item in form.verifyItems" :key="item.content">
                <h3>审核内容:{{ item.content }}</h3>
                <el-radio-group v-model="item.passOrNot">
                    <el-radio :label="true">是</el-radio>
                    <el-radio :label="false">否</el-radio>
                </el-radio-group>
                <el-form-item label="不通过原因">
                    <el-input type="textarea" v-model="item.explanation" placeholder="不通过原因"
                        :disabled="item.passOrNot"></el-input>
                </el-form-item>
            </el-form-item>
            <h2>审评意见</h2>
            <el-form-item v-for="employee in form.verfiyEmployees" :key="employee.position">
                <h3>职责:{{ employee.position }}</h3>
                <el-form-item>
                    <el-input type="textarea" v-model="employee.suggestions" placeholder="评审意见"></el-input>
                </el-form-item>
            </el-form-item>
        </el-form>
        <el-row v-show="!disable">
            <el-button type="primary" @click="submit" :disabled="disable">提交</el-button>
            <el-button type="primary" @click="save" :disabled="disable">保存</el-button>
        </el-row>
    </div>
</template>

<script>
import testPlanVerification from '../../assets/jsons/testPlanVerificationForm.json'
export default {
    name: 'TestPlanVerifyForm',
    props: ['writable', 'formId'],
    data() {
        return {
            form: {
                softwareName: '',
                version: '',
                itemNum: '',
                testType: '',
                verifyItems: [
                    {
                        content: '《测试方案》书写规范性',
                        passOrNot: false,
                        explanation: '',
                    },
                    {
                        content: '测试环境是否具有典型意义以及是否符合用户要求',
                        passOrNot: false,
                        explanation: '',
                    },
                    {
                        content: '测试内容的完整性，是否覆盖了整个系统',
                        passOrNot: false,
                        explanation: '',
                    },
                    {
                        content: '测试方法的选取是否合理',
                        passOrNot: false,
                        explanation: '',
                    },
                    {
                        content: '测试用例能否覆盖问题',
                        passOrNot: false,
                        explanation: '',
                    },
                    {
                        content: '输入、输出数据设计合理性',
                        passOrNot: false,
                        explanation: '',
                    },
                    {
                        content: '测试时间安排是否合理',
                        passOrNot: false,
                        explanation: '',
                    },
                    {
                        content: '测试人力资源安排是否合理',
                        passOrNot: false,
                        explanation: '',
                    },
                ],
                verfiyEmployees: [
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
        }
    },
    mounted() {
        console.log(testPlanVerification)
        this.form = testPlanVerification
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
</style>
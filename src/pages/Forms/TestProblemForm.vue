<template>
    <div class="record-form">
        <h1>测试问题清单</h1>
        <el-form :disabled="disable">
            <el-form-item v-for="item in form.problemList" :key="item.vforKey" class="record">
                <el-form label-width="100px" label-position="left" :disabled="disable">
                    <el-row>
                        <el-col class="col">
                            <el-form-item label="序号">
                                <el-input v-model="item.index" placeholder="序号"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col class="col">
                            <el-form-item label="对应需求条目">
                                <el-input v-model="item.relatedRequirementItem" placeholder="对应需求条目"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col class="col">
                            <el-form-item label="关联用例">
                                <el-input v-model="item.relatedCase" placeholder="关联用例"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col class="col">
                            <el-form-item label="发现时间">
                                <el-date-picker style="width: 100%;" v-model="item.discoveredTime"
                                    placeholder="发现时间"></el-date-picker>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col class="col">
                            <el-form-item label="责任人">
                                <el-input v-model="item.personInCharge" placeholder="责任人"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-form>

                <el-form-item label="问题（缺陷）简要描述">
                    <el-input v-model="item.description" placeholder="问题（缺陷）简要描述" type="textarea"></el-input>
                </el-form-item>

                <el-form-item label="发现缺陷的初始条件">
                    <el-input v-model="item.initialCondition" placeholder="发现缺陷的初始条件" type="textarea"></el-input>
                </el-form-item>

                <el-form-item label="发现缺陷用例及具体操作路径（要具体）">
                    <el-input v-model="item.operationRoute" placeholder="发现缺陷用例及具体操作路径（要具体）" type="textarea"></el-input>
                </el-form-item>
                
                <el-form-item label="修改意见">
                    <el-input v-model="item.editSuggestion" type="textarea" placeholder="修改意见"></el-input>
                </el-form-item>

                <el-button type="danger" @click="deleteProbemItem(item.vforKey)" v-show="!disable">删除表项</el-button>
            </el-form-item>
        </el-form>
        <el-button type="primary" @click="addProblemItem" v-show="!disable">添加表项</el-button>
        <br>
        <br>
        <el-row v-show="!disable">
            <el-button type="primary" @click="submit" :disabled="disable">提交</el-button>
            <el-button type="primary" @click="save" :disabled="disable">保存</el-button>
        </el-row>
    </div>
</template>

<script>
import { nanoid } from "nanoid"
import testProblemForm from '../../assets/jsons/testProblemForm.json'
export default {
    name: 'TestProblemForm',
    props: ['writable', 'processId', 'checking'],
    data() {
        return {
            form: {
                problemList: [
                    {
                        index: '',
                        description: '',
                        relatedRequirementItem: '',
                        initialCondition: '',
                        operationRoute: '',
                        relatedCase: '',
                        discoveredTime: '',
                        personInCharge: '',
                        editSuggestion: '',
                        vforKey: nanoid(6)
                    }
                ]
            }

        }
    },
    methods: {
        addProblemItem() {
            var Item = {
                index: '',
                description: '',
                relatedRequirementItem: '',
                initialCondition: '',
                operationRoute: '',
                relatedCase: '',
                discoveredTime: '',
                personInCharge: '',
                editSuggestion: '',
                vforKey: nanoid(6)
            }
            this.form.problemList.push(Item)
        },
        deleteProbemItem(vforKey) {

            for (var i = 0; i < this.form.problemList.length; i++) {
                if (this.form.problemList[i].vforKey === vforKey) {
                    this.form.problemList.splice(i, 1)
                    break
                }
            }
        },
        submit() {
            if (this.writable) {
                console.log(JSON.stringify(this.form))
            }
        },
        save() {
            if (this.writable) {
                sessionStorage.setItem('testProblemForm', JSON.stringify(this.form))
            }
        },
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
    created() {
        this.form = testProblemForm
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
    width: 90%;
    margin: 30px;
    padding: 10px;
    border: 1px solid black;
}

.col {
    width: 50%;
    padding: 10px;
}
</style>
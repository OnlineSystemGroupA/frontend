<template>
    <div class="record-form">
        <h1>测试问题清单</h1>
        <el-form :disabled="disable">
            <hr>
            <el-table :data="form.problemList"
                      ref="problemTable"
                      @row-click="onRowClick"
                      style="width: 100%">
                <el-table-column type="expand">
                    <template slot-scope="item">
                        <div class="table-dropdown">
                            <el-row :gutter="20">
                                <el-col :span=12>
                                    <el-form-item label="对应需求条目">
                                        <el-input v-model="item.row.relatedRequirementItem"
                                                  placeholder="对应需求条目"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span=12>
                                    <el-form-item label="关联用例">
                                        <el-input v-model="item.row.relatedCase" placeholder="关联用例"></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row :gutter="20">
                                <el-col :span=12>
                                    <el-form-item label="发现时间">
                                        <el-date-picker style="width: 100%;" v-model="item.row.discoveredDate"
                                                        placeholder="发现时间"></el-date-picker>
                                    </el-form-item>
                                </el-col>
                                <el-col :span=12>
                                    <el-form-item label="责任人">
                                        <el-input v-model="item.row.personInCharge" placeholder="责任人"></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>

                            <el-form-item label="问题（缺陷）简要描述">
                                <el-input v-model="item.row.description" placeholder="问题（缺陷）简要描述"
                                          type="textarea"></el-input>
                            </el-form-item>

                            <el-form-item label="发现缺陷的初始条件">
                                <el-input v-model="item.row.initialCondition" placeholder="发现缺陷的初始条件"
                                          type="textarea"></el-input>
                            </el-form-item>

                            <el-form-item label="发现缺陷用例及具体操作路径（要具体）">
                                <el-input v-model="item.row.operationRoute"
                                          placeholder="发现缺陷用例及具体操作路径（要具体）"
                                          type="textarea"></el-input>
                            </el-form-item>

                            <el-form-item label="修改意见">
                                <el-input v-model="item.row.editSuggestion" type="textarea"
                                          placeholder="修改意见"></el-input>
                            </el-form-item>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column label="对应需求条目" prop="relatedRequirementItem"></el-table-column>
                <el-table-column align="right">
                    <template slot="header">
                        <el-button size="mini" type="primary" plain circle icon="el-icon-plus"
                                   @click.native.stop="addProblemItem"></el-button>
                    </template>
                    <template slot-scope="item">
                        <el-button size="mini" type="danger" plain circle icon="el-icon-delete"
                                   @click.native.stop="deleteProblemItem(item.$index)"></el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-form>
        <br>
        <br>
        <el-row v-show="!disable">
            <el-button type="primary" @click="submit" :disabled="disable">提交</el-button>
            <el-button type="primary" @click="save" :disabled="disable">保存</el-button>
        </el-row>
    </div>
</template>

<script>
import testProblemForm from '../../assets/jsons/testProblemForm.json'
export default {
    name: 'TestProblemForm',
    props: ['writable', 'processId', 'checking'],
    data() {
        return {
            form: {
                problemList: [
                    {
                        description: '',
                        relatedRequirementItem: '',
                        initialCondition: '',
                        operationRoute: '',
                        relatedCase: '',
                        discoveredTime: '',
                        personInCharge: '',
                        editSuggestion: ''
                    }
                ]
            }

        }
    },
    methods: {
        onRowClick(row) {
            this.$refs.problemTable.toggleRowExpansion(row);
        },
        addProblemItem() {
            const Item = {
                description: '',
                relatedRequirementItem: '',
                initialCondition: '',
                operationRoute: '',
                relatedCase: '',
                discoveredDate: '',
                personInCharge: '',
                editSuggestion: '',
            }
            this.form.problemList.push(Item)
        },
        deleteProblemItem(index) {
            this.form.problemList.splice(index, 1)
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

.table-dropdown {
    width: 100%;
    padding: 0 10%;
}

.el-form-item {
    margin-bottom: 5px;
}
</style>
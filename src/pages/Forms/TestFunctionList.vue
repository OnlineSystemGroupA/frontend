<template>
    <div class="func-list">
        <h1>功能表格</h1>
        <el-form :model="form" ref="form" :disabled="disable">
            <el-row :gutter="20">
                <el-col :span="11">
                    <el-form-item label="软件名称" label-width="25%">
                        <el-input v-model="form.softwareName" style="width: 75%"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="11">
                    <el-form-item label="版本号" label-width="25%">
                        <el-input v-model="form.softwareVersion" style="width: 75%"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <hr>
            <el-table :data="form.functions"
                      ref="functionTable"
                      @row-click="onFuncRowClick"
                      :row-class-name="funcRowClassName"
                      style="width: 100%">
                <el-table-column type="expand">
                    <template slot-scope="func">
                        <div class="table-dropdown">
                            <el-form-item>
                                <el-form-item label="功能名称">
                                    <el-input v-model="func.row.title" placeholder="功能名称"
                                              style="width: 60%"></el-input>
                                </el-form-item>
                                <el-table :data="func.row.items" @row-click="row=>onItemRowClick(func.row.index, row)"
                                          style="width: 80%" :ref="'itemTable' + func.row.index">
                                    <el-table-column type="expand">
                                        <template slot-scope="item">
                                            <div class="table-dropdown">
                                                <el-form-item label="详细功能名称">
                                                    <el-input v-model="item.row.name" placeholder="详细功能名称"
                                                              style="width: 60%"></el-input>
                                                </el-form-item>
                                                <el-form-item v-model="item.row.name" label="详细功能描述"
                                                              style="margin-top: 10px">
                                                    <el-input v-model="item.row.description"
                                                              type="textarea"
                                                              :autosize="{minRows: 4, maxRows: 8}"
                                                              resize='none'
                                                              placeholder="详细功能描述"
                                                              style="width: 60%"></el-input>
                                                </el-form-item>
                                            </div>
                                        </template>
                                    </el-table-column>
                                    <el-table-column label="详细功能名称" prop="name"></el-table-column>
                                    <el-table-column align="right">
                                        <template slot="header">
                                            <el-button
                                                size="mini"
                                                type="primary"
                                                plain
                                                circle
                                                icon="el-icon-plus"
                                                @click.native.stop="addItem(func.row.index)"></el-button>
                                        </template>
                                        <template slot-scope="item">
                                            <el-button
                                                size="mini"
                                                type="danger"
                                                plain
                                                circle
                                                icon="el-icon-delete"
                                                @click.native.stop="removeItem(func.row.title, item.row.name)"></el-button>
                                        </template>
                                    </el-table-column>
                                </el-table>
                            </el-form-item>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column label="功能名称" prop="title"></el-table-column>
                <el-table-column align="right">
                    <template slot="header">
                        <el-button
                            size="mini"
                            type="primary"
                            plain
                            circle
                            icon="el-icon-plus"
                            @click.native.stop="addFunc"></el-button>
                    </template>
                    <template slot-scope="func">
                        <el-button
                            size="mini"
                            type="danger"
                            plain
                            circle
                            icon="el-icon-delete"
                            @click.native.stop="removeFunc(func.row)"></el-button>
                    </template>
                </el-table-column>
            </el-table>
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
import functionList from '../../assets/jsons/functionList.json'
import {nanoid} from "nanoid";

export default {
    name: 'TestFunctionList',
    props: ['writable', 'checking', 'processId'],
    data() {
        return {
            form: {
                softwareName: '',
                softwareVersion: '',
                functions: [
                    {
                        title: '',
                        items: [
                            {name: '', description: ''}
                        ]
                    }
                ],
                key: nanoid(6)
            },
            expands: [],
            newFuncTitle: ''
        }
    },
    methods: {
        addFunc() {
            const func = {
                title: '',
                items: []
            };
            this.form.functions.push(func);
        },
        addItem(index) {
            const item = {
                name: '',
                description: ''
            }
            this.form.functions[index].items.push(item)
        },
        removeFunc(func) {
            const index = this.form.functions.indexOf(func);
            if (index !== -1) {
                this.form.functions.splice(index, 1)
            }
        },
        removeItem(title, name) {
            let funcIndex = this.form.functions.findIndex((func) => {
                return func.title === title
            });
            if (funcIndex !== -1) {
                const itemIndex = this.form.functions[funcIndex].items.findIndex((item) => {
                    return item.name === name
                });
                if (itemIndex !== -1) {
                    this.form.functions[funcIndex].items.splice(itemIndex, 1)
                }
            }
        },

        onFuncRowClick(row) {
            this.$refs.functionTable.toggleRowExpansion(row);
        },

        onItemRowClick(index, row) {
            this.$refs['itemTable' + index].toggleRowExpansion(row);
        },

        funcRowClassName({row, rowIndex}) {
            row.index = rowIndex;
        },

        submit() {
            this.doSubmit()
        },
        save() {

        },
        pass() {
            this.$bus.$emit('passFunction')
        },
        refute() {

        },
        doSubmit() {
            if (this.writable) {
                console.log(JSON.stringify(this.form))
                this.$bus.$emit('submitFunctionList')
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
        console.log(functionList)
    },
    created() {
        this.form = functionList
    }
}
</script>

<style lang="less">
.func-list {
   width: 94%;
    margin-top: 2%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    padding: 5%;
}

.table-dropdown {
    width: 100%;
    margin-left: 10%;
}

.add-func {
    margin-bottom: 30px;
}

</style>
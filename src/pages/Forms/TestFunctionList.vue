<template>
    <div class="func_list">
        <h1>功能表格</h1>
        <el-form :model="form" ref="form" label-width="100px" class="demo-dynamic" :disabled="disable">
            <el-form-item label="软件名称">
                <el-input v-model="form.softwareName"></el-input>
            </el-form-item>
            <el-form-item label="版本号">
                <el-input v-model="form.softwareVersion"></el-input>
            </el-form-item>

            <el-form-item v-for="(func, index) in form.functions" :key="func.key" class="func">

                <h2>功能{{ index }}</h2>
                <el-form-item label="功能名称">
                    <el-input v-model="func.title"></el-input>
                    <el-form-item v-for="(item, index_item) in func.items" :key="index_item">
                        <span>
                            <label>详细功能{{ index_item }} </label>
                            <el-button v-show="!disable"
                                       @click.prevent="removeItem(index, item)">删除详细功能</el-button>
                        </span>
                        <el-form-item label="详细功能名称">
                            <el-input v-model="item.name"></el-input>
                        </el-form-item>
                        <el-form-item label="详细功能描述">
                            <el-input type="textarea" v-model="item.description"></el-input>
                        </el-form-item>
                        <hr>
                    </el-form-item>
                </el-form-item>
                <el-button v-show="!disable" @click.prevent="removeFunc(func)">删除</el-button>
                <el-button v-show="!disable" @click="addItem(index)">添加功能</el-button>
            </el-form-item>
            <el-button v-show="!disable" @click="addFunc">添加表项</el-button>
            <br>
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
export default {
    name: 'TestFunctionList',
    props: ['writable', 'checking', 'formId'],
    data() {
        return {
            form: {
                softwareName: '',
                softwareVersion: '',
                functions: [
                    {
                        title: '',
                        items: [
                            {name: '', description: '',}
                        ]
                    }
                ]
            }
        }
    },
    methods: {
        addFunc() {
            const func = {
                title: '',
                items: [
                    {
                        name: '',
                        description: '',
                    }
                ]
            }
            this.form.functions.push(func)
        },
        addItem(index) {
            const item = {
                name: '',
                description: '',
                key: Date.now()
            }
            this.form.functions[index].items.push(item)
        },
        removeFunc(func) {
            const index = this.form.functions.indexOf(func);
            //console.log(index)
            if (index !== -1) {
                this.form.functions.splice(index, 1)
            }
        },
        removeItem(index, item) {
            if (index !== -1) {
                const index_item = this.form.functions[index].items.indexOf(item);
                //console.log(index, index_item)
                if (index_item !== -1) {
                    this.form.functions[index].items.splice(index_item, 1)
                }
            }
        },
        submit() {

        },
        save() {

        },
        pass() {
            this.$bus.$emit('passFunction')
        },
        refute() {

        }
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
        this.form = functionList
    }
}
</script>

<style scoped>
.func_list {
    width: 800px;
    align-items: center;
    border-radius: 30px;
    margin: 5%;
    padding: 5%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}

.func {
    width: 600px;
    align-items: center;
    border-radius: 3px;
    margin: 5%;
    padding: 5%;
    border: 1px solid black;
}
</style>
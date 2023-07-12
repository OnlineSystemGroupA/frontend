<template>
    <div class="employee">
        <h2>新员工信息</h2>
        <el-form label-position="left" label-width="80px">
            <table class="pure-table" rules=all>
                <tr>
                    <th style="width:25%">姓名</th>
                    <td style="width:25%">
                        <el-input placeholder="姓名" v-model="form.realName"></el-input>
                    </td>
                    <th style="width:25%">职员号</th>
                    <td style="width:25%">
                        <el-input placeholder="职员号" v-model="form.jobNumber"></el-input>
                    </td>
                </tr>

                <tr>
                    <th style="width:25%">部门</th>
                    <td style="width:25%">
                        <el-select placeholder="部门" v-model="form.department">
                            <el-option v-for="department in departments" :key="department.value"
                                       :label="department.label"
                                       :value="department.value"></el-option>
                        </el-select>
                    </td>
                    <th style="width:25%">职能</th>
                    <td style="width:25%">
                        <el-select placeholder="职能" v-model="form.position">
                            <el-option v-for="position in positions" :key="position.value" :label="position.label"
                                       :value="position.value"></el-option>
                        </el-select>
                    </td>
                </tr>

                <tr>
                    <th style="width:25%">电话号码</th>
                    <td style="width:25%">
                        <el-input placeholder="电话号码" v-model="form.phone"></el-input>
                    </td>
                    <th style="width:25%">邮箱地址</th>
                    <td style="width:25%">
                        <el-input placeholder="邮箱地址" v-model.number="form.email"></el-input>
                    </td>
                </tr>
            </table>
        </el-form>
        <br>
        <el-button type="primary" @click="submit">
            添加
        </el-button>
    </div>
</template>

<script>
export default {
    name: 'EmployeeInfoForm',
    data() {
        return {
            form: {
                uid:'',
                realName: '',
                department: '',
                position: '员工',
                jobNumber: '',
                phone: '',
                email: '',
                isNonLocked: true
            },
            departments: [
                { label: '测试部', value: '测试部', },
                { label: '质量部', value: '质量部', },
                { label: '市场部', value: '市场部', }
            ],
            positions: [
                { label: '员工', value: '员工', }
            ]
        }
    },
    methods: {
        submit() {
            this.axios.post('/api/account/operators', this.form).then(
                (res) => {
                    if (res.status === 200) {
                        this.$message({
                            message: '添加成功',
                            type: 'success'
                        })
                    }
                },
                (err) => {
                    if (err.status === 409) {
                        this.$message({
                            message: '信息冲突',
                            type: 'warnning'
                        })
                    }
                }
            )
        }
    }
}
</script>

<style scoped>
.employee {
    width: 80%;
    align-items: center;
    border-radius: 30px;
    margin: 30px;
    padding: 50px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}

.col {
    width: 50%;
    padding: 10px;
}

.pure-table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    empty-cells: show;
    border: 1px solid #cbcbcb;
}

.pure-table caption {
    color: #000;
    font: italic 85%/1 arial, sans-serif;
    padding: 1em 0;
    text-align: center;
}

.pure-table td,
.pure-table th {
    font-size: inherit;
    margin: 0;
    overflow: visible;
    padding: .5em 1em;
}

.pure-table thead {
    background-color: #e0e0e0;
    color: #000;
    text-align: left;
    vertical-align: bottom;
}

.pure-table td {
    background-color: transparent;
}
</style>
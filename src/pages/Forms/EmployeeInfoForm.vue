<template>
    <div class="employee">
        <el-form label-position="left" label-width="80px">
            <table border style="width:90%; text-align: center;">
                <tr>
                    <th style="width:25%">姓名</th>
                    <td style="width:25%"><el-input placeholder="姓名" v-model="form.name"></el-input> </td>
                    <th style="width:25%">职员号</th>
                    <td style="width:25%">
                        <el-input placeholder="职员号" v-model="form.id"></el-input>
                    </td>
                </tr>

                <tr>
                    <th style="width:25%">部门</th>
                    <td style="width:25%">
                        <el-select placeholder="部门" v-model="form.department">
                            <el-option v-for="department in departments" :key="department.value" :label="department.label"
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
                        <el-input placeholder="电话号码" v-model="form.telephone"></el-input>
                    </td>
                    <th style="width:25%">邮箱地址</th>
                    <td style="width:25%">
                        <el-input placeholder="邮箱地址" v-model.number="form.e_mail"></el-input>
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
                name: '',
                department: '',
                position: '',
                id: '',
                telephone: '',
                e_mail: ''
            },
            departments: [
                { label: '测试部', value: '测试部', },
                { label: '审核部', value: '审核部', },
                { label: '市场部', value: '市场部', }
            ],
            positions: [
                { label: '部长', value: '部长', },
                { label: '审核员', value: '审核员', },
                { label: '测试员', value: '测试员', },
                { label: '调查员', value: '调查员', }
            ]
        }
    },
    methods: {
        submit() {
            
        }
    }
}
</script>

<style scoped>
.employee {
    width: 800px;
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
</style>
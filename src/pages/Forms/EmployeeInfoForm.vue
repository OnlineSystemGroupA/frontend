<template>
    <div class="employee" >
        <el-form label-position="left" label-width="80px">
            <el-row>
                <el-col class="col">
                    <el-form-item label="姓名">
                        <el-input placeholder="姓名" v-model="form.name"></el-input>
                    </el-form-item>
                </el-col>
                <el-col class="col">
                    <el-form-item label="性别">
                        <el-select placeholder="性别" v-model="form.gender">
                            <el-option label="男" value="男"></el-option>
                            <el-option label="女" value="女"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>

            </el-row>
            <el-row>
                <el-col class="col">
                    <el-form-item label="籍贯">
                        <el-input v-model="form.hometown" placeholder="籍贯"></el-input>
                    </el-form-item>
                </el-col>
                <el-col class="col">
                    <el-form-item label="生日">
                        <el-date-picker type="date" placeholder="选择日期" v-model="form.birthday"
                            style="width: 100%;"></el-date-picker>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row>
                <el-col class="col">
                    <el-form-item label="部门">
                        <el-select placeholder="部门" v-model="form.department">
                            <el-option label="测试部" value="测试部"></el-option>
                            <el-option label="市场部" value="市场部"></el-option>
                            <el-option label="审核部" value="审核部"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col class="col">
                    <el-form-item label="职能">
                        <el-select placeholder="职能" v-model="form.position">
                            <el-option label="部长" value="部长"></el-option>
                            <el-option label="审核员" value="审核员"></el-option>
                            <el-option label="测试员" value="测试员"></el-option>
                            <el-option label="调查员" value="调查员"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row>
                <el-col class="col">
                    <el-form-item label="职员号">
                        <el-input placeholder="职员号" v-model="form.id"></el-input>
                    </el-form-item>
                </el-col>
                <el-col class="col">
                    <el-form-item label="资历">
                        <el-input placeholder="资历" v-model.number="form.qualification"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row>
                <el-col class="col">
                    <el-form-item label="电话号码">
                        <el-input placeholder="电话号码" v-model="form.telephone"></el-input>
                    </el-form-item>
                </el-col>s
                <el-col class="col">
                    <el-form-item label="邮件">
                        <el-input placeholder="邮件" v-model.number="form.email"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>

        </el-form>
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
                gender: '',
                birthday: '',
                hometown: '',
                department: '',
                position: '',
                id: '',
                qualification: '',
                telephone:'',
                phone:''
            }
        }
    },
    methods: {
        submit() {
            if (this.form.name === '') {
                alert('请输入姓名')
            }
            else if (this.form.gender === '') {
                alert('请输入性别')
            }
            else if (this.form.birthday === '') {
                alert('请输入生日')
            }
            else if (this.form.hometown === '') {
                alert('请输入籍贯')
            }
            else if (this.form.department === '') {
                alert('请输入部门')
            }
            else if (this.form.position === '') {
                alert('请输入职能')
            }
            else if (this.form.id === '') {
                alert('请输入员工号')
            }
            else if (this.form.qualification === '') {
                alert('请输入资历')
            }
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
.col{
  width: 50%;
  padding: 10px;
}
</style>
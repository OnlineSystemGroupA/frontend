<template>
    <div class="employeeTable">
        <div style="width: 30%">
            <el-input placeholder="请输入关键字" prefix-icon="el-icon-search" v-model="keyword">
                <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
        </div>
        <br>
        <el-table :data="employeeData" border style="width: 100%; height: auto;">
            <el-table-column prop="id" label="id" style="width: 20%; height: auto;">
                <template slot-scope="scope" >
                    <p @click="pickEmployee(scope.row.id)">{{ scope.row.id }}</p>
                </template>
            </el-table-column>
            <el-table-column prop="employeeName" label="姓名" style="width: 20%; height: auto;">
            </el-table-column>
            <el-table-column prop="department" label="部门" style="width: 20%; height: auto;">
            </el-table-column>
            <el-table-column prop="position" label="职能" style="width: 20%; height: auto;">
            </el-table-column>
            <el-table-column prop="email" label="邮箱" style="width: 20%; height: auto;">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    name: 'EmployeeTable',
    data() {
        return {
            keyword:'',
            employeeData: [
                {
                    id:'e001',
                    employeeName:'李四',
                    department:'市场部',
                    position:'调查员',
                    email:'123@132.com'
                },
                {
                    id:'e002',
                    employeeName:'王五',
                    department:'测试部',
                    position:'测试员',
                    email:'wangwu@163.com'
                },
                {
                    id:'e003',
                    employeeName:'赵六',
                    department:'审核部',
                    position:'部长',
                    email:'leo@163.com'
                },
                {
                    id:'e004',
                    employeeName:'何七',
                    department:'测试部',
                    position:'部长',
                    email:'seven@163.com'
                },
                {
                    id:'e005',
                    employeeName:'钱八',
                    department:'测试部',
                    position:'记录员',
                    email:'money@163.com'
                },
            ]
        }
    },
    methods:{
        pickEmployee(id){
            this.$router.push({
                name: 'employeeDetailForAdmin',
                query: {
                    employeeId:id
                }
            })
        }
    }
}
</script>

<style scoped>
.employeeTable {
  width: 80%;
  align-items: center;
  border-radius: 30px;
  margin: 30px;
  padding: 50px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
</style>
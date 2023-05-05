<template>
    <div class="table">
        <h3>工作类型:{{ workType }}</h3>
        <el-row>
            <el-col style="width:50%">
                <el-form label-position="left" label-width="80px">
                    <el-form-item label="员工id">
                        <el-input placeholder="员工id" v-model="workInfo.employeeId"></el-input>
                    </el-form-item>
                    <el-form-item label="任务类型">
                        <el-select placeholder="工作" v-model="workInfo.work">
                            <el-option v-for="work in works" :key="work.value" :label="work.label"
                                :value="work.value"></el-option>
                        </el-select>
                    </el-form-item>
                </el-form>
            </el-col>
            <el-col style="width:50%;padding-left: 10%;">
                <el-button type="primary">安排</el-button>
            </el-col>

        </el-row>

        <div style="width: 30%">
            <el-input placeholder="请输入关键字" prefix-icon="el-icon-search" v-model="keyword">
                <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
        </div>
        <br>
        <el-table :data="employeeData" border style="width: 100%; height: auto;">
            <el-table-column prop="id" label="id" style="width: 20%">
                <template slot-scope="scope">
                    <p @click="pickEmployee(scope.row.id)">{{ scope.row.id }}</p>
                </template>
            </el-table-column>
            <el-table-column prop="employeeName" label="姓名" style="width: 20%">
            </el-table-column>
            <el-table-column prop="department" label="部门" style="width: 20%">
            </el-table-column>
            <el-table-column prop="position" label="职能" style="width: 20%">
            </el-table-column>
            <el-table-column prop="email" label="邮箱" style="width: 20%">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
//import EmployeeTable from './EmployeeTable.vue'
export default {
    name: 'WorkArrangeTable',
    //components: {EmployeeTable},
    props: ['work'],
    data() {
        return {
            keyword: '',
            employeeData: [
                {
                    id: 'e001',
                    employeeName: '李四',
                    department: '市场部',
                    position: '调查员',
                    email: '123@132.com'
                },
                {
                    id: 'e002',
                    employeeName: '王五',
                    department: '测试部',
                    position: '测试员',
                    email: 'wangwu@163.com'
                },
                {
                    id: 'e003',
                    employeeName: '赵六',
                    department: '审核部',
                    position: '部长',
                    email: 'leo@163.com'
                },
                {
                    id: 'e004',
                    employeeName: '何七',
                    department: '测试部',
                    position: '部长',
                    email: 'seven@163.com'
                },
                {
                    id: 'e005',
                    employeeName: '钱八',
                    department: '测试部',
                    position: '记录员',
                    email: 'money@163.com'
                },
            ],
            workInfo: {
                employeeId: '',
                work: '',
            }
        }
    },
    /*mounted() {
        this.$bus.$on('pickEmployee', (employeeId) => {
            this.employeeId = employeeId
        })
    },*/
    computed: {
        workType() {
            if (this.work === 'verification') {
                return '审核工作'
            }
            else {
                return '测试工作'
            }
        },
        works() {
            if (this.work === 'verification') {
                return [
                    {
                        label: '审核申请',
                        value: '审核申请',
                    },
                    {
                        label: '审核测试方案',
                        value: '审核测试方案',
                    },
                    {
                        label: '审核测试报告',
                        value: '审核测试报告',
                    },
                    {
                        label: '测试工作检查',
                        value: '测试工作检查',
                    },
                ]
            }
            else {
                return [
                    {
                        label: '制定测试报告',
                        value: '制定测试报告',
                    },
                    {
                        label: '执行测试',
                        value: '执行测试',
                    }
                ]
            }
        }
    },
    methods: {
        pickEmployee(id) {
            this.workInfo.employeeId = id
        }
    }
}
</script>

<style scoped>
.table {
    width: 800px;
    align-items: center;
    border-radius: 30px;
    margin: 30px;
    padding: 50px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
</style>
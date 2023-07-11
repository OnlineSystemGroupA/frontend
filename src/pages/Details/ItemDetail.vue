<template>
    <div class="item">
        <el-row style="width: 100%">
            <el-col :span="4">
                <el-button @click="goBack" circle icon="el-icon-arrow-left"></el-button>
            </el-col>
            <el-col :span="16" class="top-col">
                <h2>项目详情</h2>
            </el-col>
            <el-col :span="4"></el-col>
        </el-row>
        <table class="pure-table" rules=all>
            <tr>
                <th style="width:25%">项目号</th>
                <td style="width:25%">{{ itemInfo.projectId }}</td>
                <th style="width:25%">项目名称</th>
                <td style="width:25%">{{ itemInfo.title }}</td>
            </tr>
            <tr>
                <th>项目版本</th>
                <td>{{ itemInfo.version }}</td>
                <th>测试类型</th>
                <td>{{ itemInfo.testType }}</td>
            </tr>
            <tr>
                <th>申请日期</th>
                <td>{{ itemInfo.applicationDate }}</td>
                <th>申请人</th>
                <td>{{ itemInfo.applicant }}</td>
            </tr>
            <tr>
                <th>公司</th>
                <td>{{ itemInfo.company }}</td>
                <th>联系电话</th>
                <td>{{ itemInfo.telephone }}</td>
            </tr>
            <tr>
                <th>邮箱</th>
                <td>{{ itemInfo.email }}</td>
                <th>联系地址</th>
                <td>{{ itemInfo.address }}</td>
            </tr>
            <tr>
                <th>开始日期</th>
                <td>{{ itemInfo.startDate }}</td>
                <th>预计结束日期</th>
                <td>{{ itemInfo.dueDate }}</td>
            </tr>
            <tr>
                <th>当前任务</th>
                <td>{{ itemInfo.currentTaskName }}</td>
                <th>任务负责人</th>
                <td>{{ itemInfo.assignee }}</td>
            </tr>
            <!--
            <tr>
                <th>审核人员</th>
                <td>{{ itemInfo.verifier }}</td>
                <th>测试人员</th>
                <td>{{ itemInfo.tester }}</td>
            </tr>
            -->
        </table>
        <br>
        <div style="margin:10px; width: 100%;">
            <h2>测试流程</h2>
            <el-steps :active="active" finish-status="success" align-center>
                <el-step title="申请创建"></el-step>
                <el-step title="申请审核"></el-step>
                <el-step title="报价生成"></el-step>
                <el-step title="合同谈判"></el-step>
                <el-step title="样品上传"></el-step>
                <el-step title="计划制定"></el-step>
                <el-step title="测试进行"></el-step>
                <el-step title="报告审核"></el-step>
                <el-step title="归档处理"></el-step>
                <el-step title="用户确认"></el-step>
            </el-steps>
            <!--<el-button type="primary" @click="nextStep">下一步</el-button>--><!--仅测试用-->
            <el-button type="primary" @click="operateProcess">操作流程</el-button>
        </div>
        <div style="margin:20px ; width: 90%;">
            <h2>项目表单</h2>
            <el-table :data="forms" border style="width: 100%">
                <el-table-column prop="title" label="表名" style="width: 25%">
                </el-table-column>
                <el-table-column prop="date" label="日期" style="width: 25%">
                </el-table-column>
                <el-table-column prop="state" label="状态" style="width: 25%">
                </el-table-column>
                <el-table-column label="操作" style="width: 25%">
                    <template slot-scope="scope">
                        <el-button @click="readForm(scope.row)" icon="el-icon-search" size="small" type="primary">查看
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
import formAuthority from '../../assets/jsons/formAuthority.json'
import formName from '../../assets/jsons/formName.json'
import clientOperationMap from '../../assets/jsons/clientOperationMap.json'
import employeeOperationMap from '../../assets/jsons/employeeOperationMap.json'
import formNameMap from '../../assets/jsons/formNameMap.json'

export default {
    name: 'ItemDetail',
    props: ['processId'],
    data() {
        return {
            itemInfo: {
                projectId: '114514',
                title: '专用数据库系统',
                version: '1.2.4',
                testType: '',
                applicationDate: '2023-5-12',
                applicant: '张三',
                company: '沈阳好果汁公司',
                telephone: '114-514-1919',
                email: 'zhangsan@example.com.cn',
                address: '沈阳皇姑屯114号',
                startDate: '2023-6-11',
                dueDate: '2023-6-30',
                currentTaskName: '',
                assignee: '',
            },
            active: 0,
            forms: [
            ],
            employeeInfo: {},
            formMap: new Map(),
            authorityMap: new Map(),
            clientMap: new Map(),
            employeeMap: new Map(),
            formTranslationMap: new Map(),
        }
    },
    methods: {
        readForm(row) {
            //console.log(row.title)
            if (!sessionStorage.getItem('logType')) {
                alert('请登录！')
                return
            }
            let logType = sessionStorage.getItem('logType')
            let routeName = this.formMap.get(row.title)
            console.log(routeName)
            if (routeName) {
                if (this.authorityMap.get(routeName) !== 'true' && logType === 'client') {
                    return
                }
                routeName = logType + 'Read' + routeName
                this.$router.push(
                    {
                        name: routeName,
                        query: {
                            writable: false,
                            checking: false,
                            processId: this.processId,
                        }
                    }
                )
            }
        },
        goBack() {
            let logType = sessionStorage.getItem('logType')
            this.$router.push({
                name: logType + "ItemTable",
                query: { page: 1 }
            })
        },
        operateProcess() {
            this.axios.get('/api/workflow/processes/' + this.processId + '/details').then(this.handleOperationResponse, this.handleError)
        },
        handleResponse(res) {
            if (res.status === 200) {
                console.log(res.data)
                this.itemInfo = res.data
                this.itemInfo.testType = this.itemInfo.testType.substring(1, this.itemInfo.testType.length - 1)
                this.itemInfo.applicationDate = this.itemInfo.applicationDate.substring(0, this.itemInfo.applicationDate.indexOf('T'))
                this.active = this.itemInfo.index
            }
        },
        handleError(err) {
            if (err.status === 402) {
                alert('指定流程对该用户不可见')
            }
            else if (err.status === 404) {
                alert('指定流程不存在')
            }
        },
        handleOperationResponse(res) {
            this.handleResponse(res)
            if (!sessionStorage.getItem('logType')) {
                alert('请登录！')
                return
            }
            let logType = sessionStorage.getItem('logType')
            let routeName = ''
            console.log(this.itemInfo.currentTaskName)
            if (logType === 'client') {
                routeName = this.clientMap.get(this.itemInfo.currentTaskName)
            } else if (logType === 'employee') {
                
                if (this.itemInfo.currentTaskName.indexOf(this.employeeInfo.department) === -1) {
                    if (this.employeeInfo.department === '测试部' && this.itemInfo.currentTaskName === "测试文档归档") {
                       console.log('Special case')
                    }
                    else {
                        console.log('任务失败')
                        this.$message({
                            message: '没有当前任务权限',
                            type: 'warning'
                        });
                        return
                    }
                }
                else if (this.itemInfo.currentTaskName.indexOf('分配') !== -1) {
                    if (this.employeeInfo.position !== '主管') {
                        this.$message({
                            message: '没有当前任务权限',
                            type: 'warning'
                        });
                        return
                    }
                }
                routeName = this.employeeMap.get(this.itemInfo.currentTaskName)
            }

            console.log(routeName)
            if (routeName) {
                this.$router.push({
                    name: routeName,
                    query: {
                        processId: this.processId
                    }
                })
            }
            else {
                this.$message({
                    message: '没有当前任务权限',
                    type: 'warning'
                });
            }
        }
    },
    created() {
        formName.transformation.forEach(element => {
            this.formMap.set(element.key, element.value)
        })
        //console.log(this.formMap)
        formAuthority.authority.forEach(element => {
            this.authorityMap.set(element.key, element.value)
        })

        clientOperationMap.map.forEach(element => {
            this.clientMap.set(element.key, element.value)
        })
        employeeOperationMap.map.forEach(element => {
            console.log(element)
            this.employeeMap.set(element.key, element.value)
        })
        formNameMap.map.forEach(element => {
            this.formTranslationMap.set(element.key, element.value)
        })
        console.log(this.employeeMap)
        this.axios.get('/api/workflow/processes/' + this.processId + '/details').then(this.handleResponse, this.handleError)
        if (sessionStorage.getItem('logType') === 'employee') {
            this.axios.get('/api/account/operator_details').then(
                (res) => {
                    if (res.status === 200) {
                        this.employeeInfo = res.data
                    }
                },
                (err) => {
                    if (err.status === 409) {
                        alert('当前登录类型错误')
                    }
                }
            )
        }
        this.axios.get('/api/workflow/processes/' + this.processId + '/forms').then(
            (res) => {
                console.log(res.data)
                res.data.forEach(element => {
                    var curform = {
                        title: this.formTranslationMap.get(element.formType),
                        state: element.formState,
                        date: element.createDate.substring(0,10),
                        available: true
                    }   
                    this.forms.push(curform)
                })
            },
            (err) => {
                console.log(err.data)
            }
        )
    }
}
</script>

<style scoped>
.top-col {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
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

.item {
    width: 94%;
    margin-top: 2%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    padding: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
</style>
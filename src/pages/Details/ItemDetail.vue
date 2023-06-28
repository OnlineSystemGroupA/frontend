<template>
    <div class="item">
        <el-button circle icon="el-icon-back" @click="goBack" class="return-button"></el-button>
        <h2>项目详情</h2>
        <table class="pure-table" rules=all>
            <tr>
                <th style="width:25%">项目号</th>
                <td style="width:25%">{{ itemId }}</td>
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
                <td>{{ itemInfo.applicateDate }}</td>
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
                <th>审核人员</th>
                <td>{{ itemInfo.verifier }}</td>
                <th>测试人员</th>
                <td>{{ itemInfo.tester }}</td>
            </tr>
        </table>
        <br>
        <div style="margin:10px; width: 100%;">
            <h2>测试流程</h2>
            <el-steps :active="active" finish-status="success" align-center>
                <el-step title="申请创建中"></el-step>
                <el-step title="申请审核中"></el-step>
                <el-step title="报价生成中"></el-step>
                <el-step title="合同谈判中"></el-step>
                <el-step title="样品上传中"></el-step>
                <el-step title="计划制定中"></el-step>
                <el-step title="测试进行中"></el-step>
                <el-step title="报告审核中"></el-step>
                <el-step title="归档处理中"></el-step>
                <el-step title="用户确认中"></el-step>
                <el-step title="项目已完成"></el-step>
            </el-steps>
            <el-button type="primary" @click="nextStep">下一步</el-button><!--仅测试用-->
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
                        <el-button @click="readForm(scope.row)" icon="el-icon-search" size="small"
                                   type="primary">查看
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
import clientOperation from '../../assets/jsons/clientOperation.json'
import employeeOperation from '../../assets/jsons/employeeOperation.json'
import verificationWork from '../../assets/jsons/verificationWork.json'

export default {
    name: 'ItemDetail',
    props: ['itemId'],
    data() {
        return {
            itemInfo: {
                title: '专用数据库系统',
                version: '1.2.4',
                testType: '专项测试申请',
                applicateDate: '2023-5-12',
                applicant: '张三',
                company: '沈阳好果汁公司',
                telephone: '114-514-1919',
                email: 'zhangsan@example.com.cn',
                address: '沈阳皇姑屯114号',
                startDate: '2023-6-11',
                dueDate: '2023-6-30',
                verifier: '赵六',
                tester: '刘七',
            },
            active: 0,
            forms: [
                {
                    title: '测试申请表',
                    date: '2023-5-11',
                    state: '已通过',
                    available: true,
                },
                {
                    title: '测试功能表',
                    date: '2023-5-11',
                    state: '已通过',
                    available: true,
                },
                {
                    title: '申请审核表',
                    date: '2023-5-11',
                    state: '已通过',
                    available: true,
                },
                {
                    title: '测试报价表',
                    date: '2023-5-11',
                    state: '已通过',
                    available: true,
                },
                {
                    title: '测试合同表',
                    date: '2023-5-11',
                    state: '已通过',
                    available: true,
                },
                {
                    title: '测试计划表',
                    date: '2023-5-11',
                    state: '已通过',
                    available: true,
                },
                {
                    title: '测试计划审核表',
                    date: '2023-5-11',
                    state: '已通过',
                    available: true,
                },
                {
                    title: '测试记录表',
                    date: '2023-5-11',
                    state: '已通过',
                    available: true,
                },
                {
                    title: '测试问题表',
                    date: '2023-5-11',
                    state: '已通过',
                    available: true,
                },
                {
                    title: '测试报告表',
                    date: '2023-5-11',
                    state: '已通过',
                    available: true,
                },
                {
                    title: '报告审核表',
                    date: '2023-5-11',
                    state: '已通过',
                    available: true,
                },
                {
                    title: '文档审核表',
                    date: '2023-5-11',
                    state: '已通过',
                    available: true,
                },
                {
                    title: '测试检查表',
                    date: '2023-5-11',
                    state: '已通过',
                    available: true,
                },
            ],
            formMap: new Map(),
            authorityMap: new Map(),
            clientOperationMap: new Map(),
            employeeOperationMap: new Map(),
            verificationMap: new Map()
        }
    },
    methods: {
        nextStep() {
            this.active++;
            if (this.active === 10) {
                this.active = 11
            }
            this.active %= 12;
        },
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
                if (this.authorityMap.get(routeName) !== 'true') {
                    return
                }
                routeName = logType + 'Read' + routeName
                this.$router.push(
                    {
                        name: routeName,
                        query: {
                            writable: false,
                            checking: false,
                            processId: this.itemId,
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
            if (!sessionStorage.getItem('logType')) {
                alert('请登录！')
                return
            }
            let logType = sessionStorage.getItem('logType')
            let routeName = ''
            if (logType === 'client') {
                console.log(this.active)
                routeName = this.clientOperationMap.get(this.active)
            } else {
                routeName = this.employeeOperationMap.get(this.active)
                if (sessionStorage.getItem('work') === 'verification') {
                    if (this.employeeOperationMap.get(routeName)) {
                        routeName = this.employeeOperationMap.get(routeName)
                    }
                }
            }
            console.log(routeName)
            if (routeName) {
                this.$router.push({
                    name: routeName,
                    query: {
                        itemId: this.itemId
                    }
                })
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
        //console.log(this.authorityMap)
        clientOperation.operation.forEach(element => {
            this.clientOperationMap.set(parseInt(element.key), element.value)
        })
        console.log(this.clientOperationMap)
        employeeOperation.operation.forEach(element => {
            this.employeeOperationMap.set(parseInt(element.key), element.value)
        })
        verificationWork.operation.forEach(element => {
            this.verificationMap.set(element.key, element.value)
        })

    }
}
</script>

<style scoped>
.return-button {
    margin-right: auto;
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
import VueRouter from "vue-router";//引入路由器

import RegisterForm from '../pages/Forms/RegisterForm'
import LoginForm from '../pages/Forms/LoginForm'
import ClientCreateApplication from '../pages/Process/ClientCreateApplication'
import ApplicationForm from '../pages/Forms/ApplicationForm'
import ApplicationVerifyForm from '../pages/Forms/ApplicationVerifyForm'
import ClientPage from '../pages/Pages/ClientPage'
import EmployeePage from '../pages/Pages/EmployeePage'
import ReportVerifyForm from "../pages/Forms/ReportVerifyForm"
import TestFunctionList from '../pages/Forms/TestFunctionList'
import DocumentReviewForm from '../pages/Forms/DocumentReviewForm'
import TestReportForm from '../pages/Forms/TestReportForm'
import TestPlanVerifyForm from '../pages/Forms/TestPlanVerifyForm'
import TestRecordsForm from '../pages/Forms/TestRecordsForm'
import LoginPage from '../pages/Pages/LoginPage'
import AdminPage from '../pages/Pages/AdminPage'
import ClientTable from '../pages/Tables/ClientTable'
import EmployeeTable from '../pages/Tables/EmployeeTable'
import EmployeeInfoForm from '../pages/Forms/EmployeeInfoForm'
import ApplicationExplanation from '../pages/Explanations/ApplicationExplanation'
import ClientItemTable from '../pages/Tables/ClientItemTable'
import EmployeeItemTable from '../pages/Tables/EmployeeItemTable'
import EmployeeCheckApplication from '../pages/Process/EmployeeCheckApplication'
import EmployeeWriteTestPlan from '../pages/Process/EmployeeWriteTestPlan'
import TestPlanForm from '../pages/Forms/TestPlanForm'
import EmployeeVerifyTestPlan from '../pages/Process/EmployeeVerifyTestPlan'
import ClientConfirmReport from '../pages/Process/ClientConfirmReport'
import EmployeeTestProcess from '../pages/Process/EmployeeTestProcess'
import EmployeeVerifyTestReport from '../pages/Process/EmployeeVerifyTestReport'
import EmployeeArrangeMission from '../pages/Process/EmployeeArrangeMission'
import ClientCheckApplication from '../pages/Process/ClientCheckApplication'
import ClientLoadApplication from '../pages/Process/ClientLoadApplication'
import EmployeeCheckTestWork from '../pages/Process/EmployeeCheckTestWork'
import TestWorkCheck from '../pages/Forms/TestWorkCheck'
import WorkArrangeTable from '../pages/Tables/WorkArrangeTable'
import ClientVerifyTestReport from '../pages/Process/ClientVerifyTestReport'
import ItemDetail from '../pages/Details/ItemDetail'
import ClientUploadSamples from '../pages/Process/ClientUploadSamples'
import ItemForArrange from '../pages/Tables/ItemForArrange'
import EmployeeEditTestReport from '../pages/Process/EmployeeEditTestReport'
import EmployeeQuotation from '../pages/Process/EmployeeQuotation'
import ClientAcceptQuotation from '../pages/Process/ClientAcceptQuotation'

const router = new VueRouter({
    routes: [
        {
            name: "index",
            path: '/',
            component: LoginPage,
            children: [
                {
                    name: 'register',//name属性可以用来简化路由的跳转，但是to要写成对象式的
                    path: '/register',
                    component: RegisterForm,
                    meta: { title: '注册' }
                },
                {
                    name: 'login',
                    path: '/login',
                    component: LoginForm,
                    meta: { title: '登录' },
                }
            ]
        },//登录界面
        {
            name: 'client',
            path: '/client',
            component: ClientPage,
            meta: { title: '客户界面' },
            children: [
                {
                    name: 'clientItem',
                    path: 'clientItem',
                    component: ClientItemTable,
                    meta: { title: '项目列表' }
                },//项目列表
                {
                    name: 'clientItemDetail',
                    path: 'clientItemDetail',
                    component: ItemDetail,
                    props({ query: { itemId } }) {
                        return { itemId }
                    },
                    meta: { title: '项目详情' }
                },//项目详情
                {
                    name: 'clientReadApplicationForm',
                    path: 'clientReadApplicationForm',
                    component: ApplicationForm,
                    props({ query: { writable, checking, formId } }) {
                        return { writable, checking, formId }
                    },
                    meta: { title: '读取申请表' }
                },//读取申请表
                {
                    name: 'clientReadTestFunctionList',
                    path: 'clientReadTestFunctionList',
                    component: TestFunctionList,
                    props({ query: { writable, checking, formId } }) {
                        return { writable, checking, formId }
                    },
                    meta: { title: '读取测试功能表' }
                },//读取测试功能表
                {
                    name: 'clientReadApplicationVerifyForm',
                    path: 'clientReadApplicationVerifyForm',
                    component: ApplicationVerifyForm,
                    props({ query: { writable, checking, formId } }) {
                        return { writable, checking, formId }
                    },
                    meta: { title: '读取申请审核表' }
                },//读取审核申请
                {
                    name: 'clientReadTestReportForm',
                    path: 'clientReadTestReportForm',
                    component: TestReportForm,
                    props({ query: { writable, checking, formId } }) {
                        return { writable, checking, formId }
                    },
                    meta: { title: '读取测试报告' }
                },//读取测试报告
                {
                    name: 'createApplication',
                    path: 'createApplication',
                    component: ClientCreateApplication,
                    meta: { title: '创建申请' },
                    children: [
                        {
                            name: "applicationExplanation",
                            path: "",
                            component: ApplicationExplanation,
                            meta: { title: "申请说明" }

                        },
                        {
                            name: 'applicationForm',
                            path: 'applicationForm',
                            component: ApplicationForm,
                            props({ query: { writable } }) {
                                return { writable }
                            },
                            meta: { title: '申请表格' }
                        },
                        {
                            name: 'functionList',
                            path: 'functionList',
                            component: TestFunctionList,
                            props({ query: { writable } }) {
                                return { writable }
                            },
                            meta: { title: '功能表格' }
                        }
                    ]
                },//创建申请             
                {
                    name: 'savedApplication',
                    path: 'savedApplication',
                    component: ClientLoadApplication,
                    props({ query: { itemId } }) {
                        return { itemId }
                    },
                    meta: { title: '查看未提交申请' },
                    children: [
                        {
                            name: 'editSavedApplicationForm',
                            path: 'editSavedApplicationForm',
                            component: ApplicationForm,
                            props({ query: { writable, checking, formId } }) {
                                return { writable, checking, formId }
                            },
                            meta: { title: '编辑申请表格' }
                        },
                        {
                            name: 'editSavedFunctionList',
                            path: 'editSavedFunctionList',
                            component: TestFunctionList,
                            props({ query: { writable, checking, formId } }) {
                                return { writable, checking, formId }
                            },
                            meta: { title: '编辑功能表格' }
                        },
                    ]
                },//修改未提交申请
                {
                    name: 'submittedApplication',
                    path: 'submittedApplication',
                    component: ClientCheckApplication,
                    props({ query: { itemId } }) {
                        return { itemId }
                    },
                    meta: { title: '已提交的测试报告' },
                    children: [
                        {
                            name: 'editApplicationForm',
                            path: 'editApplicationForm',
                            component: ApplicationForm,
                            props({ query: { writable, checking, formId } }) {
                                return { writable, checking, formId }
                            },
                            meta: { title: '编辑申请表格' }
                        },
                        {
                            name: 'editFunctionList',
                            path: 'editFunctionList',
                            component: TestFunctionList,
                            props({ query: { writable, checking, formId } }) {
                                return { writable, checking, formId }
                            },
                            meta: { title: '编辑功能表格' }
                        },
                        {
                            name: 'readVerification',
                            path: 'readVerification',
                            component: ApplicationVerifyForm,
                            props({ query: { writable, formId } }) {
                                return { writable, formId }
                            },
                            meta: { title: '申请审核表格' }
                        },
                    ]
                },//修改提交申请
                {
                    name: 'clientAcceptQuotation',
                    path: 'clientAcceptQuotation',
                    component: ClientAcceptQuotation,
                    props({ query: { itemId } }) {
                        return { itemId }
                    },
                    meta: { title: '查看报价' }
                },//查看报价
                {
                    name: 'clientUploadSamples',
                    path: 'clientUploadSammples',
                    component: ClientUploadSamples,
                    props({ query: { itemId } }) {
                        return { itemId }
                    },
                    meta: { title: '上传样品' }
                },//上传样品
                {
                    name: 'confirmTestReport',
                    path: 'confirmTestReport',
                    component: ClientConfirmReport,
                    props({ query: { itemId } }) {
                        return { itemId }
                    },
                    meta: { title: '确认测试报告' },
                    children: [
                        {
                            name: 'readTestReportForm',
                            path: 'readTestReportForm',
                            component: TestReportForm,
                            props({ query: { writable, checking, formId } }) {
                                return { writable, checking, formId }
                            },
                            meta: { title: '查看测试报告' }
                        },
                    ]
                },//确认测试报告
                {
                    name: 'clientVerifyTestReport',
                    path: 'clientVerifyTestReport',
                    component: ClientVerifyTestReport,
                    props({ query: { itemId } }) {
                        return { itemId }
                    },
                    meta: { title: '审核测试报告' },
                    children: [
                        {
                            name: 'clientCheckTestReportForm',
                            path: 'clientCheckTestReportForm',
                            component: TestReportForm,
                            props({ query: { writable, checking, formId } }) {
                                return { writable, checking, formId }
                            },
                            meta: { title: '查看测试报告' }
                        }
                    ]
                }//审核测试报告
            ]
        },//客户界面
        {
            name: 'employee',
            path: '/employee',
            component: EmployeePage,
            meta: { title: '员工界面' },
            children: [
                {
                    name: 'employeeItem',
                    path: 'employeeItem',
                    component: EmployeeItemTable,
                    meta: { title: '查看项目' }
                },//查看项目
                {
                    name: 'arrangeItem',
                    path: 'arrangeItem',
                    component: ItemForArrange,
                    meta: { title: '项目分配情况' }
                },//项目分配情况
                {
                    name: 'employeeItemDetail',
                    path: 'employeeItemDetail',
                    component: ItemDetail,
                    props({ query: { itemId } }) {
                        return { itemId }
                    },
                    meta: { title: '项目详情' }
                },//项目详情
                {
                    name: 'employeeReadApplicationForm',
                    path: 'employeeReadApplicationForm',
                    component: ApplicationForm,
                    props({ query: { writable, checking, formId } }) {
                        return { writable, checking, formId }
                    },
                    meta: { title: '读取申请表' }
                },//读取申请表
                {
                    name: 'employeeReadTestFunctionList',
                    path: 'employeeReadTestFunctionList',
                    component: TestFunctionList,
                    props({ query: { writable, checking, formId } }) {
                        return { writable, checking, formId }
                    },
                    meta: { title: '读取测试功能表' }
                },//读取测试功能表
                {
                    name: 'employeeReadApplicationVerifyForm',
                    path: 'employeeReadApplicationVerifyForm',
                    component: ApplicationVerifyForm,
                    props({ query: { writable, checking, formId } }) {
                        return { writable, checking, formId }
                    },
                    meta: { title: '读取申请审核表' }
                },//读取审核申请
                {
                    name: 'employeeReadTestPlanForm',
                    path: 'employeeReadTestPlanForm',
                    component: TestPlanForm,
                    props({ query: { writable, checking, formId } }) {
                        return { writable, checking, formId }
                    },
                    meta: { title: '读取测试计划' }
                },//读取测试计划表
                {
                    name: 'employeeReadTestPlanVerifyForm',
                    path: 'employeeReadTestPlanVerifyForm',
                    component: TestPlanVerifyForm,
                    props({ query: { writable, checking, formId } }) {
                        return { writable, checking, formId }
                    },
                    meta: { title: '读取测试计划审核表' }
                },//读取测试计划审核表
                {
                    name: 'employeeReadTestRecordsForm',
                    path: 'employeeReadTestRecordsForm',
                    component: TestRecordsForm,
                    props({ query: { writable, checking, formId } }) {
                        return { writable, checking, formId }
                    },
                    meta: { title: '读取测试记录表' }
                },//读取测试记录表
                {
                    name: 'employeeReadTestReportForm',
                    path: 'employeeReadTestReportForm',
                    component: TestReportForm,
                    props({ query: { writable, checking, formId } }) {
                        return { writable, checking, formId }
                    },
                    meta: { title: '读取测试报告' }
                },//读取测试报告
                {
                    name: 'employeeReadDocumentReviewForm',
                    path: 'employeeReadDocumentReviewForm',
                    component: DocumentReviewForm,
                    props({ query: { writable, checking, formId } }) {
                        return { writable, checking, formId }
                    },
                    meta: { title: '读取文档检查表' }
                },//读取文档检查表
                {
                    name: 'employeeReadTestWorkCheck',
                    path: 'employeeReadTestWorkCheck',
                    component: TestWorkCheck,
                    props({ query: { writable, checking, formId } }) {
                        return { writable, checking, formId }
                    },
                    meta: { title: '读取测试工作检查表' }
                },//读取测试工作检查表
                {
                    name: 'arrangeMission',
                    path: 'arrangeMission',
                    component: EmployeeArrangeMission,
                    props({ query: { itemId } }) {
                        return { itemId }
                    },
                    meta: { title: '分配任务' },
                    children: [
                        {
                            name: 'workArrangeTable',
                            path: 'workArrangeTable',
                            component: WorkArrangeTable,
                            props({ query: { work } }) {
                                return { work }
                            },
                            meta: { title: '工作安排' }
                        }
                    ]
                },//测试任务分配
                {
                    name: 'checkApplication',
                    path: 'checkApplication',
                    component: EmployeeCheckApplication,
                    props({ query: { itemId } }) {
                        return { itemId }
                    },
                    meta: { title: '申请详情' },
                    children: [
                        {
                            name: 'checkApplicationForm',
                            path: 'checkApplicationForm',
                            component: ApplicationForm,
                            props({ query: { writable, checking, formId } }) {
                                return { writable, checking, formId }
                            },
                            meta: { title: '查看申请表格' }
                        },
                        {
                            name: 'checkFunctionList',
                            path: 'checkFunctionList',
                            component: TestFunctionList,
                            props({ query: { writable, checking, formId } }) {
                                return { writable, checking, formId }
                            },
                            meta: { title: '查看测试功能' }
                        },
                        {
                            name: 'applicationVerifyForm',
                            path: 'applicationVerifyForm',
                            component: ApplicationVerifyForm,
                            props({ query: { writable, formId } }) {
                                return { writable, formId }
                            },
                            meta: { title: '申请审核表格' }
                        },
                    ]
                },//申请审核
                {
                    name: 'offerQuotation',
                    path: 'offerQuotation',
                    component: EmployeeQuotation,
                    props({ query: { itemId } }) {
                        return { itemId }
                    },
                    meta: { title: '提出报价' }
                },//提出报价
                {
                    name: 'writeTestPlan',
                    path: 'writeTestPlan',
                    component: EmployeeWriteTestPlan,
                    props({ query: { itemId } }) {
                        return { itemId }
                    },
                    meta: { title: '创建测试计划' },
                    children: [
                        {
                            name: 'testPlanForm',
                            path: 'testPlanForm',
                            component: TestPlanForm,
                            props({ query: { writable, checking, formId } }) {
                                return { writable, checking, formId }
                            },
                            meta: { title: '测试计划' }
                        },
                    ]
                },//制定测试计划
                {
                    name: 'verifyTestPlan',
                    path: 'verifyTestPlan',
                    component: EmployeeVerifyTestPlan,
                    props({ query: { itemId } }) {
                        return { itemId }
                    },
                    meta: { title: '审核测试计划' },
                    children: [
                        {
                            name: 'checkTestPlanForm',
                            path: 'checkTestPlanForm',
                            component: TestPlanForm,
                            props({ query: { writable, checking, formId } }) {
                                return { writable, checking, formId }
                            },
                            meta: { title: '查看测试计划' }
                        },
                        {
                            name: 'testPlanVerifyForm',
                            path: 'testPlanVerifyForm',
                            component: TestPlanVerifyForm,
                            props({ query: { writable, checking, formId } }) {
                                return { writable, checking, formId }
                            },
                            meta: { title: '测试方案审核' }
                        },
                    ]
                },//审核测试计划
                {
                    name: 'testProcess',
                    path: 'testProcess',
                    component: EmployeeTestProcess,
                    props({ query: { itemId } }) {
                        return { itemId }
                    },
                    meta: { title: '测试过程' },
                    children: [
                        {
                            name: 'testRecordsForm',
                            path: 'testRecordsForm',
                            component: TestRecordsForm,
                            props({ query: { writable, checking, formId } }) {
                                return { writable, checking, formId }
                            },
                            meta: { title: '软件测试记录' }
                        },
                        {
                            name: 'testReportForm',
                            path: 'testReportForm',
                            component: TestReportForm,
                            props({ query: { writable, checking, formId } }) {
                                return { writable, checking, formId }
                            },
                            meta: { title: '测试报告填写' }
                        }
                    ]
                },//测试操作
                {
                    name: 'verifyTestReport',
                    path: 'verifyTestReport',
                    component: EmployeeVerifyTestReport,
                    props({ query: { itemId } }) {
                        return { itemId }
                    },
                    meta: { title: '审核测试报告' },
                    children: [
                        {
                            name: 'checkTestReportForm',
                            path: 'checkTestReportForm',
                            component: TestReportForm,
                            props({ query: { writable, checking, formId } }) {
                                return { writable, checking, formId }
                            },
                            meta: { title: '查看测试报告' }
                        },
                        {
                            name: 'reportVerifyForm',
                            path: 'reportVerifyForm',
                            component: ReportVerifyForm,
                            props({ query: { writable, checking, formId } }) {
                                return { writable, checking, formId }
                            },
                            meta: { title: '测试报告审核表格' }
                        }
                    ]
                },//审核测试报告
                {
                    name:'editTestReport',
                    path:'editTestReport',
                    component: EmployeeEditTestReport,
                    props({ query: { itemId } }) {
                        return { itemId }
                    },
                    meta: { title: '编辑测试报告' },
                    children: [
                        {
                            name: 'editTestReportForm',
                            path: 'editTestReportForm',
                            component: TestReportForm,
                            props({ query: { writable, checking, formId } }) {
                                return { writable, checking, formId }
                            },
                            meta: { title: '编辑测试报告' }
                        }
                    ]
                },//编辑测试报告
                {
                    name: 'checkTestWork',
                    path: 'checkTestWork',
                    component: EmployeeCheckTestWork,
                    props({ query: { itemId } }) {
                        return { itemId }
                    },
                    meta: { title: '检查测试工作' },
                    children: [
                        {
                            name: 'documentReviewForm',
                            path: 'documentReviewForm',
                            component: DocumentReviewForm,
                            props({ query: { writable, checking, formId } }) {
                                return { writable, checking, formId }
                            },
                            meta: { title: '软件文档评审表' }
                        },
                        {
                            name: 'workCheckForm',
                            path: 'workCheckForm',
                            component: TestWorkCheck,
                            props({ query: { writable, checking, formId } }) {
                                return { writable, checking, formId }
                            },
                            meta: { title: '测试工作检查表', isLogin: true }
                        },
                    ]
                },//测试工作检查
            ]
        },//员工界面
        {
            name: 'admin',
            path: '/admin',
            component: AdminPage,
            meta: { title: '管理员界面' },
            children: [
                {
                    name: 'clientTable',
                    path: 'clientTable',
                    component: ClientTable,
                    meta: { title: '用户列表' }
                },
                {
                    name: 'employeeTable',
                    path: 'employeeTable',
                    component: EmployeeTable,
                    meta: { title: '员工列表' }
                },
                {
                    name: 'employeeInfoForm',
                    path: 'employeeInfoForm',
                    component: EmployeeInfoForm,
                    meta: { title: '新员工信息' }
                }
            ]
        }//管理员界面
    ]
})

/*
router.beforeEach((to,from,next)=>{
    console.log(to.name)
    //if(to.name === 'news' || to.name === 'message')`
    if(to.meta.isAuth){
        if(localStorage.getItem('school') === 'NJU'){
            next()
        }
        else{
            alert('学校名不对！')
        }
    }
    else{
        console.log('Can pass the gurader')
        next()
    }
})//全局前置路由守卫————路由切换之前或者初始化的时候被调用

router.afterEach((to,from)=>{
    document.title = to.meta.title
})//后置路由守卫，在切换之后调用
*/
router.afterEach((to) => {
    document.title = to.meta.title || "测试系统"
})
export default router
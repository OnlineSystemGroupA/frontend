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
import AdminItemTable from '../pages/Tables/AdminItemTable'
import ClientDetail from '../pages/Details/ClientDetail'
import UserInfoForm from '../pages/Forms/UserInfoForm'
import ChangePassword from '../pages/Forms/ChangePassword'
import EmployeeDetail from '../pages/Details/EmployeeDetail'
import ClientAuthorityTable from '../pages/Tables/ClientAuthorityTable'
import EditEmployeeInfoForm from '../pages/Forms/EditEmployeeInfoForm'
import TestProblemForm from '../pages/Forms/TestProblemForm'
import EmployeeReviewSample from '../pages/Process/EmployeeReviewSample'
import QuotationForm from '../pages/Forms/QuotationForm'
import ContractForm from '../pages/Forms/ContractForm'
import ClientWriteContract from '../pages/Process/ClientWriteContract'
import EmployeeWriteContract from '../pages/Process/EmployeeWriteContract'
import ApplicationSuccess from '../pages/Pages/ApplicationSuccess'
import FinishedItemTable from '../pages/Tables/FinishedItemTable'
import FinishedItemDetail from '../pages/Details/FinishedItemDetail'
import ItemOfEmployee from '../pages/Tables/ItemOfEmployee'
import ClientUploadContract from "@/pages/Process/ClientUploadContract.vue";
import EmployeeSendReport from '../pages/Process/EmployeeSendReport'
import ConfidentialityForm from '../pages/Forms/ConfidentialityForm'

const router = new VueRouter({
    routes: [
        {
            name: "index",
            path: '/',
            component: LoginPage,
            redirect: '/login',
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
            meta: { title: '客户界面', logType: 'client' },
            children: [
                {
                    name: 'clientItemTable',
                    path: 'clientItemTable',
                    component: ClientItemTable,
                    props({ query: { page } }) {
                        return { page }
                    },
                    meta: { title: '项目列表', logType: 'client' }
                },//项目列表
                {
                    name: 'clientFinishedItemTable',
                    path: 'clientFinishedItemTable',
                    component: FinishedItemTable,
                    props({ query: { page } }) {
                        return { page }
                    },
                    meta: { title: '已结束列表', logType: 'client' }
                },//已结束项目
                {
                    name: 'clientDetail',
                    path: 'clientDetail',
                    component: ClientDetail,
                    meta: { title: '个人信息', logType: 'client' },
                    children: [
                        {
                            name: 'userInfoForm',
                            path: 'userInfoForm',
                            component: UserInfoForm,
                            meta: { title: '修改个人信息', logType: 'client' }
                        },
                        {
                            name: 'clientChangePassword',
                            path: 'clientChangePassword',
                            component: ChangePassword,
                            meta: { title: '修改密码', logType: 'client' }
                        }
                    ]
                },//个人信息
                {
                    name: 'contactEmployee',
                    path: 'contactEmployee',
                    component: EmployeeDetail,
                    props({ query: { employeeId } }) {
                        return { employeeId }
                    },
                    meta: { title: '联系负责人', logType: 'client' },
                },//联系负责人
                {
                    name: 'clientItemDetail',
                    path: 'clientItemDetail',
                    component: ItemDetail,
                    props({ query: { processId } }) {
                        return { processId }
                    },
                    meta: { title: '项目详情', logType: 'client' }
                },//项目详情
                {
                    name: 'clientFinishedItemDetail',
                    path: 'clientFinishedItemDetail',
                    component: FinishedItemDetail,
                    props({ query: { processId } }) {
                        return { processId }
                    },
                    meta: { title: '结束项目详情', logType: 'client' }
                },//结束项目详情
                {
                    name: 'clientReadApplicationForm',
                    path: 'clientReadApplicationForm',
                    component: ApplicationForm,
                    props({ query: { writable, checking, processId } }) {
                        return { writable, checking, processId }
                    },
                    meta: { title: '读取申请表', logType: 'client' }
                },//读取申请表
                {
                    name: 'clientReadTestFunctionList',
                    path: 'clientReadTestFunctionList',
                    component: TestFunctionList,
                    props({ query: { writable, checking, processId } }) {
                        return { writable, checking, processId }
                    },
                    meta: { title: '读取测试功能表', logType: 'client' }
                },//读取测试功能表
                {
                    name: 'clientReadQuotationForm',
                    path: 'clientReadQuotationForm',
                    component: QuotationForm,
                    props({ query: { writable, checking, processId } }) {
                        return { writable, checking, processId }
                    },
                    meta: { title: '读取报价表', logType: 'client' }
                },//读取报价
                {
                    name: 'clientReadContractForm',
                    path: 'clientReadContractForm',
                    component: ContractForm,
                    props({ query: { writable, checking, processId } }) {
                        return { writable, checking, processId }
                    },
                    meta: { title: '读取合同', logType: 'client' }
                },//读取合同
                {
                    name: 'clientReadConfidentialityForm',
                    path: 'clientReadConfidentialityForm',
                    component: ConfidentialityForm,
                    props({ query: { writable, processId } }) {
                        return { writable, processId }
                    },
                    meta: { title: '读取保密协议', logType: 'client' }
                },//读取保密协议
                {
                    name: 'clientReadApplicationVerifyForm',
                    path: 'clientReadApplicationVerifyForm',
                    component: ApplicationVerifyForm,
                    props({ query: { writable, checking, processId } }) {
                        return { writable, checking, processId }
                    },
                    meta: { title: '读取申请审核表', logType: 'client' }
                },//读取审核申请
                {
                    name: 'clientReadTestRecordsForm',
                    path: 'clientReadTestRecordsForm',
                    component: TestRecordsForm,
                    props({ query: { writable, checking, processId } }) {
                        return { writable, checking, processId }
                    },
                    meta: { title: '读取测试记录表', logType: 'client' }
                },//读取测试记录表
                {
                    name: 'clientReadTestProblemForm',
                    path: 'clientReadTestProblemForm',
                    component: TestProblemForm,
                    props({ query: { writable, checking, processId } }) {
                        return { writable, checking, processId }
                    },
                    meta: { title: '读取测试问题表', logType: 'client' }
                },//读取测试问题表
                {
                    name: 'clientReadTestReportForm',
                    path: 'clientReadTestReportForm',
                    component: TestReportForm,
                    props({ query: { writable, checking, processId } }) {
                        return { writable, checking, processId }
                    },
                    meta: { title: '读取测试报告', logType: 'client' }
                },//读取测试报告
                {
                    name: 'clientReadDocumentReviewForm',
                    path: 'clientReadDocumentReviewForm',
                    component: DocumentReviewForm,
                    props({ query: { writable, checking, processId } }) {
                        return { writable, checking, processId }
                    },
                    meta: { title: '读取文档检查表', logType: 'client' }
                },//读取文档检查表
                {
                    name: 'createApplication',
                    path: 'createApplication',
                    component: ClientCreateApplication,
                    meta: { title: '创建申请', logType: 'client' },
                    children: [
                        {
                            name: "applicationExplanation",
                            path: "",
                            component: ApplicationExplanation,
                            meta: { title: "申请说明", logType: 'client' }

                        },
                        {
                            name: 'applicationForm',
                            path: 'applicationForm',
                            component: ApplicationForm,
                            props({ query: { writable, processId } }) {
                                return { writable, processId }
                            },
                            meta: { title: '申请表格', logType: 'client' }
                        },
                        {
                            name: 'functionList',
                            path: 'functionList',
                            component: TestFunctionList,
                            props({ query: { writable, processId } }) {
                                return { writable, processId }
                            },
                            meta: { title: '功能表格', logType: 'client' }
                        },
                        {
                            name: 'applicationSuccess',
                            path: 'applicationSuccess',
                            component: ApplicationSuccess,
                            meta: { title: '申请成功', logType: 'client' }
                        }
                    ]
                },//创建申请             
                {
                    name: 'savedApplication',
                    path: 'savedApplication',
                    component: ClientLoadApplication,
                    props({ query: { processId } }) {
                        return { processId }
                    },
                    meta: { title: '查看未提交申请', logType: 'client' },
                    children: [
                        {
                            name: 'editSavedApplicationForm',
                            path: 'editSavedApplicationForm',
                            component: ApplicationForm,
                            props({ query: { writable, checking, processId } }) {
                                return { writable, checking, processId }
                            },
                            meta: { title: '编辑申请表格', logType: 'client' }
                        },
                        {
                            name: 'editSavedFunctionList',
                            path: 'editSavedFunctionList',
                            component: TestFunctionList,
                            props({ query: { writable, checking, processId } }) {
                                return { writable, checking, processId }
                            },
                            meta: { title: '编辑功能表格', logType: 'client' }
                        },
                    ]
                },//修改未提交申请
                {
                    name: 'submittedApplication',
                    path: 'submittedApplication',
                    component: ClientCheckApplication,
                    props({ query: { processId } }) {
                        return { processId }
                    },
                    meta: { title: '已提交的测试报告', logType: 'client' },
                    children: [
                        {
                            name: 'editApplicationForm',
                            path: 'editApplicationForm',
                            component: ApplicationForm,
                            props({ query: { writable, checking, processId } }) {
                                return { writable, checking, processId }
                            },
                            meta: { title: '编辑申请表格', logType: 'client' }
                        },
                        {
                            name: 'editFunctionList',
                            path: 'editFunctionList',
                            component: TestFunctionList,
                            props({ query: { writable, checking, processId } }) {
                                return { writable, checking, processId }
                            },
                            meta: { title: '编辑功能表格', logType: 'client' }
                        },
                        {
                            name: 'readVerification',
                            path: 'readVerification',
                            component: ApplicationVerifyForm,
                            props({ query: { writable, processId } }) {
                                return { writable, processId }
                            },
                            meta: { title: '申请审核表格', logType: 'client' }
                        },
                    ]
                },//修改提交申请
                {
                    name: 'clientAcceptQuotation',
                    path: 'clientAcceptQuotation',
                    component: ClientAcceptQuotation,
                    props({ query: { processId } }) {
                        return { processId }
                    },
                    meta: { title: '查看报价', logType: 'client' }
                },//查看报价
                {
                    name: 'clientContract',
                    path: 'clientContract',
                    component: ClientWriteContract,
                    props({ query: { processId } }) {
                        return { processId }
                    },
                    meta: { title: '填写合同', logType: 'client' },
                    children: [
                        {
                            name: 'clientWriteContract',
                            path: 'clientWriteContract',
                            component: ContractForm,
                            props({ query: { writable, checking, processId } }) {
                                return { writable, checking, processId }
                            },
                            meta: { title: '填写合同', logType: 'client' }
                        },
                        {
                            name: 'clientUploadContract',
                            path: 'clientUploadContract',
                            component: ClientUploadContract,
                            props({ query: { writable, checking, processId } }) {
                                return { writable, checking, processId }
                            },
                            meta: { title: '上传合同扫描件', logType: 'client' }
                        },
                        {
                            name: 'clientCheckConfidentiality',
                            path: 'clientCheckConfidentiality',
                            component: ConfidentialityForm,
                            props({ query: { writable, processId } }) {
                                return { writable, processId }
                            },
                            meta: { title: '查看保密协议', logType: 'client' }
                        }
                    ]
                },//填写合同
                {
                    name: 'clientUploadSamples',
                    path: 'clientUploadSamples',
                    component: ClientUploadSamples,
                    props({ query: { processId } }) {
                        return { processId }
                    },
                    meta: { title: '上传样品', logType: 'client' },
                },//上传样品
                {
                    name: 'confirmTestReport',
                    path: 'confirmTestReport',
                    component: ClientConfirmReport,
                    props({ query: { processId } }) {
                        return { processId }
                    },
                    meta: { title: '确认测试报告', logType: 'client' },
                    children: [
                        {
                            name: 'readTestReportForm',
                            path: 'readTestReportForm',
                            component: TestReportForm,
                            props({ query: { writable, checking, processId } }) {
                                return { writable, checking, processId }
                            },
                            meta: { title: '查看测试报告', logType: 'client' }
                        },
                    ]
                },//确认测试报告
                {
                    name: 'clientVerifyTestReport',
                    path: 'clientVerifyTestReport',
                    component: ClientVerifyTestReport,
                    props({ query: { processId } }) {
                        return { processId }
                    },
                    meta: { title: '审核测试报告', logType: 'client' },
                    children: [
                        {
                            name: 'clientCheckTestReportForm',
                            path: 'clientCheckTestReportForm',
                            component: TestReportForm,
                            props({ query: { writable, checking, processId } }) {
                                return { writable, checking, processId }
                            },
                            meta: { title: '查看测试报告', logType: 'client' }
                        }
                    ]
                }//审核测试报告
            ]
        },//客户界面
        {
            name: 'employee',
            path: '/employee',
            component: EmployeePage,
            meta: { title: '员工界面', logType: 'employee' },
            children: [
                {
                    name: 'employeeItemTable',
                    path: 'employeeItemTable',
                    component: EmployeeItemTable,
                    props({ query: { page } }) {
                        return { page }
                    },
                    meta: { title: '查看项目', logType: 'employee' }
                },//查看项目
                {
                    name: 'employeeFinishedItemTable',
                    path: 'employeeFinishedItemTable',
                    component: FinishedItemTable,
                    props({ query: { page } }) {
                        return { page }
                    },
                    meta: { title: '已结束列表', logType: 'employee' }
                },//已结束项目
                {
                    name: 'employeeDetail',
                    path: 'employeeDetail',
                    component: EmployeeDetail,
                    meta: { title: '员工信息', logType: 'employee' },
                    children: [
                        {
                            name: 'employeeChangePassword',
                            path: 'employeeChangePassword',
                            component: ChangePassword,
                            meta:{title:'修改密码', logType:'employee'}
                        }
                    ]
                },//个人信息
                {
                    name: 'contactClient',
                    path: 'contactClient',
                    component: ClientDetail,
                    props({ query: { clientId } }) {
                        return { clientId }
                    },
                    meta: { title: '联系申请人', logType: 'employee' },
                },//联系申请人
                {
                    name: 'arrangeItem',
                    path: 'arrangeItem',
                    component: ItemForArrange,
                    props({ query: { page } }) {
                        return { page }
                    },
                    meta: { title: '项目分配情况', logType: 'employee' }
                },//项目分配情况
                {
                    name: 'employeeTableForManager',
                    path: 'employeeTableForManager',
                    component: EmployeeTable,
                    props({ query: { page } }) {
                        return { page }
                    },
                    meta: { title: '员工列表', logType: 'employee' }
                },//员工列表
                {
                    name: 'itemOfEmployee',
                    path: 'itemOfEmployee',
                    component: ItemOfEmployee,
                    props({ query: { employeeId, page } }) {
                        return { employeeId, page }
                    },
                    meta: { title: '员工负责项目', logType: 'employee' }
                },//员工负责项目
                {
                    name: 'employeeItemDetail',
                    path: 'employeeItemDetail',
                    component: ItemDetail,
                    props({ query: { processId } }) {
                        return { processId }
                    },
                    meta: { title: '项目详情', logType: 'employee' }
                },//项目详情
                {
                    name: 'employeeFinishedItemDetail',
                    path: 'employeeFinishedItemDetail',
                    component: FinishedItemDetail,
                    props({ query: { processId } }) {
                        return { processId }
                    },
                    meta: { title: '结束项目详情', logType: 'employee' }
                },//结束项目详情
                {
                    name: 'employeeReadApplicationForm',
                    path: 'employeeReadApplicationForm',
                    component: ApplicationForm,
                    props({ query: { writable, checking, processId } }) {
                        return { writable, checking, processId }
                    },
                    meta: { title: '读取申请表', logType: 'employee' }
                },//读取申请表
                {
                    name: 'employeeReadTestFunctionList',
                    path: 'employeeReadTestFunctionList',
                    component: TestFunctionList,
                    props({ query: { writable, checking, processId } }) {
                        return { writable, checking, processId }
                    },
                    meta: { title: '读取测试功能表', logType: 'employee' }
                },//读取测试功能表
                {
                    name: 'employeeReadApplicationVerifyForm',
                    path: 'employeeReadApplicationVerifyForm',
                    component: ApplicationVerifyForm,
                    props({ query: { writable, checking, processId } }) {
                        return { writable, checking, processId }
                    },
                    meta: { title: '读取申请审核表', logType: 'employee' }
                },//读取审核申请
                {
                    name: 'employeeReadQuotationForm',
                    path: 'employeeReadQuotationForm',
                    component: QuotationForm,
                    props({ query: { writable, checking, processId } }) {
                        return { writable, checking, processId }
                    },
                    meta: { title: '读取报价表', logType: 'employee' }
                },//读取报价
                {
                    name: 'employeeReadContractForm',
                    path: 'employeeReadContractForm',
                    component: ContractForm,
                    props({ query: { writable, checking, processId } }) {
                        return { writable, checking, processId }
                    },
                    meta: { title: '读取合同', logType: 'employee' }
                },//读取合同
                {
                    name: 'employeeReadConfidentialityForm',
                    path: 'employeeReadConfidentialityForm',
                    component: ConfidentialityForm,
                    props({ query: { writable, processId } }) {
                        return { writable, processId }
                    },
                    meta: { title: '读取保密协议', logType: 'employee' }
                },//读取保密协议
                {
                    name: 'employeeReadTestPlanForm',
                    path: 'employeeReadTestPlanForm',
                    component: TestPlanForm,
                    props({ query: { writable, checking, processId } }) {
                        return { writable, checking, processId }
                    },
                    meta: { title: '读取测试计划', logType: 'employee' }
                },//读取测试计划表
                {
                    name: 'employeeReadTestPlanVerifyForm',
                    path: 'employeeReadTestPlanVerifyForm',
                    component: TestPlanVerifyForm,
                    props({ query: { writable, checking, processId } }) {
                        return { writable, checking, processId }
                    },
                    meta: { title: '读取测试计划审核表', logType: 'employee' }
                },//读取测试计划审核表
                {
                    name: 'employeeReadTestRecordsForm',
                    path: 'employeeReadTestRecordsForm',
                    component: TestRecordsForm,
                    props({ query: { writable, checking, processId } }) {
                        return { writable, checking, processId }
                    },
                    meta: { title: '读取测试记录表', logType: 'employee' }
                },//读取测试记录表
                {
                    name: 'employeeReadTestProblemForm',
                    path: 'employeeReadTestProblemForm',
                    component: TestProblemForm,
                    props({ query: { writable, checking, processId } }) {
                        return { writable, checking, processId }
                    },
                    meta: { title: '读取测试问题表', logType: 'employee' }
                },//读取测试问题表
                {
                    name: 'employeeReadTestReportForm',
                    path: 'employeeReadTestReportForm',
                    component: TestReportForm,
                    props({ query: { writable, checking, processId } }) {
                        return { writable, checking, processId }
                    },
                    meta: { title: '读取测试报告', logType: 'employee' }
                },//读取测试报告
                {
                    name: 'employeeReadReportVerifyForm',
                    path: 'employeeReadReportVerifyForm',
                    component: ReportVerifyForm,
                    props({ query: { writable, checking, processId } }) {
                        return { writable, checking, processId }
                    },
                    meta: { title: '读取报告审核', logType: 'employee' }
                },//读取报告审核
                {
                    name: 'employeeReadDocumentReviewForm',
                    path: 'employeeReadDocumentReviewForm',
                    component: DocumentReviewForm,
                    props({ query: { writable, checking, processId } }) {
                        return { writable, checking, processId }
                    },
                    meta: { title: '读取文档检查表', logType: 'employee' }
                },//读取文档检查表
                {
                    name: 'employeeReadTestWorkCheck',
                    path: 'employeeReadTestWorkCheck',
                    component: TestWorkCheck,
                    props({ query: { writable, checking, processId } }) {
                        return { writable, checking, processId }
                    },
                    meta: { title: '读取测试工作检查表', logType: 'employee' }
                },//读取测试工作检查表
                {
                    name: 'arrangeMission',
                    path: 'arrangeMission',
                    component: EmployeeArrangeMission,
                    props({ query: { processId } }) {
                        return { processId }
                    },
                    meta: { title: '分配任务', logType: 'employee' },
                    children: [
                        {
                            name: 'workArrangeTable',
                            path: 'workArrangeTable',
                            component: WorkArrangeTable,
                            props({ query: { processId, work, page } }) {
                                return { processId, work, page }
                            },
                            meta: { title: '工作安排', logType: 'employee' }
                        }
                    ]
                },//测试任务分配
                {
                    name: 'checkApplication',
                    path: 'checkApplication',
                    component: EmployeeCheckApplication,
                    props({ query: { processId } }) {
                        return { processId }
                    },
                    meta: { title: '申请详情', logType: 'employee' },
                    children: [
                        {
                            name: 'checkApplicationForm',
                            path: 'checkApplicationForm',
                            component: ApplicationForm,
                            props({ query: { writable, checking, processId } }) {
                                return { writable, checking, processId }
                            },
                            meta: { title: '查看申请表格', logType: 'employee' }
                        },
                        {
                            name: 'checkFunctionList',
                            path: 'checkFunctionList',
                            component: TestFunctionList,
                            props({ query: { writable, checking, processId } }) {
                                return { writable, checking, processId }
                            },
                            meta: { title: '查看测试功能', logType: 'employee' }
                        },
                        {
                            name: 'applicationVerifyForm',
                            path: 'applicationVerifyForm',
                            component: ApplicationVerifyForm,
                            props({ query: { writable, processId } }) {
                                return { writable, processId }
                            },
                            meta: { title: '申请审核表格', logType: 'employee' }
                        },
                    ]
                },//申请审核
                {
                    name: 'offerQuotation',
                    path: 'offerQuotation',
                    component: EmployeeQuotation,
                    props({ query: { processId } }) {
                        return { processId }
                    },
                    meta: { title: '提出报价', logType: 'employee' }
                },//提出报价
                {
                    name: 'employeeContract',
                    path: 'employeeContract',
                    component: EmployeeWriteContract,
                    props({ query: { processId } }) {
                        return { processId }
                    },
                    meta: { title: '填写合同', logType: 'employee' },
                    children: [
                        {
                            name: 'employeeWriteContract',
                            path: 'employeeWriteContract',
                            component: ContractForm,
                            props({ query: { writable, checking, processId } }) {
                                return { writable, checking, processId }
                            },
                            meta: { title: '填写合同', logType: 'employee' }
                        },
                        {
                            name: 'employeeWriteConfidentiality',
                            path: 'employeeWriteConfidentiality',
                            component: ConfidentialityForm,
                            props({ query: { writable, processId } }) {
                                return { writable, processId }
                            },
                            meta: { title: '填写保密协议', logType: 'employee' }
                        }
                    ]
                },//填写合同
                {
                    path: 'reviewSample',
                    name: 'reviewSample',
                    component: EmployeeReviewSample,
                    props({ query: { processId } }) {
                        return { processId }
                    },
                    meta: { title: '检查样品', logType: 'employee' },
                    children: [
                        {
                            name: 'documentReviewForm',
                            path: 'documentReviewForm',
                            component: DocumentReviewForm,
                            props({ query: { writable, checking, processId } }) {
                                return { writable, checking, processId }
                            },
                            meta: { title: '软件文档评审表', logType: 'employee' }
                        },
                    ]
                },//检查样品
                {
                    name: 'writeTestPlan',
                    path: 'writeTestPlan',
                    component: EmployeeWriteTestPlan,
                    props({ query: { processId } }) {
                        return { processId }
                    },
                    meta: { title: '创建测试计划', logType: 'employee' },
                    children: [
                        {
                            name: 'testPlanForm',
                            path: 'testPlanForm',
                            component: TestPlanForm,
                            props({ query: { writable, checking, processId } }) {
                                return { writable, checking, processId }
                            },
                            meta: { title: '测试计划', logType: 'employee' }
                        },
                    ]
                },//制定测试计划
                {
                    name: 'verifyTestPlan',
                    path: 'verifyTestPlan',
                    component: EmployeeVerifyTestPlan,
                    props({ query: { processId } }) {
                        return { processId }
                    },
                    meta: { title: '审核测试计划', logType: 'employee' },
                    children: [
                        {
                            name: 'checkTestPlanForm',
                            path: 'checkTestPlanForm',
                            component: TestPlanForm,
                            props({ query: { writable, checking, processId } }) {
                                return { writable, checking, processId }
                            },
                            meta: { title: '查看测试计划', logType: 'employee' }
                        },
                        {
                            name: 'testPlanVerifyForm',
                            path: 'testPlanVerifyForm',
                            component: TestPlanVerifyForm,
                            props({ query: { writable, checking, processId } }) {
                                return { writable, checking, processId }
                            },
                            meta: { title: '测试方案审核', logType: 'employee' }
                        },
                    ]
                },//审核测试计划
                {
                    name: 'testProcess',
                    path: 'testProcess',
                    component: EmployeeTestProcess,
                    props({ query: { processId } }) {
                        return { processId }
                    },
                    meta: { title: '测试过程', logType: 'employee' },
                    children: [
                        {
                            name: 'testRecordsForm',
                            path: 'testRecordsForm',
                            component: TestRecordsForm,
                            props({ query: { writable, checking, processId } }) {
                                return { writable, checking, processId }
                            },
                            meta: { title: '软件测试记录', logType: 'employee' }
                        },
                        {
                            name: 'testReportForm',
                            path: 'testReportForm',
                            component: TestReportForm,
                            props({ query: { writable, checking, processId } }) {
                                return { writable, checking, processId }
                            },
                            meta: { title: '测试报告填写', logType: 'employee' }
                        },
                        {
                            name: 'testProblemForm',
                            path: 'testProblemForm',
                            component: TestProblemForm,
                            props({ query: { writable, checking, processId } }) {
                                return { writable, checking, processId }
                            },
                            meta: { title: '测试问题列表', logType: 'employee' }
                        }
                    ]
                },//测试操作
                {
                    name: 'verifyTestReport',
                    path: 'verifyTestReport',
                    component: EmployeeVerifyTestReport,
                    props({ query: { processId } }) {
                        return { processId }
                    },
                    meta: { title: '审核测试报告', logType: 'employee' },
                    children: [
                        {
                            name: 'checkTestReportForm',
                            path: 'checkTestReportForm',
                            component: TestReportForm,
                            props({ query: { writable, checking, processId } }) {
                                return { writable, checking, processId }
                            },
                            meta: { title: '查看测试报告', logType: 'employee' }
                        },
                        {
                            name: 'reportVerifyForm',
                            path: 'reportVerifyForm',
                            component: ReportVerifyForm,
                            props({ query: { writable, checking, processId } }) {
                                return { writable, checking, processId }
                            },
                            meta: { title: '测试报告审核表格', logType: 'employee' }
                        }
                    ]
                },//审核测试报告
                {
                    name: 'editTestReport',
                    path: 'editTestReport',
                    component: EmployeeEditTestReport,
                    props({ query: { processId } }) {
                        return { processId }
                    },
                    meta: { title: '编辑测试报告', logType: 'employee' },
                    children: [
                        {
                            name: 'editTestReportForm',
                            path: 'editTestReportForm',
                            component: TestReportForm,
                            props({ query: { writable, checking, processId } }) {
                                return { writable, checking, processId }
                            },
                            meta: { title: '编辑测试报告', logType: 'employee' }
                        }
                    ]
                },//编辑测试报告
                {
                    name: 'checkTestWork',
                    path: 'checkTestWork',
                    component: EmployeeCheckTestWork,
                    props({ query: { processId } }) {
                        return { processId }
                    },
                    meta: { title: '检查测试工作', logType: 'employee' },
                    children: [
                        {
                            name: 'workCheckForm',
                            path: 'workCheckForm',
                            component: TestWorkCheck,
                            props({ query: { writable, checking, processId } }) {
                                return { writable, checking, processId }
                            },
                            meta: { title: '测试工作检查表', logType: 'employee' }

                        },
                    ]
                },//测试工作检查
                {
                    name: 'sendReport',
                    path: 'sendReport',
                    component: EmployeeSendReport,
                    props({ query: { processId } }) {
                        return { processId }
                    },
                    meta: { title: '检查测试工作', logType: 'employee' },
                    children: [
                        {
                            name: 'checkReportBeforeSend',
                            path: 'checkReportBeforeSend',
                            component: TestReportForm,
                            props({ query: { processId, writable, checkable} }) {
                                return { processId, writable, checkable }
                            },
                            meta: { title: '检查测试报告', logType: 'employee' },
                        }
                    ]
                },//发送测试报告
            ]
        },//员工界面
        {
            name: 'admin',
            path: '/admin',
            component: AdminPage,
            meta: { title: '管理员界面', logType: 'admin' },
            children: [
                {
                    name: 'clientTable',
                    path: 'clientTable',
                    component: ClientTable,
                    props({ query: { page } }) {
                        return { page }
                    },
                    meta: { title: '用户列表', logType: 'admin' }
                },//用户列表
                {
                    name: 'clientDetailForAdmin',
                    path: 'clientDetailForAdmin',
                    component: ClientDetail,
                    props({ query: { clientId } }) {
                        return {clientId}
                    },
                    meta: { title: '用户信息', logType: 'admin' },
                    children: [
                        {
                            name: 'editClientAuthority',
                            path: 'editClientAuthority',
                            component: ClientAuthorityTable,
                            props({ query: { clientId } }) {
                                return { clientId }
                            },
                            meta: {title:'用户权限', logType:'admin'}
                        }
                    ]
                },//用户信息
                {
                    name: 'employeeTable',
                    path: 'employeeTable',
                    component: EmployeeTable,
                    props({ query: { page } }) {
                        return { page }
                    },
                    meta: { title: '员工列表', logType: 'admin' }
                },//员工列表
                {
                    name: 'employeeDetailForAdmin',
                    path: 'employeeDetailForAdmin',
                    component: EmployeeDetail,
                    props({ query: { employeeId } }) {
                        return { employeeId }
                    },
                    meta: { title: '员工信息', logType: 'admin' },
                    children: [
                        {
                            name: 'editEmployeeInfo',
                            path: 'editEmployeeInfor',
                            component: EditEmployeeInfoForm,
                            props({ query: { employeeId } }) {
                                return { employeeId }
                            },
                            meta: { title: '修改员工信息', logType: 'admin' },
                        }
                    ]
                },//员工信息
                {
                    name: 'employeeInfoForm',
                    path: 'employeeInfoForm',
                    component: EmployeeInfoForm,
                    meta: { title: '新员工信息', logType: 'admin' }
                },//添加新员工
                {
                    name: 'adminItemTable',
                    path: 'AdminItemTable',
                    component: AdminItemTable,
                    props({ query: { page } }) {
                        return { page }
                    },
                    meta: { title: '项目列表', logType: 'admin' }
                },//项目列表
                {
                    name: 'adminFinishedItemTable',
                    path: 'adminFinishedItemTable',
                    component: FinishedItemTable,
                    props({ query: { page } }) {
                        return { page }
                    },
                    meta: { title: '已结束列表', logType: 'admin' }
                },//已结束项目
                {
                    name: 'adminItemDetail',
                    path: 'adminItemDetail',
                    component: ItemDetail,
                    props({ query: { processId } }) {
                        return { processId }
                    },
                    meta: { title: '项目详情', logType: 'admin' }
                },//项目详情
                {
                    name: 'adminFinishedItemDetail',
                    path: 'adminFinishedItemDetail',
                    component: FinishedItemDetail,
                    props({ query: { processId } }) {
                        return { processId }
                    },
                    meta: { title: '结束项目详情', logType: 'admin' }
                },//结束项目详情
                {
                    name: 'adminReadApplicationForm',
                    path: 'adminReadApplicationForm',
                    component: ApplicationForm,
                    props({ query: { writable, checking, processId } }) {
                        return { writable, checking, processId }
                    },
                    meta: { title: '读取申请表', logType: 'admin' }
                },//读取申请表
                {
                    name: 'adminReadTestFunctionList',
                    path: 'adminReadTestFunctionList',
                    component: TestFunctionList,
                    props({ query: { writable, checking, processId } }) {
                        return { writable, checking, processId }
                    },
                    meta: { title: '读取测试功能表', logType: 'admin' }
                },//读取测试功能表
                {
                    name: 'adminReadApplicationVerifyForm',
                    path: 'adminReadApplicationVerifyForm',
                    component: ApplicationVerifyForm,
                    props({ query: { writable, checking, processId } }) {
                        return { writable, checking, processId }
                    },
                    meta: { title: '读取申请审核表', logType: 'admin' }
                },//读取审核申请
                {
                    name: 'adminReadQuotationForm',
                    path: 'adminReadQuotationForm',
                    component: QuotationForm,
                    props({ query: { writable, checking, processId } }) {
                        return { writable, checking, processId }
                    },
                    meta: { title: '读取报价表', logType: 'admin' }
                },//读取报价
                {
                    name: 'adminReadContractForm',
                    path: 'adminReadContractForm',
                    component: ContractForm,
                    props({ query: { writable, checking, processId } }) {
                        return { writable, checking, processId }
                    },
                    meta: { title: '读取合同', logType: 'admin' }
                },//读取合同
                {
                    name: 'adminReadConfidentialityForm',
                    path: 'adminReadConfidentialityForm',
                    component: ConfidentialityForm,
                    props({ query: { writable, processId } }) {
                        return { writable, processId }
                    },
                    meta: { title: '读取保密协议', logType: 'admin' }
                },//读取保密协议
                {
                    name: 'adminReadTestPlanForm',
                    path: 'adminReadTestPlanForm',
                    component: TestPlanForm,
                    props({ query: { writable, checking, processId } }) {
                        return { writable, checking, processId }
                    },
                    meta: { title: '读取测试计划', logType: 'admin' }
                },//读取测试计划表
                {
                    name: 'adminReadTestPlanVerifyForm',
                    path: 'adminReadTestPlanVerifyForm',
                    component: TestPlanVerifyForm,
                    props({ query: { writable, checking, processId } }) {
                        return { writable, checking, processId }
                    },
                    meta: { title: '读取测试计划审核表', logType: 'admin' }
                },//读取测试计划审核表
                {
                    name: 'adminReadTestRecordsForm',
                    path: 'adminReadTestRecordsForm',
                    component: TestRecordsForm,
                    props({ query: { writable, checking, processId } }) {
                        return { writable, checking, processId }
                    },
                    meta: { title: '读取测试记录表', logType: 'admin' }
                },//读取测试记录表
                {
                    name: 'adminReadTestProblemForm',
                    path: 'adminReadTestProblemForm',
                    component: TestProblemForm,
                    props({ query: { writable, checking, processId } }) {
                        return { writable, checking, processId }
                    },
                    meta: { title: '读取测试问题表', logType: 'admin' }
                },//读取测试问题表
                {
                    name: 'adminReadTestReportForm',
                    path: 'adminReadTestReportForm',
                    component: TestReportForm,
                    props({ query: { writable, checking, processId } }) {
                        return { writable, checking, processId }
                    },
                    meta: { title: '读取测试报告', logType: 'admin' }
                },//读取测试报告
                {
                    name: 'adminReadReportVerifyForm',
                    path: 'adminReadReportVerifyForm',
                    component: ReportVerifyForm,
                    props({ query: { writable, checking, processId } }) {
                        return { writable, checking, processId }
                    },
                    meta: { title: '读取报告审核', logType: 'admin' }
                },//读取报告审核
                {
                    name: 'adminReadDocumentReviewForm',
                    path: 'adminReadDocumentReviewForm',
                    component: DocumentReviewForm,
                    props({ query: { writable, checking, processId } }) {
                        return { writable, checking, processId }
                    },
                    meta: { title: '读取文档检查表', logType: 'admin' }
                },//读取文档检查表
                {
                    name: 'adminReadTestWorkCheck',
                    path: 'adminReadTestWorkCheck',
                    component: TestWorkCheck,
                    props({ query: { writable, checking, processId } }) {
                        return { writable, checking, processId }
                    },
                    meta: { title: '读取测试工作检查表', logType: 'admin' }
                },//读取测试工作检查表

            ]
        }//管理员界面
    ]
})


router.beforeEach((to, from, next) => {
    console.log(to.name)
    if (to.meta.logType) {
        if (sessionStorage.getItem('logType') === to.meta.logType) {//验证登录类型是否正确
            next()
        }
        else {
            this.$message.error('未登录或登录类型错误')
            if (sessionStorage.getItem('tokenHead')) {
                sessionStorage.removeItem('tokenHead')
            }
            if (sessionStorage.getItem('tokenStr')) {
                sessionStorage.removeItem('tokenStr')
            }
            if (sessionStorage.getItem('logType')) {
                sessionStorage.removeItem('logType')
            }
            router.replace({
                name: 'index'
            })
        }
    }
    else {
        next()
    }
})//全局前置路由守卫————路由切换之前或者初始化的时候被调用


router.afterEach((to) => {
    document.title = to.meta.title || "测试系统"
})
export default router
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

const router = new VueRouter({
    routes: [
        {
            name:"index",
            path:'/',
            component:LoginPage,
            children:[
                {
                    name: 'register',//name属性可以用来简化路由的跳转，但是to要写成对象式的
                    path: '/register',
                    component: RegisterForm,
                    meta: {title: '注册'}
                },
                {
                    name: 'login',
                    path: '/login',
                    component: LoginForm,
                    meta: {title: '登录'},
                }
            ]
        },//登录界面
        {
            name: 'client',
            path: '/client',
            component: ClientPage,
            meta: {title: '客户'},
            children: [
                {
                    name:'ClientItem',
                    path:'ClientItem',
                    component:ClientItemTable,
                    props({query:{mission}}){
                        return{mission}
                    },
                    meta:{title:'查看项目'}
                },
                {
                    name:'createApplication',
                    path:'createApplication',
                    component:ClientCreateApplication,
                    meta:{title: '创建申请'},
                    children:[
                        {
                            name:"applicationExplanation",
                            path:"",
                            component:ApplicationExplanation,
                            meta:{title:"申请说明"}

                        },
                        {
                            name: 'applicationForm',
                            path: 'applicationForm',
                            component: ApplicationForm,
                            props({query:{writable}}){
                                return{writable}
                            },
                            meta: {title: '申请表格'}
                        },
                        {
                            name: 'functionList',
                            path: 'functionList',
                            component: TestFunctionList,
                            props({query:{writable}}){
                                return{writable}
                            },
                            meta: {title: '功能表格'}
                        }
                    ]
                },
                {
                    name:'submittedApplication',
                    path:'submittedApplication',
                    component:ClientCheckApplication,
                    props({query:{itemId}}){
                        return{itemId}
                    },
                    meta:{title:'查看测试报告'},
                    children:[
                        {
                            name: 'editApplicationForm',
                            path: 'editApplicationForm',
                            component: ApplicationForm,
                            props({query:{writable,checking,formId}}){
                                return{writable,checking,formId}
                            },
                            meta: {title: '编辑申请表格'}
                        },
                        {
                            name: 'editFunctionList',
                            path: 'editFunctionList',
                            component: TestFunctionList,
                            props({query:{writable,checking,formId}}){
                                return{writable,checking,formId}
                            },
                            meta: {title: '编辑功能表格'}
                        },
                        {
                            name: 'readVerification',
                            path: 'readVerification',
                            component: ApplicationVerifyForm,
                            props({query:{writable,formId}}){
                                return{writable,formId}
                            },
                            meta: {title: '申请审核表格'}
                        },
                    ]
                },
                {
                    name:'savedApplication',
                    path:'savedApplication',
                    component:ClientLoadApplication,
                    props({query:{itemId}}){
                        return{itemId}
                    },
                    meta:{title:'查看测试报告'},
                    children:[
                        {
                            name: 'editSavedApplicationForm',
                            path: 'editSavedApplicationForm',
                            component: ApplicationForm,
                            props({query:{writable,checking,formId}}){
                                return{writable,checking,formId}
                            },
                            meta: {title: '编辑申请表格'}
                        },
                        {
                            name: 'editSavedFunctionList',
                            path: 'editSavedFunctionList',
                            component: TestFunctionList,
                            props({query:{writable,checking,formId}}){
                                return{writable,checking,formId}
                            },
                            meta: {title: '编辑功能表格'}
                        },
                    ]
                },
                {
                    name:'ConfirmTestReport',
                    path:'ConfirmTestReport',
                    component:ClientConfirmReport,
                    props({query:{itemId}}){
                        return{itemId}
                    },
                    meta:{title:'确认测试报告'},
                    children:[
                        {
                            name: 'readTestReportForm',
                            path: 'readTestReportForm',
                            component: TestReportForm,
                            props({query:{writable,checking,formId}}){
                                return{writable,checking,formId}
                            },
                            meta: {title: '测试报告填写'}
                        },
                    ]
                }
            ]
        },//客户界面
        {
            name: 'employee',
            path: '/employee',
            component: EmployeePage,
            meta: {title: '员工'},
            children: [
                {
                    name:'EmployeeItem',
                    path:'EmployeeItem',
                    component:EmployeeItemTable,
                    props({query:{mission}}){
                        return{mission}
                    },
                    meta: {title: '查看项目'}
                },
                {
                    name:'checkApplication',
                    path:'checkApplication',
                    component:EmployeeCheckApplication,
                    props({query:{itemId}}){
                        return{itemId}
                    },
                    meta:{title: '申请详情'},
                    children:[
                        {
                            name: 'checkApplicationForm',
                            path: 'checkApplicationForm',
                            component: ApplicationForm,
                            props({query:{writable,checking,formId}}){
                                return{writable,checking,formId}
                            },
                            meta: {title: '查看申请表格'}
                        },
                        {
                            name: 'checkFunctionList',
                            path: 'checkFunctionList',
                            component: TestFunctionList,
                            props({query:{writable,checking,formId}}){
                                return{writable,checking,formId}
                            },
                            meta: {title: '查看测试功能'}
                        },
                        {
                            name: 'applicationVerifyForm',
                            path: 'applicationVerifyForm',
                            component: ApplicationVerifyForm,
                            props({query:{writable,formId}}){
                                return{writable,formId}
                            },
                            meta: {title: '申请审核表格'}
                        },
                    ]
                },
                {
                    name:'writeTestPlan',
                    path:'writeTestPlan',
                    component:EmployeeWriteTestPlan,
                    props({query:{itemId}}){
                        return{itemId}
                    },
                    meta:{title:'创建测试计划'},
                    children:[{
                        name: 'readApplication',
                        path: 'readApplication',
                        component: ApplicationForm,
                        props({query:{writable,checking,formId}}){
                            return{writable,checking,formId}
                        },
                        meta: {title: '阅读申请表格'}
                    },
                    {
                        name: 'readFunctionList',
                        path: 'readFunctionList',
                        component: TestFunctionList,
                        props({query:{writable,checking,formId}}){
                            return{writable,checking,formId}
                        },
                        meta: {title: '阅读测试功能'}
                    },
                    {
                        name: 'testPlanForm',
                        path: 'testPlanForm',
                        component: TestPlanForm,
                        props({query:{writable,checking,formId}}){
                            return{writable,checking,formId}
                        },
                        meta: {title: '测试计划'}
                    },
                ]
                },
                {
                    name:'verifyTestPlan',
                    path:'verifyTestPlan',
                    component:EmployeeVerifyTestPlan,
                    props({query:{itemId}}){
                        return{itemId}
                    },
                    meta:{title:'审核测试计划'},
                    children:[
                        {
                            name: 'checkTestPlanForm',
                            path: 'checkTestPlanForm',
                            component: TestPlanForm,
                            props({query:{writable,checking,formId}}){
                                return{writable,checking,formId}
                            },
                            meta: {title: '查看测试计划'}
                        },
                        {
                            name: 'testPlanVerifyForm',
                            path: 'testPlanVerifyForm',
                            component: TestPlanVerifyForm,
                            props({query:{writable,checking,formId}}){
                                return{writable,checking,formId}
                            },
                            meta: {title: '测试方案审核'}
                        },
                    ]
                },
                {   
                    name:'testProcess',
                    path:'testProcess',
                    component:EmployeeTestProcess,
                    props({query:{itemId}}){
                        return{itemId}
                    },
                    meta:{title:'测试过程'},
                    children:[
                        {
                            name:'readTestPlan',
                            path:'readTestPlan',
                            component: TestPlanForm,
                            props({query:{writable,checking,formId}}){
                                return{writable,checking,formId}
                            },
                            meta: {title: '查看测试计划'}
                        },
                        {
                            name: 'testReportForm',
                            path: 'testReportForm',
                            component: TestReportForm,
                            props({query:{writable,checking,formId}}){
                                return{writable,checking,formId}
                            },
                            meta: {title: '测试报告填写'}
                        }
                    ]
                },
                {
                    name:'verifyTestReport',
                    path:'verifyTestReport',
                    component: EmployeeVerifyTestReport,
                    props({query:{itemId}}){
                        return{itemId}
                    },
                    meta:{title:'审核测试报告'},
                    children:[
                        {
                            name: 'checkTestReportForm',
                            path: 'checkTestReportForm',
                            component: TestReportForm,
                            props({query:{writable,checking,formId}}){
                                return{writable,checking,formId}
                            },
                            meta: {title: '查看测试报告'}
                        },
                        {
                            name: 'reportVerifyForm',
                            path: 'reportVerifyForm',
                            component: ReportVerifyForm,
                            props({query:{writable,checking,formId}}){
                                return{writable,checking,formId}
                            },
                            meta: {title: '测试报告审核表格'}
                        }
                    ]
                },
                {
                    name:'arrangeMission',
                    path:'arrangeMission',
                    component:EmployeeArrangeMission,
                    props({query:{itemId}}){
                        return{itemId}
                    },
                    meta:{title: '分配任务'},
                    children:[
                        {
                            name: 'readApplicationFormForManager',
                            path: 'readApplicationFormForManager',
                            component: ApplicationForm,
                            props({query:{writable,checking,formId}}){
                                return{writable,checking,formId}
                            },
                            meta: {title: '查看申请表格'}
                        },
                        {
                            name: 'readFunctionListForManager',
                            path: 'readFunctionListForManager',
                            component: TestFunctionList,
                            props({query:{writable,checking,formId}}){
                                return{writable,checking,formId}
                            },
                            meta: {title: '查看测试功能'}
                        },
                    ]
                },
                {
                    name: 'documentReviewForm',
                    path: 'documentReviewForm',
                    component: DocumentReviewForm,
                    isAuth: true,
                    meta: {title: '软件文档评审表'}
                },
                {
                    name: 'testRecordsForm',
                    path: 'testRecordsForm',
                    component: TestRecordsForm,
                    isAuth: true,
                    meta: {title: '软件测试记录'}
                }
            ]
        },//员工界面
        {
            name:'admin',
            path:'/admin',
            component: AdminPage,
            meta: {title: '管理员'},
            children:[
                {
                    name:'clientTable',
                    path:'clientTable',
                    component:ClientTable,
                    meta:{title:'用户列表'}
                },
                {
                    name:'employeeTable',
                    path:'employeeTable',
                    component:EmployeeTable,
                    meta:{title:'员工列表'}
                },
                {
                    name:'employeeInfoForm',
                    path:'employeeInfoForm',
                    component:EmployeeInfoForm,
                    meta:{title:'新员工信息'}
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
import VueRouter from "vue-router";//引入路由器

import RegisterForm from '../pages/Forms/RegisterForm'
import LoginForm from '../pages/Forms/LoginForm'
import ClientCreateApplication from '../pages/Possessions/ClientCreateApplication'
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
import EmployeeCheckApplication from '../pages/Possessions/EmployeeCheckApplication'
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
                            meta: {title: '功能表格'}
                        }
                    ]
                },
                {
                    name:'ClientItemTable',
                    path:'ClientItemTable',
                    component:ClientItemTable,
                    meta:{title:'查看项目'}
                },
            ]
        },//客户界面
        {
            name: 'employee',
            path: '/employee',
            component: EmployeePage,
            meta: {title: '员工'},
            children: [
                {
                    name:'applicationItem',
                    path:'applicationItem',
                    component:EmployeeItemTable,
                    props({query:{mission}}){
                        return{mission}
                    },
                    meta: {title: '查看申请项目'}
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
                            props({query:{writable}}){
                                return{writable}
                            },
                            meta: {title: '查看申请表格'}
                        },
                        {
                            name: 'checkFunctionList',
                            path: 'checkFunctionList',
                            component: TestFunctionList,
                            props({query:{writable}}){
                                return{writable}
                            },
                            meta: {title: '查看测试功能'}
                        },
                        {
                            name: 'applicationVerifyForm',
                            path: 'applicationVerifyForm',
                            component: ApplicationVerifyForm,
                            props({query:{writable}}){
                                return{writable}
                            },
                            meta: {title: '申请审核表格'}
                        },
                    ]
                },
                
                {
                    name: 'reportVerifyForm',
                    path: 'reportVerifyForm',
                    component: ReportVerifyForm,
                    isAuth: true,
                    meta: {title: '测试报告审核表格'}
                },
                {
                    name: 'documentReviewForm',
                    path: 'documentReviewForm',
                    component: DocumentReviewForm,
                    isAuth: true,
                    meta: {title: '软件文档评审表'}
                },
                {
                    name: 'testReportForm',
                    path: 'testReportForm',
                    component: TestReportForm,
                    isAuth: true,
                    meta: {title: '测试报告填写'}
                },
                {
                    name: 'testPlanVerifyForm',
                    path: 'testPlanVerifyForm',
                    component: TestPlanVerifyForm,
                    isAuth: true,
                    meta: {title: '测试方案审核'}
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
import VueRouter from "vue-router";//引入路由器

import RegisterForm from '../pages/Forms/RegisterForm'
import LoginForm from '../pages/Forms/LoginForm'
import ApplicationForm from '../pages/Forms/ApplicationForm'
import ApplicationVerifyForm from '../pages/Forms/ApplicationVerifyForm'
import ClientPage from '../pages/Pages/ClientPage'
import EmployeePage from '../pages/Pages/EmployeePage'
import ReportVerifyForm from "../pages/Forms/ReportVerifyForm"
import TestFunctionList from '../pages/Forms/TestFunctionList'
import DocumentReviewForm from '../pages/Forms/DocumentReviewForm'
import TestReportForm from '../pages/Forms/TestReportForm'
import TestPlanVerifyForm from '../pages/Forms/TestPlanVerifyForm'

const router = new VueRouter({
    routes: [
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
        },
        {
            name: 'client',
            path: '/client',
            component: ClientPage,
            meta: {title: '客户'},
            children: [
                {
                    name: 'applicationForm',
                    path: 'applicationForm',
                    component: ApplicationForm,
                    isAuth: true,
                    meta: {title: '申请表格'}
                },
                {
                    name: 'functionList',
                    path: 'functionList',
                    component: TestFunctionList,
                    isAuth: true,
                    meta: {title: '功能表格'}
                }
            ]
        },
        {
            name: 'employee',
            path: '/employee',
            component: EmployeePage,
            meta: {title: '员工'},
            children: [
                {
                    name: 'applicationVerifyForm',
                    path: 'applicationVerifyForm',
                    component: ApplicationVerifyForm,
                    isAuth: true,
                    meta: {title: '申请审核表格'}
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
        }
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
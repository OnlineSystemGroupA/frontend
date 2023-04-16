<template>
    <div>
        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
            <el-radio-button :label="false">展开</el-radio-button>
            <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group>
        <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
            :collapse="isCollapse">
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-document"></i>
                    <span slot="title">审核申请</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="1-1">查看用户申请</el-menu-item>
                    <el-menu-item index="1-2" @click="verifyApplication">填写审核表单</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
                <template slot="title">
                    <i class="el-icon-document"></i>
                    <span slot="title">合同签订</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="2-1">创建合同</el-menu-item>
                    <el-menu-item index="2-2">查看已提交合同</el-menu-item>
                    <el-menu-item index="2-3">合同草稿</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title">
                    <i class="el-icon-document"></i>
                    <span slot="title">测试</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="3-1">进度填写</el-menu-item>
                    <el-menu-item index="3-2" @click="writeTestReport">测试报告填写</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="4">
                <template slot="title">
                    <i class="el-icon-document"></i>
                    <span slot="title">审核</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="4-1" @click="reviewDocument">文件审核表填写</el-menu-item>
                    <el-menu-item index="4-2" @click="verifyReport">报告审核填写</el-menu-item>
                    <el-menu-item index="4-3" @click="verifyTestPlan">测试计划审核表填写</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
export default {
    name: 'EmployeeMenu',
    data() {
        return {
            isCollapse: true
        };
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        verifyApplication() {
            this.$router.push({
                name: 'applicationVerifyForm'
            })
        },
        reviewDocument() {
            this.$router.push({
                name: 'documentReviewForm'
            })
        },
        verifyReport() {
            this.$router.push({
                name: 'reportVerifyForm',
            })
        },
        writeTestReport(){
            this.$router.push({
                name: 'testReportForm',
            })
        },
        verifyTestPlan(){
            this.$router.push({
                name: 'testPlanVerifyForm'
            })
        }
    }
}
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
</style>
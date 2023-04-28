<template>
    <div>
        <!--
            <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
                <el-radio-button :label="false">展开</el-radio-button>
                <el-radio-button :label="true">收起</el-radio-button>
            </el-radio-group>
        -->
        <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
                 :collapse="isCollapse">
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-document"></i>
                    <span slot="title">所有任务</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="1-1">查看项目列表</el-menu-item>
                    <el-menu-item index="1-2">接受新任务</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
                <template slot="title">
                    <i class="el-icon-document"></i>
                    <span slot="title">申请审核</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="2-1" @click="checkApplication">查看申请项</el-menu-item>
                    <el-menu-item index="2-2">查看已拒绝项目</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title">
                    <i class="el-icon-document"></i>
                    <span slot="title">测试任务</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="3-1">查看测试项目</el-menu-item>
                    <el-menu-item index="3-2">查看完成项目</el-menu-item>
                    <el-menu-item index="3-3">测试方案填写</el-menu-item>
                    <el-menu-item index="3-4">测试方案审核</el-menu-item>
                    <el-menu-item index="3-5">测试进度填写</el-menu-item>
                    <el-menu-item index="3-6">测试报告填写</el-menu-item>
                    <el-menu-item index="3-7">测试报告审核</el-menu-item>
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
            isCollapse: false
        };
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        checkApplication(){
            this.$router.push({
                name:'applicationItem',
                query:{
                    mission:'checkApplication'
                }
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
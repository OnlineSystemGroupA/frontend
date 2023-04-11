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
                    <el-menu-item index="2-1">进度填写</el-menu-item>
                    <el-menu-item index="2-2">测试报告填写</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
export default {
    name:'EmployeeMenu',
    data(){
        return {
            isCollapse: true
        };
    },
    methods:{
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        verifyApplication(){
            this.$router.push({
                    name:'applicationVerifyForm'
                }
            )
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
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
                    <span slot="title">测试申请</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="1-1" @click="createApplication">创建新申请</el-menu-item>
                    <el-menu-item index="1-2">查看已提交申请</el-menu-item>
                    <el-menu-item index="1-3">申请草稿</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
                <template slot="title">
                    <i class="el-icon-document"></i>
                    <span slot="title">查看项目</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="2-1" @click="checkItem">查看项目</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title">
                    <i class="el-icon-document"></i>
                    <span slot="title">测试</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="2-1">进度查看</el-menu-item>
                    <el-menu-item index="2-2">测试报告</el-menu-item>
                    <el-menu-item index="2-3">测试申诉</el-menu-item>
                    <el-menu-item index="2-4" @click="confirmTestReport">确认测试报告</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
export default {
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
        createApplication(){
            this.$router.push({
                name:'applicationExplanation',
            })
        },
        checkItem(){
            this.$router.push({
                name:'ClientItem'
            })
        },
        confirmTestReport(){
            this.$router.push({
                name:'ClientItem',
                query:{
                    mission:'ConfirmTestReport'
                }
            })
        }
    }
}
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
</style>
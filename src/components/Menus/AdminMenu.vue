<template>
    <div>
        <!--
            <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
                <el-radio-button :label="false">展开</el-radio-button>
                <el-radio-button :label="true">收起</el-radio-button>
            </el-radio-group>
        -->
        <el-menu default-active="1-4-1" 
        class="el-menu-vertical-demo"
        @open="handleOpen" 
        @close="handleClose"
        :collapse="isCollapse" 
        background-color="#6A005F" 
        text-color="#FFFFFF" 
        active-text-color="#FFCC00">
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-document"></i>
                    <span slot="title">查看用户</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="1-1" @click="viewClient">查看客户</el-menu-item>
                    <el-menu-item index="1-2" @click="viewEmployee">查看员工</el-menu-item>
                    <el-menu-item index="1-3" @click="addEmployee">添加员工</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
                <template slot="title">
                    <i class="el-icon-document"></i>
                    <span slot="title">查看项目</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="2-1" @click="checkItem">查看项目表格</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
export default {
    name: 'AdminMenu',
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
        viewClient() {
            this.$router.push({
                name: 'clientTable'
            })
        },
        viewEmployee() {
            this.$router.push({
                name: 'employeeTable'
            })
        },
        addEmployee() {
            this.$router.push({
                name: 'employeeInfoForm'
            })
        },
        checkItem() {
            this.$router.push({
                name:'adminItemTable'
            })
        }
    }
}
</script>

<style></style>
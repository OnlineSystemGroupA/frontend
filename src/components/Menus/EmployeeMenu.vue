<template>
    <div style="height: 100%;">
        <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
            :collapse="isCollapse" background-color="var(--theme-color)" text-color="#FFFFFF" active-text-color="#FFCC00">
            <el-menu-item index="1" @click="arrangeMission"><i class="el-icon-s-order" style="color:gold"></i>分配任务</el-menu-item>
            <el-menu-item index="2" @click="checkItem"><i class="el-icon-search" style="color:gold"></i>查看项目</el-menu-item>
            <el-menu-item index="3" @click="checkFinishedItem"><i class="el-icon-document" style="color:gold"></i>结束项目</el-menu-item>
            <el-menu-item index="4" @click="employeeDetail"><i class="el-icon-user" style="color:gold"></i>个人信息</el-menu-item>
            <el-menu-item index="5" @click="logOut"><i class="el-icon-back" style="color:gold"></i>登出</el-menu-item>
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
        arrangeMission() {
            this.$router.push({
                name: 'arrangeItem',
                query: { page: 1 }
            })
        },
        checkItem() {
            this.$router.push({
                name: 'employeeItem',
                query: { page: 1 }
            })
        },
        checkFinishedItem() {
            this.$router.push({
                name: 'employeeFinishedItem',
                query: { page: 1 }
            })
        },
        logOut() {
            if (sessionStorage.getItem('tokenHead')) {
                sessionStorage.removeItem('tokenHead')
            }
            if (sessionStorage.getItem('tokenStr')) {
                sessionStorage.removeItem('tokenStr')
            }
            if (sessionStorage.getItem('logType')) {
                sessionStorage.removeItem('logType')
            }
            this.$router.replace({
                name: 'index'
            })
        },
        employeeDetail() {
            this.$router.push({
                name: 'employeeDetail'
            })
        }
    }
}
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    height: 100%;
}
</style>
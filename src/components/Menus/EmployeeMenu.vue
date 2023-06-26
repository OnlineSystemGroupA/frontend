<template>
    <div style="height: 100%;">
        <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
            :collapse="isCollapse" background-color="var(--theme-color)" text-color="#FFFFFF" active-text-color="#FFCC00">
            <el-menu-item index="1" @click="arrangeMission"><i class="el-icon-s-order" style="color:gold"></i>分配任务</el-menu-item>
            <el-submenu index="2">
                <template slot="title">
                    <i class="el-icon-document" style="color:gold"></i>
                    <span slot="title">查看项目</span>
                </template>
                <el-menu-item-group class="sub-menu-group">
                    <el-menu-item index="2-1" @click="checkItem">查看项目表格</el-menu-item>
                    <el-menu-item index="2-2" @click="checkFinishedItem">查看已完成项目</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
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
            })
        },
        checkItem() {
            this.$router.push({
                name: 'employeeItem',
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
                name:'employeeDetail'
            })
        }
    }
}
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    height: 100%;
}

.sub-menu-group {
    padding-bottom: 10px;
    box-shadow: inset 0 10px 5px -10px #000000, inset 0 -10px 5px -10px #000000;
}

.el-submenu {
/deep/ .el-submenu__icon-arrow {
    color: gold;
}
}
</style>
<template>
    <div>
        <el-menu default-active="1-4-1" 
            class="el-menu-vertical-demo" 
            @open="handleOpen" 
            @close="handleClose"
            :collapse="isCollapse" 
            background-color="#6A005F"
            text-color="#FFFFFF"
            active-text-color="#FFCC00">
            <el-menu-item index="1" @click="arrangeMission"><i class="el-icon-s-order"></i>分配任务</el-menu-item>
            <el-menu-item index="2" @click="checkItem"><i class="el-icon-search"></i>查看项目</el-menu-item>
            <el-menu-item index="3" ><i class="el-icon-user"></i>个人信息</el-menu-item>
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
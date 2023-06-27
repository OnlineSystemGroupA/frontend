<template>
    <div style="height: 100%;">
        <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
                 :collapse="isCollapse" background-color="var(--theme-color)" text-color="#FFFFFF"
                 active-text-color="#FFCC00">
            <el-menu-item index="1" @click="arrangeMission"><i class="el-icon-s-order" style="color:gold"></i>分配任务
            </el-menu-item>
            <el-submenu index="2">
                <template slot="title">
                    <i class="el-icon-document" style="color:gold"></i>
                    <span slot="title">查看项目</span>
                </template>
                <el-menu-item-group class="sub-menu-group">
                    <el-menu-item index="2-1" @click="checkItem">进行中项目</el-menu-item>
                    <el-menu-item index="2-2" @click="checkFinishedItem">已完成项目</el-menu-item>
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
        arrangeMission() {
            this.$router.push({
                name: 'arrangeItem',
                query: {page: 1}
            })
        },
        checkItem() {
            this.$router.push({
                name: 'employeeItem',
                query: {page: 1}
            })
        },
        checkFinishedItem() {
            this.$router.push({
                name: 'employeeFinishedItem',
                query: {page: 1}
            })
        }
    }
}
</script>

<style scoped lang="less">
.el-menu-vertical-demo:not(.el-menu--collapse) {
    height: 100%;
}

.sub-menu-group {
    background-color: #28679d;
    padding-bottom: 10px;
    box-shadow: inset 0 10px 5px -10px #000000, inset 0 -10px 5px -10px #000000;

    /deep/ .el-menu-item:hover {
        background-color: #cccccc !important;
    }

    /deep/ .el-menu-item {
        background-color: #28679d !important;
    }
}

.el-submenu /deep/ .el-submenu__icon-arrow {
    color: gold;
}
</style>
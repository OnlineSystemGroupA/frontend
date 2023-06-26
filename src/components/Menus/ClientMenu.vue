<template>
    <div style="height: 100%;">
        <!--
            <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
                <el-radio-button :label="false">展开</el-radio-button>
                <el-radio-button :label="true">收起</el-radio-button>
            </el-radio-group>
        -->
        <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
                 :collapse="isCollapse" background-color="var(--theme-color)" text-color="#FFFFFF"
                 active-text-color="#FFCC00">
            <el-menu-item index="1" @click="createApplication"><i class="el-icon-upload2" style="color:gold"></i>测试申请
            </el-menu-item>
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
            <el-menu-item index="3" @click="clientDetail"><i class="el-icon-user" style="color:gold"></i>个人信息
            </el-menu-item>
            <el-menu-item index="4" @click="logOut"><i class="el-icon-back" style="color:gold"></i>登出</el-menu-item>
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
        createApplication() {
            this.$router.push({
                name: 'applicationExplanation',
            })
        },
        checkItem() {
            this.$router.push({
                name: 'clientItem',
                query: { page: 1 }
            })
        },
        clientDetail() {
            this.$router.push({
                name: 'clientDetail'
            })
        },
        checkFinishedItem() {
            this.$router.push({
                name: 'clientFinishedItem',
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
        }
    }
}
</script>

<style scoped lang="less">
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
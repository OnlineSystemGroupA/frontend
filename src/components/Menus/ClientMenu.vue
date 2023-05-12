<template>
    <div style="height: 100%;">
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
            <el-menu-item index="1" @click="createApplication"><i class="el-icon-upload2"></i>测试申请</el-menu-item>
            <el-menu-item index="2" @click="checkItem"><i class="el-icon-s-order"></i>查看项目</el-menu-item>
            <el-menu-item index="3" ><i class="el-icon-user"></i>个人信息</el-menu-item>
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
                name:'clientItem'
            })
        },
    }
}
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
</style>
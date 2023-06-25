<template>
    <div style="width: 100%">
        <h2>创建新项目</h2>
        <el-steps :active="active" finish-status="success">
            <el-step title="步骤 1" description="阅读说明"></el-step>
            <el-step title="步骤 2" description="填写申请表格"></el-step>
            <el-step title="步骤 3" description="填写测试功能表"></el-step>
        </el-steps>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
export default {
    name: 'ClientCreateApplication',
    data() {
        return {}
    },
    mounted() {
        this.$bus.$on('submitApplication', () => {
            this.$router.replace({
                name: 'functionList',
                query: {
                    writable: true
                }
            })
        })
        this.$bus.$on('submitFunctionList', () => {
            this.$router.replace({
                name: 'applicationSuccess',
            })
        })
    },
    beforeDestroy() {
        this.$bus.$off('submitApplication')
        this.$bus.$off('submitFunctionList')
    },
    computed: {
        active() {
            let path = this.$route.path
            //console.log(path)
            if (path.endsWith('applicationForm')) {
                return 1
            } else if (path.endsWith('functionList')) {
                return 2
            } else if (path.endsWith('applicationSuccess')) {
                return 3
            }
            return 0
        }
    }
}
</script>

<style></style>
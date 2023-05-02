<template>
    <div>
        <h2>审核项目申请</h2>
        <h3>项目号:{{itemId}}</h3>
        <el-steps :active="active" finish-status="success">
            <el-step title="步骤 1" description="审核申请报告"></el-step>
            <el-step title="步骤 2" description="审核功能列表"></el-step>
            <el-step title="步骤 3" description="填写申请审核表"></el-step>
        </el-steps>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
        <el-button v-if="active === -1" @click="start">开始审核</el-button>
    </div>
</template>

<script>

export default {
    name: 'EmployeeCheckApplication',
    data() {
        return {
        }
    },
    props: ['itemId'],
    methods: {
        start() {
            this.$router.push({
                name: 'checkApplicationForm',
                query: {
                    writable: false,
                    checking: true,
                    formId: this.itemId,
                    itemId: this.itemId
                }
            })
        }
    },
    computed: {
        active() {
            let path = this.$route.path
            if (path.endsWith('checkApplicationForm')) {
                return 0
            }
            else if (path.endsWith('checkFunctionList')) {
                return 1
            }
            else if (path.endsWith('applicationVerifyForm')) {
                return 2
            }
            return -1
        }
    },
    mounted() {
        this.$bus.$on('passApplication', () => {
            this.$router.push({
                name: 'checkFunctionList',
                query: {
                    writable: false,
                    checking: true,
                    formId: this.itemId,
                    itemId: this.itemId
                }
            })
        })
        this.$bus.$on('passFunction', () => {
            this.$router.push({
                name: 'applicationVerifyForm',
                query: {
                    writable: true,
                    formId: this.itemId,
                    itemId: this.itemId
                }
            })
        })
    }
}
</script>

<style></style>
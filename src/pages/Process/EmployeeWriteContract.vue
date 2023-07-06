<template>
    <div style="width:90%;">
        <h2>员工填写合同</h2>
        <h3>项目号:{{ processId }}</h3>
        <el-button type="primary" @click="checkItemDetail(processId)">查看项目详情</el-button>
        <el-button type="primary" @click="writeContract">填写合同</el-button>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'EmployeeWriteContent',
    props: ['processId'],
    data() {
        return {}
    },
    methods: {
        checkItemDetail(id) {
            this.$router.push({
                name: 'employeeItemDetail',
                query: { processId: id }
            })
        },
        writeContract() {
            this.$router.push({
                name: 'employeeWriteContract',
                query: {
                    writable: true,
                    checking: false,
                    processId: this.processId,
                }
            })
        },
        handleRes(res) {
            if (res.status === 200) {
                this.$router.push({
                    name: 'employeeItemDetail',
                    query: {
                        processId: this.processId
                    },
                })
            }
        },
        handleErr(err) {
            if (err.status === 403) {
                alert('指定流程对该用户不可见或当前用户无完成任务权限')
            } else if (err.status === 404) {
                alert('指定流程不存在')
            } else if (err.status === 460) {
                alert('未满足完成条件')
            }
        }
    },
    mounted() {
        this.$bus.$on('submitContract', () => {
            this.axios.post('/api/workflow/processes/' + this.processId + '/complete_task?passable=true')
                .then(this.handleRes, this.handleErr)
        })
    }
}
</script>

<style></style>
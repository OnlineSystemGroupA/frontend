<template>
    <div style="width:94%;">
        <h2>项目报价</h2>
        <h3>项目号:{{ projectId }}</h3>
        <h3>项目名:{{ softwareName }}</h3>
        <QuotationForm :writable="true" :process-id="processId" :checking="true"></QuotationForm>
        <br>
        <el-button type="primary" @click="submit">报价</el-button>
    </div>
</template>

<script>
import QuotationForm from '../Forms/QuotationForm.vue';

export default {
    name: 'EmployeeQuotation',
    props: ['processId'],
    components: {
        QuotationForm
    },
    data() {
        return {
            projectId: '',
            softwareName: ''
        }
    },
    methods: {
        checkItemDetail(id) {
            this.$router.push({
                name: 'employeeItemDetail',
                query: { processId: id }
            })
        },
        submit() {
            this.$bus.$emit('submitQuotation')
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
                this.$message.error('指定流程对该用户不可见或当前用户无完成任务权限')
            }
            else if (err.status === 404) {
                this.$message.error('指定流程不存在')
            }
            else if (err.status === 460) {
                this.$message.error('未满足完成条件')
            }
        },
        handleResponse(res) {
            if (res.status === 200) {
                this.projectId = res.data.projectId
                this.softwareName = res.data.title
            }
        },
        handleError(err) {
            if (err.status === 402) {
                this.$message.error('指定流程对该用户不可见')
            }
            else if (err.status === 404) {
                this.$message.error('指定流程不存在')
            }
        },
    },
    created() {
        this.axios.get('/api/workflow/processes/' + this.processId + '/details').then(this.handleResponse, this.handleError)
    },
    mounted() {
        this.$bus.$on('QuotationSuccess', () => {
            console.log('Quotation')
            this.axios.post('/api/workflow/processes/' + this.processId + '/complete_task').then(this.handleRes, this.handleErr)
        })
    },
    beforeDestroy() {
        this.$bus.$off('QuotationSuccess')
    }
}
</script>

<style></style>
<template>
    <div style="width:94%;">
        <h2>查看报价</h2>
        <h3>项目号:{{ projectId }}</h3>
        <h3>项目名:{{ softwareName }}</h3>
        <QuotationForm :writable="false" :process-id="processId" :checking="false"></QuotationForm>
        <el-form>
            <el-form-item label="接受意见">
                <el-radio-group v-model="passable">
                    <el-radio :label="true">接受</el-radio>
                    <el-radio :label="false">不接受</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="不接受理由" v-if="!passable">
                <el-input type="textarea" placeholder="不接受理由" v-model="reasonForRefution"></el-input>
            </el-form-item>
        </el-form>
        <el-button type="primary" @click="submit">提交</el-button>
    </div>
</template>

<script>
import QuotationForm from '../Forms/QuotationForm.vue';

export default {
    name: 'ClientAcceptQuotation',
    props: ['processId'],
    components: {
        QuotationForm
    },
    data() {
        return {
            quotation: '114514',
            reason: '市场行情如此',
            passable: true,
            reasonForRefution: '',
            projectId: '',
            softwareName: '',
        }
    },
    methods: {
        submit() {
            this.doSubmit();
        },
        doSubmit() {
            console.log(JSON.stringify(this.form))
            console.log(JSON.stringify(this.form))
            console.log(this.processId)
            this.axios.post('/api/workflow/processes/' + this.processId + '/complete_task?passable=' + this.passable)
                .then(this.handleRes, this.handleErr)
        },
        handleRes(res) {
            console.log(res)
            if (res.status === 200) {
                if (this.passable) {
                    this.$alert('接受报价', '审核流程', {
                        confirmButtonText: '确定',
                        callback: () => {
                            this.$message({
                                type: 'success',
                                message: "接受报价"
                            });
                            this.$router.push({
                                name: 'clientItemDetail',
                                query: { processId: this.processId }
                            })
                        }
                    });
                } else {
                    this.$alert('报价已驳回', '审核流程', {
                        confirmButtonText: '确定',
                        callback: () => {
                            this.$message({
                                type: 'info',
                                message: "报价驳回"
                            });
                        }
                    });
                    this.passable = true
                }
            }
        },
        handleSaveResult(res) {
            console.log(res)
            if (res.status === 200) {
                alert('保存成功')
            }
        },
        handleErr(err) {
            if (err.status === 403) {
                alert('指定流程对该用户不可见或当前用户无完成任务权限')
            }
            else if (err.status === 404) {
                alert('指定流程不存在')
            }
            else if (err.status === 460) {
                alert(' 未满足完成条件')
            }
        },
        handleError(err) {
            if (err.status === 402) {
                alert('指定流程对该用户不可见')
            }
            else if (err.status === 404) {
                alert('指定流程不存在')
            }
        },
        handleResponse(res) {
            if (res.status === 200) {
                this.projectId = res.data.projectId
                this.softwareName = res.data.title
            }
        },

    },
    created() {
        this.axios.get('/api/workflow/processes/' + this.processId + '/details').then(this.handleResponse, this.handleError)
    },

}
</script>

<style></style>
<template>
    <div style="width:90%;">
        <h2>查看报价</h2>
        <h3>项目号:{{ processId }}</h3>
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
        <el-button @click="submit">提交</el-button>
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
                .then(this.handleResult, this.handleError)
        },
        handleResult(res) {
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
        handleError(err) {
            if (err.response.status === 401) {
                alert('账号或者密码错误')
            } else if (err.response.status === 403) {
                alert('账号封禁中')
            } else if (err.response.status === 404) {
                alert('指定流程实例不存在')
            }
        }
    }
}
</script>

<style></style>
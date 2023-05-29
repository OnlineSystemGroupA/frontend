<template>
    <div style="width:90%;">
        <h2>查看报价</h2>
        <h3>项目号:{{ itemId }}</h3>
        <QuotationForm :writable="false" :form-id="itemId" :checking="false"></QuotationForm>
        <el-form>
            <el-form-item label="接受意见">
                <el-radio-group v-model="acceptOrNot">
                    <el-radio :label="true">接受</el-radio>
                    <el-radio :label="false">不接受</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="不接受理由" >
                <el-input type="textarea" placeholder="不接受理由" v-model="reasonForRefution" :disabled="acceptOrNot"></el-input>
            </el-form-item>
        </el-form>
        <el-button>提交</el-button>
    </div>
</template>

<script>
import QuotationForm from '../Forms/QuotationForm.vue';
export default {
    name: 'ClientAcceptQuotation',
    props: ['itemId'],
    components: {
        QuotationForm
    },
    data() {
        return {
            quotation: '114514',
            reason: '市场行情如此',
            acceptOrNot:true,
            reasonForRefution: '',
        }
    }
}
</script>

<style></style>
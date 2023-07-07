<template>
    <div class="upload-file">
        <el-radio-group v-model="formType" style="margin: 20px 50px">
            <el-radio label="ContractForm">合同扫描件</el-radio>
            <el-radio label="ConfidentialityForm">保密协议扫描件</el-radio>
        </el-radio-group>
        <el-upload :action="contractFileURL"
                   :headers="headers"
                   :on-success="handleSuccess"
                   :on-exceed="handleExceed"
                   drag
                   :file-list="contractFiles">
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        </el-upload>
    </div>
</template>

<script>
export default {
    name: 'UploadFile',
    props: ['processId'],
    data() {
        return {
            formType: 'ContractForm',
            contractFiles: []
        };
    },
    methods: {
        handleSuccess() {
            this.$message.success("上传成功！")
        },
        handleExceed(files, fileList) {
            this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
        },
    },
    computed: {
        contractFileURL() {
            return '/api/workflow/processes/' + this.processId + '/files/forms/' + this.formType
        },
        headers() {
            return {
                'Authorization':
                    window.sessionStorage.getItem('tokenHead') + window.sessionStorage.getItem('tokenStr')
            }
        }
    }
}
</script>

<style scoped>
.upload-file {
    padding: 40px;
}
</style>
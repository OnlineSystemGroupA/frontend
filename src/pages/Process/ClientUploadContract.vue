<template>
    <div class="upload-file">
        <el-radio-group v-model="formType" style="margin: 20px 50px">
            <el-radio label="ContractForm">合同扫描件</el-radio>
            <el-radio label="ConfidentialityForm">保密协议扫描件</el-radio>
        </el-radio-group>
        <el-upload ref="upload"
                   :action="contractFileURL"
                   :headers="headers"
                   :on-success="handleSuccess"
                   :before-upload="handleBeforeSuccess"
                   :on-exceed="handleExceed"
                   drag
                   :file-list="fileList">
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
            fileListMap: {
                ContractForm: [],
                ConfidentialityForm: []
            }
        };
    },
    methods: {
        handleSuccess() {
            this.$message.success("上传成功！")
        },
        handleBeforeSuccess() {
            this.$refs.upload.$el.querySelectorAll('.el-upload-list')[0].innerHTML = ""
        },
        handleExceed() {
            this.$message.warning('请先删除已上传的文件！')
        },
    },
    computed: {
        fileList() {
            return this.fileListMap[this.formType];
        },
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
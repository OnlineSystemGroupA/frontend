<template>
    <div style="width:90%;">
        <h2>项目号:{{ processId }}</h2>
        <h2>上传文件</h2>
        <el-upload ref="upload" 
                class="upload-demo" 
                :action=contractFileURL
                :on-preview="handlePreview" 
                :on-remove="handleRemove" 
                :file-list="fileList" 
                :on-success="handleSuccess"
                :before-upload="handleBeforeSuccess" 
                :on-exceed="handleExceed" 
                :auto-upload="false"
                :headers="headers">
            <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
            <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">全部上传</el-button>
            <el-button style="margin-left: 10px;" size="small" type="success" @click="complete">完成流程</el-button>
            <div slot="tip" class="el-upload__tip">可上传文件为可执行文件或源代码，软件资料:
                包括《用户手册》、《安装手册》、《操作手册》、《维护手册》以及《无法检测功能的声明》
            </div>
        </el-upload>
    </div>
</template>

<script>
export default {
    name: 'ClientUploadSamples',
    props: ['processId'],
    data() {
        return {
            fileList: [],
        }
    },
    computed: {
        contractFileURL() {
            return '/api/workflow/processes/' + this.processId + '/files/sample'
        },
        headers() {
            return {
                'Authorization':
                    window.sessionStorage.getItem('tokenHead') + window.sessionStorage.getItem('tokenStr')
            }
        }
    },
    methods: {
        submitUpload() {
            // 在这里进行一系列的校验
            console.log(this.fileList)
            this.$refs.upload.submit();
        },
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePreview(file) {
            console.log(file);
        },
        handleSuccess() {
            this.$message.success("上传成功！")
        },
        handleBeforeSuccess() {
            this.$refs.upload.$el.querySelectorAll('.el-upload-list')[0].innerHTML = ""
        },
        handleExceed() {
            this.$message.warning('请先删除已上传的文件！')
        },
        complete() {
            this.axios.post('/api/workflow/processes/' + this.processId + '/complete_task')
                .then(
                    (res) => {
                        if (res.status === 200) {
                            this.$message.success("进入下一流程！")
                            this.$router.push(
                                {
                                    name: 'clientItemDetail',
                                    query: { processId: this.processId }
                                }
                            )
                        }
                    },
                    (err) => {
                        this.$message.warning(err.data)
                    }
                )
        }
    }
}
</script>

<style></style>
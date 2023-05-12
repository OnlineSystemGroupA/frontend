<template>
    <div>
        <h2>项目号:{{itemId}}</h2>
        <h2>上传文件</h2>
        <el-upload class="upload-demo" ref="upload" action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview" :on-remove="handleRemove" :file-list="fileList" :auto-upload="false">
            <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
            <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">全部上传</el-button>
            <div slot="tip" class="el-upload__tip">可上传文件为可执行文件或源代码，软件资料: 包括《用户手册》、《安装手册》、《操作手册》、《维护手册》以及《无法检测功能的声明》</div>
        </el-upload>
    </div>
</template>

<script>
export default {
    name: 'ClientUploadSamples',
    props: ['itemId'],
    data() {
        return {
            fileList: [],
        }
    },
    methods: {
        submitUpload() {
            this.$refs.upload.submit();
        },
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePreview(file) {
            console.log(file);
        }
    }
}
</script>

<style></style>
<template>
    <div>
        <el-upload class="upload-demo" ref="upload" action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview" :on-remove="handleRemove" :file-list="fileList" :auto-upload="false">
            <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
            <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">全部上传</el-button>
            <div slot="tip" class="el-upload__tip"></div>
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
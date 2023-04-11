<template>
    <div>
        <el-form :model="form" ref="form" label-width="100px" class="demo-dynamic">
            <el-form-item label="软件名称">
                <el-input></el-input>
            </el-form-item>
            <el-form-item label="版本号">
                <el-input></el-input>
            </el-form-item>
            <el-form-item v-for="(func, index) in form.functions" :label="'域名' + index" :key="func.key">
                <el-input v-model="func.value"></el-input><el-button @click.prevent="removeDomain(domain)">删除</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    name: 'TestFunctionList',
    data() {
        return {
            form: {
                softwareName: '',
                softwareVersion: '',
                functions:[

                ]
            }
        }
    }
}
</script>

<style></style>
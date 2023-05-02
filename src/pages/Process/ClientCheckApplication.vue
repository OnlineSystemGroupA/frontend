<template>
    <div>
        <h2>查看已提交申请</h2>
        <h3>项目号:{{itemId}}</h3>
        <h3>项目状态：{{itemState}}</h3>
        <el-button type="primary" @click="editApplicationForm">修改测试申请表</el-button>
        <el-button type="primary" @click="editFunctionList">修改测试功能表</el-button>
        <el-button type="primary" @click="readVerification">查看申请审核表</el-button>
        <el-button type="primary" @click="resubmit">重新提交</el-button>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
export default {
    name: 'ClientCheckApplication',
    props:['itemId'],
    data() {
        return {
            itemState:'审核中',
        }
    },
    methods: {
        editApplicationForm(){
            this.$router.push({
                name:'editApplicationForm',
                query:{
                    writable:true,
                    checking:false,
                    formId:this.itemId
                }
            })
        },
        editFunctionList(){
            this.$router.push({
                name:'editFunctionList',
                query:{
                    writable:true,
                    checking:false,
                    formId:this.itemId
                }
            })
        },
        readVerification(){
            this.$router.push({
                name:'readVerification',
                query:{
                    writable:false,
                    checking:false,
                    formId:this.itemId
                }
            })
        },
        resubmit(){

        }
    }
}
</script>

<style></style>
<template>
    <div class="explanation">
        <h3 style="text-align: center">软件项目委托测试提交材料</h3>
        <h4 style="text-align: left">一、软件项目委托测试需要提交的文档：</h4>
        <ol>
            <li>《软件项目委托测试申请表》：①书面一份加盖公章；②电子文档。</li>
            <li>《委托测试软件功能列表》: ①书面一份加盖公章；②电子文档</li>
            <li>《软件项目委托测试保密协议》、《软件项目委托测试合同》：格式按照合同及协议规范签订。①书面各两分；②电子文档</li>
            <li>软件资料: 包括《用户手册》、《安装手册》、《操作手册》、《维护手册》。(手册要有详细的目录索引、页码标识、文档版本号、技术支持联系方法、公司名称、地址等) ①电子文档。</li>
            <li>《无法检测功能的声明》①书面一份加盖公章；②电子文档。</li>
        </ol>
        <h4 style="text-align: left">二、提交软件样品</h4>
        <ol>
            <li>提交软件样品一套（与《委托测试软件功能列表》一致）；附相应的平台及支持性数据。</li>
        </ol>
        <h4 style="text-align: left">三、其它</h4>
        <ol>
            <li>以上一、二项所要求提交的电子文档集中刻成一张（或按实际情况分开来刻录）光盘里；</li>
            <li>以上申报材料（书面文档、电子文档）请在签订合同5天内提交我中心；</li>
            <li>如有疑问请发电子邮件或电话联系。</li>
        </ol>
        <el-button type="primary" @click="applicationForm">开始提交</el-button>
    </div>
</template>

<script>
export default {
    name:'ApplicationExplanation',
    data(){
        return{

        }
    },
    methods:{
        applicationForm() {
            //this.axios.post('/api/workflow/start').then(this.handleResult, this.handleError)

            //this.$bus.$emit('setWritable',false)
            //console.log('Set writable')
            this.$router.replace({
                name: 'applicationForm',
                query: {
                    writable: true
                }
            })
        },
        handleResult(res) {
            if (res.status === 200) {
                console.log('你创建了一个流程！')
                console.log(res.data.processId)
                this.$router.replace({
                    name: 'applicationForm',
                    query: {
                        writable: true
                    }
                })
            }
        },
        handleError(err) {
            console.log(err.response.data)
            alert(err.response.data)
        }
    }
}
</script>

<style scoped>
.explanation{
    width: 94%;
    margin-top: 2%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    padding: 5%;
}
</style>
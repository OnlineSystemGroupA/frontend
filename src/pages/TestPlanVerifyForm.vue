<template>
    <div class="verification">
        <el-form>
    <el-form-item label="软件名称">
        <el-input placeholder="软件名称" v-model="form.softwareName"></el-input>
    </el-form-item>
    <el-form-item label="版本号">
        <el-input placeholder="版本号" v-model="form.version"></el-input>
    </el-form-item>
    <el-form-item label="项目编号">
        <el-input placeholder="项目编号" v-model="form.itemNum"></el-input>
    </el-form-item>
    <el-form-item label="测试类别">
        <el-input placeholder="测试类别" v-model="form.testType"></el-input>
    </el-form-item>
    <el-form-item v-for="(item,index) in form.verifyItems" :key="index">
        <h3>审核内容:{{item.content}}</h3>
        <el-radio-group v-model="item.passOrNot">
            <el-radio label="true"></el-radio>
            <el-radio label="false"></el-radio>
        </el-radio-group>
        <el-form-item label="不通过原因">
            <el-input v-model="item.explanation" placeholder="不通过原因"></el-input>
        </el-form-item>
    </el-form-item>
    <el-form-item v-for="(employee,index) in form.verfiyEmployees" :key="index">
        <h3>职责:{{employee.position}}</h3>
        <el-form-item>
            <el-input v-model="employee.suggestions" placeholder="评审意见"></el-input>
        </el-form-item>
    </el-form-item>
  </el-form>
    </div>
</template>

<script>
export default {
    name:'TestPlanVerifyForm',
    data(){
        return{
            form:{
                softwareName:'',
                version:'',
                itemNum:'',
                testType:'',
                verifyItems:[
                    {
                        content:'《测试方案》书写规范性',
                        passOrNot:false,
                        explanation:'',
                    },
                    {
                        content:'测试环境是否具有典型意义以及是否符合用户要求',
                        passOrNot:false,
                        explanation:'',
                    },
                    {
                        content:'测试内容的完整性，是否覆盖了整个系统',
                        passOrNot:false,
                        explanation:'',
                    },
                    {
                        content:'测试方法的选取是否合理',
                        passOrNot:false,
                        explanation:'',
                    },
                    {
                        content:'测试用例能否覆盖问题',
                        passOrNot:false,
                        explanation:'',
                    },
                    {
                        content:'输入、输出数据设计合理性',
                        passOrNot:false,
                        explanation:'',
                    },
                    {
                        content:'测试时间安排是否合理',
                        passOrNot:false,
                        explanation:'',
                    },
                    {
                        content:'测试人力资源安排是否合理',
                        passOrNot:false,
                        explanation:'',
                    },
                ],
                verfiyEmployees:[
                    {
                        position:'测试工程师',
                        suggestions:'',
                    },
                    {
                        position:'测试室负责人',
                        suggestions:'',
                    },
                    {
                        position:'质量负责人',
                        suggestions:'',
                    },
                    {
                        position:'技术负责人',
                        suggestions:'',
                    },
                    {
                        position:'监督人',
                        suggestions:'',
                    },
                ]
            }
        }
    }
}
</script>

<style scoped>
.verification {
    width: 800px;
    align-items: center;
    border-radius: 30px;
    margin: 30px;
    padding: 50px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
</style>
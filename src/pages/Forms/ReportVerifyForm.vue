<template>
    <div class="form">
        <h1>测试报告审核</h1>
        <el-form label-position="left" label-width="125px">
            <h2>测试任务信息</h2>
            <el-form-item label="软件名称">
                <el-input v-model="form.softwareName"></el-input>
            </el-form-item>
            <el-form-item label="委托单位">
                <el-input v-model="form.client"></el-input>
            </el-form-item>
            <h2>检查内容</h2>
            <h3>基本项</h3>
            <el-form-item label="报告编号">
                <el-radio-group v-model="form.reportIdChecked">
                    <el-radio label="是"></el-radio>
                    <el-radio label="否"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="页码">
                <el-radio-group v-model="form.pagesChecked">
                    <el-radio label="是"></el-radio>
                    <el-radio label="否"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="软件名称">
                <el-radio-group v-model="form.softwareNameChecked">
                    <el-radio label="是"></el-radio>
                    <el-radio label="否"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="版本号">
                <el-radio-group v-model="form.softwareVersionChecked">
                    <el-radio label="是"></el-radio>
                    <el-radio label="否"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="委托单位">
                <el-radio-group v-model="form.clientChecked">
                    <el-radio label="是"></el-radio>
                    <el-radio label="否"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="完成日期">
                <el-radio-group v-model="form.finishDateChecked">
                    <el-radio label="是"></el-radio>
                    <el-radio label="否"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="委托单位地址">
                <el-radio-group v-model="form.clientAddressChecked">
                    <el-radio label="是"></el-radio>
                    <el-radio label="否"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="序号">
                <el-radio-group v-model="form.indexChecked">
                    <el-radio label="是"></el-radio>
                    <el-radio label="否"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="测试样品">
                <el-radio-group v-model="form.sampleChecked">
                    <el-radio label="是"></el-radio>
                    <el-radio label="否"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="软、硬件列表" label-position="top">
                <el-radio-group v-model="form.softwareAndHardwareChecked">
                    <el-radio label="是"></el-radio>
                    <el-radio label="否"></el-radio>
                </el-radio-group>
            </el-form-item>
            <h3>内容与格式</h3>
            <el-form-item label="错别字">
                <el-radio-group v-model="form.characterChecked">
                    <el-radio label="是"></el-radio>
                    <el-radio label="否"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="语句">
                <el-radio-group v-model="form.sentenceChecked">
                    <el-radio label="是"></el-radio>
                    <el-radio label="否"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="格式">
                <el-radio-group v-model="form.formatChecked">
                    <el-radio label="是"></el-radio>
                    <el-radio label="否"></el-radio>
                </el-radio-group>
            </el-form-item>
            <h3>测试报告</h3>
            <el-form-item label="报告准确性">
                <el-radio-group v-model="form.reportChecked">
                    <el-radio label="是"></el-radio>
                    <el-radio label="否"></el-radio>
                </el-radio-group>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    name: "ReportVerifyForm",
    data() {
        return {
            form: {
                softwareName: '',
                client: '',
                reportIdChecked: false,
                pagesChecked: false,
                softwareNameChecked: false,
                softwareVersionChecked: false,
                clientChecked: false,
                finishDateChecked: false,
                clientAddressChecked: false,
                indexChecked: false,
                sampleChecked: false,
                softwareAndHardwareChecked: false,
                characterChecked: false,
                sentenceChecked: false,
                formatChecked: false,
                reportChecked: false,
            }
        }
    }
}
</script>

<style scoped>
.form {
    width: 800px;
    align-items: center;
    border-radius: 30px;
    margin: 30px;
    padding: 50px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}

</style>
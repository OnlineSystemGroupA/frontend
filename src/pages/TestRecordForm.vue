<template>
    <div class="test-record">
        <h1>软件测试记录</h1>
        <el-form>
            <el-form-item v-for="(record, index) in records" :key="index">
                <el-form-item label="测试类型">
                    <el-input v-model="record.type"></el-input>
                </el-form-item>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    name: "TestRecordForm",
    data() {
        return {
            records: []
        }
    },
    methods: {
        addRecord() {
            this.records.add({
                type: "",
                index: "",
                description: "",
                premise: "",
                process: "",
                prediction: "",
                designer: "",
                result: "",
                isMatched: "",
                bugIndex: "",
                executor: "",
                time: "",
                confirmer: ""
            })
        }
    }
}
</script>

<style>
.test-record {

}
</style>
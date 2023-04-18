<template>
    <div class="record-form">
        <h1>软件测试记录</h1>
        <el-button @click="addRecord">新建测试记录</el-button>
        <el-button @click="logg">test</el-button>
        <el-form>
            <el-form-item v-for="(record, index) in records" :key="index" class="record">
                <h1>Testcase {{ index }}</h1>
                <el-form-item label="测试类型">
                    <el-input v-model="record.type"></el-input>
                </el-form-item>
                <el-form-item label="设计说明">
                    <el-input v-model="record.description"></el-input>
                </el-form-item>
                <el-form-item label="规约说明">
                    <el-input v-model="record.contract"></el-input>
                </el-form-item>
                <el-form-item label="前提条件">
                    <el-input v-model="record.premise"></el-input>
                </el-form-item>
                <el-form-item label="执行过程">
                    <el-input v-model="record.process"></el-input>
                </el-form-item>
                <el-form-item label="预期结果">
                    <el-input v-model="record.prediction"></el-input>
                </el-form-item>
                <el-form-item label="设计者">
                    <el-input v-model="record.designer"></el-input>
                </el-form-item>
                <el-form-item label="实际结果">
                    <el-input v-model="record.result"></el-input>
                </el-form-item>
                <el-form-item label="一致性">
                    <el-radio-group v-model="record.isMatched">
                        <el-radio :label="true">是</el-radio>
                        <el-radio :label="false">否</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="相关 bug 编号">
                    <el-input v-model="record.bugIndex"></el-input>
                </el-form-item>
                <el-form-item label="执行者">
                    <el-input v-model="record.executor"></el-input>
                </el-form-item>
                <el-form-item label="执行测试时间">
                    <el-input v-model="record.date"></el-input>
                </el-form-item>
                <el-form-item label="确认人">
                    <el-input v-model="record.confirmer"></el-input>
                </el-form-item>
                <br/>
                <el-button type="primary">提交</el-button>
                <el-button type="danger" @click="deleteRecord(index)">删除</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    name: 'TestRecordForm',
    data() {
        return {
            records: []
        }
    },
    methods: {
        addRecord() {
            this.records.push({
                type: '',
                description: '',
                contract: '',
                premise: '',
                process: '',
                prediction: '',
                designer: '',
                result: '',
                isMatched: false,
                bugIndex: '',
                executor: '',
                date: '',
                confirmer: ''
            })
        },
        deleteRecord(index) {
            this.records.splice(index, 1)
        },
        logg() {
            console.log(this.records)
        }
    }
}
</script>

<style>

.record-form {
    width: 800px;
    align-items: center;
    border-radius: 30px;
    margin: 30px;
    padding: 50px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}

.record {
    width: 600px;
    align-items: center;
    border-radius: 30px;
    margin: 30px;
    padding: 50px;
    border: 5px solid skyblue;
}
</style>
<template>
    <div class="quotation">
        <h2>报价单</h2>
        <el-form :label-position="labelPosition" label-width="110px" ref="form" :model="form" :rules="rules"
                 :disabled="disable">
            <el-row :gutter="20">
                <el-col :span="14">
                    <el-form-item label="报价日期" prop="quotationDate">
                        <el-date-picker v-model="form.quotationDate" @change="onQuotationDateChange"></el-date-picker>
                    </el-form-item>
                    <el-form-item label="报价有效期至" prop="validDate">
                        <el-date-picker v-model="form.validDate"></el-date-picker>
                    </el-form-item>
                    <el-form-item label="软件名称" prop="software">
                        <el-input v-model="form.software" placeholder="软件名称"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="10">
                    <table class="pure-table" rules=all>
                        <tr>
                            <th>户名</th>
                            <td>南京大学</td>
                        </tr>
                        <tr>
                            <th>开户银行</th>
                            <td>中国工商银行股份有限公司南京汉口路分理处</td>
                        </tr>
                        <tr>
                            <th>账号</th>
                            <td>4301011309001041656</td>
                        </tr>
                    </table>
                </el-col>
            </el-row>


            <br>
            <table class="pure-table" rules=all>
                <tr>
                    <th style="min-width: 75px">项目</th>
                    <th>说明</th>
                    <th>单价/元</th>
                    <th>数量</th>
                    <th>行合计/元</th>
                </tr>
                <tr>
                    <td>测试费（软件确认测试）</td>
                    <td>
                        完成委托项目测试进行的测试需求分析、测试设计、测试执行、测试评估、出具第三方测试报告等工作量成本和测试资源使用成本
                    </td>
                    <td>
                        <el-form-item label-width="0" prop="testFee" :show-message="false" class="form-item-table">
                            <el-input-number :precision="2" :min="0" :controls="false"
                                             v-model="form.testFee"></el-input-number>
                        </el-form-item>
                    </td>
                    <td style="text-align:center">
                        1
                    </td>
                    <td style="text-align:center">
                        {{ testTotal.toFixed(2) }}
                    </td>
                </tr>
                <tr>
                    <td>测试报告费</td>
                    <td>
                        首份测试报告免费
                    </td>
                    <td>
                        <el-form-item label-width="0" prop="reportFee" :show-message="false" class="form-item-table">
                            <el-input-number :precision="2" :min="0" :controls="false"
                                             v-model="form.reportFee"></el-input-number>
                        </el-form-item>
                    </td>
                    <td>
                        <el-form-item label-width="0" prop="reportNum" :show-message="false" class="form-item-table">
                            <el-input-number v-model="form.reportNum" :min="1" :precision="0"></el-input-number>
                        </el-form-item>
                    </td>
                    <td style="text-align:center">
                        {{ reportTotal.toFixed(2) }}
                    </td>
                </tr>
                <tr>
                    <th colspan="4">小计</th>
                    <td style="text-align:center">
                        {{ totalBeforeTax.toFixed(2) }}
                    </td>
                </tr>
                <tr>
                    <th colspan="4">税（8%）</th>
                    <td style="text-align:center">
                        {{ tax.toFixed(2) }}
                    </td>
                </tr>
                <tr>
                    <th colspan="4">总计</th>
                    <td style="text-align: center; min-width: 100px">
                        {{ totalAfterTax.toFixed(2) }}
                    </td>
                </tr>
            </table>
        </el-form>
    </div>
</template>

<script>
export default {
    name: 'QuotationForm',
    props: ['writable', 'checking', 'processId'],
    data() {
        const valiValidDate = (rule, value, callback) => {
            if (value === '') {
                callback()
            }
            if (!this.form.quotationDate || this.form.quotationDate === '') {
                callback(new Error('有效期截止日期不能早于报价日期'))
            }

            const startTime = new Date(this.form.quotationDate).getTime()
            const endTime = new Date(value).getTime()
            console.log(this.form.quotationDate)
            console.log(startTime)
            if (startTime > endTime) {
                callback(new Error('有效期截止日期不能早于报价日期'))
            }

            callback()
        };
        return {
            labelPosition: 'left',
            form: {
                quotationDate: '',
                validDate: '',
                software: '',
                testFee: undefined,
                reportFee: undefined,
                reportNum: undefined,
            },

            rules: {
                quotationDate: { required: true, message: '请填写报价日期', trigger: ['blur', 'change'] },
                validDate: [
                    { required: true, message: '请填写有效期截止日期', trigger: ['blur', 'change'] },
                    { validator: valiValidDate, trigger: 'change' },
                ],
                software: { required: true, message: '请填写软件名称', trigger: 'blur' },
                testFee: { required: true, type: 'number', message: '请填写测试费', trigger: 'blur' },
                reportFee: { required: true, type: 'number', message: '请填写报告单价', trigger: 'blur' },
                reportNum: { required: true, type: 'number', message: '请填写报告数量', trigger: ['blur', 'change'] }
            }
        }
    },
    computed: {
        disable() {
            if (this.writable === 'false') {
                return true
            }
            else if (this.writable === 'true') {
                return false
            }
            else if (!this.writable) {
                return true
            }
            return false
        },
        check() {
            if (this.checking === 'true') {
                return true
            }
            else if (this.checking === 'false') {
                return false
            }
            else if (this.checking) {
                return true
            }
            return false
        },
        testTotal() {
            let res = this.form.testFee
            return res ? res : NaN
        },
        reportTotal() {
            return (this.form.reportNum - 1) * this.form.reportFee
        },
        totalBeforeTax() {
            return this.testTotal + this.reportTotal
        },
        tax() {
            return this.totalBeforeTax * 0.08;
        },
        totalAfterTax() {
            return this.totalBeforeTax + this.tax
        },
    },
    methods: {
        onQuotationDateChange() {
            if (this.form.validDate && this.form.validDate !== '') {
                this.$refs.form.validateField('validDate')
            }
        },
        submit() {
            this.$refs.form.validate((valid) => {
                if (valid) {
                    this.doSubmit();
                } else {
                    this.$message.error("报价不符合要求，请修改报价！");
                }
            })
        },
        doSubmit() {
            if (this.writable) {
                console.log(JSON.stringify(this.form))
                console.log(this.processId)
                this.axios.put('/api/workflow/processes/' + this.processId + '/forms/' + 'QuotationForm', JSON.stringify(this.form), {
                    headers: {
                        'Content-Type': 'text/plain'
                    }
                }).then(this.handleResult, this.handleError)
            }
        },
        handleResult(res) {
            console.log(res)
            if (res.status === 200) {
                this.$message.success('上传成功')
                this.$bus.$emit('QuotationSuccess')
            }
        },
        handleError(err) {
            if (err.response.status === 403) {
                this.$message.error('指定流程或表单对该用户不可见')
            } else if (err.response.status === 404) {
                this.$message.error('指定流程或表单不存在')
            }
        },
        autoFill() {
            this.axios.get('/api/workflow/processes/' + this.processId + '/details').then(
                (res) => {
                    if (res.status === 200) {
                        console.log(res.data)
                        this.form.software = res.data.title
                    }
                },
                (err) => {
                    if (err.status === 402) {
                        this.$message.error('指定流程对该用户不可见')
                    }
                    else if (err.status === 404) {
                        this.$message.error('指定流程不存在')
                    }
                }
            )

        }
    },
    mounted() {
        this.$bus.$on('submitQuotation', () => {
            this.submit()
        })
    },
    beforeDestroy() {
        this.$bus.$off('submitQuotation')
    },
    created() {
        this.axios.get('/api/workflow/processes/' + this.processId + '/forms/' + 'QuotationForm').then(
            (res) => {
                console.log(res.data)
                if (res.data) {
                    this.form = res.data
                }
                if (this.writable) {
                    this.autoFill()
                }
                this.dataReady = true
            },
            (err) => {
                if (err.response.status === 403) {
                    this.$message.error('指定流程或表单对该用户不可见')
                } else if (err.response.status === 404) {
                    this.$message.error('指定流程或表单不存在')
                }
            }
        )
    }
}
</script>

<style scoped>
.quotation {
    width: 94%;
    margin-top: 2%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    padding: 5%;
}

.pure-table {
    border-collapse: collapse;
    border-spacing: 0;
    empty-cells: show;
    border: 1px solid #cbcbcb;
}

.pure-table caption {
    color: #000;
    font: italic 85%/1 arial, sans-serif;
    padding: 1em 0;
    text-align: center;
}

.pure-table td,
.pure-table th {
    font-size: inherit;
    margin: 0;
    overflow: visible;
    padding: .5em 1em;
}

.pure-table thead {
    background-color: #e0e0e0;
    color: #000;
    text-align: left;
    vertical-align: bottom;
}

.pure-table td {
    background-color: transparent;
}

.form-item-table {
    margin-bottom: 0;
}
</style>
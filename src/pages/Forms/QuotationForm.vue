<template>
    <div class="quotation">
        <h2>报价单</h2>
        <el-form :label-position="labelPosition" label-width="100px" :disabled="disable">
            <el-row>
                <el-col style="width:50%">
                    <el-form-item label="报价日期">
                        <el-date-picker v-model="form.quotationDate"></el-date-picker>
                    </el-form-item>
                    至
                    <el-form-item label="报价有效期">
                        <el-date-picker v-model="form.validDate"></el-date-picker>
                    </el-form-item>
                </el-col>
                <el-col style="width:50%">
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
            <el-form-item label="软件名称" style="width:50%">
                <el-input v-model="form.software" placeholder="软件名称"></el-input>
            </el-form-item>
        </el-form>

        <br>
        <table class="pure-table" rules=all>
            <tr>
                <th>项目</th>
                <th>说明</th>
                <th>单价</th>
                <th>备注</th>
                <th>行合计</th>
            </tr>
            <tr>
                <td>测试费（软件确认测试）</td>
                <td>完成委托项目测试进行的测试需求分析、测试设计、测试执行、测试评估、出具第三方测试报告等工作量成本和测试资源使用成本</td>
                <td><el-input-number v-model="form.quotation" :disabled="disable"></el-input-number></td>
                <td>含1份测试报告 （需增加报告，每份另收 1000元）</td>
                <td><el-input-number v-model="form.rowTotal" :disabled="disable"></el-input-number></td>
            </tr>
            <tr>
                <th colspan="4">小计</th>
                <td><el-input-number v-model="form.subTotal" :disabled="disable"></el-input-number></td>
            </tr>
            <tr>
                <th colspan="4">税率（8%）</th>
                <td><el-input-number v-model="form.taxRate" :disabled="disable"></el-input-number></td>
            </tr>
            <tr>
                <th colspan="4">总计</th>
                <td><el-input-number v-model="form.total" :disabled="disable"></el-input-number></td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: 'QuotationForm',
    props: ['writable', 'checking', 'formId'],
    data() {
        return {
            labelPosition: 'left',
            form: {
                quotationDate: '',
                validDate: '',
                software: '',
                quotation: '',
                rowTotal: '',
                subTotal: '',
                taxRate: '',
                total: '',
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
        }
    }
}
</script>

<style scoped>
.quotation{
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
</style>
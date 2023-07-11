<template>
    <div class="contract">
        <el-form ref="form" :disabled="disable" :rules="rules" :model="form">
            <div style="text-align: center;">
                <h2 style="font-size: 56px;">南京大学测试中心合同</h2>
            </div>
            <br>
            <div class="basicInfo">
                <table>
                    <tr>
                        <th style="width:40%">
                            <h3>项目名称：</h3>
                        </th>
                        <td style="width:40%">
                            <el-form-item prop="projectName">
                                <el-input placeholder="项目名称" v-model="form.projectName"></el-input>
                            </el-form-item>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <h3>委托方（甲方）：</h3>
                        </th>
                        <td>
                            <el-form-item prop="client">
                                <el-input placeholder="委托方（甲方）" v-model="form.client"></el-input>
                            </el-form-item>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <h3>受托方（乙方）：</h3>
                        </th>
                        <td>
                            <el-form-item prop="trustee">
                                <el-input placeholder="受托方（乙方）" v-model="form.trustee"></el-input>
                            </el-form-item>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <h3>签订地点：</h3>
                        </th>
                        <td>
                            <el-form-item prop="signPlace">
                                <el-input placeholder="签订地点" v-model="form.signPlace"></el-input>
                            </el-form-item>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <h3>签订日期：</h3>
                        </th>
                        <td>
                            <el-form-item prop="signDate">
                                <el-date-picker placeholder="签订日期" v-model="form.signDate"
                                                @change="onSignDateChange"></el-date-picker>
                            </el-form-item>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <h3>有效期至：</h3>
                        </th>
                        <td>
                            <el-form-item prop="validDate">
                                <el-date-picker placeholder="有效期至" v-model="form.validDate"></el-date-picker>
                            </el-form-item>
                        </td>
                    </tr>
                </table>
            </div>
            <br>
            <div>
                <div>
                    本合同由作为委托方的
                    <div style="display: inline-block">
                        <el-form-item prop="client" :show-message="false">
                            <el-input placeholder="委托方（甲方）" v-model="form.client"></el-input>
                        </el-form-item>
                    </div>
                    （以下简称“甲方”）与作为受托方的 南京大学
                    （以下简称“乙方”）在平等自愿的基础上，依据《中华人民共和国合同法》有关规定就项目的执行，经友好协商后订立。
                </div>
                <h4>一、 任务表述</h4>
                <div>
                    乙方按照国家软件质量测试标准和测试规范，完成甲方委托的软件
                    <div style="display: inline-block">
                        <el-form-item prop="software" :show-message="false">
                            <el-input placeholder="受测软件" v-model="form.software"></el-input>
                        </el-form-item>
                    </div>
                    (下称受测软件)的质量特性
                    <div style="display: inline-block">
                        <el-form-item prop="qualityCharacteristic" :show-message="false">
                            <el-input placeholder="质量特性" v-model="form.qualityCharacteristic"></el-input>
                        </el-form-item>
                    </div>
                    ，进行测试，并出具相应的测试报告。
                </div>
                <h4>二、双方的主要义务 </h4>
                <div>
                    1. 甲方的主要义务：
                    <ol>
                        <li>按照合同约定支付所有费用。</li>
                        <li>按照乙方要求以书面形式出具测试需求，包括测试子特性、测试软硬件环境等。</li>
                        <li>
                            提供符合交付要求的受测软件产品及相关文档，包括软件功能列表、需求分析、设计文档、用户文档至乙方。
                        </li>
                        <li>指派专人配合乙方测试工作，并提供必要的技术培训和技术协助。</li>
                    </ol>
                    2. 乙方的主要义务
                    <ol>
                        <li>设计测试用例，制定和实施产品测试方案。</li>
                        <li>在测试过程中，定期知会甲方受测软件在测试过程中出现的问题。</li>
                        <li>按期完成甲方委托的软件测试工作。</li>
                        <li>出具正式的测试报告。</li>
                    </ol>
                </div>
                <h4>三、履约地点</h4>
                <p>
                    由甲方将受测软件产品送到乙方实施测试。如果由于被测软件本身特点或其它乙方认可的原因，需要在甲方所在地进行测试时，甲方应负担乙方现场测试人员的差旅和食宿费用。
                </p>
                <h4>四、合同价款</h4>
                <div>
                    本合同软件测试费用为人民币
                    <div style="display: inline-block">
                        <el-form-item prop="testFee" :show-message="false">
                            <el-input-number :precision="2" :min="0" :controls="false" v-model="form.testFee"
                                             :disabled="disable"></el-input-number>
                        </el-form-item>
                    </div>
                    （¥元）。
                </div>
                <h4>五、测试费用支付方式</h4>
                <p>
                    本合同签定后，十个工作日内甲方合同价款至乙方帐户。
                </p>
                <h4>六、履行的期限</h4>
                <div>
                    <ol>
                        <li>本次测试的履行期限为合同生效之日起
                            <div style="display: inline-block">
                                <el-form-item prop="testTime" :show-message="false">
                                    <el-input-number :min="0" :precision="0" placeholder="自然日"
                                                     v-model="form.testTime"></el-input-number>
                                </el-form-item>
                            </div>
                            个自然日内完成。
                        </li>
                        <li>经甲乙双方同意，可对测试进度作适当修改，并以修改后的测试进度作为本合同执行的期限。</li>
                        <li>如受测软件在测试过程中出现的问题，导致继续进行测试会影响整体测试进度，则乙方暂停测试并以书面形式通知甲方进行整改。在整个测试过程中，整改次数限于
                            <div style="display: inline-block">
                                <el-form-item prop="rectificationFrequency" :show-message="false">
                                    <el-input-number :min="0" :precision="0" placeholder="整改次数"
                                                     v-model="form.rectificationFrequency"></el-input-number>
                                </el-form-item>
                            </div>
                            次，每次不超过
                            <div style="display: inline-block">
                                <el-form-item prop="rectificationTime" :show-message="false">
                                    <el-input-number :min="0" :precision="0" placeholder="整改天数"
                                                     v-model="form.rectificationTime"></el-input-number>
                                </el-form-item>
                            </div>
                            天。
                        </li>
                        <li>如因甲方原因，导致测试进度延迟、应由甲方负责,乙方不承担责任。</li>
                        <li>
                            如因乙方原因，导致测试进度延迟，则甲方可酌情提出赔偿要求，赔偿金额不超过甲方已付金额的50%。双方经协商一致后另行签订书面协议，作为本合同的补充。
                        </li>
                    </ol>
                </div>
                <h4>七、资料的保密</h4>
                <p>
                    对于一方向另一方提供使用的秘密信息，另一方负有保密的责任，不得向任何第三方透露。为明确双方的保密义务，双方应签署《软件项目委托测试保密协议》，并保证切实遵守其中条款。
                </p>
                <h4>八、 风险责任的承担</h4>
                <p>
                    乙方人员在本协议有效期间（包括可能的到甲方出差）发生人身意外或罹患疾病时由乙方负责处理。甲方人员在本协议有效期间（包括可能的到乙方出差）发生人身意外或罹患疾病时由甲方负责处理。</p>
                <h4>九、验收方法</h4>
                <p>由乙方向甲方提交软件产品鉴定测试报告正本一份，甲方签收鉴定测试报告后，完成验收。</p>
                <h4>十、 争议解决</h4>
                <p>
                    双方因履行本合同所发生的一切争议，应通过友好协商解决；如协商解决不成，就提交市级仲裁委员会进行仲裁。裁决对双方当事人具有同等约束力。</p>
                <h4>十一、 其他</h4>
                <p>本合同自双方授权代表签字盖章之日起生效，自受托方的主要义务履行完毕之日起终止。</p>
                <p>本合同未尽事宜由双方协商解决。</p>
                <p>本合同的正本一式肆份，双方各执两份，具有同等法律效力。</p>
            </div>
            <h3>十二、签章</h3>
            <table class="pure-table" rules=all>
                <tr>
                    <th rowspan="7" style="text-align:center; font-size: 24px;">委<br>托<br>方</th>
                    <th>单位全称</th>
                    <td colspan="3">
                        <el-form-item prop="client" :show-message="false">
                            <el-input placeholder="委托方（甲方）" v-model="form.client"></el-input>
                        </el-form-item>
                    </td>
                </tr>
                <tr>
                    <th>授权代表</th>
                    <td>
                        <el-form-item prop="clientInfo.representative" :show-message="false">
                            <el-input placeholder="授权代表" v-model="form.clientInfo.representative"></el-input>
                        </el-form-item>
                    </td>
                    <th>签章日期</th>
                    <td>
                        <el-form-item prop="clientInfo.signatureDate" :show-message="false">
                            <el-date-picker placeholder="签章日期" v-model="form.clientInfo.signatureDate"></el-date-picker>
                        </el-form-item>
                    </td>
                </tr>
                <tr>
                    <th>联系人</th>
                    <td colspan="3">
                        <el-form-item prop="clientInfo.contact" :show-message="false">
                            <el-input placeholder="联系人" v-model="form.clientInfo.contact"></el-input>
                        </el-form-item>
                    </td>
                </tr>
                <tr>
                    <th>通讯地址</th>
                    <td colspan="3">
                        <el-form-item prop="clientInfo.address" :show-message="false">
                            <el-input placeholder="通讯地址" v-model="form.clientInfo.address"></el-input>
                        </el-form-item>
                    </td>
                </tr>
                <tr>
                    <th>电话</th>
                    <td>
                        <el-form-item prop="clientInfo.telephone" :show-message="false">
                            <el-input placeholder="电话" v-model="form.clientInfo.telephone"></el-input>
                        </el-form-item>
                    </td>
                    <th>传真</th>
                    <td>
                        <el-form-item prop="clientInfo.fax" :show-message="false">
                            <el-input placeholder="传真" v-model="form.clientInfo.fax"></el-input>
                        </el-form-item>
                    </td>
                </tr>
                <tr>
                    <th>开户银行</th>
                    <td colspan="3">
                        <el-form-item prop="clientInfo.bank" :show-message="false">
                            <el-input placeholder="开户银行" v-model="form.clientInfo.bank"></el-input>
                        </el-form-item>
                    </td>
                </tr>
                <tr>
                    <th>账号</th>
                    <td>
                        <el-form-item prop="clientInfo.account" :show-message="false">
                            <el-input placeholder="账号" v-model="form.clientInfo.account"></el-input>
                        </el-form-item>
                    </td>
                    <th>邮编</th>
                    <td>
                        <el-form-item prop="clientInfo.postcode" :show-message="false">
                            <el-input placeholder="邮编" v-model="form.clientInfo.postcode"></el-input>
                        </el-form-item>
                    </td>
                </tr>
                <tr>
                    <th rowspan="8" style="text-align:center; font-size: 24px;">受<br>托<br>方</th>
                    <th>单位全称</th>
                    <td colspan="3">南京大学
                    </td>
                </tr>
                <tr>
                    <th>授权代表</th>
                    <td>
                        <el-form-item prop="trusteeInfo.representative" :show-message="false">
                            <el-input placeholder="授权代表" v-model="form.trusteeInfo.representative"></el-input>
                        </el-form-item>
                    </td>
                    <th>签章日期</th>
                    <td>
                        <el-form-item prop="trusteeInfo.signatureDate" :show-message="false">
                            <el-date-picker placeholder="签章日期" v-model="form.trusteeInfo.signatureDate"></el-date-picker>
                        </el-form-item>
                    </td>
                </tr>
                <tr>
                    <th>联系人</th>
                    <td colspan="3">
                        <el-form-item prop="trusteeInfo.contact" :show-message="false">
                            <el-input placeholder="联系人" v-model="form.trusteeInfo.contact"></el-input>
                        </el-form-item>
                    </td>
                </tr>
                <tr>
                    <th>通讯地址</th>
                    <td>
                        <el-form-item prop="trusteeInfo.address" :show-message="false">
                            <el-input placeholder="通讯地址" v-model="form.trusteeInfo.address"></el-input>
                        </el-form-item>
                    </td>
                    <th>邮编</th>
                    <td>
                        <el-form-item prop="trusteeInfo.postcode" :show-message="false">
                            <el-input placeholder="邮编" v-model="form.trusteeInfo.postcode"></el-input>
                        </el-form-item>
                    </td>
                </tr>
                <tr>
                    <th>电话</th>
                    <td>
                        <el-form-item prop="trusteeInfo.telephone" :show-message="false">
                            <el-input placeholder="电话" v-model="form.trusteeInfo.telephone"></el-input>
                        </el-form-item>
                    </td>
                    <th>传真</th>
                    <td>
                        <el-form-item prop="trusteeInfo.fax" :show-message="false">
                            <el-input placeholder="传真" v-model="form.trusteeInfo.fax"></el-input>
                        </el-form-item>
                    </td>
                </tr>
                <tr>
                    <th>开户银行</th>
                    <td colspan="3">中国工商银行股份有限公司南京汉口路支行</td>
                </tr>
                <tr>
                    <th>户名</th>
                    <td colspan="3">南京大学</td>
                </tr>
                <tr>
                    <th>账户</th>
                    <td colspan="3">4301011309001041656</td>
                </tr>
            </table>
            <hr>
            <el-row v-show="!disable">
                <el-button type="success" @click="submit" :disabled="disable">提交</el-button>
                <el-button type="primary" @click="save" :disabled="disable">保存</el-button>
            </el-row>
            <el-row v-show="check">
                <el-button type="success" @click="pass" :disabled="!disable">通过</el-button>
                <el-button type="danger" @click="refute" :disabled="!disable">驳回</el-button>
            </el-row>
        </el-form>

    </div>
</template>

<script>
import contractForm from '../../assets/jsons/contractForm.json'

export default {
    name: 'ContractForm',
    props: ['writable', 'processId', 'checking'],
    data() {
        const valiValidDate = (rule, value, callback) => {
            if (value === '') {
                callback()
            }
            if (!this.form.signDate || this.form.signDate === '') {
                callback(new Error('有效期截止日期不能早于签订日期'))
            }

            const startTime = new Date(this.form.signDate).getTime()
            const endTime = new Date(value).getTime()
            console.log(this.form.signDate)
            console.log(startTime)
            if (startTime > endTime) {
                callback(new Error('有效期截止日期不能早于签订日期'))
            }

            callback()
        };

        return {
            form: {
                projectName: '',
                client: '',
                trustee: '',
                signPlace: '',
                signDate: '',
                validDate: '',
                software: '',
                qualityCharacteristic: '',
                testFee: undefined,
                testTime: undefined,
                rectificationFrequency: undefined,
                rectificationTime: undefined,
                clientInfo: {
                    representative: '',
                    signatureDate: '',
                    contact: '',
                    address: '',
                    telephone: '',
                    fax: '',
                    bank: '',
                    account: '',
                    postcode: '',
                },
                trusteeInfo: {
                    representative: '',
                    signatureDate: '',
                    contact: '',
                    address: '',
                    telephone: '',
                    fax: '',
                    postcode: '',
                }
            },
            rules: {
                projectName: { required: true, message: '请填写项目名称', trigger: 'blur' },
                client: { required: true, message: '请填写委托方', trigger: 'blur' },
                trustee: { required: true, message: '请填写受托方', trigger: 'blur' },
                signPlace: { required: true, message: '请填写签订地点', trigger: 'blur' },
                signDate: { required: true, message: '请填写签订日期', trigger: ['blur', 'change'] },
                validDate: [
                    { required: true, message: '请填写有效期截止日期', trigger: ['blur', 'change'] },
                    { validator: valiValidDate, trigger: 'change' }
                ],
                // 以下相关 form-item 嵌入文本或表格，不需要显示校验报错信息
                software: { required: true, trigger: 'blur' },
                qualityCharacteristic: { required: true, trigger: 'blur' },
                testFee: { required: true, trigger: 'blur' },
                testTime: { required: true, trigger: ['blur', 'change'] },
                rectificationFrequency: { required: true, trigger: ['blur', 'change'] },
                rectificationTime: { required: true, trigger: ['blur', 'change'] },
                clientInfo: {
                    representative: { required: true, trigger: 'blur' },
                    signatureDate: { required: true, trigger: ['blur', 'change'] },
                    contact: { required: true, trigger: 'blur' },
                    address: { required: true, trigger: 'blur' },
                    telephone: { required: true, trigger: 'blur' },
                    fax: { required: true, trigger: 'blur' },
                    bank: { required: true, trigger: 'blur' },
                    account: { required: true, trigger: 'blur' },
                    postcode: { required: true, trigger: 'blur' },
                },
                trusteeInfo: {
                    representative: { required: true, trigger: 'blur' },
                    signatureDate: { required: true, trigger: ['blur', 'change'] },
                    contact: { required: true, trigger: 'blur' },
                    address: { required: true, trigger: 'blur' },
                    telephone: { required: true, trigger: 'blur' },
                    fax: { required: true, trigger: 'blur' },
                    postcode: { required: true, trigger: 'blur' },
                }
            }
        }
    },
    methods: {
        onSignDateChange() {
            if (this.form.validDate && this.form.validDate !== '') {
                this.$refs.form.validateField('validDate')
            }
        },
        submit() {
            this.$refs.form.validate((valid) => {
                if (valid) {
                    this.doSubmit();
                } else {
                    this.$message.error("合同不符合要求，请修改合同！");
                }
            })
        },
        doSubmit() {
            if (this.writable) {
                console.log(JSON.stringify(this.form))
                console.log(this.processId)
                this.axios.put('/api/workflow/processes/' + this.processId + '/forms/' + 'ContractForm', JSON.stringify(this.form), {
                    headers: {
                        'Content-Type': 'text/plain'
                    }
                }).then(this.handleResult, this.handleError)
            }
        },
        save() {
            if (this.writable) {
                sessionStorage.setItem('contractForm', JSON.stringify(this.form))
                console.log(this.processId)
                this.axios.put('/api/workflow/processes/' + this.processId + '/forms/' + 'ContractForm', JSON.stringify(this.form), {
                    headers: {
                        'Content-Type': 'text/plain'
                    }
                }).then(this.handleSaveResult, this.handleError)
            }
        },
        pass() {
            if (this.check) {
                this.$bus.$emit('checkContract', true)
            }
        },
        refute() {
            if (this.check) {
                this.$bus.$emit('checkContract', false)
            }
        },
        handleResult(res) {
            console.log(res)
            if (res.status === 200) {
                this.$message.success('上传成功')
                this.$bus.$emit('submitContract')
            }
        },
        handleError(err) {
            if (err.response.status === 403) {
                this.$message.error('指定流程或表单对该用户不可见')
            } else if (err.response.status === 404) {
                this.$message.error('指定流程或表单不存在')
            }
        },
        handleSaveResult(res) {
            console.log(res)
            if (res.status === 200) {
                this.$message.success('保存成功')
            }
        },
        autoFill() {
            this.axios.get('/api/workflow/processes/' + this.processId + '/forms/' + 'ApplicationForm').then(
                (res) => {
                    if (res.status === 200) {
                        console.log(res.data)
                        this.form.software = res.data.softwareName
                        this.form.projectName = res.data.softwareName
                        this.form.trustee = "南京大学"
                        this.form.client = res.data.companyChineseName
                        this.form.clientInfo.address = res.data.companyInfo.address
                        this.form.clientInfo.fax = res.data.companyInfo.fax
                        this.form.clientInfo.postcode = res.data.companyInfo.postcode
                        this.form.clientInfo.contact = res.data.companyInfo.contractPerson
                        this.form.clientInfo.telephone = res.data.companyInfo.telephone
                    }
                },
                (err)=>{
                    if (err.response.status === 403) {
                        this.$message.error('指定流程或表单对该用户不可见')
                    } else if (err.response.status === 404) {
                        this.$message.error('指定流程或表单不存在')
                    }
                }
            )
        }
    },
    computed: {
        disable() {
            if (this.writable === 'false') {
                return true
            } else if (this.writable === 'true') {
                return false
            } else if (!this.writable) {
                return true
            }
            return false
        },
        check() {
            if (this.checking === 'true') {
                return true
            } else if (this.checking === 'false') {
                return false
            } else if (this.checking) {
                return true
            }
            return false
        }
    },
    created() {
        this.axios.get('/api/workflow/processes/' + this.processId + '/forms/' + 'ContractForm').then(
            (res) => {
                if (res.status === 200) {
                    if (res.data) {
                        this.form = res.data
                    }
                    else {
                        this.form = contractForm
                    }
                    if (this.writable) {
                        this.autoFill()
                    }
                }

            },
            (err) => {
                if (err.response.status === 403) {
                    this.$message.error('指定流程或表单对该用户不可见')
                } else if (err.response.status === 404) {
                    this.$message.error('指定流程或表单不存在')
                }
                this.form = contractForm
            }
        )
    }
}
</script>

<style scoped>
.contract {
    width: 94%;
    margin-top: 2%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    padding: 5%;
}

.basicInfo {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.pure-table {
    width: 100%;
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

.el-form-item {
    margin-bottom: 0;
}
</style>
<template>
    <div class="contract">
        <el-form :disabled = "disable">
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
                        <td style="width:40%"><el-input placeholder="项目名称" v-model="form.item"
                                style="width:100%"></el-input>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <h3>委托方（甲方）：</h3>
                        </th>
                        <td><el-input placeholder="委托方（甲方）" v-model="form.client" style="width:100%"></el-input></td>
                    </tr>
                    <tr>
                        <th>
                            <h3>受托方（乙方）：</h3>
                        </th>
                        <td><el-input placeholder="受托方（乙方）" v-model="form.trustee" style="width:100%"></el-input></td>
                    </tr>
                    <tr>
                        <th>
                            <h3>签订地点：</h3>
                        </th>
                        <td><el-input placeholder="签订地点" v-model="form.signPlace" style="width:100%"></el-input></td>
                    </tr>
                    <tr>
                        <th>
                            <h3>签订日期：</h3>
                        </th>
                        <td><el-date-picker placeholder="签订日期" v-model="form.signDate" style="width:100%"></el-date-picker>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <h3>有效期至：</h3>
                        </th>
                        <td><el-date-picker placeholder="有效期至" v-model="form.validDate" style="width:100%"></el-date-picker>
                        </td>
                    </tr>
                </table>
            </div>
            <br>
            <div>
                <p>
                    本合同由作为委托方的<el-input placeholder="委托方（甲方）" v-model="form.client"
                        style="width:20%"></el-input>（以下简称“甲方”）与作为受托方的 南京大学
                    （以下简称“乙方”）在平等自愿的基础上，依据《中华人民共和国合同法》有关规定就项目的执行，经友好协商后订立。
                </p>
                <h4>一、 任务表述</h4>
                <p>
                    乙方按照国家软件质量测试标准和测试规范，完成甲方委托的软件<el-input placeholder="受测软件" v-model="form.software"
                        style="width:20%"></el-input>(下称受测软件)的质量特性<el-input placeholder="质量特性"
                        v-model="form.qualityCharacteristic" style="width:20%"></el-input>，进行测试，并出具相应的测试报告。
                </p>
                <h4>二、双方的主要义务 </h4>
                <p>
                    1. 甲方的主要义务：
                <ol>
                    <li>按照合同约定支付所有费用。</li>
                    <li>按照乙方要求以书面形式出具测试需求，包括测试子特性、测试软硬件环境等。</li>
                    <li>提供符合交付要求的受测软件产品及相关文档，包括软件功能列表、需求分析、设计文档、用户文档至乙方。</li>
                    <li>指派专人配合乙方测试工作，并提供必要的技术培训和技术协助。</li>
                </ol>
                2. 乙方的主要义务
                <ol>
                    <li>设计测试用例，制定和实施产品测试方案。</li>
                    <li>在测试过程中，定期知会甲方受测软件在测试过程中出现的问题。</li>
                    <li>按期完成甲方委托的软件测试工作。</li>
                    <li>出具正式的测试报告。</li>
                </ol>
                </p>
                <h4>三、履约地点</h4>
                <p>
                    由甲方将受测软件产品送到乙方实施测试。如果由于被测软件本身特点或其它乙方认可的原因，需要在甲方所在地进行测试时，甲方应负担乙方现场测试人员的差旅和食宿费用。
                </p>
                <h4>四、合同价款</h4>
                <p>
                    本合同软件测试费用为人民币<el-input-number placeholder="测试费用" v-model="form.testFee"></el-input-number>（¥元）。
                </p>
                <h4>五、测试费用支付方式</h4>
                <p>
                    本合同签定后，十个工作日内甲方合同价款至乙方帐户。
                </p>
                <h4>六、履行的期限</h4>
                <p>
                <ol>
                    <li>本次测试的履行期限为合同生效之日起<el-input-number placeholder="自然日"
                            v-model="form.testTime"></el-input-number>个自然日内完成。
                    </li>
                    <li>经甲乙双方同意，可对测试进度作适当修改，并以修改后的测试进度作为本合同执行的期限。</li>
                    <li>如受测软件在测试过程中出现的问题，导致继续进行测试会影响整体测试进度，则乙方暂停测试并以书面形式通知甲方进行整改。在整个测试过程中，整改次数限于<el-input-number
                            placeholder="整改次数"
                            v-model="form.rectificationFrequency"></el-input-number>次，每次不超过<el-input-number
                            placeholder="整改天数" v-model="form.rectificationTime"></el-input-number>天。
                    </li>
                    <li>如因甲方原因，导致测试进度延迟、应由甲方负责,乙方不承担责任。</li>
                    <li>如因乙方原因，导致测试进度延迟，则甲方可酌情提出赔偿要求，赔偿金额不超过甲方已付金额的50%。双方经协商一致后另行签订书面协议，作为本合同的补充。</li>
                </ol>
                </p>
                <h4>七、资料的保密</h4>
                <p>对于一方向另一方提供使用的秘密信息，另一方负有保密的责任，不得向任何第三方透露。为明确双方的保密义务，双方应签署《软件项目委托测试保密协议》，并保证切实遵守其中条款。</p>
                <h4>八、 风险责任的承担</h4>
                <p>乙方人员在本协议有效期间（包括可能的到甲方出差）发生人身意外或罹患疾病时由乙方负责处理。甲方人员在本协议有效期间（包括可能的到乙方出差）发生人身意外或罹患疾病时由甲方负责处理。</p>
                <h4>九、验收方法</h4>
                <p>由乙方向甲方提交软件产品鉴定测试报告正本一份，甲方签收鉴定测试报告后，完成验收。</p>
                <h4>十、 争议解决</h4>
                <p>双方因履行本合同所发生的一切争议，应通过友好协商解决；如协商解决不成，就提交市级仲裁委员会进行仲裁。裁决对双方当事人具有同等约束力。</p>
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
                    <td colspan="3"><el-input placeholder="委托方（甲方）" v-model="form.client" style="width:100%"></el-input>
                    </td>
                </tr>
                <tr>
                    <th>授权代表</th>
                    <td><el-input placeholder="授权代表" v-model = "form.clientInfo.representive" style="width:100%"></el-input></td>
                    <th>签章日期</th>
                    <td><el-date-picker placeholder="签章日期" v-model = "form.clientInfo.signatureDate" style="width:100%"></el-date-picker></td>
                </tr>
                <tr>
                    <th>联系人</th>
                    <td colspan="3"><el-input placeholder="联系人" v-model = "form.clientInfo.contact" style="width:100%"></el-input></td>
                </tr>
                <tr>
                    <th>通讯地址</th>
                    <td colspan="3"><el-input placeholder="通讯地址" v-model = "form.clientInfo.address" style="width:100%"></el-input></td>
                </tr>
                <tr>
                    <th>电话</th>
                    <td><el-input placeholder="电话" v-model = "form.clientInfo.telephone" style="width:100%"></el-input></td>
                    <th>传真</th>
                    <td><el-input placeholder="传真" v-model = "form.clientInfo.fax" style="width:100%"></el-input></td>
                </tr>
                <tr>
                    <th>开户银行</th>
                    <td colspan="3"><el-input placeholder="开户银行" v-model = "form.clientInfo.bank" style="width:100%"></el-input></td>
                </tr>
                <tr>
                    <th>账号</th>
                    <td><el-input placeholder="账号" v-model = "form.clientInfo.account" style="width:100%"></el-input></td>
                    <th>邮编</th>
                    <td><el-input placeholder="邮编" v-model = "form.clientInfo.postcode" style="width:100%"></el-input></td>
                </tr>
                <tr>
                    <th rowspan="8" style="text-align:center; font-size: 24px;">受<br>托<br>方</th>
                    <th>单位全称</th>
                    <td colspan="3">南京大学
                    </td>
                </tr>
                <tr>
                    <th>授权代表</th>
                    <td><el-input placeholder="授权代表" v-model = "form.trusteeInfo.representive" style="width:100%"></el-input></td>
                    <th>签章日期</th>
                    <td><el-date-picker placeholder="签章日期" v-model = "form.trusteeInfo.signatureDate" style="width:100%"></el-date-picker></td>
                </tr>
                <tr>
                    <th>联系人</th>
                    <td colspan="3"><el-input placeholder="联系人" v-model = "form.trusteeInfo.contact" style="width:100%"></el-input></td>
                </tr>
                <tr>
                    <th>通讯地址</th>
                    <td><el-input placeholder="通讯地址" v-model = "form.trusteeInfo.address" style="width:100%"></el-input></td>
                    <th>邮编</th>
                    <td><el-input placeholder="邮编" v-model = "form.trusteeInfo.postcode" style="width:100%"></el-input></td>
                </tr>
                <tr>
                    <th>电话</th>
                    <td><el-input placeholder="电话" v-model = "form.trusteeInfo.telephone" style="width:100%"></el-input></td>
                    <th>传真</th>
                    <td><el-input placeholder="传真" v-model = "form.trusteeInfo.fax" style="width:100%"></el-input></td>
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
                <el-button type="primary" @click="submit" :disabled="disable">提交</el-button>
                <el-button type="primary" @click="save" :disabled="disable">保存</el-button>
            </el-row>
            <el-row v-show="check">
                <el-button type="primary" @click="pass" :disabled="!disable">通过</el-button>
                <el-button type="primary" @click="refute" :disabled="!disable">驳回</el-button>
            </el-row>
        </el-form>

    </div>
</template>

<script>
import contractForm from '../../assets/jsons/contractForm.json'
export default {
    name: 'ContractForm',
    props: ['writable', 'formId', 'checking'],
    data() {
        return {
            form: {
                item: '',
                client: '',
                trustee: '',
                signPlace: '',
                signDate: '',
                validDate: '',
                software: '',
                qualityCharacteristic: '',
                testFee: '',
                testTime: '',
                rectificationFrequency: '',
                rectificationTime: '',
                clientInfo: {
                    representive: '',
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
                    representive: '',
                    signatureDate: '',
                    contact: '',
                    address: '',
                    telephone: '',
                    fax: '',
                    postcode: '',
                }
            }
        }
    },
    methods: {
        submit() {
            this.doSubmit();
        },
        doSubmit() {
            if (this.writable) {
                //console.log(JSON.stringify(this.form))
                //this.$bus.$emit('submitApplication')
            }
        },
        save() {
            if (this.writable) {
                //sessionStorage.setItem('applicationForm', JSON.stringify(this.form))
            }
        },
        pass() {

        },
        refute() {

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
        this.form = contractForm
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
</style>
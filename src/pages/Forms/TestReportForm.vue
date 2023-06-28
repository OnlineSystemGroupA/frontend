<template>
    <div class="report">
        <h1>测 试 报 告</h1>
        <el-form label-width="100px" label-position="left" :disabled="disable">
            <el-form-item label="软件名称">
                <el-input v-model="form.softwareName" placeholder="软件名称"></el-input>
            </el-form-item>
            <el-form-item label="版本号">
                <el-input v-model="form.version" placeholder="版本号"></el-input>
            </el-form-item>
            <el-form-item label="委托单位">
                <el-input v-model="form.clientCompany" placeholder="委托单位"></el-input>
            </el-form-item>
            <el-form-item label="测试类型">
                <el-input v-model="form.testType" placeholder="测试类型"></el-input>
            </el-form-item>
            <el-form-item label="报告日期">
                <el-date-picker type="date" placeholder="报告日期" style="width: 100%;" v-model="form.reportDate">
                </el-date-picker>
            </el-form-item>
            <h3>南京大学</h3>
            <h3>软件测试中心</h3>
            <ol>
                <li>本测试报告仅适用于本报告明确指出的委托单位的被测样品及版本。</li>
                <li>
                    本测试报告是本中心对所测样品进行科学、客观测试的结果，为被测样品提供第三方独立、客观、公正的重要判定依据，也为最终用户选择产品提供参考和帮助
                </li>
                <li>
                    未经本中心书面批准，不得复制本报告中的内容（全文复制除外），以免误导他人（尤其是用户）对被测样品做出不准确的评价。
                </li>
                <li>
                    在任何情况下，若需引用本测试报告中的结果或数据都应保持其本来的意义，在使用时务必要保持其完整，不得擅自进行增加、修改、伪造，并应征得本中心同意。
                </li>
                <li>本测试报告不得拷贝或复制作为广告材料使用。</li>
                <li>
                    当被测样品出现版本更新或其它任何改变时，本测试结果不再适用，涉及到的任何技术、模块（或子系统）甚至整个软件都必须按要求进行必要的备案或重新测试，更不能出现将本测试结果应用于低于被测样品版本的情况。
                </li>
                <li>本报告无编制人员、审核人员、批准人员（授权签字人）签字无效。</li>
                <li>本报告无本中心章、涂改均无效。</li>
            </ol>
            <h3>测试报告</h3>
            <el-row>
                <el-col class="col">
                    <el-form-item label="委托单位">
                        <el-input placeholder="委托单位" v-model="form.clientCompany"></el-input>
                    </el-form-item>
                </el-col>
                <el-col class="col">
                    <el-form-item label="项目编号">
                        <el-input placeholder="项目编号" v-model="form.itemNum"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col class="col">
                    <el-form-item label="样品名称">
                        <el-input placeholder="样品名称" v-model="form.softwareName"></el-input>
                    </el-form-item>
                </el-col>
                <el-col class="col">
                    <el-form-item label="版本/型号">
                        <el-input placeholder="版本/型号" v-model="form.version"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col class="col">
                    <el-form-item label="采样日期">
                        <el-date-picker type="date" placeholder="采样日期" style="width: 100%;"
                                        v-model="form.sampleTime"></el-date-picker>
                    </el-form-item>
                </el-col>
                <el-col class="col">
                    <el-form-item label="测试类型">
                        <el-input placeholder="测试类型" v-model="form.testType"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-form-item label="测试时间">
                    <el-date-picker type="date" placeholder="开始日期" style="width: 45%;"
                                    v-model="form.startTime"></el-date-picker>
                    ——
                    <el-date-picker type="date" placeholder="结束日期" style="width: 45%;"
                                    v-model="form.endTime"></el-date-picker>
                </el-form-item>
            </el-row>
            <el-row>
                <el-form-item label="样品状态">
                    <el-input placeholder="样品状态" v-model="form.sampleCondition"></el-input>
                </el-form-item>
            </el-row>
            <el-row>
                <el-form-item label="测试依据">
                    <el-input type="textarea" placeholder="测试依据" v-model="form.testStandard"></el-input>
                </el-form-item>
            </el-row>
            <el-row>
                <el-form-item label="样品清单">
                    <el-input type="textarea" placeholder="样品清单" v-model="form.sampleList"></el-input>
                </el-form-item>
            </el-row>
            <el-row>
                <el-form-item label="测试结论">
                    <el-input type="textarea" placeholder="测试结论" v-model="form.testConclusion"></el-input>
                </el-form-item>
            </el-row>
            <el-row>
                <el-col class="col">
                    <el-form-item label="编制人">
                        <el-input placeholder="编制人" v-model="form.compiler"></el-input>
                    </el-form-item>
                </el-col>
                <el-col class="col">
                    <el-form-item label="日期">
                        <el-date-picker type="date" placeholder="日期" style="width: 100%;"
                                        v-model="form.complierTime"></el-date-picker>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col class="col">
                    <el-form-item label="审核人">
                        <el-input placeholder="审核人" v-model="form.reviewer"></el-input>
                    </el-form-item>
                </el-col>
                <el-col class="col">
                    <el-form-item label="日期">
                        <el-date-picker type="date" placeholder="日期" style="width: 100%;"
                                        v-model="form.reviewerTime"></el-date-picker>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col class="col">
                    <el-form-item label="批准人">
                        <el-input placeholder="批准人" v-model="form.approver"></el-input>
                    </el-form-item>
                </el-col>
                <el-col class="col">
                    <el-form-item label="日期">
                        <el-date-picker type="date" placeholder="日期" style="width: 100%;"
                                        v-model="form.approverTime"></el-date-picker>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col class="col">
                    <h3>委托单位联系方式</h3>
                    <el-form-item label="电话">
                        <el-input placeholder="电话" v-model="form.telephone"></el-input>
                    </el-form-item>
                    <el-form-item label="传真">
                        <el-input placeholder="传真" v-model="form.fax"></el-input>
                    </el-form-item>
                    <el-form-item label="地址">
                        <el-input placeholder="地址" v-model="form.address"></el-input>
                    </el-form-item>
                    <el-form-item label="网址">
                        <el-input placeholder="网址" v-model="form.website"></el-input>
                    </el-form-item>
                    <el-form-item label="联系人">
                        <el-input placeholder="联系人" v-model="form.contract"></el-input>
                    </el-form-item>
                    <el-form-item label="E-mail">
                        <el-input placeholder="E-mail" v-model="form.email"></el-input>
                    </el-form-item>
                </el-col>
                <el-col class="col">
                    <h3>测试单位联系方式</h3>
                    <h4>单位地址：南京市栖霞区仙林大道163号</h4>
                    <h4>邮政编码：210046</h4>
                    <h4>电话： 86-25-89683467, 86-25-89683670</h4>
                    <h4>传真： 86-25-89686596</h4>
                    <h4>网址： http://keysoftlab.nju.edu.cn</h4>
                    <h4>E_mail: keysoftlab@nju.edu.cn</h4>
                </el-col>
            </el-row>
            <h2>一、测试环境（硬件和软件）</h2>
            <div>
                <h3>硬件环境</h3>
                <el-form-item label="硬件类型">
                    <el-input placeholder="硬件类型" v-model="form.hardwareType"></el-input>
                </el-form-item>
                <el-form-item label="硬件名称">
                    <el-input placeholder="硬件名称" v-model="form.hardwareName"></el-input>
                </el-form-item>
                <el-form-item label="配置">
                    <el-input placeholder="配置" v-model="form.hardwareConfiguration"></el-input>
                </el-form-item>
                <el-form-item label="数量">
                    <el-input placeholder="数量" v-model="form.hardwareNum"></el-input>
                </el-form-item>
            </div>
            <div>
                <h3>软件环境</h3>
                <el-form-item label="操作系统">
                    <br>
                    <el-form-item label="软件名称">
                        <el-input placeholder="软件名称"
                                  v-model="form.softwareEnvironment.operatingSystem.name"></el-input>
                    </el-form-item>
                    <el-form-item label="版本">
                        <el-input placeholder="版本"
                                  v-model="form.softwareEnvironment.operatingSystem.version"></el-input>
                    </el-form-item>
                </el-form-item>
                <el-form-item label="软件1">
                    <br>
                    <el-form-item label="软件名称">
                        <el-input placeholder="软件名称" v-model="form.softwareEnvironment.softwareOne.name"></el-input>
                    </el-form-item>
                    <el-form-item label="版本">
                        <el-input placeholder="版本" v-model="form.softwareEnvironment.softwareOne.version"></el-input>
                    </el-form-item>
                </el-form-item>
                <el-form-item label="软件2">
                    <br>
                    <el-form-item label="软件名称">
                        <el-input placeholder="软件名称" v-model="form.softwareEnvironment.softwareTwo.name"></el-input>
                    </el-form-item>
                    <el-form-item label="版本">
                        <el-input placeholder="版本" v-model="form.softwareEnvironment.softwareTwo.version"></el-input>
                    </el-form-item>
                </el-form-item>
                <el-form-item label="软件3">
                    <br>
                    <el-form-item label="软件名称">
                        <el-input placeholder="软件名称"
                                  v-model="form.softwareEnvironment.softwareThree.name"></el-input>
                    </el-form-item>
                    <el-form-item label="版本">
                        <el-input placeholder="版本"
                                  v-model="form.softwareEnvironment.softwareThree.version"></el-input>
                    </el-form-item>
                </el-form-item>
                <el-form-item label="辅助工具">
                    <br>
                    <el-form-item label="软件名称">
                        <el-input placeholder="软件名称"
                                  v-model="form.softwareEnvironment.ancillaryTool.name"></el-input>
                    </el-form-item>
                    <el-form-item label="版本">
                        <el-input placeholder="版本"
                                  v-model="form.softwareEnvironment.ancillaryTool.version"></el-input>
                    </el-form-item>
                </el-form-item>
                <el-form-item label="开发工具">
                    <br>
                    <el-form-item label="软件名称">
                        <el-input placeholder="软件名称"
                                  v-model="form.softwareEnvironment.developmentTool.name"></el-input>
                    </el-form-item>
                    <el-form-item label="版本">
                        <el-input placeholder="版本"
                                  v-model="form.softwareEnvironment.developmentTool.version"></el-input>
                    </el-form-item>
                </el-form-item>
                <el-form-item label="被测试样品">
                    <br>
                    <el-form-item label="软件名称">
                        <el-input placeholder="软件名称" v-model="form.softwareEnvironment.testSample.name"></el-input>
                    </el-form-item>
                    <el-form-item label="版本">
                        <el-input placeholder="版本" v-model="form.softwareEnvironment.testSample.version"></el-input>
                    </el-form-item>
                </el-form-item>
            </div>
            <div>
                <h3>网络环境</h3>
                <el-input type="textarea" placeholder="网络环境" v-model="form.networkEnvironment"></el-input>
            </div>
            <h2>二、测试依据和参考资料</h2>
            <div>
                <h3>测试依据</h3>
                <el-form-item v-for="(item, index) in form.testStandardList" :key="index" :label="'依据' + (index + 1)">
                    <el-input v-model="item.standard"></el-input>
                    <el-button @click="deleteStandard(index)">删除</el-button>
                </el-form-item>
                <el-button @click="addStandard">
                    添加表项
                </el-button>
            </div>
            <div>
                <h3>参考资料</h3>
                <el-form-item v-for="(item, index) in form.referenceList" :key="index" :label="'参考' + (index + 1)">
                    <el-input v-model="item.reference"></el-input>
                    <el-button @click="deleteReference(index)">删除</el-button>
                </el-form-item>
                <el-button @click="addReference">
                    添加表项
                </el-button>
            </div>
            <h2>三、测试内容</h2>
            <div>
                <h3>功能性测试</h3>
                <el-form-item v-for="(item, index) in form.functionTest" :key="index" :label="'功能' + (index + 1)">
                    <br>
                    <el-form-item label="功能模块">
                        <el-input placeholder="功能模块" v-model="item.functionModule"></el-input>
                    </el-form-item>
                    <el-form-item label="功能要求">
                        <el-input placeholder="功能要求" v-model="item.functionRequirement"></el-input>
                    </el-form-item>
                    <el-form-item label="测试结果">
                        <el-input placeholder="测试结果" v-model="item.testResult"></el-input>
                    </el-form-item>
                    <el-button @click="deleteFunction(index)">删除</el-button>
                </el-form-item>
                <el-button @click="addFunction">添加表项</el-button>
            </div>
            <div>
                <h3>效率测试</h3>
                <el-form-item v-for="(item, index) in form.efficiencyTest" :key="index" :label="'效率' + (index + 1)">
                    <br>
                    <el-form-item label="测试特性">
                        <el-input placeholder="特性测试" v-model="item.property"></el-input>
                    </el-form-item>
                    <el-form-item label="测试说明">
                        <el-input placeholder="测试说明" v-model="item.testExplanation"></el-input>
                    </el-form-item>
                    <el-form-item label="测试结果">
                        <el-input placeholder="测试结果" v-model="item.testResult"></el-input>
                    </el-form-item>
                    <el-button @click="deleteEfficiency(index)">删除</el-button>
                </el-form-item>
                <el-button @click="addEfficiency">添加表项</el-button>
            </div>
            <div>
                <h3>可移植性测试</h3>
                <el-form-item v-for="(item, index) in form.portabilityTest" :key="index"
                              :label="'可移植性' + (index + 1)">
                    <br>
                    <el-form-item label="测试特性">
                        <el-input placeholder="特性测试" v-model="item.property"></el-input>
                    </el-form-item>
                    <el-form-item label="测试说明">
                        <el-input placeholder="测试说明" v-model="item.testExplanation"></el-input>
                    </el-form-item>
                    <el-form-item label="测试结果">
                        <el-input placeholder="测试结果" v-model="item.testResult"></el-input>
                    </el-form-item>
                    <el-button @click="deletePortability(index)">删除</el-button>
                </el-form-item>
                <el-button @click="addPortability">添加表项</el-button>
            </div>
            <div>
                <h3>易用性测试</h3>
                <el-form-item v-for="(item, index) in form.usabilityTest" :key="index" :label="'易用性' + (index + 1)">
                    <br>
                    <el-form-item label="测试特性">
                        <el-input placeholder="特性测试" v-model="item.property"></el-input>
                    </el-form-item>
                    <el-form-item label="测试说明">
                        <el-input placeholder="测试说明" v-model="item.testExplanation"></el-input>
                    </el-form-item>
                    <el-form-item label="测试结果">
                        <el-input placeholder="测试结果" v-model="item.testResult"></el-input>
                    </el-form-item>
                    <el-button @click="deleteUsability(index)">删除</el-button>
                </el-form-item>
                <el-button @click="addUsability">添加表项</el-button>
            </div>
            <div>
                <h3>可靠性测试</h3>
                <el-form-item v-for="(item, index) in form.reliabilityTest" :key="index"
                              :label="'可靠性' + (index + 1)">
                    <br>
                    <el-form-item label="测试特性">
                        <el-input placeholder="特性测试" v-model="item.property"></el-input>
                    </el-form-item>
                    <el-form-item label="测试说明">
                        <el-input placeholder="测试说明" v-model="item.testExplanation"></el-input>
                    </el-form-item>
                    <el-form-item label="测试结果">
                        <el-input placeholder="测试结果" v-model="item.testResult"></el-input>
                    </el-form-item>
                    <el-button @click="deleteReliability(index)">删除</el-button>
                </el-form-item>
                <el-button @click="addReliability">添加表项</el-button>
            </div>
            <div>
                <h3>可维护性测试</h3>
                <el-form-item v-for="(item, index) in form.maintainabilityTest" :key="index"
                              :label="'可维护性' + (index + 1)">
                    <br>
                    <el-form-item label="测试特性">
                        <el-input placeholder="特性测试" v-model="item.property"></el-input>
                    </el-form-item>
                    <el-form-item label="测试说明">
                        <el-input placeholder="测试说明" v-model="item.testExplanation"></el-input>
                    </el-form-item>
                    <el-form-item label="测试结果">
                        <el-input placeholder="测试结果" v-model="item.testResult"></el-input>
                    </el-form-item>
                    <el-button @click="deleteMaintainability(index)">删除</el-button>
                </el-form-item>
                <el-button @click="addMaintainability">添加表项</el-button>
            </div>
        </el-form>
        <br>
        <el-row v-show="!disable">
            <el-button type="primary" @click="submit" :disabled="disable">提交</el-button>
            <el-button type="primary" @click="save" :disabled="disable">保存</el-button>
        </el-row>
        <el-row v-show="check">
            <el-button type="primary" @click="pass" :disabled="!disable">通过</el-button>
            <el-button type="primary" @click="refute" :disabled="!disable">驳回</el-button>
        </el-row>
    </div>
</template>

<script>
import testReportForm from '../../assets/jsons/testReportForm.json'

export default {
    name: 'TestReportForm',
    props: ['writable', 'processId', 'checking'],
    data() {
        return {
            form: {
                softwareName: '',
                version: '',
                clientCompany: '',
                testType: '',
                reportDate: '',
                itemNum: '',
                sampleTime: '',
                startTime: '',
                endTime: '',
                sampleCondition: '',
                testStandard: '',
                sampleList: '',
                testConclusion: '',
                telephone: '',
                fax: '',
                address: '',
                website: '',
                contract: '',
                email: '',
                compiler: '',
                compilerTime: '',
                reviewer: '',
                reviewerTime: '',
                approver: '',
                approverTime: '',
                hardwareType: '',
                hardwareName: '',
                hardwareConfiguration: '',
                hardwareNum: '',
                softwareEnvironment: {
                    operatingSystem: {
                        name: '',
                        version: '',
                    },
                    softwareOne: {
                        name: '',
                        version: '',
                    },
                    softwareTwo: {
                        name: '',
                        version: '',
                    },
                    softwareThree: {
                        name: '',
                        version: '',
                    },
                    ancillaryTool: {
                        name: '',
                        version: ''
                    },
                    developmentTool: {
                        name: '',
                        version: ''
                    },
                    testSample: {
                        name: '',
                        version: ''
                    }
                },
                networkEnvironment: '',
                testStandardList: [{ standard: '' },],
                referenceList: [{ reference: '' },],
                functionTest: [{ functionModule: '', functionRequirement: '', testResult: '' }],
                efficiencyTest: [{ property: '', testExplanation: '', testResult: '' }],
                portabilityTest: [{ property: '', testExplanation: '', testResult: '' }],
                usabilityTest: [{ property: '', testExplanation: '', testResult: '' }],
                reliabilityTest: [{ property: '', testExplanation: '', testResult: '' }],
                maintainabilityTest: [{ property: '', testExplanation: '', testResult: '' }]
            }
        }
    },
    methods: {
        addStandard() {
            const item = {
                standard: ''
            }
            this.form.testStandardList.push(item)
        },
        deleteStandard(index) {
            this.form.testStandardList.splice(index, 1)
        },
        addReference() {
            const item = {
                reference: ''
            }
            this.form.referenceList.push(item)
        },
        deleteReference(index) {
            this.form.referenceList.splice(index, 1)
        },
        addFunction() {
            const item = {
                functionModule: '',
                functionRequirement: '',
                testResult: ''
            }
            this.form.functionTest.push(item)
        },
        deleteFunction(index) {
            this.form.functionTest.splice(index, 1)
        },
        addEfficiency() {
            const item = {
                property: '',
                testExplanation: '',
                testResult: ''
            }
            this.form.efficiencyTest.push(item)
        },
        deleteEfficiency(index) {
            this.form.efficiencyTest.splice(index, 1)
        },
        addReliability() {
            const item = {
                property: '',
                testExplanation: '',
                testResult: ''
            }
            this.form.reliabilityTest.push(item)
        },
        deleteReliability(index) {
            this.form.reliabilityTest.splice(index, 1)
        },
        addPortability() {
            const item = {
                property: '',
                testExplanation: '',
                testResult: ''
            }
            this.form.portabilityTest.push(item)
        },
        deletePortability(index) {
            this.form.portabilityTest.splice(index, 1)
        },
        addUsability() {
            const item = {
                property: '',
                testExplanation: '',
                testResult: ''
            }
            this.form.usabilityTest.push(item)
        },
        deleteUsability(index) {
            this.form.usabilityTest.splice(index, 1)
        },
        addMaintainability() {
            const item = {
                property: '',
                testExplanation: '',
                testResult: ''
            }
            this.form.maintainabilityTest.push(item)
        },
        deleteMaintainability(index) {
            this.form.maintainabilityTest.splice(index, 1)
        },
        submit() {
            if (this.writable) {
                console.log(JSON.stringify(this.form))
                this.$bus.$emit('submitApplication')
            }
        },
        save() {
            if (this.writable) {
                sessionStorage.setItem('applicationForm', JSON.stringify(this.form))
            }
        },
        pass() {
            this.$bus.$emit('passApplication')
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
    mounted() {
        console.log(testReportForm)
    },
    created() {
        this.form = testReportForm
    }
}
</script>

<style scoped>
.col {
    width: 50%;
    padding: 10px;
}

.report {
    width: 94%;
    margin-top: 2%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    padding: 5%;
}
</style>
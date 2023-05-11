<template>
    <div class="application">
        <el-form :disabled="disable">
            <h1>软件项目委托测试申请书</h1>
            <el-form-item label="测试类型">
                <el-checkbox-group v-model="form.testType">
                    <el-checkbox label="软件确认测试" name="testType"></el-checkbox>
                    <el-checkbox label="成果/技术鉴定测试" name="testType"></el-checkbox>
                    <el-checkbox label="专项资金验收测试" name="testType"></el-checkbox>
                </el-checkbox-group>
                <el-checkbox v-model="form.chooseOtherTestType">
                    <el-input placeholder="其他"
                              v-model="form.otherTestType"></el-input>
                </el-checkbox>
            </el-form-item>
            <hr/>
            <el-form-item label="软件名称">
                <el-input v-model="form.softwareName" placeholder="软件名称"></el-input>
            </el-form-item>
            <el-form-item label="版本号">
                <el-input v-model="form.softwareVersion" placeholder="版本号"></el-input>
            </el-form-item>
            <el-form-item label="委托单位（中文）">
                <el-input v-model="form.companyChineseName" placeholder="委托单位（中文）"></el-input>
            </el-form-item>
            <el-form-item label="委托单位（英文）">
                <el-input v-model="form.companyEnglishName" placeholder="委托单位（英文）"></el-input>
            </el-form-item>
            <el-form-item label="开发单位">
                <el-input v-model="form.developmentDepartment" placeholder="开发单位"></el-input>
            </el-form-item>
            <el-form-item label="单位性质">
                <el-radio-group v-model="form.companyType">
                    <el-radio label="内资企业"></el-radio>
                    <el-radio label="外（合）资企业"></el-radio>
                    <el-radio label="港澳台（合）资本企业"></el-radio>
                    <el-radio label="科研院校"></el-radio>
                    <el-radio label="政府事业团体"></el-radio>
                    <el-radio label="其他"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="主要功能及用途简介（限200字）">
                <el-input type="textarea" v-model="form.description" maxlength="200"
                          placeholder="主要功能及用途"></el-input>
            </el-form-item>
            <hr/>
            <el-form-item label="测试依据">
                <el-checkbox-group v-model="form.testStandard">
                    <el-checkbox label="GB/T 25000.51-2016" name="testStandard"></el-checkbox>
                    <el-checkbox label="GB/T 25000.10-2016" name="testStandard"></el-checkbox>
                    <el-checkbox label="GB/T 28452-2012" name="testStandard"></el-checkbox>
                    <el-checkbox label="GB/T 30961-2014" name="testStandard"></el-checkbox>
                    <el-checkbox label="NST-03-WI12-2011" name="testStandard"></el-checkbox>
                    <el-checkbox label="NST-03-WI13-2011" name="testStandard"></el-checkbox>
                    <el-checkbox label="NST-03-WI22-2014" name="testStandard"></el-checkbox>
                </el-checkbox-group>
                <el-checkbox v-model="form.chooseOtherStandard">
                    <el-input placeholder="其他"
                              v-model="form.otherStandard"></el-input>
                </el-checkbox>
            </el-form-item>
            <hr/>
            <el-form-item label="需要测试的指标">
                <el-checkbox-group v-model="form.testAspects">
                    <el-checkbox label="功能性" name="testAspects"></el-checkbox>
                    <el-checkbox label="可靠性" name="testAspects"></el-checkbox>
                    <el-checkbox label="易用性" name="testAspects"></el-checkbox>
                    <el-checkbox label="效率" name="testAspects"></el-checkbox>
                    <el-checkbox label="可维护性" name="testAspects"></el-checkbox>
                    <el-checkbox label="可移植性" name="testAspects"></el-checkbox>
                    <el-checkbox label="代码覆盖度" name="testAspects"></el-checkbox>
                    <el-checkbox label="缺陷检测率" name="testAspects"></el-checkbox>
                    <el-checkbox label="代码风格符合度" name="testAspects"></el-checkbox>
                    <el-checkbox label="代码不符合项检测率" name="testAspects"></el-checkbox>
                    <el-checkbox label="产品说明要求" name="testAspects"></el-checkbox>
                    <el-checkbox label="用户文档集要求" name="testAspects"></el-checkbox>
                </el-checkbox-group>
                <el-checkbox v-model="form.chooseOtherAspect">
                    <el-input placeholder="其他"
                              v-model="form.otherAspect"></el-input>
                </el-checkbox>
            </el-form-item>
            <hr/>
            <div>
                <h2>软件规模</h2>
                <h3>（至少一种）</h3>
                <el-form-item label="功能数（到最后一级菜单）">
                    <el-input v-model="form.softwareScale.functionNum" placeholder="功能数"></el-input>
                </el-form-item>
                <el-form-item label="功能点数">
                    <el-input v-model="form.softwareScale.functionPoint" placeholder="功能点数"></el-input>
                </el-form-item>
                <el-form-item label="代码行数(不包括注释行、空行)">
                    <el-input v-model="form.softwareScale.codeLines" placeholder="代码行数"></el-input>
                </el-form-item>
            </div>
            <div>
                <div class="block">
                    <span class="demonstration">软件类型:</span>
                    <el-cascader v-model="form.softwareType" :options="typeList"
                                 :props="{ expandTrigger: 'hover' }"></el-cascader>
                </div>
            </div>
            <hr/>
            <el-form-item>
                <h2>运行环境</h2>
                <h3>客户端</h3>
                <el-form-item label="操作系统:">
                    <br>
                    <el-row>
                        <el-checkbox v-model="form.clientSystemWindows">Windows
                            <el-input placeholder="版本" size="small"
                                      v-model="form.clientWindowsVersion"></el-input>
                        </el-checkbox>
                        <br>
                        <el-checkbox v-model="form.clientSystemLinux">Linux
                            <el-input placeholder="版本" size="small"
                                      v-model="form.clientLinuxVersion"></el-input>
                        </el-checkbox>
                        <br>
                        <el-checkbox v-model="form.clientSystemOther">其他
                            <el-input placeholder="其他" size="small"
                                      v-model="form.otherSystem"></el-input>
                        </el-checkbox>
                    </el-row>
                </el-form-item>
                <el-form label-position="left" label-width="180px" :disabled="disable">
                    <el-form-item label="内存要求（单位MB）:">
                        <el-input placeholder="内存要求" v-model.number="form.clientMemory"></el-input>
                    </el-form-item>
                    <el-form-item label="其他要求:">
                        <el-input placeholder="其他要求" v-model="form.clientOtherRequirement"></el-input>
                    </el-form-item>
                </el-form>
                <h3>服务器端</h3>
                <h4>硬件</h4>
                <el-form-item label="架构:">
                    <br>
                    <el-checkbox v-model="form.PCServer">PC服务器</el-checkbox>
                    <br>
                    <el-checkbox v-model="form.UnixServer">Unix/Linux服务器</el-checkbox>
                    <br>
                    <el-checkbox v-model="form.OtherSever">其他
                        <el-input placeholder="其他"
                                  v-model="form.OtherServerName"></el-input>
                    </el-checkbox>
                </el-form-item>
                <el-form label-position="left" label-width="180px" :disabled="disable">
                    <el-form-item label="内存要求（单位MB）:">
                        <el-input placeholder="内存要求" v-model="form.serverMemory"></el-input>
                    </el-form-item>
                    <el-form-item label="硬盘要求（单位MB）:">
                        <el-input placeholder="硬盘要求" v-model="form.serverDisk"></el-input>
                    </el-form-item>
                    <el-form-item label="其他要求:">
                        <el-input placeholder="其他要求" v-model="form.serverOtherRequirement"></el-input>
                    </el-form-item>
                </el-form>
                <h4>软件</h4>
                <el-form-item label="操作系统:">
                    <el-input placeholder="操作系统" v-model="form.serverSystem"></el-input>
                </el-form-item>
                <el-form-item label="版本:">
                    <el-input placeholder="版本" v-model="form.serverSystemVersion"></el-input>
                </el-form-item>
                <el-form-item label="编程语言:">
                    <el-input placeholder="编程语言" v-model="form.serverLanguage"></el-input>
                </el-form-item>
                <el-form-item label="构架:" v-model="form.serverFrame">
                    <br>
                    <el-select v-model="form.serverFrame" placeholder="请选择">
                        <el-option v-for="item in frameOptions" :key="item.value" :label="item.label"
                                   :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="数据库:">
                    <el-input placeholder="数据库" v-model="form.serverDatabase"></el-input>
                </el-form-item>
                <el-form-item label="中间件:">
                    <el-input placeholder="中间件" v-model="form.serverMiddleware"></el-input>
                </el-form-item>
                <el-form-item label="其他支撑软件:">
                    <el-input placeholder="其他支撑软件" v-model="form.serverOtherSoftware"></el-input>
                </el-form-item>
                <h3>网络环境</h3>
                <el-input placeholder="网络环境" v-model="form.networkEnvironment"></el-input>
            </el-form-item>
            <hr>
            <el-form-item>
                <h2>样品和数量</h2>
                <h3>软件介质</h3>
                <el-col :span="8">
                    <el-form-item label="光盘">
                        <el-input-number controls-position="right" :min="0"
                                         :max="100000" v-model="form.cdNum"></el-input-number>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="U盘">
                        <el-input-number controls-position="right" :min="0"
                                         :max="100000" v-model="form.usbNum"></el-input-number>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="其他">
                        <el-input-number controls-position="right" :min="0"
                                         :max="100000" v-model="form.otherMediumNum"></el-input-number>
                        <el-input placeholder="其他" v-model="form.otherMedium"></el-input>
                    </el-form-item>
                </el-col>
                <h3>文档资料</h3>
                <el-input type="textarea" placeholder="文档资料" v-model="form.documents"></el-input>
                <h6>
                    注：1、需求文档（例如：项目计划任务书、需求分析报告、合同等）（验收、鉴定测试必须）
                    <br>
                    2、用户文档（例如：用户手册、用户指南等）（必须）
                    <br>
                    3、操作文档（例如：操作员手册、安装手册、诊断手册、支持手册等）（验收项目必须）
                </h6>
                <h3>提交的样品（硬拷贝资料、硬件）五年保存期满</h3>
                <el-form-item>
                    <el-radio-group v-model="form.expireHandle">
                        <el-radio label="由本中心销毁"></el-radio>
                        <el-radio label="退还给我们"></el-radio>
                    </el-radio-group>
                </el-form-item>
            </el-form-item>
            <br>
            <el-form-item label="希望完成测试时间：">
                <el-date-picker type="date" placeholder="选择日期" style="width: 100%;"
                                v-model="form.expectedDate"></el-date-picker>
            </el-form-item>
            <hr>
            <div class="InfoCom">
                <div class="CompanyInfo">
                    <el-form label-position="left" label-width="80px" :disabled="disable">
                        <h2>委托单位信息</h2>
                        <el-form-item label="电话">
                            <el-input placeholder="电话" v-model="form.companyInfo.telephone"></el-input>
                        </el-form-item>
                        <el-form-item label="传真">
                            <el-input placeholder="传真" v-model="form.companyInfo.fax"></el-input>
                        </el-form-item>
                        <el-form-item label="地址">
                            <el-input placeholder="地址" v-model="form.companyInfo.address"></el-input>
                        </el-form-item>
                        <el-form-item label="邮编">
                            <el-input placeholder="邮编" v-model="form.companyInfo.postcode"></el-input>
                        </el-form-item>
                        <el-form-item label="联系人">
                            <el-input placeholder="联系人" v-model="form.companyInfo.contractPerson"></el-input>
                        </el-form-item>
                        <el-form-item label="手机">
                            <el-input placeholder="手机" v-model="form.companyInfo.mobile"></el-input>
                        </el-form-item>
                        <el-form-item label="E-mail">
                            <el-input placeholder="E-mail" v-model="form.companyInfo.email"></el-input>
                        </el-form-item>
                        <el-form-item label="网址">
                            <el-input placeholder="网址" v-model="form.companyInfo.website"></el-input>
                        </el-form-item>
                    </el-form>
                </div>
                <div class="CompanyInfo">
                    <h2>软件测试中心联系方式</h2>
                    <h4>单位地址：南京市栖霞区仙林大道163号</h4>
                    <h4>邮政编码：210046</h4>
                    <h4>电话： 86-25-89683467, 86-25-89683670</h4>
                    <h4>传真： 86-25-89686596</h4>
                    <h4>网址： http://keysoftlab.nju.edu.cn</h4>
                    <h4>E_mail: keysoftlab@nju.edu.cn</h4>
                </div>
            </div>
        </el-form>
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
export default {
    name: "ApplicationForm",
    props: ['writable', 'formId', 'checking'],
    data() {
        return {
            form: {
                testType: [],
                otherTestType: '',
                chooseOtherTestType: false,
                softwareName: "",
                softwareVersion: "",
                companyChineseName: "",
                companyEnglishName: "",
                developmentDepartment: "",
                companyType: "",
                description: "",
                testStandard: [],
                otherStandard: '',
                chooseOtherStandard: false,
                testAspects: [],
                otherAspect: '',
                chooseOtherAspect: false,
                softwareScale: {
                    functionNum: "",
                    functionPoint: "",
                    codeLines: "",
                },
                softwareType: "",
                clientSystemWindows: false,
                clientSystemLinux: false,
                clientSystemOther: false,
                clientWindowsVersion: '',
                clientLinuxVersion: '',
                otherSystem: '',
                clientMemory: '',
                clientOtherRequirement: '',
                PCServer: false,
                UnixServer: false,
                OtherSever: false,
                OtherServerName: '',
                serverMemory: '',
                serverDisk: '',
                serverOtherRequirement: '',
                serverSystem: '',
                serverSystemVersion: '',
                serverLanguage: '',
                serverFrame: '',
                serverDatabase: '',
                serverMiddleware: '',
                serverOtherSoftware: '',
                networkEnvironment: '',
                cdNum: '',
                usbNum: '',
                otherMedium: '',
                otherMediumNum: '',
                documents: '',
                expireHandle: '',
                expectedDate: '',
                companyInfo: {
                    telephone: '',
                    fax: '',
                    address: '',
                    postcode: '',
                    contractPerson: '',
                    mobile: '',
                    email: '',
                    website: '',
                }
            },
            typeList: [
                {
                    value: "系统软件", label: "系统软件",
                    children: [
                        {value: "操作系统", label: "操作系统"},
                        {value: "中文处理系统", label: "中文处理系统"},
                        {value: "网络系统", label: "网络系统"},
                        {value: "嵌入式操作系统", label: "嵌入式操作系统"},
                        {value: "其他", label: "其他"},
                    ],
                },
                {
                    label: "支持软件", value: "支持软件",
                    children: [
                        {label: "程序设计语言", value: "程序设计语言"},
                        {label: "数据库系统设计", value: "数据库系统设计"},
                        {label: "工具软件", value: "工具软件"},
                        {label: "网络通信软件", value: "网络通信软件"},
                        {label: "中间件", value: "中间件"},
                        {label: "其他", value: "其他"},
                    ],
                },
                {
                    label: "应用软件", value: "应用软件",
                    children: [
                        {label: "行业管理软件", value: "行业管理软件"},
                        {label: "办公软件", value: "办公软件"},
                        {label: "模式识别软件", value: "模式识别软件"},
                        {label: "图形图像软件", value: "图形图像软件"},
                        {label: "控制软件", value: "控制软件"},
                        {label: "网络应用软件", value: "网络应用软件"},
                        {label: "信息管理软件", value: "信息管理软件"},
                        {label: "数据库管理应用软件", value: "数据库管理应用软件"},
                        {label: "安全与保密软件", value: "安全与保密软件"},
                        {label: "嵌入式应用软件", value: "嵌入式应用软件"},
                        {label: "教育软件", value: "教育软件"},
                        {label: "游戏软件", value: "游戏软件"},
                        {label: "其他", value: "其他"},
                    ],
                },
                {
                    label: "其他", value: "其他",
                    children: [
                        {label: "其他", value: "其他"},
                    ],
                },
            ],
            frameOptions: [
                {value: 'C/S', label: 'C/S'},
                {value: 'B/S', label: 'B/S'},
                {value: '其他', label: '其他'},
            ],
        };
    },
    methods: {
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
    mounted() {
        let stringForm = sessionStorage.getItem('applicationForm')
        if (stringForm) {
            console.log(stringForm)
            this.form = JSON.parse(stringForm)
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
    }
}
</script>

<style scoped>
.CompanyInfo {
    width: 40%;
    padding: 5%;
}

.InfoCom {
    display: flex;
}

.application {
    width: 800px;
    align-items: center;
    border-radius: 30px;
    margin: 30px;
    padding: 50px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
</style>
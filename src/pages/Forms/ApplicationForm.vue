<template>
    <div class="application">
        <el-form :model="form" ref="form" :disabled="disable" :rules="rules">
            <h1>软件项目委托测试申请书</h1>
            <el-form-item label="测试类型" prop="testTypes" ref="testTypes">
                <br/>
                <SelectAndCreateTags v-model="form.testTypes"
                                     :default-options="testTypeOptions"
                                     option-description="新增一个测试类型"
                                     @change="emitChangeEvent('testTypes', form.testTypes)"
                                     @blur="emitBlurEvent('testTypes', form.testTypes)"/>
            </el-form-item>
            <hr />
            <table style="width:100%; text-align: left;">
                <tr style="width:100%">
                    <th>软件名称</th>
                    <td> <el-input v-model="form.softwareName" placeholder="软件名称"></el-input></td>
                    <th>版本号</th>
                    <td><el-input v-model="form.softwareVersion" placeholder="版本号"></el-input></td>
                </tr>

                <tr>
                    <th>委托单位（中文）</th>
                    <td><el-input v-model="form.companyChineseName" placeholder="委托单位（中文）"></el-input></td>
                    <th>委托单位（英文）</th>
                    <td><el-input v-model="form.companyEnglishName" placeholder="委托单位（英文）"></el-input></td>
                </tr>

                <tr>
                    <th>开发单位</th>
                    <td><el-input v-model="form.developmentDepartment" placeholder="开发单位"></el-input></td>
                </tr>
            </table>

            <el-form-item label="单位性质">
                <br />
                <el-select allow-create v-model="chosenData.orgType" default-first-option placeholder="单位性质"
                    @change="form.orgType = (chosenData.orgType !== '其他' ? chosenData.orgType : '')">
                    <el-option v-for="item in orgTypeOptions" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
                <el-input v-model="form.orgType" placeholder="其他单位性质" class="other-input"
                    v-if="chosenData.orgType === '其他'" />
            </el-form-item>
            <el-form-item label="主要功能及用途简介（限200字）" prop="description">
                <el-input type="textarea" v-model="form.description" maxlength="200"
                          placeholder="主要功能及用途"></el-input>
            </el-form-item>
            <hr/>
            <el-form-item label="测试依据" ref="testStandards" prop="testStandards">
                <br/>
                <SelectAndCreateTags v-model="form.testStandards"
                                     :default-options="testStandardOptions"
                                     option-description="新增一个测试依据"
                                     @change="emitChangeEvent('testStandards', form.testStandards)"
                                     @blur="emitBlurEvent('testStandards', form.testStandards)"/>
            </el-form-item>
            <hr/>
            <el-form-item label="需要测试的指标" ref="testAspects" prop="testAspects">
                <br/>
                <MultipleCreateAndSelect v-model="form.testAspects" :default-options="testAspectsOptions"
                                         option-description="选择测试指标"
                                         create-description="其他指标"
                                         @change="emitChangeEvent('testAspects', form.testAspects)"
                                         @blur="emitBlurEvent('testAspects', form.testAspects)"/>
            </el-form-item>
            <hr />
            <div>
                <el-form-item label="软件规模（至少一种）" ref="softwareScales" prop="softwareScales">
                    <br/>
                    <el-checkbox v-for="scale in scaleOptions" :key="scale" :label="scale"
                                 @change="handleScaleChange(scale, $event)"></el-checkbox>
                    <br/>
                    <el-form label-position="left" label-width="30%">
                        <el-form-item v-for="scale in form.softwareScales"
                                      :key="scale.name"
                                      :label="scale.name"
                                      style="margin-top:5px">
                            <el-input-number :controls="false" v-model="scale.scale" :placeholder="scale.description"
                                             style="width:30%"></el-input-number>
                        </el-form-item>
                    </el-form>
                </el-form-item>
            </div>
            <hr />
            <el-form-item>
                <h2>运行环境</h2>
                <h3>客户端</h3>
                <el-form-item label="操作系统:">
                    <br />
                    <el-form label-position="left" label-width="15%">
                        <el-form-item v-for="clientSystem in form.clientSystems" :key="clientSystem.vforKey"
                            :label="clientSystem.systemName" style="margin-top:5px">
                            <el-input v-model="clientSystem.version" placeholder="系统版本" style="width:30%"></el-input>
                            <el-button type="danger"
                                @click="form.clientSystems.splice(form.clientSystems.indexOf(clientSystem), 1)"
                                icon="el-icon-delete" circle plain size=mini style="margin-left:5%" />
                        </el-form-item>
                    </el-form>
                    <el-input v-model="newClientSystem" placeholder="其他操作系统"
                        style="width:20%;margin-top:10px;margin-right:5px" />
                    <el-button @click="addClientSystem" type="primary">添加</el-button>
                </el-form-item>
                <br />

                <table style="width:100%; text-align: left;">
                    <tr>
                        <th>内存要求（单位MB）</th>
                        <td><el-input placeholder="内存要求" v-model.number="form.clientMemory" style="margin-top:5px"></el-input>
                        </td>
                        <th>其他要求:</th>
                        <td><el-input placeholder="其他要求" v-model="form.clientOtherRequirement"
                                style="margin-top:5px"></el-input></td>
                    </tr>
                </table>

                <h3>服务器端</h3>
                <h4>硬件</h4>
                <el-form-item label="架构:">
                    <br />
                    <SelectAndCreateTags v-model="form.serverArchitectures" :default-options="serverArchitectureOptions"
                        option-description="添加一种架构" />
                </el-form-item>
                <table style="width:100%; text-align: left;">
                    <tr>
                        <th>内存要求（单位MB）:</th>
                        <td><el-input placeholder="内存要求" v-model="form.serverMemory" style="margin-top:5px"></el-input></td>
                        <th>硬盘要求（单位MB）:</th>
                        <td><el-input placeholder="硬盘要求" v-model="form.serverDisk" style="margin-top:5px"></el-input></td>
                    </tr>
                </table>

                <el-form-item label="其他要求:">
                    <el-input type = "textarea" placeholder="其他要求" v-model="form.serverOtherRequirement" style="margin-top:5px"></el-input>
                </el-form-item>

                <h4>软件</h4>
                <table style="width:100%; text-align: left;">
                    <tr>
                        <th>操作系统:</th>
                        <td><el-input placeholder="操作系统" v-model="form.serverSystem"></el-input></td>
                        <th>版本:</th>
                        <td><el-input placeholder="版本" v-model="form.serverSystemVersion"></el-input></td>
                    </tr>
                    <tr>
                        <th>编程语言:</th>
                        <td><el-input placeholder="编程语言" v-model="form.serverLanguage"></el-input></td>
                        <th>数据库:</th>
                        <td><el-input placeholder="数据库" v-model="form.serverDatabase"></el-input></td>
                    </tr>

                    <tr>
                        <th>中间件:</th>
                        <td><el-input placeholder="中间件" v-model="form.serverMiddleware"></el-input></td>
                        <th>其他支撑软件</th>
                        <td><el-input placeholder="其他支撑软件" v-model="form.serverOtherSoftware"></el-input></td>
                    </tr>
                </table>
              
                <el-form-item label="构架:">
                    <br />
                    <SelectAndCreateTags v-model="form.serverFrame" :default-options="frameOptions"
                        option-description="添加一种构架" />
                </el-form-item>

                <h3>网络环境</h3>
                <el-input type="textarea" placeholder="网络环境" v-model="form.networkEnvironment"></el-input>
            </el-form-item>
            <hr>
            <el-form-item>
                <h2>样品和数量</h2>
                <h3>软件介质</h3>
                <el-form label-position="left" label-width="15%">
                    <el-form-item v-for="medium in form.media" :key="medium.medium" :label="medium.medium"
                        style="margin-top:5px">
                        <el-input-number controls-position="right" :min="0" :max="100000"
                            v-model="medium.num"></el-input-number>
                        <el-button type="danger" @click="form.media.splice(form.media.indexOf(medium), 1)"
                            icon="el-icon-delete" circle plain size=mini style="margin-left:5%" />
                    </el-form-item>
                </el-form>
                <el-input v-model="newMedium" placeholder="其他介质" style="width:20%;margin-top:10px;margin-right:5px" />
                <el-button @click="addMedium" type="primary">添加</el-button>
                <h3>文档资料</h3>
                <el-input type="textarea" placeholder="文档资料" v-model="form.documents"></el-input>
                <h6>
                    注：
                    <br />
                    1、需求文档（例如：项目计划任务书、需求分析报告、合同等）（验收、鉴定测试必须）
                    <br />
                    2、用户文档（例如：用户手册、用户指南等）（必须）
                    <br />
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
            <br />
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
import SelectAndCreateTags from "@/components/ChooseAndSelect/SelectAndCreateTags.vue";
import MultipleCreateAndSelect from "@/components/ChooseAndSelect/MultipleCreateAndSelect.vue";
import { nanoid } from "nanoid";

export default {
    name: "ApplicationForm",
    components: {
        SelectAndCreateTags,
        MultipleCreateAndSelect
    },
    props: ['writable', 'formId', 'checking'],
    data() {
        const valiChosenCompanyType = (rule, value, callback) => {
            if (this.chosenData.companyType === "") {
                callback(new Error("请选择单位性质"));
            }
            callback();
        };
        const valiCompanyType = (rule, value, callback) => {
            if (this.chosenData.companyType === "其他" && this.form.companyType === "") {
                callback(new Error("请填写其他单位性质"));
            }
            callback();
        };

        return {
            form: {
                testTypes: [],
                softwareName: "",
                softwareVersion: "",
                companyChineseName: "",
                companyEnglishName: "",
                developmentDepartment: "",
                companyType: "",
                description: "",
                testStandards: [],
                testAspects: [],
                softwareScales: [],
                softwareType: "",
                clientSystems: [
                    { systemName: 'Windows', version: '', vforKey: nanoid(6) },
                    { systemName: 'Linux', version: '', vforKey: nanoid(6) }
                ],
                clientMemory: '',
                clientOtherRequirement: '',
                serverArchitectures: [],
                serverMemory: 0,
                serverDisk: 0,
                serverOtherRequirement: '',
                serverSystem: '',
                serverSystemVersion: '',
                serverLanguage: '',
                serverFrame: '',
                serverDatabase: '',
                serverMiddleware: '',
                serverOtherSoftware: '',
                networkEnvironment: '',
                media: [
                    { medium: "光盘", num: 0 },
                    { medium: "U盘", num: 0 }
                ],
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
            rules: {
                testTypes: [
                    {type: 'array', required: true, message: '请添加至少一个测试类型', trigger: ['blur', 'change']}
                ],
                softwareName: [
                    {required: true, message: '请填写软件名称', trigger: 'blur'}
                ],
                softwareVersion: [
                    {required: true, message: '请填写软件版本', trigger: 'blur'}
                ],
                companyChineseName: [
                    {required: true, message: '请填写委托单位（中文）', trigger: 'blur'}
                ],
                companyEnglishName: [
                    {required: true, message: '请填写委托单位（英文）', trigger: 'blur'}
                ],
                developmentDepartment: [
                    {required: true, message: '请填写开发单位', trigger: 'blur'}
                ],
                companyType: [
                    {validator: valiChosenCompanyType, trigger: ['blur', 'change']},
                    {validator: valiCompanyType, trigger: 'blur'}
                ],
                description: [
                    {required: true, message: '请填写主要功能及用途简介', trigger: 'blur'}
                ],
                testStandards: [
                    {type: 'array', required: true, message: '请添加至少一个测试依据', trigger: ['blur', 'change']}
                ],
                testAspects: [
                    {type: 'array', required: true, message: '请添加至少一个测试指标', trigger: ['blur', 'change']}
                ],
                softwareScales: [
                    {type: 'array', required: true, message: '请填写至少一个软件规模', trigger: 'change'}
                ],
                softwareType: [
                    {required: true, message: '请选择软件类型', trigger: ['blur', 'change']}
                ],
            },

            newMedium: '',
            newClientSystem: '',
            chosenData: {
                companyType: '',
                softwareArchitecture: ''
            },
            testTypeOptions: [
                { value: "软件确认测试", label: "软件确认测试" },
                { value: "成果/技术鉴定测试", label: "成果/技术鉴定测试" },
                { value: "专项资金验收测试", label: "专项资金验收测试" }
            ],
            testStandardOptions: [
                { value: "GB/T 25000.51-2016", label: "GB/T 25000.51-2016" },
                { value: "GB/T 25000.10-2016", label: "GB/T 25000.10-2016" },
                { value: "GB/T 28452-2012", label: "GB/T 28452-2012" },
                { value: "GB/T 30961-2014", label: "GB/T 30961-2014" },
                { value: "NST-03-WI12-2011", label: "NST-03-WI12-2011" },
                { value: "NST-03-WI13-2011", label: "NST-03-WI13-2011" },
                { value: "NST-03-WI22-2014", label: "NST-03-WI22-2014" },
            ],
            testAspectsOptions: [
                { value: "功能性", label: "功能性" },
                { value: "可靠性", label: "可靠性" },
                { value: "易用性", label: "易用性" },
                { value: "效率", label: "效率" },
                { value: "可维护性", label: "可维护性" },
                { value: "可移植性", label: "可移植性" },
                { value: "代码覆盖度", label: "代码覆盖度" },
                { value: "缺陷检测率", label: "缺陷检测率" },
                { value: "代码风格符合度", label: "代码风格符合度" },
                { value: "代码不符合项检测率", label: "代码不符合项检测率" },
                { value: "产品说明要求", label: "产品说明要求" },
                { value: "用户文档集要求", label: "用户文档集要求" },
            ],
            orgTypeOptions: [
                { value: "内资企业", label: "内资企业" },
                { value: "外（合）资企业", label: "外（合）资企业" },
                { value: "港澳台（合）资本企业", label: "港澳台（合）资本企业" },
                { value: "科研院校", label: "科研院校" },
                { value: "政府事业团体", label: "政府事业团体" },
                { label: "其他", value: "其他" }
            ],
            scaleOptions: ['功能数（到最后一级菜单）', '功能点数', '代码行数（不包括注释行、空行）'],
            softwareTypeOptions: [
                {
                    value: "系统软件", label: "系统软件",
                    children: [
                        { value: "操作系统", label: "操作系统" },
                        { value: "中文处理系统", label: "中文处理系统" },
                        { value: "网络系统", label: "网络系统" },
                        { value: "嵌入式操作系统", label: "嵌入式操作系统" },
                        { value: "其他", label: "其他" },
                    ],
                },
                {
                    label: "支持软件", value: "支持软件",
                    children: [
                        { label: "程序设计语言", value: "程序设计语言" },
                        { label: "数据库系统设计", value: "数据库系统设计" },
                        { label: "工具软件", value: "工具软件" },
                        { label: "网络通信软件", value: "网络通信软件" },
                        { label: "中间件", value: "中间件" },
                        { label: "其他", value: "其他" },
                    ],
                },
                {
                    label: "应用软件", value: "应用软件",
                    children: [
                        { label: "行业管理软件", value: "行业管理软件" },
                        { label: "办公软件", value: "办公软件" },
                        { label: "模式识别软件", value: "模式识别软件" },
                        { label: "图形图像软件", value: "图形图像软件" },
                        { label: "控制软件", value: "控制软件" },
                        { label: "网络应用软件", value: "网络应用软件" },
                        { label: "信息管理软件", value: "信息管理软件" },
                        { label: "数据库管理应用软件", value: "数据库管理应用软件" },
                        { label: "安全与保密软件", value: "安全与保密软件" },
                        { label: "嵌入式应用软件", value: "嵌入式应用软件" },
                        { label: "教育软件", value: "教育软件" },
                        { label: "游戏软件", value: "游戏软件" },
                        { label: "其他", value: "其他" },
                    ],
                },
                {
                    label: "其他", value: "其他",
                    children: [
                        { label: "其他", value: "其他" },
                    ],
                },
            ],
            frameOptions: [
                { value: 'C/S', label: 'C/S' },
                { value: 'B/S', label: 'B/S' }
            ],
            serverArchitectureOptions: [
                { value: 'PC服务器', label: 'PC服务器' },
                { value: 'UNIX／Linux服务器', label: 'UNIX／Linux服务器' }
            ]
        };
    }
    ,
    methods: {
        emitBlurEvent(ref, value, withDelay = false) {
            if (withDelay) {
                setTimeout(() => this.$refs[ref].$emit('el.form.blur', value), 50);
            } else {
                this.$refs[ref].$emit('el.form.blur', value);
            }
        },
        emitChangeEvent(ref, value) {
            this.$refs[ref].$emit('el.form.change', value);
        },

        handleScaleChange(scaleOption, event) {
            if (event === true) {
                this.form.softwareScales.splice(this.scaleOptions.indexOf(scaleOption), 0,
                    {name: scaleOption, scale: 0});
            } else {
                this.form.softwareScales.splice(this.form.softwareScales.findIndex(scale => {
                    return scale.name === scaleOption
                }), 1)
            }
            this.emitChangeEvent('softwareScales', this.form.softwareScales);
        },
        addMedium() {
            if (this.newMedium !== '') {
                let trimmedNewMedium = this.newMedium.trim();
                if (this.form.media.findIndex(medium => {
                    return medium.medium === trimmedNewMedium
                }) === -1) {
                    this.form.media.push({ medium: this.newMedium, num: 0 });
                    this.newMedium = '';
                } else {
                    alert("重复的介质类型！");
                }
            }
        }
        ,
        addClientSystem() {
            if (this.newClientSystem !== '') {
                this.form.clientSystems.push({systemName: this.newClientSystem.trim(), version: '', vforKey: nanoid(6)});
                this.newClientSystem = '';
            }
            return 0;
        }
        ,

        submit() {
            if (this.writable) {
                console.log(JSON.stringify(this.form))
                this.$bus.$emit('submitApplication')
            }
        }
        ,
        save() {
            if (this.writable) {
                sessionStorage.setItem('applicationForm', JSON.stringify(this.form))
            }
        }
        ,
        pass() {
            this.$bus.$emit('passApplication')
        }
        ,
        refute() {

        }
    }
    ,
    mounted() {
        let stringForm = sessionStorage.getItem('applicationForm')
        if (stringForm) {
            console.log(stringForm)
            this.form = JSON.parse(stringForm)
        }

    }
    ,
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
        }
        ,
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
.other-input {
    width: 30%;
    margin-left: 10px;
}

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
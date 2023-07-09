<template>
    <div class="application">
        <el-form label-position="left" size="small" :model="form" ref="form" :disabled="disabled" :rules="rules"
                 v-loading="!dataReady">
            <h1>软件项目委托测试申请书</h1>
            <el-form-item label="测试类型" prop="testTypes" ref="testTypes">
                <br>
                <SelectAndCreateTags v-model="form.testTypes" :default-options="testTypeOptions" :disabled="disabled"
                                     v-if="dataReady"
                                     option-description="新增一个测试类型"
                                     @change="emitChangeEvent('testTypes', form.testTypes)"
                                     @blur="emitBlurEvent('testTypes', form.testTypes)"></SelectAndCreateTags>
            </el-form-item>
            <hr>
            <el-row :gutter="20">
                <el-col :span="12">
                    <el-form-item label="软件名称" prop="softwareName">
                        <el-input v-model="form.softwareName" placeholder="软件名称"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="版本号" prop="softwareVersion">
                        <el-input v-model="form.softwareVersion" placeholder="版本号"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="12">
                    <el-form-item label="委托单位（中文）" prop="companyChineseName">
                        <el-input v-model="form.companyChineseName" placeholder="委托单位（中文）"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="委托单位（英文）" prop="companyEnglishName">
                        <el-input v-model="form.companyEnglishName" placeholder="委托单位（英文）"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="12">
                    <el-form-item label="开发单位" prop="developmentDepartment">
                        <el-input v-model="form.developmentDepartment" placeholder="开发单位"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="单位性质" ref="companyType" prop="companyType" class="is-required">
                        <br>
                        <div v-if="!disabled">
                            <el-select v-model="chosenData.companyType" placeholder="单位性质"
                                       @blur="emitBlurEvent('companyType', chosenData.companyType, true)"
                                       @change="form.companyType = (chosenData.companyType !== '其他' ? chosenData.companyType : '')">
                                <el-option v-for="item in companyTypeOptions" :key="item.value" :label="item.label"
                                           :value="item.value"></el-option>
                            </el-select>
                            <el-input v-model="form.companyType" placeholder="其他单位性质" class="other-input"
                                      v-if="chosenData.companyType === '其他'"></el-input>
                        </div>
                        <div v-if="disabled">
                            <el-input v-model="form.companyType"></el-input>
                        </div>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-form-item label="主要功能及用途简介（限200字）" prop="description">
                <el-input type="textarea" :autosize="{ minRows: 4, maxRows: 8 }" resize='none'
                          v-model="form.description"
                          maxlength="200" placeholder="主要功能及用途"></el-input>
            </el-form-item>
            <hr>
            <el-form-item label="测试依据" ref="testStandards" prop="testStandards">
                <br>
                <SelectAndCreateTags v-model="form.testStandards" :default-options="testStandardOptions"
                                     v-if="dataReady"
                                     :disabled="disabled" option-description="新增一个测试依据"
                                     @change="emitChangeEvent('testStandards', form.testStandards)"
                                     @blur="emitBlurEvent('testStandards', form.testStandards)"></SelectAndCreateTags>
            </el-form-item>
            <hr>
            <el-form-item label="需要测试的指标" ref="testAspects" prop="testAspects">
                <br>
                <MultipleCreateAndSelect v-if="!disabled && dataReady" v-model="form.testAspects"
                                         :default-options="testAspectsOptions"
                                         option-description="选择测试指标" create-description="其他指标"
                                         @change="emitChangeEvent('testAspects', form.testAspects)"
                                         @blur="emitBlurEvent('testAspects', form.testAspects)"></MultipleCreateAndSelect>
                <div v-if="disabled">
                    <el-tag :key="tag" v-for="tag in form.testAspects">
                        {{ tag.length > 50 ? tag.substring(0, 49) + '...' : tag }}
                    </el-tag>
                </div>
            </el-form-item>
            <hr>
            <el-form-item label="软件规模（至少一种）" ref="softwareScales" prop="softwareScales">
                <br>
                <div v-if="!disabled" style="margin: 20px 0; padding: 0 20px">
                    <el-checkbox v-for="scale in scaleOptions" :key="scale" :label="scale"
                                 @change="handleScaleChange(scale, $event)"></el-checkbox>
                </div>
                <div style="padding: 0 20px">
                    <el-form-item v-for="scale in form.softwareScales" :key="scale.scaleDescription"
                                  :label="scale.scaleDescription" label-width="30%" style="margin-top:5px">
                        <el-input-number :controls="false" v-model="scale.scale" style="width:30%"></el-input-number>
                    </el-form-item>
                </div>
            </el-form-item>
            <br>
            <el-form-item label="软件类型" ref="softwareType" prop="softwareType" class="is-required">
                <div class="block">
                    <el-cascader v-model="form.softwareType" :options="softwareTypeOptions"
                                 :props="{ expandTrigger: 'hover' }"
                                 @change="emitChangeEvent('softwareType', form.softwareType)"
                                 style="margin-left:10px;"></el-cascader>
                </div>
            </el-form-item>
            <hr>
            <h2>运行环境</h2>
            <h3>客户端</h3>
            <el-form-item label="操作系统:" prop="clientSystems" ref="clientSystems" class="is-required">
                <br>
                <el-form-item v-for="(clientSystem) in form.clientSystems" :key="clientSystem.vforKey"
                              :label="clientSystem.system" label-width="15%" style="margin-top:5px">
                    <el-input v-model="clientSystem.version" placeholder="系统版本" style="width:30%"></el-input>
                    <el-button type="danger" @click="deleteClientSystem(clientSystem)" icon="el-icon-delete" circle
                               plain
                               size=mini style="margin-left:5%"></el-button>
                </el-form-item>
                <el-input v-model="newClientSystem" placeholder="其他操作系统"
                          style="width:20%;margin-top:10px;margin-right:5px"></el-input>
                <el-button @click="addClientSystem" type="primary">添加</el-button>
            </el-form-item>
            <br>
            <el-form-item label="内存要求（单位MB）:" label-width="20%">
                <el-input-number :controls="false" :precision="1" :step="0.1" placeholder="内存要求"
                                 v-model.number="form.clientMemory" style="margin-top:5px"></el-input-number>
            </el-form-item>
            <el-form-item label="其他要求:" label-width="20%">
                <el-input placeholder="其他要求" v-model="form.clientOtherRequirement"
                          style="margin-top:5px"></el-input>
            </el-form-item>
            <h3>服务器端</h3>
            <h4>硬件</h4>
            <el-form-item label="架构:" prop="serverNames" ref="serverNames">
                <br>
                <SelectAndCreateTags v-model="form.serverNames" :default-options="serverNameOptions"
                                     v-if="dataReady"
                                     :disabled="disabled"
                                     option-description="添加一种架构"
                                     @change="emitChangeEvent('serverNames', form.serverNames)"
                                     @blur="emitBlurEvent('serverNames', form.serverNames)"></SelectAndCreateTags>
            </el-form-item>
            <el-row>
                <el-col :span="12">
                    <el-form-item label="内存要求（单位MB）:" label-width="40%">
                        <el-input-number :controls="false" :precision="1" :step="0.1" placeholder="内存要求"
                                         v-model="form.serverMemory" style="margin-top:5px"></el-input-number>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="硬盘要求（单位MB）:" label-width="40%">
                        <el-input-number :controls="false" :precision="1" :step="0.1" placeholder="硬盘要求"
                                         v-model="form.serverDisk" style="margin-top:5px"></el-input-number>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-form-item label="其他要求:" label-width="20%">
                <el-input placeholder="其他要求" v-model="form.serverOtherRequirement"
                          style="margin-top:5px"></el-input>
            </el-form-item>
            <h4>软件</h4>
            <el-row :gutter="20">
                <el-col :span="12">
                    <el-form-item label="操作系统:" prop="serverSystem">
                        <el-input placeholder="操作系统" v-model="form.serverSystem"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="版本:" prop="serverSystemVersion">
                        <el-input placeholder="版本" v-model="form.serverSystemVersion"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="12">
                    <el-form-item label="编程语言:" prop="serverLanguage">
                        <el-input placeholder="编程语言" v-model="form.serverLanguage"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="数据库:" prop="serverDatabase">
                        <el-input placeholder="数据库" v-model="form.serverDatabase"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="12">
                    <el-form-item label="中间件:" prop="serverMiddleware">
                        <el-input placeholder="中间件" v-model="form.serverMiddleware"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="其他支撑软件:">
                        <el-input placeholder="其他支撑软件" v-model="form.serverOtherSoftware"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-form-item label="构架:" prop="serverFrames" ref="serverFrames">
                <br>
                <SelectAndCreateTags v-model="form.serverFrames" :default-options="frameOptions" :disabled="disabled"
                                     v-if="dataReady"
                                     option-description="添加一种构架"
                                     @change="emitChangeEvent('serverFrames', form.serverFrames)"
                                     @blur="emitBlurEvent('serverFrames', form.serverFrames)"></SelectAndCreateTags>
            </el-form-item>
            <h3>网络环境</h3>
            <el-form-item label="网络环境" prop="networkEnvironment">
                <el-input placeholder="网络环境" v-model="form.networkEnvironment"></el-input>
            </el-form-item>
            <hr>
            <h2>样品和数量</h2>
            <h3>软件介质</h3>
            <el-form-item prop="media" ref="media" class="is-required">
                <el-form-item v-for="medium in form.media" :key="medium.mediumType" :label="medium.mediumType"
                              label-width="15%" style="margin-top:5px">
                    <el-input-number controls-position="right" :min="0" :max="100000"
                                     v-model="medium.num"></el-input-number>
                    <el-button type="danger" @click="deleteMedium(medium)" icon="el-icon-delete" circle plain size=mini
                               style="margin-left:5%"></el-button>
                </el-form-item>
                <el-input v-model="newMedium" placeholder="其他介质"
                          style="width:20%;margin-top:10px;margin-right:5px"></el-input>
                <el-button @click="addMedium" type="primary">添加</el-button>
            </el-form-item>
            <h3>文档资料</h3>
            <el-form-item label="文档资料" prop="documents" class="is-required">
                <el-input type="textarea" placeholder="文档资料" v-model="form.documents"></el-input>
            </el-form-item>
            <h6>
                注：
                <br>
                1、需求文档（例如：项目计划任务书、需求分析报告、合同等）（验收、鉴定测试必须）
                <br>
                2、用户文档（例如：用户手册、用户指南等）（必须）
                <br>
                3、操作文档（例如：操作员手册、安装手册、诊断手册、支持手册等）（验收项目必须）
            </h6>
            <h3>提交的样品（硬拷贝资料、硬件）五年保存期满</h3>
            <el-form-item prop="expireHandle">
                <el-radio-group v-model="form.expireHandle">
                    <el-radio label="由本中心销毁"></el-radio>
                    <el-radio label="退还给我们"></el-radio>
                </el-radio-group>
            </el-form-item>
            <br>
            <el-form-item label="希望完成测试时间：" prop="expectedDate">
                <el-date-picker type="date" placeholder="选择日期" style="width: 100%;"
                                v-model="form.expectedDate"></el-date-picker>
            </el-form-item>
            <hr>
            <div class="InfoCom">
                <div class="CompanyInfo">
                    <h2>委托单位信息</h2>
                    <el-form-item label="电话" prop="companyInfo.telephone" label-width="25%">
                        <el-input placeholder="电话" v-model="form.companyInfo.telephone"></el-input>
                    </el-form-item>
                    <el-form-item label="传真" prop="companyInfo.fax" label-width="25%">
                        <el-input placeholder="传真" v-model="form.companyInfo.fax"></el-input>
                    </el-form-item>
                    <el-form-item label="地址" prop="companyInfo.address" label-width="25%">
                        <el-input placeholder="地址" v-model="form.companyInfo.address"></el-input>
                    </el-form-item>
                    <el-form-item label="邮编" prop="companyInfo.postcode" label-width="25%">
                        <el-input placeholder="邮编" v-model="form.companyInfo.postcode"></el-input>
                    </el-form-item>
                    <el-form-item label="联系人" prop="companyInfo.contractPerson" label-width="25%">
                        <el-input placeholder="联系人" v-model="form.companyInfo.contractPerson"></el-input>
                    </el-form-item>
                    <el-form-item label="手机" prop="companyInfo.mobile" label-width="25%">
                        <el-input placeholder="手机" v-model="form.companyInfo.mobile"></el-input>
                    </el-form-item>
                    <el-form-item label="E-mail" prop="companyInfo.email" label-width="25%">
                        <el-input placeholder="E-mail" v-model="form.companyInfo.email"></el-input>
                    </el-form-item>
                    <el-form-item label="网址" prop="companyInfo.website" label-width="25%">
                        <el-input placeholder="网址" v-model="form.companyInfo.website"></el-input>
                    </el-form-item>
                </div>
                <div class="CompanyInfo">
                    <h2>测试单位联系方式</h2>
                    <ContactInfo></ContactInfo>
                </div>
            </div>
        </el-form>
        <el-row v-show="!disabled">
            <el-button type="success" @click="submit" :disabled="disabled">提交</el-button>
            <el-button type="primary" @click="save" :disabled="disabled">保存</el-button>
        </el-row>
        <el-row v-show="check">
            <el-button type="success" @click="pass" :disabled="!disabled">通过</el-button>
            <el-button type="danger" @click="refute" :disabled="!disabled">驳回</el-button>
        </el-row>
    </div>
</template>

<script>
import SelectAndCreateTags from "@/components/ChooseAndSelect/SelectAndCreateTags.vue";
import MultipleCreateAndSelect from "@/components/ChooseAndSelect/MultipleCreateAndSelect.vue";
import applicationForm from "../../assets/jsons/applicationForm"
import {nanoid} from "nanoid";
import ContactInfo from "@/components/Infomation/ContactInfo.vue";

export default {
    name: "ApplicationForm",
    components: {
        ContactInfo,
        SelectAndCreateTags,
        MultipleCreateAndSelect
    },
    props: ['writable', 'processId', 'checking'],
    data() {
        const valiChosenCompanyType = (rule, value, callback) => {
            if (this.form.companyType === "" && this.chosenData.companyType !== "其他") {
                callback(new Error("请选择单位性质"));
            }
            callback();
        };
        const valiCompanyType = (rule, value, callback) => {
            if (this.form.companyType === "" && this.chosenData.companyType === "其他") {
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
                softwareType: [],
                clientSystems: [
                    { system: 'Windows', version: '', vforKey: nanoid(6) },
                    { system: 'Linux', version: '', vforKey: nanoid(6) },
                ],
                clientMemory: '',
                clientOtherRequirement: '',
                serverNames: [],
                serverMemory: 0,
                serverDisk: 0,
                serverOtherRequirement: '',
                serverSystem: '',
                serverSystemVersion: '',
                serverLanguage: '',
                serverFrames: [],
                serverDatabase: '',
                serverMiddleware: '',
                serverOtherSoftware: '',
                networkEnvironment: '',
                media: [
                    { mediumType: "光盘", num: 0 },
                    { mediumType: "U盘", num: 0 }
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
                testTypes: { type: 'array', required: true, message: '请添加至少一个测试类型', trigger: 'change' },
                softwareName: { required: true, message: '请填写软件名称', trigger: 'blur' },
                softwareVersion: { required: true, message: '请填写软件版本', trigger: 'blur' },
                companyChineseName: { required: true, message: '请填写委托单位（中文）', trigger: 'blur' },
                companyEnglishName: { required: true, message: '请填写委托单位（英文）', trigger: 'blur' },
                developmentDepartment: { required: true, message: '请填写开发单位', trigger: 'blur' },
                companyType: [
                    { validator: valiChosenCompanyType, trigger: 'change' },
                    { validator: valiCompanyType, trigger: 'blur' }
                ],
                description: { required: true, message: '请填写主要功能及用途简介', trigger: 'blur' },
                testStandards: { type: 'array', required: true, message: '请添加至少一个测试依据', trigger: 'change' },
                testAspects: { type: 'array', required: true, message: '请添加至少一个测试指标', trigger: 'change' },
                softwareScales: { type: 'array', required: true, message: '请填写至少一个软件规模', trigger: 'change' },
                softwareType: { type: 'array', required: true, message: '请选择软件类型', trigger: 'change' },
                clientSystems: { type: 'array', required: true, message: '请添加至少一个客户端系统', trigger: 'blur' },
                serverNames: { type: 'array', required: true, message: '请添加至少一个服务器架构', trigger: 'change' },
                serverSystem: { required: true, message: '请填写使用的操作系统', trigger: 'blur' },
                serverSystemVersion: { required: true, message: '请填写使用的操作系统版本', trigger: 'blur' },
                serverLanguage: { required: true, message: '请填写软件编程语言', trigger: 'blur' },
                serverFrames: { type: 'array', required: true, message: '请添加至少一个软件构架', trigger: 'change' },
                serverDatabase: { required: true, message: '请填写使用的数据库', trigger: 'blur' },
                serverMiddleware: { required: true, message: '请填写使用的中间件', trigger: 'blur' },
                networkEnvironment: { required: true, message: '请填写运行网络环境', trigger: 'blur' },
                media: { type: 'array', required: true, message: '请添加至少一个软件介质', trigger: 'blur' },
                documents: { required: true, message: '请填写文档资料清单', trigger: 'blur' },
                expireHandle: { required: true, message: '请选择期满样品处理方式' },
                expectedDate: { required: true, message: '请选择期望完成日期', trigger: 'blur' },
                companyInfo: {
                    telephone: { required: true, message: '请填写电话号码', trigger: 'blur' },
                    fax: { required: true, message: '请填写传真', trigger: 'blur' },
                    address: { required: true, message: '请填写地址', trigger: 'blur' },
                    postcode: { required: true, message: '请填写邮编', trigger: 'blur' },
                    contractPerson: { required: true, message: '请填写联系人', trigger: 'blur' },
                    mobile: { required: true, message: '请填写手机号码', trigger: 'blur' },
                    email: { required: true, message: '请填写电子邮箱', trigger: 'blur' },
                    website: { required: true, message: '请填写单位网址', trigger: 'blur' },
                }
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
            companyTypeOptions: [
                { value: "内资企业", label: "内资企业" },
                { value: "外（合）资企业", label: "外（合）资企业" },
                { value: "港澳台（合）资本企业", label: "港澳台（合）资本企业" },
                { value: "科研院校", label: "科研院校" },
                { value: "政府事业团体", label: "政府事业团体" },
                { value: "其他", label: "其他" }
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
            serverNameOptions: [
                { value: 'PC服务器', label: 'PC服务器' },
                { value: 'UNIX／Linux服务器', label: 'UNIX／Linux服务器' }
            ],
            dataReady: false,
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
            console.log(value);
            this.$refs[ref].$emit('el.form.change', value);
        },

        handleScaleChange(scaleOption, event) {
            if (event === true) {
                this.form.softwareScales.splice(this.scaleOptions.indexOf(scaleOption), 0,
                    { scaleDescription: scaleOption, scale: 0 });
            } else {
                this.form.softwareScales.splice(this.form.softwareScales.findIndex(scale => {
                    return scale.scaleDescription === scaleOption
                }), 1)
            }
            this.emitChangeEvent('softwareScales', this.form.softwareScales);
        },
        addMedium() {
            if (this.newMedium !== '') {
                let trimmedNewMedium = this.newMedium.trim();
                if (this.form.media.findIndex(medium => {
                    return medium.mediumType === trimmedNewMedium
                }) === -1) {
                    this.form.media.push({ mediumType: this.newMedium, num: 0 });
                    this.newMedium = '';
                } else {
                    alert("重复的介质类型！");
                }
                this.emitBlurEvent("media", this.form.media);
            }
        },
        deleteMedium(medium) {
            this.form.media.splice(this.form.media.indexOf(medium), 1);
            this.emitBlurEvent('media', this.form.media);
        },

        addClientSystem() {
            if (this.newClientSystem !== '') {
                this.form.clientSystems.push({
                    system: this.newClientSystem.trim(),
                    version: '',
                    vforKey: nanoid(6)
                });
                this.newClientSystem = '';
                this.emitBlurEvent("clientSystems", this.form.newClientSystem);
            }
        },
        deleteClientSystem(clientSystem) {
            this.form.clientSystems.splice(this.form.clientSystems.indexOf(clientSystem), 1);
            this.emitBlurEvent('media', this.form.clientSystems);
        },
        submit() {
            this.$refs.form.validate((valid) => {
                if (valid) {
                    this.doSubmit();
                } else {
                    alert("申请表不符合要求，请修改申请表！");
                }
            })
        },
        doSubmit() {
            if (this.writable) {
                console.log(JSON.stringify(this.form))
                console.log(this.processId)
                this.axios.put('/api/workflow/processes/' + this.processId + '/forms/' + 'ApplicationForm', JSON.stringify(this.form), {
                    headers: {
                        'Content-Type': 'text/plain'
                    }
                }).then(this.handleResult, this.handleError)
            }
        },
        save() {
            if (this.writable) {
                sessionStorage.setItem('applicationForm', JSON.stringify(this.form))
                console.log(this.processId)
                this.axios.put('/api/workflow/processes/' + this.processId + '/forms/' + 'ApplicationForm', JSON.stringify(this.form), {
                    headers: {
                        'Content-Type': 'text/plain'
                    }
                }).then(this.handleSaveResult, this.handleError)
            }
        },
        pass() {
            this.$bus.$emit('passApplication', true)
        },
        refute() {
            this.$bus.$emit('passApplication', false)
        },
        handleResult(res) {
            console.log(res)
            if (res.status === 200) {
                alert('上传成功')
                this.$bus.$emit('submitApplication')
            }
        },
        handleSaveResult(res) {
            console.log(res)
            if (res.status === 200) {
                alert('保存成功')
            }
        },
        handleError(err) {
            if (err.response.status === 403) {
                alert('指定流程或表单对该用户不可见')
            } else if (err.response.status === 404) {
                alert('指定流程或表单不存在')
            }
        },
        initializeDOM() {
            // 设置单位性质DOM的绑定值，需要检查”企业类型“是否选择了“其他”
            if (this.form.companyType !== "") {
                console.log(this.companyTypeOptions.indexOf(this.form.companyType))
                console.log(this.companyTypeOptions)
                if (this.companyTypeOptions.findIndex(
                    (option) => option.value === this.form.companyType
                ) !== -1) {
                    this.chosenData.companyType = this.form.companyType
                } else {
                    this.chosenData.companyType = '其他'
                }
            }
            this.$refs.testTypes.$forceUpdate()
        },
        autoFill() {
             if (sessionStorage.getItem('logType') === 'client') {
                this.axios.get('/api/account/client_details').then(
                    (res) => {
                        if (res.status === 200) {
                            this.form.companyChineseName = res.data.company
                            this.form.companyInfo.address = res.data.companyAddress
                            this.form.companyInfo.telephone = res.data.companyTelephone
                            this.form.companyInfo.contractPerson = res.data.realName
                            this.form.companyInfo.postcode = res.data.companyPostcode
                            this.form.companyInfo.email = res.data.companyEmail
                            this.form.companyInfo.fax = res.data.companyFax
                            this.form.companyInfo.website = res.data.companyWebsite
                            this.form.companyInfo.mobile = res.data.companyPhone
                        }
                    },
                    (err) => {
                        if (err.status === 409) {
                            alert('登录类型错误')
                        }
                    }
                )
            }
        }
    },
    mounted() {
        // console.log(this.form.companyType)
        // console.log(this.chosenData.companyType)
    },
    created() {
        this.axios.get('/api/workflow/processes/' + this.processId + '/forms/' + 'ApplicationForm').then(
            (res) => {
                console.log(res.data)
                if (res.data) {
                    this.form = res.data
                } else {
                    this.form = applicationForm
                }
                if (this.writable) {
                    this.autoFill()
                }
                this.dataReady = true
                this.initializeDOM()
            },
            (err) => {
                if (err.response.status === 403) {
                    alert('指定流程或表单对该用户不可见')
                } else if (err.response.status === 404) {
                    alert('指定流程或表单不存在')
                }
                this.form = applicationForm;
                this.initializeDOM()
            }
        )
    },
    computed: {
        disabled() {
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
.el-tag {
    height: 32px;
    margin-right: 10px;
    margin-top: 5px;
}

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
    width: 94%;
    margin-top: 2%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    padding: 5%;
}
</style>
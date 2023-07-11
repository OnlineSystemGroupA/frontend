<template>
    <div class="report">
        <h1>测试报告</h1>
        <el-form label-width="100px" label-position="left" :disabled="disabled" v-loading="!dataReady">
            <el-row :gutter="20">
                <el-col :span="12">
                    <el-form-item label="软件名称">
                        <el-input v-model="form.softwareName" placeholder="软件名称"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="版本号">
                        <el-input v-model="form.softwareVersion" placeholder="版本号"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="12">
                    <el-form-item label="委托单位">
                        <el-input v-model="form.clientCompany" placeholder="委托单位"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="测试类型">
                        <el-input v-model="form.testType" placeholder="测试类型"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="12">
                    <el-form-item label="报告日期" wi>
                        <el-date-picker type="date" placeholder="报告日期" style="width: 100%;"
                                        v-model="form.reportDate">
                        </el-date-picker>
                    </el-form-item>
                </el-col>
            </el-row>
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
            <el-row :gutter="20">
                <el-col :span="12">
                    <el-form-item label="委托单位">
                        <el-input placeholder="委托单位" v-model="form.clientCompany"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="项目编号">
                        <el-input placeholder="项目编号" v-model="form.projectId"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="12">
                    <el-form-item label="样品名称">
                        <el-input placeholder="样品名称" v-model="form.softwareName"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="版本/型号">
                        <el-input placeholder="版本/型号" v-model="form.softwareVersion"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="12">
                    <el-form-item label="采样日期">
                        <el-date-picker type="date" placeholder="采样日期" style="width: 100%;"
                                        v-model="form.sampleDate"></el-date-picker>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="测试类型">
                        <el-input placeholder="测试类型" v-model="form.testType"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="12">
                    <el-form-item label="测试开始时间">
                        <el-date-picker type="date" placeholder="开始日期" style="width: 100%;"
                                        v-model="form.startDate"></el-date-picker>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="测试结束时间">
                        <el-date-picker type="date" placeholder="结束日期" style="width: 100%;"
                                        v-model="form.endDate"></el-date-picker>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-form-item label="样品状态">
                <el-input placeholder="样品状态" v-model="form.sampleCondition"></el-input>
            </el-form-item>
            <el-form-item label="测试依据">
                <el-input type="textarea" placeholder="测试依据" v-model="form.testStandard"></el-input>
            </el-form-item>
            <el-form-item label="样品清单">
                <el-input type="textarea" placeholder="样品清单" v-model="form.sampleList"></el-input>
            </el-form-item>
            <el-form-item label="测试结论">
                <el-input type="textarea" placeholder="测试结论" v-model="form.testConclusion"></el-input>
            </el-form-item>
            <el-row :gutter="20">
                <el-col :span="12">
                    <el-form-item label="编制人">
                        <el-input placeholder="编制人" v-model="form.compiler"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="日期">
                        <el-date-picker type="date" placeholder="日期" style="width: 100%;"
                                        v-model="form.compileDate"></el-date-picker>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="12">
                    <el-form-item label="审核人">
                        <el-input placeholder="审核人" v-model="form.reviewer"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="日期">
                        <el-date-picker type="date" placeholder="日期" style="width: 100%;"
                                        v-model="form.reviewDate"></el-date-picker>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="12">
                    <el-form-item label="批准人">
                        <el-input placeholder="批准人" v-model="form.approver"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="日期">
                        <el-date-picker type="date" placeholder="日期" style="width: 100%;"
                                        v-model="form.approveDate"></el-date-picker>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="12">
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
                <el-col :span="12">
                    <h3>测试单位联系方式</h3>
                    <ContactInfo></ContactInfo>
                </el-col>
            </el-row>
            <h2>一、测试环境（硬件和软件）</h2>
            <div>
                <h3>硬件环境</h3>
                <el-row :gutter="20">
                    <el-col :span="12">
                        <el-form-item label="硬件类型">
                            <el-input placeholder="硬件类型" v-model="form.hardwareType"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="硬件名称">
                            <el-input placeholder="硬件名称" v-model="form.hardwareName"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="12">
                        <el-form-item label="配置">
                            <el-input placeholder="配置" v-model="form.hardwareConfiguration"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="数量">
                            <el-input placeholder="数量" v-model="form.hardwareNum"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
            </div>
            <div>
                <h3>软件环境</h3>
                <p>操作系统</p>
                <el-row :gutter="20">
                    <el-col :span="12">
                        <el-form-item label="软件名称">
                            <el-input placeholder="软件名称"
                                      v-model="form.softwareEnvironment.operatingSystem.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="软件版本">
                            <el-input placeholder="软件版本"
                                      v-model="form.softwareEnvironment.operatingSystem.version"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <p>辅助工具</p>
                <el-row :gutter="20">
                    <el-col :span="12">
                        <el-form-item label="软件名称">
                            <el-input placeholder="软件名称"
                                      v-model="form.softwareEnvironment.ancillaryTool.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="软件版本">
                            <el-input placeholder="软件版本"
                                      v-model="form.softwareEnvironment.ancillaryTool.version"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <p>开发工具</p>
                <el-row :gutter="20">
                    <el-col :span="12">
                        <el-form-item label="软件名称">
                            <el-input placeholder="软件名称"
                                      v-model="form.softwareEnvironment.developmentTool.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="软件版本">
                            <el-input placeholder="软件版本"
                                      v-model="form.softwareEnvironment.developmentTool.version"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <p>被测试样品</p>
                <el-row :gutter="20">
                    <el-col :span="12">
                        <el-form-item label="软件名称">
                            <el-input placeholder="软件名称"
                                      v-model="form.softwareEnvironment.testSample.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="软件版本">
                            <el-input placeholder="软件版本"
                                      v-model="form.softwareEnvironment.testSample.version"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <p>其他软件</p>
                <el-table :data="form.softwareEnvironment.software" style="width: 100%">
                    <el-table-column type="index"></el-table-column>
                    <el-table-column label="软件名称" align="center">
                        <template slot-scope="item">
                            <el-form-item :show-message="false" label-width="0" class="table-form-item">
                                <el-input v-model="item.row.name"></el-input>
                            </el-form-item>
                        </template>
                    </el-table-column>
                    <el-table-column label="软件版本" align="center">
                        <template slot-scope="item">
                            <el-form-item :show-message="false" label-width="0" class="table-form-item">
                                <el-input v-model="item.row.version"></el-input>
                            </el-form-item>
                        </template>
                    </el-table-column>
                    <el-table-column align="center" width="100">
                        <template slot="header">
                            <el-button
                                size="mini"
                                type="primary"
                                plain
                                circle
                                icon="el-icon-plus"
                                @click="addSoftware"></el-button>
                        </template>
                        <template slot-scope="item">
                            <el-button
                                size="mini"
                                type="danger"
                                plain
                                circle
                                icon="el-icon-delete"
                                @click="deleteSoftware(item.$index)"></el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <div>
                <h3>网络环境</h3>
                <el-input type="textarea" placeholder="网络环境" v-model="form.networkEnvironment"></el-input>
            </div>
            <h2>二、测试依据和参考资料</h2>
            <h3>参考资料</h3>
            <el-form-item label-width="0">
                <SelectAndCreateTags ref="references" v-model="form.references" :default-options="referenceOptions"
                                     :disabled="disabled" option-description="新增一个参考资料 "
                                     v-if="dataReady"
                                     @change="emitChangeEvent('references', form.references)"
                                     @blur="emitBlurEvent('references', form.references)"></SelectAndCreateTags>
            </el-form-item>
            <h3>测试依据</h3>
            <el-form-item label-width="0">
                <SelectAndCreateTags ref="testStandards" v-model="form.testStandards" :default-options="testStandardOptions"
                                     :disabled="disabled" option-description="新增一个测试类型"
                                     v-if="dataReady"
                                     @change="emitChangeEvent('testStandards', form.testStandards)"
                                     @blur="emitBlurEvent('testStandards', form.testStandards)"></SelectAndCreateTags>
            </el-form-item>
            <h2>三、测试内容</h2>
            <div>
                <h3>功能性测试</h3>
                <el-table :data="form.functionTests" style="width: 100%">
                    <el-table-column type="index"></el-table-column>
                    <el-table-column label="功能模块" align="center">
                        <template slot-scope="item">
                            <el-form-item :show-message="false" label-width="0" class="table-form-item">
                                <el-input v-model="item.row.functionModule"></el-input>
                            </el-form-item>
                        </template>
                    </el-table-column>
                    <el-table-column label="功能要求" align="center">
                        <template slot-scope="item">
                            <el-form-item :show-message="false" label-width="0" class="table-form-item">
                                <el-input v-model="item.row.functionRequirement"></el-input>
                            </el-form-item>
                        </template>
                    </el-table-column>
                    <el-table-column label="测试结果" align="center">
                        <template slot-scope="item">
                            <el-form-item :show-message="false" label-width="0" class="table-form-item">
                                <el-input v-model="item.row.testResult"></el-input>
                            </el-form-item>
                        </template>
                    </el-table-column>
                    <el-table-column align="center" width="100">
                        <template slot="header">
                            <el-button
                                size="mini"
                                type="primary"
                                plain
                                circle
                                icon="el-icon-plus"
                                @click="addFunction"></el-button>
                        </template>
                        <template slot-scope="item">
                            <el-button
                                size="mini"
                                type="danger"
                                plain
                                circle
                                icon="el-icon-delete"
                                @click="deleteFunction(item.$index)"></el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <div>
                <h3>效率测试</h3>
                <el-table :data="form.efficiencyTests" style="width: 100%">
                    <el-table-column type="index"></el-table-column>
                    <el-table-column label="测试特性" align="center">
                        <template slot-scope="item">
                            <el-form-item :show-message="false" label-width="0" class="table-form-item">
                                <el-input v-model="item.row.property"></el-input>
                            </el-form-item>
                        </template>
                    </el-table-column>
                    <el-table-column label="测试说明" align="center">
                        <template slot-scope="item">
                            <el-form-item :show-message="false" label-width="0" class="table-form-item">
                                <el-input v-model="item.row.testExplanation"></el-input>
                            </el-form-item>
                        </template>
                    </el-table-column>
                    <el-table-column label="测试结果" align="center">
                        <template slot-scope="item">
                            <el-form-item :show-message="false" label-width="0" class="table-form-item">
                                <el-input v-model="item.row.testResult"></el-input>
                            </el-form-item>
                        </template>
                    </el-table-column>
                    <el-table-column align="center" width="100">
                        <template slot="header">
                            <el-button
                                size="mini"
                                type="primary"
                                plain
                                circle
                                icon="el-icon-plus"
                                @click="addEfficiency"></el-button>
                        </template>
                        <template slot-scope="item">
                            <el-button
                                size="mini"
                                type="danger"
                                plain
                                circle
                                icon="el-icon-delete"
                                @click="deleteEfficiency(item.$index)"></el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <div>
                <h3>可移植性测试</h3>
                <el-table :data="form.portabilityTests" style="width: 100%">
                    <el-table-column type="index"></el-table-column>
                    <el-table-column label="测试特性" align="center">
                        <template slot-scope="item">
                            <el-form-item :show-message="false" label-width="0" class="table-form-item">
                                <el-input v-model="item.row.property"></el-input>
                            </el-form-item>
                        </template>
                    </el-table-column>
                    <el-table-column label="测试说明" align="center">
                        <template slot-scope="item">
                            <el-form-item :show-message="false" label-width="0" class="table-form-item">
                                <el-input v-model="item.row.testExplanation"></el-input>
                            </el-form-item>
                        </template>
                    </el-table-column>
                    <el-table-column label="测试结果" align="center">
                        <template slot-scope="item">
                            <el-form-item :show-message="false" label-width="0" class="table-form-item">
                                <el-input v-model="item.row.testResult"></el-input>
                            </el-form-item>
                        </template>
                    </el-table-column>
                    <el-table-column align="center" width="100">
                        <template slot="header">
                            <el-button
                                size="mini"
                                type="primary"
                                plain
                                circle
                                icon="el-icon-plus"
                                @click="addPortability"></el-button>
                        </template>
                        <template slot-scope="item">
                            <el-button
                                size="mini"
                                type="danger"
                                plain
                                circle
                                icon="el-icon-delete"
                                @click="deletePortability(item.$index)"></el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <div>
                <h3>易用性测试</h3>
                <el-table :data="form.usabilityTests" style="width: 100%">
                    <el-table-column type="index"></el-table-column>
                    <el-table-column label="测试特性" align="center">
                        <template slot-scope="item">
                            <el-form-item :show-message="false" label-width="0" class="table-form-item">
                                <el-input v-model="item.row.property"></el-input>
                            </el-form-item>
                        </template>
                    </el-table-column>
                    <el-table-column label="测试说明" align="center">
                        <template slot-scope="item">
                            <el-form-item :show-message="false" label-width="0" class="table-form-item">
                                <el-input v-model="item.row.testExplanation"></el-input>
                            </el-form-item>
                        </template>
                    </el-table-column>
                    <el-table-column label="测试结果" align="center">
                        <template slot-scope="item">
                            <el-form-item :show-message="false" label-width="0" class="table-form-item">
                                <el-input v-model="item.row.testResult"></el-input>
                            </el-form-item>
                        </template>
                    </el-table-column>
                    <el-table-column align="center" width="100">
                        <template slot="header">
                            <el-button
                                size="mini"
                                type="primary"
                                plain
                                circle
                                icon="el-icon-plus"
                                @click="addUsability"></el-button>
                        </template>
                        <template slot-scope="item">
                            <el-button
                                size="mini"
                                type="danger"
                                plain
                                circle
                                icon="el-icon-delete"
                                @click="deleteUsability(item.$index)"></el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <div>
                <h3>可靠性测试</h3>
                <el-table :data="form.reliabilityTests" style="width: 100%">
                    <el-table-column type="index"></el-table-column>
                    <el-table-column label="测试特性" align="center">
                        <template slot-scope="item">
                            <el-form-item :show-message="false" label-width="0" class="table-form-item">
                                <el-input v-model="item.row.property"></el-input>
                            </el-form-item>
                        </template>
                    </el-table-column>
                    <el-table-column label="测试说明" align="center">
                        <template slot-scope="item">
                            <el-form-item :show-message="false" label-width="0" class="table-form-item">
                                <el-input v-model="item.row.testExplanation"></el-input>
                            </el-form-item>
                        </template>
                    </el-table-column>
                    <el-table-column label="测试结果" align="center">
                        <template slot-scope="item">
                            <el-form-item :show-message="false" label-width="0" class="table-form-item">
                                <el-input v-model="item.row.testResult"></el-input>
                            </el-form-item>
                        </template>
                    </el-table-column>
                    <el-table-column align="center" width="100">
                        <template slot="header">
                            <el-button
                                size="mini"
                                type="primary"
                                plain
                                circle
                                icon="el-icon-plus"
                                @click="addReliability"></el-button>
                        </template>
                        <template slot-scope="item">
                            <el-button
                                size="mini"
                                type="danger"
                                plain
                                circle
                                icon="el-icon-delete"
                                @click="deleteReliability(item.$index)"></el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <div>
                <h3>可维护性测试</h3>
                <el-table :data="form.maintainabilityTests" style="width: 100%">
                    <el-table-column type="index"></el-table-column>
                    <el-table-column label="测试特性" align="center">
                        <template slot-scope="item">
                            <el-form-item :show-message="false" label-width="0" class="table-form-item">
                                <el-input v-model="item.row.property"></el-input>
                            </el-form-item>
                        </template>
                    </el-table-column>
                    <el-table-column label="测试说明" align="center">
                        <template slot-scope="item">
                            <el-form-item :show-message="false" label-width="0" class="table-form-item">
                                <el-input v-model="item.row.testExplanation"></el-input>
                            </el-form-item>
                        </template>
                    </el-table-column>
                    <el-table-column label="测试结果" align="center">
                        <template slot-scope="item">
                            <el-form-item :show-message="false" label-width="0" class="table-form-item">
                                <el-input v-model="item.row.testResult"></el-input>
                            </el-form-item>
                        </template>
                    </el-table-column>
                    <el-table-column align="center" width="100">
                        <template slot="header">
                            <el-button
                                size="mini"
                                type="primary"
                                plain
                                circle
                                icon="el-icon-plus"
                                @click="addMaintainability"></el-button>
                        </template>
                        <template slot-scope="item">
                            <el-button
                                size="mini"
                                type="danger"
                                plain
                                circle
                                icon="el-icon-delete"
                                @click="deleteMaintainability(item.$index)"></el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </el-form>
        <br>
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
import testReportForm from '../../assets/jsons/testReportForm.json'
import SelectAndCreateTags from "@/components/ChooseAndSelect/SelectAndCreateTags.vue";
import ContactInfo from "@/components/Infomation/ContactInfo.vue";

export default {
    name: 'TestReportForm',
    components: { ContactInfo, SelectAndCreateTags },
    props: ['writable', 'processId', 'checking'],
    data() {
        return {
            form: {
                softwareName: '',
                softwareVersion: '',
                clientCompany: '',
                testType: '',
                reportDate: '',
                projectId: '',
                sampleDate: '',
                startDate: '',
                endDate: '',
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
                compileDate: '',
                reviewer: '',
                reviewDate: '',
                approver: '',
                approveDate: '',
                hardwareType: '',
                hardwareName: '',
                hardwareConfiguration: '',
                hardwareNum: '',
                softwareEnvironment: {
                    operatingSystem: {
                        name: '',
                        version: '',
                    },
                    software: [
                        {
                            name: '',
                            version: ''
                        }
                    ],
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
                references: [],
                testStandards: [],
                functionTests: [{ functionModule: '', functionRequirement: '', testResult: '' }],
                efficiencyTests: [{ property: '', testExplanation: '', testResult: '' }],
                portabilityTests: [{ property: '', testExplanation: '', testResult: '' }],
                usabilityTests: [{ property: '', testExplanation: '', testResult: '' }],
                reliabilityTests: [{ property: '', testExplanation: '', testResult: '' }],
                maintainabilityTests: [{ property: '', testExplanation: '', testResult: '' }]
            },
            testStandardOptions: [
                { value: "GB/T 25000.51-2016", label: "GB/T 25000.51-2016" },
                { value: "GB/T 25000.10-2016", label: "GB/T 25000.10-2016" },
                { value: "GB/T 28452-2012", label: "GB/T 28452-2012" },
                { value: "GB/T 30961-2014", label: "GB/T 30961-2014" },
                { value: "NST-03-WI12-2011", label: "NST-03-WI12-2011" },
                { value: "NST-03-WI13-2011", label: "NST-03-WI13-2011" },
                { value: "NST-03-WI22-2014", label: "NST-03-WI22-2014" },
            ],
            referenceOptions: [],
            dataReady: false
        }
    },
    methods: {
        emitBlurEvent(ref, value, withDelay = false) {
            if (withDelay) {
                setTimeout(() => this.$refs[ref].$emit('el.form.blur', value), 50);
            } else {
                this.$refs[ref].$emit('el.form.blur', value);
            }
        },
        emitChangeEvent(ref, value) {
            console.log(ref)
            this.$refs[ref].$emit('el.form.change', value);
        },
        addSoftware() {
            const item = {
                name: '',
                version: ''
            }
            this.form.softwareEnvironment.software.push(item)
        },
        deleteSoftware(index) {
            this.form.softwareEnvironment.software.splice(index, 1)
        },
        addFunction() {
            const item = {
                functionModule: '',
                functionRequirement: '',
                testResult: ''
            }
            this.form.functionTests.push(item)
        },
        deleteFunction(index) {
            this.form.functionTests.splice(index, 1)
        },
        addEfficiency() {
            const item = {
                property: '',
                testExplanation: '',
                testResult: ''
            }
            this.form.efficiencyTests.push(item)
        },
        deleteEfficiency(index) {
            this.form.efficiencyTests.splice(index, 1)
        },
        addReliability() {
            const item = {
                property: '',
                testExplanation: '',
                testResult: ''
            }
            this.form.reliabilityTests.push(item)
        },
        deleteReliability(index) {
            this.form.reliabilityTests.splice(index, 1)
        },
        addPortability() {
            const item = {
                property: '',
                testExplanation: '',
                testResult: ''
            }
            this.form.portabilityTests.push(item)
        },
        deletePortability(index) {
            this.form.portabilityTests.splice(index, 1)
        },
        addUsability() {
            const item = {
                property: '',
                testExplanation: '',
                testResult: ''
            }
            this.form.usabilityTests.push(item)
        },
        deleteUsability(index) {
            this.form.usabilityTests.splice(index, 1)
        },
        addMaintainability() {
            const item = {
                property: '',
                testExplanation: '',
                testResult: ''
            }
            this.form.maintainabilityTests.push(item)
        },
        deleteMaintainability(index) {
            this.form.maintainabilityTests.splice(index, 1)
        },
        submit() {
            this.doSubmit();
        },
        doSubmit() {
            if (this.writable) {
                console.log(JSON.stringify(this.form))
                console.log(this.processId)
                this.$bus.$emit('submitTestReport')
                this.axios.put('/api/workflow/processes/' + this.processId + '/forms/' + 'TestReportForm', JSON.stringify(this.form), {
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
                this.axios.put('/api/workflow/processes/' + this.processId + '/forms/' + 'TestReportForm', JSON.stringify(this.form), {
                    headers: {
                        'Content-Type': 'text/plain'
                    }
                }).then(this.handleSaveResult, this.handleError)
            }
        },
        pass() {
            this.$bus.$emit('checkTestReport', true)
        },
        refute() {
            this.$bus.$emit('checkTestReport', false)
        },
        handleResult(res) {
            console.log(res)
            this.$bus.$emit('submitTestReport')
            if (res.status === 200) {
                alert('上传成功')
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
        autoFill() {
            this.axios.get('/api/workflow/processes/' + this.processId + '/forms/' + 'ApplicationForm').then(
                (res) => {
                    if (res.status === 200) {
                        console.log(res.data)
                        this.form.softwareName = res.data.softwareName
                        this.form.softwareVersion = res.data.softwareVersion
                        this.form.clientCompany = res.data.companyChineseName
                        this.form.address = res.data.companyInfo.address
                        this.form.fax = res.data.companyInfo.fax
                        this.form.contract = res.data.companyInfo.contractPerson
                        this.form.telephone = res.data.companyInfo.telephone
                        this.form.email = res.data.companyInfo.email
                        this.form.website = res.data.companyInfo.website
                    }
                },
                (err) => {
                    if (err.response.status === 403) {
                        alert('指定流程或表单对该用户不可见')
                    } else if (err.response.status === 404) {
                        alert('指定流程或表单不存在')
                    }
                }
            )
        }
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
    },
    updated() {
        console.log("form updated")
    },
    created() {
        this.axios.get('/api/workflow/processes/' + this.processId + '/forms/' + 'TestReportForm').then(
            (res) => {
                if (res.status === 200) {
                    if (res.data) {
                        this.form = res.data
                        console.log('读取成功')
                    } else {
                        this.form = testReportForm
                    }
                    
                    if (this.writable) {
                        this.autoFill()
                    }
                    this.dataReady = true
                }
                
            },
            (err) => {
                if (err.response.status === 403) {
                    alert('指定流程或表单对该用户不可见')
                } else if (err.response.status === 404) {
                    alert('指定流程或表单不存在')
                }
                this.form = testReportForm
                this.dataReady = true
            }
        )
    }
}
</script>

<style scoped>
.report {
    width: 94%;
    margin-top: 2%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    padding: 5%;
}

.table-form-item {
    margin-bottom: 0;
}
</style>
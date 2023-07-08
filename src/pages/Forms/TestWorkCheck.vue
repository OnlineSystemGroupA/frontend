<template>
    <div class="check">
        <h1>软件项目委托测试工作检查表</h1>
        <el-form label-width="100px" label-position="left" :disabled="disable">
            <el-row>
                <el-col class="col">
                    <el-form-item label="软件名称">
                        <el-input placeholder="软件名称" v-model="form.softwareName"></el-input>
                    </el-form-item>
                </el-col>
                <el-col class="col">
                    <el-form-item label="版本号">
                        <el-input placeholder="版本号" v-model="form.softwareVersion"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-col class="column">
                <el-form-item label="委托单位">
                    <el-input placeholder="委托单位" v-model="form.clientCompany"></el-input>
                </el-form-item>
            </el-col>


            <el-row>
                <el-col class="col">
                    <el-form-item label="起始日期">
                        <el-date-picker placeholder="起始日期" v-model="form.startDate"></el-date-picker>
                    </el-form-item>
                </el-col>
                <el-col class="col">
                    <el-form-item label="预计完成日期">
                        <el-date-picker placeholder="预计完成日期" v-model="form.expectedDueDate"></el-date-picker>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row>
                <el-col class="col">
                    <el-form-item label="主测人">
                        <el-input placeholder="主测人" v-model="form.tester"></el-input>
                    </el-form-item>
                </el-col>
                <el-col class="col">
                    <el-form-item label="实际完成时间">
                        <el-date-picker placeholder="实际完成时间" v-model="form.actualDueDate"></el-date-picker>
                    </el-form-item>
                </el-col>
            </el-row>


            <h2>一、前期指导工作</h2>
            <el-form-item v-for="item in form.prework" :key="item.name">
                <h3>{{ item.name }}</h3>
                <el-form-item v-for="(content, index) in item.contents" :key="index">
                    <li>{{ content.content }}</li>
                    <el-radio-group v-model="content.confirmeded">
                        <el-radio :label="true">确认</el-radio>
                        <el-radio :label="false">否决</el-radio>
                    </el-radio-group>
                </el-form-item>
            </el-form-item>

            <h2>二、对委托测试软件的可测状态进行评估</h2>
            <el-form-item v-for="item in form.assessment" :key="item.title">
                <h3>{{ item.title }}</h3>
                <el-form-item v-for="(content, index) in item.contents" :key="index">
                    <li>{{ content.content }}</li>
                    <el-radio-group v-model="content.confirmed">
                        <el-radio :label="true">确认</el-radio>
                        <el-radio :label="false">否决</el-radio>
                    </el-radio-group>
                </el-form-item>
            </el-form-item>

            <h2>三、实施测试</h2>
            <el-form-item v-for="item in form.testment" :key="item.title">
                <h3>{{ item.title }}</h3>
                <el-form-item v-for="(content, index) in item.contents" :key="index">
                    <li>{{ content.content }}</li>
                    <el-radio-group v-model="content.confirmed">
                        <el-radio :label="true">确认</el-radio>
                        <el-radio :label="false">否决</el-radio>
                    </el-radio-group>
                </el-form-item>
            </el-form-item>

            <el-form-item label="检查人">
                <el-input v-model="form.checker" placeholder="检查人"></el-input>
            </el-form-item>
        </el-form>
        <el-row v-show="!disable">
            <el-button type="success" @click="submit" :disabled="disable">提交</el-button>
            <el-button type="primary" @click="save" :disabled="disable">保存</el-button>
        </el-row>
        <el-row v-show="check">
            <el-button type="success" @click="pass" :disabled="!disable">通过</el-button>
            <el-button type="danger" @click="refute" :disabled="!disable">驳回</el-button>
        </el-row>
    </div>
</template>

<script>
export default {
    name: 'TestWorkCheck',
    props: ['writable', 'processId', 'checking'],
    data() {
        return {
            form: {
                softwareName: '',
                softwareVersion: '',
                clientCompany: '',
                startDate: '',
                expectedDueDate: '',
                tester: '',
                actualDueDate: '',
                prework: [
                    {
                        name: '接受委托单位委托测试申请',
                        contents: [
                            {
                                content: '为委托单位提供详尽的有关软件项目委托测试的相关法律法规、优惠政策、业务办理流程等事项。',
                                confirmed: false,
                            },
                            {
                                content: '建议委托单位阅读《软件项目委托测试流程图和工作介绍》，了解申报流程。',
                                confirmed: false,
                            },
                            {
                                content: '根据《软件项目委托测试提交材料》，指导委托单位提交申报资料。',
                                confirmed: false,
                            },
                        ]
                    },
                    {
                        title: '填写《软件项目委托测试申请表》、《委托测试软件功能列表》，按《软件项目委托测试提交材料》提交材料',
                        contents: [
                            {
                                content: '确保委托方应填内容正确、完备；纸质材料已盖公章',
                                confirmed: false,
                            },
                            {
                                content: '明确委托方按《软件项目委托测试提交材料》提交材料',
                                confirmed: false,
                            }
                        ]
                    },
                    {
                        title: '签订《软件项目委托测试合同》、《软件项目委托测试保密协议》',
                        contents: [
                            {
                                content: '合同及保密协议内容、数量符合要求',
                                confirmed: false,
                            },
                            {
                                content: '合同编号方式符合要求',
                                confirmed: false,
                            }
                        ]
                    },

                ],
                assessment: [
                    {
                        title: '对委托测试软件的可测状态进行评估',
                        contents: [
                            {
                                content: '对委托测试软件的可测状态进行评估',
                                confirmed: false
                            }
                        ]
                    }
                ],
                testment: [
                    {
                        title: '编制测试方案',
                        contents: [
                            {
                                content: '测试方案必须经中心质量负责人审核，技术负责人批准方能生效。',
                                confirmed: false,
                            },
                            {
                                content: '委托测试软件介绍：简要介绍委托测试软件的功能特点、应用行业及技术特性等。',
                                confirmed: false,
                            },
                            {
                                content: '软件功能：以委托单位提供的功能列表为依据，以表格形式列出所有功能项目，并对功能列表的各功能项目按照层次关系进行编号，以便于标识。',
                                confirmed: false,
                            },
                            {
                                content: '资源需求：资源需求要列出人员需求和软硬件设备需求。人员需求要列出人员名单、职称及所承担的角色（项目组长或成员）；软硬件设备需求要根据委托测试软件要求的运行环境及中心的设备情况，列出硬件设备的名称、型号、配置、机身编号、用途，软件的名称、版本号、用途等。',
                                confirmed: false,
                            },
                            {
                                content: '参考文档：列出编制本方案所参考的标准、规范及用户文档等的名称、作者、类型、版本/标识号。',
                                confirmed: false,
                            }
                        ]
                    },
                    {
                        title: '搭建测试环境',
                        contents: [
                            {
                                content: '中心按照委托方提供的委托测试软件运行环境搭建测试环境。',
                                confirmed: false,
                            }
                        ]
                    },
                    {
                        title: '实施测试',
                        contents: [
                            {
                                content: '测试过程主要以测试方案为依据，按照用户手册所述的操作方法运行软件，考察软件是否具有用户手册所描述的操作界面，对功能列表的主要功能逐项进行符合性测试并作记录，对未测的次要功能或细节部分，应作出说明。',
                                confirmed: false,
                            },
                            {
                                content: '对文档的测试：要从完整性、正确性、一致性、易理解性、易浏览性和外观质量六个方面，对用户文档进行评审。',
                                confirmed: false,
                            },
                            {
                                content: '对测试过程观察到的结果进行如实记录，对发现的问题整理成问题清单',
                                confirmed: false,
                            }
                        ]
                    },
                    {
                        title: '编制测试报告',
                        contents: [
                            {
                                content: '根据《软件项目委托测试报告编制作业指导书》和测试结果编制测试报告。',
                                confirmed: false,
                            },
                            {
                                content: '检查测试报告，并填写《测试报告检查表》。',
                                confirmed: false,
                            },
                            {
                                content: '测试报告的编码请参阅《程序文件》。',
                                confirmed: false,
                            },
                            {
                                content: '报告审查：在分发报告前，应按中心质量管理程序对报告进行严格审查。',
                                confirmed: false,
                            }
                        ]
                    },
                    {
                        title: '评测资料归档',
                        contents: [
                            {
                                content: '委托测试的软件产品及测试相关文件、原始记录等能够随时复现测试过程所需的材料，也同测试报告一并交由中心资料室的材料管理员归档，以作为日后对测试结果产生异议时进行复核或仲裁的依据。上述材料由中心保存三年后，中心根据委托申请时要求进行处理。',
                                confirmed: false,
                            },
                            {
                                content: '该检查表与本次委托测试归档资料一同归档。',
                                confirmed: false,
                            },
                            {
                                content: '确保归档资料方便查找取阅',
                                confirmed: false,
                            }
                        ]
                    }
                ],
                checker: '',
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
    }
}

</script>

<style scoped>
.check {
    width: 94%;
    margin-top: 2%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    padding: 5%;
}

.col {
    width: 50%;
    padding: 10px;
}

.column {
    width: 100%;
    padding: 10px;
}
</style>
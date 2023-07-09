<template>
    <div class="document">
        <el-form label-width="120px" label-position="left" :disabled='disable' ref="form" :model="form" :rules="mainRules">
            <el-row :gutter="20">
                <el-col :span="12">
                    <el-form-item label="软件名称" prop="softwareName">
                        <el-input placeholder="软件名称" v-model="form.softwareName"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="版本号" prop="softwareVersion">
                        <el-input placeholder="版本号" v-model="form.softwareVersion"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="12">
                    <el-form-item label="委托单位" prop="clientCompany">
                        <el-input placeholder="委托单位" v-model="form.clientCompany"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="高校评审组" prop="reviewGroup">
                        <el-input placeholder="高校审评组" v-model="form.reviewGroup"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="12">
                    <el-form-item label="审评人" prop="reviewer">
                        <el-input placeholder="审评人" v-model="form.reviewer"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="审评完成日期" prop="finishDate">
                        <el-date-picker type="date" placeholder="选择日期" style="width: 100%;"
                                        v-model="form.finishDate"></el-date-picker>
                    </el-form-item>
                </el-col>
            </el-row>

            <h2>一.软件说明部分审评</h2>
            <div v-for="(review, reviewIndex) in form.reviewsOnExplanation" :key="review.title" style="padding: 0 40px">
                <h3>{{ reviewIndex + 1 }}-{{ review.title }}</h3>
                <div v-for="(item, itemIndex) in review.items" :key="item.content" style="padding: 0 40px">
                    <li>{{ item.content }}</li>
                    <el-row>
                        <el-col class="col">
                            <el-form-item label="评审结果" :rules="itemRules.result"
                                          :prop="'reviewsOnExplanation.' + reviewIndex + '.items.' + itemIndex + '.result'">
                                <el-input v-model="item.result" placeholder="评审结果"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col class="col">
                            <el-form-item label="评审结果说明" :rules="itemRules.explanation"
                                          :prop="'reviewsOnExplanation.' + reviewIndex + '.items.' + itemIndex + '.explanation'">
                                <el-input type="textarea" v-model="item.explanation" placeholder="评审结果说明"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </div>
            </div>
            <h2>二.软件文档集审评</h2>
            <div v-for="(review, reviewIndex) in form.reviewsOnDocuments" :key="review.title" style="padding: 0 40px">
                <h3>{{ reviewIndex + 1 }}-{{ review.title }}</h3>
                <div v-for="(item, itemIndex) in review.items" :key="item.content" style="padding: 0 40px">
                    <li>{{ item.content }}</li>
                    <el-row>
                        <el-col class="col">
                            <el-form-item label="评审结果" :rules="itemRules.result"
                                          :prop="'reviewsOnDocuments.' + reviewIndex + '.items.' + itemIndex + '.result'">
                                <el-input v-model="item.result" placeholder="评审结果"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col class="col">
                            <el-form-item label="评审结果说明" :rules="itemRules.explanation"
                                          :prop="'reviewsOnDocuments.' + reviewIndex + '.items.' + itemIndex + '.explanation'">
                                <el-input type="textarea" v-model="item.explanation" placeholder="评审结果说明"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </div>
            </div>
            <el-form-item label="检查人" prop="checker" style="width: 50%">
                <el-input placeholder="检查人" v-model="form.checker"></el-input>
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
import documentReviewForm from '../../assets/jsons/documentReviewForm.json'

export default {
    name: 'DocumentReviewForm',
    props: ['writable', 'processId', 'checking'],
    data() {
        return {
            form: {
                softwareName: '',
                softwareVersion: '',
                clientCompany: '',
                reviewGroup: '',
                reviewer: '',
                finishDate: '',
                reviewsOnExplanation: [
                    {
                        title: '可用性',
                        items: [
                            {
                                content: '产品说明对于用户和潜在需方是可用的',
                                result: '',
                                explanation: ''
                            },
                        ]
                    },
                    {
                        title: '内容',
                        items: [
                            {
                                content: '足够用于评价适用性',
                                result: '',
                                explanation: ''
                            },
                            {
                                content: '排除内在的不一致',
                                result: '',
                                explanation: ''
                            },
                            {
                                content: '可测试或可验证的',
                                result: '',
                                explanation: ''
                            },
                        ]
                    },
                    {
                        title: '标识和标示',
                        items: [
                            {
                                content: '显示唯一标识',
                                result: '',
                                explanation: ''
                            },
                            {
                                content: '通过名称版本和日期指称',
                                result: '',
                                explanation: ''
                            },
                            {
                                content: '包含供方和至少一家经销商的名称和地址',
                                result: '',
                                explanation: ''
                            },
                        ]
                    },
                    {
                        title: '功能性陈述',
                        items: [
                            {
                                content: '根据GB/T 25000.51-2016规范对软件的功能进行陈述',
                                result: '',
                                explanation: ''
                            },
                        ]
                    },
                    {
                        title: '可靠性陈述',
                        items: [
                            {
                                content: '根据GB/T 25000.51-2016规范对软件的可靠性进行陈述',
                                result: '',
                                explanation: ''
                            },
                        ]
                    },
                    {
                        title: '易用性陈述',
                        items: [
                            {
                                content: '根据GB/T 25000.51-2016规范对软件的易用性进行陈述',
                                result: '',
                                explanation: ''
                            },
                        ]
                    },
                    {
                        title: '效率陈述',
                        items: [
                            {
                                content: '根据GB/T 25000.51-2016规范对软件的效率进行陈述',
                                result: '',
                                explanation: ''
                            },
                        ]
                    },
                    {
                        title: '维护性陈述',
                        items: [
                            {
                                content: '根据GB/T 25000.51-2016规范对软件的维护性进行陈述',
                                result: '',
                                explanation: ''
                            },
                        ]
                    },
                    {
                        title: '可移植性陈述',
                        items: [
                            {
                                content: '根据GB/T 25000.51-2016规范对软件的可移植性进行陈述',
                                result: '',
                                explanation: ''
                            },
                        ]
                    },
                    {
                        title: '使用质量陈述',
                        items: [
                            {
                                content: '根据GB/T 25000.51-2016规范对软件的使用质量进行陈述',
                                result: '',
                                explanation: ''
                            },
                        ]
                    }
                ],
                reviewsOnDocuments: [
                    {
                        title: '完备性',
                        items: [
                            {
                                content: '包含所有必需信息',
                                result: '',
                                explanation: ''
                            },
                            {
                                content: '包含产品说明中所有功能以及可调用功能的说明',
                                result: '',
                                explanation: ''
                            },
                            {
                                content: '包含可靠性特征及其操作',
                                result: '',
                                explanation: ''
                            },
                            {
                                content: '包含已处理的和可造成系统失效终止的差错和失效',
                                result: '',
                                explanation: ''
                            },
                            {
                                content: '必要的数据备份与恢复指南',
                                result: '',
                                explanation: ''
                            },
                            {
                                content: '所有关键功能的完备的细则信息和参考信息',
                                result: '',
                                explanation: ''
                            },
                            {
                                content: '陈述产品说明中所有限制',
                                result: '',
                                explanation: ''
                            },
                            {
                                content: '陈述最大最小磁盘空间',
                                result: '',
                                explanation: ''
                            },
                            {
                                content: '关于应用管理职能的所有必要信息',
                                result: '',
                                explanation: ''
                            },
                            {
                                content: '让用户验证是否完成应用管理职能的信息',
                                result: '',
                                explanation: ''
                            },
                            {
                                content: '文档集分若干部分，需给出完整标识',
                                result: '',
                                explanation: ''
                            },
                        ]
                    },
                    {
                        title: '正确性',
                        items: [
                            {
                                content: '文档中所有的信息都是正确的',
                                result: '',
                                explanation: ''
                            },
                            {
                                content: '没有歧义的信息',
                                result: '',
                                explanation: ''
                            },
                        ]
                    },
                    {
                        title: '一致性',
                        items: [
                            {
                                content: '文档集中的各文档不相互矛盾, 与产品说明也不矛盾',
                                result: '',
                                explanation: ''
                            },
                        ]
                    },
                    {
                        title: '易理解性',
                        items: [
                            {
                                content: '使用用户可理解的术语和文体',
                                result: '',
                                explanation: ''
                            },
                            {
                                content: '文档集为用户使用该软件提供必要的信息',
                                result: '',
                                explanation: ''
                            }
                        ]
                    },
                    {
                        title: '易学性',
                        items: [
                            {
                                content: '为如何使用该软件提供了足够的信息',
                                result: '',
                                explanation: ''
                            },
                        ]
                    },
                    {
                        title: '可操作性',
                        items: [
                            {
                                content: '电子文档可打印',
                                result: '',
                                explanation: ''
                            },
                            {
                                content: '有目次(主题词列表)和索引',
                                result: '',
                                explanation: ''
                            },
                            {
                                content: '不常用术语缩略语有定义',
                                result: '',
                                explanation: ''
                            }
                        ]
                    }
                ],
                checker: ''
            },
            mainRules: {
                softwareName: { required: true, message: "请填写软件名称", trigger: 'blur' },
                softwareVersion: { required: true, message: "请填写版本号", trigger: 'blur' },
                clientCompany: { required: true, message: "请填写委托单位", trigger: 'blur' },
                reviewGroup: { required: true, message: "请填写高校评审组", trigger: 'blur' },
                reviewer: { required: true, message: "请填写审评人", trigger: 'blur' },
                finishDate: { required: true, message: "请填写审评完成日期", trigger: ['blur', 'change'] },
                checker: { required: true, message: "请填写检查人", trigger: 'blur' }
            },
            itemRules: {
                result: { required: true, message: "请填写评审结果", trigger: 'blur' },
                explanation: { required: true, message: "请填写评审结果说明", trigger: 'blur' }
            }
        }
    },
    methods: {
        submit() {
            this.$refs.form.validate((valid) => {
                if (valid) {
                    this.doSubmit();
                } else {
                    console.log(this.form)
                    alert("软件文档评审表不符合要求，请修改软件文档评审表！");
                }
            })
        },
        doSubmit() {
            if (this.writable) {
                //console.log(JSON.stringify(this.form))
                //console.log(this.processId)
                this.axios.put('/api/workflow/processes/' + this.processId + '/forms/' + 'DocumentReviewForm', JSON.stringify(this.form), {
                    headers: {
                        'Content-Type': 'text/plain'
                    }
                }).then(this.handleResult, this.handleError)
            }
        },
        save() {
        },
        pass() {
        },
        refute() { },
        handleResult(res) {
            console.log(res)
            if (res.status === 200) {
                alert('上传成功')
                //this.$bus.$emit('submitContract')
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
        console.log(documentReviewForm)
    },
    created() {
        this.axios.get('/api/workflow/processes/' + this.processId + '/forms/' + 'DocumentReviewForm').then(
            (res) => {
                if (res.status === 200) {
                    if (res.data) {
                        this.form = res.data
                    }
                    else {
                        this.form = documentReviewForm
                    }
                    if (this.writable) {
                        this.autoFill()
                    }
                }

            },
            (err) => {
                if (err.response.status === 403) {
                    alert('指定流程或表单对该用户不可见')
                } else if (err.response.status === 404) {
                    alert('指定流程或表单不存在')
                }
                this.form = documentReviewForm
            }
        )
    }
}
</script>

<style scoped>
.document {
    width: 94%;
    margin-top: 2%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    padding: 5%;
}

.col {
    width: 50%;
    padding: 10px;
}
</style>
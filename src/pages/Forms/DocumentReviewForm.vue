<template>
	<div class="document">
		<el-form label-width="100px" label-position="left" :disabled='disable'>
			<el-form-item label="软件名称">
				<el-input placeholder="软件名称" v-model="form.softwareName"></el-input>
			</el-form-item>
			<el-form-item label="版本号">
				<el-input placeholder="版本号" v-model="form.softwareVersion"></el-input>
			</el-form-item>
			<el-form-item label="委托单位">
				<el-input placeholder="委托单位" v-model="form.clientCompany"></el-input>
			</el-form-item>
			<el-form-item label="高校评审组">
				<el-input placeholder="高校审评组" v-model="form.reviewGroup"></el-input>
			</el-form-item>
			<el-form-item label="审评人">
				<el-input placeholder="审评人" v-model="form.reviewer"></el-input>
			</el-form-item>
			<el-form-item label="审评完成日期">
				<el-date-picker type="date" placeholder="选择日期" style="width: 100%;"
					v-model="form.finishDate"></el-date-picker>
			</el-form-item>
			<el-form label-width="100px" label-position="left">
				<h2>一.软件说明部分审评</h2>
				<el-form-item v-for="(review, index) in form.reviewsOnExplanation" :key="index">
					<h3>{{ index + 1 }}-{{ review.title }}</h3>
					<el-form-item v-for="(item, item_index) in review.items" :key="item_index">
						<li>{{ item.content }}</li>
						<el-row>
							<el-col class="col">
								<el-form-item label="评审结果">
									<el-input v-model="item.result" placeholder="评审结果"></el-input>
								</el-form-item>
							</el-col>
							<el-col class="col">
								<el-form-item label="评审结果说明">
									<el-input type="textarea" v-model="item.explanation" placeholder="评审结果说明"></el-input>
								</el-form-item>
							</el-col>
						</el-row>
					</el-form-item>
				</el-form-item>
			</el-form>
			<el-form label-width="100px" label-position="left">
				<h2>二.软件文档集审评</h2>
				<el-form-item v-for="(review, index) in form.reviewsOnDocuments" :key="index">
					<h3>{{ index + 1 }}-{{ review.title }}</h3>
					<el-form-item v-for="(item, item_index) in review.items" :key="item_index">
						<li>{{ item.content }}</li>
						<el-row>
							<el-col class="col">
								<el-form-item label="评审结果">
									<el-input v-model="item.result" placeholder="评审结果"></el-input>
								</el-form-item>
							</el-col>
							<el-col class="col">
								<el-form-item label="评审结果说明">
									<el-input type="textarea" v-model="item.explanation" placeholder="评审结果说明"></el-input>
								</el-form-item>
							</el-col>
						</el-row>
					</el-form-item>
				</el-form-item>
			</el-form>
			<el-form-item label="检查人">
				<el-input placeholder="检查人" v-model="checker"></el-input>
			</el-form-item>
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
	name: 'DocumentReviewForm',
	props: ['writable', 'formId', 'checking'],
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
.document {
	width: 800px;
	align-items: center;
	border-radius: 30px;
	margin: 30px;
	padding: 50px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}

.col {
	width: 50%;
	padding: 10px;
}
</style>
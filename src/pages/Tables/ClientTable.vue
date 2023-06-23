<template>
	<div class="table">
		<div>
			<h2>用户表格</h2>
		</div>
		<div style="width: 50%">
			<h4>查找关键字</h4>
			<el-input placeholder="请输入关键字" prefix-icon="el-icon-search" v-model="keyword">
				<el-button slot="append" icon="el-icon-search"></el-button>
			</el-input>
		</div>
		<div>
			<br>
			<span>排序</span>
			<br>
			<el-radio-group v-model="sortKey">
				<el-radio v-for="(sort, index) in sortKeys" :key="index" :label="sort.value">{{ sort.label }}</el-radio>
			</el-radio-group>
		</div>
		<br />
		<el-table :data="currentItemList" border style="width: 100%; height: auto;">
			<el-table-column prop="id" label="id" style="width: 20%; height: auto;">
				<template slot-scope="scope">
					<p @click="pickClient(scope.row.id)">{{ scope.row.id }}</p>
				</template>
			</el-table-column>
			<el-table-column prop="userName" label="用户名" style="width: 20%; height: auto;">
			</el-table-column>
			<el-table-column prop="company" label="单位/公司" style="width: 20%; height: auto;">
			</el-table-column>
			<el-table-column prop="email" label="邮箱" style="width: 20%; height: auto;">
			</el-table-column>
			<el-table-column prop="address" label="地址" style="width: 20%; height: auto;">
			</el-table-column>
		</el-table>
		<div class="block">
			<br>
			<el-pagination layout="prev, pager, next" background :current-page="page" :page-count="pageCount"
				v-on:current-change="(curpage) => { handlePageChange(curpage) }">
			</el-pagination>
		</div>
	</div>
</template>

<script>
export default {
	name: "ClientTable",
	props: ['page'],
	data() {
		return {
			keyword: "",
			sortKey: 'id',
			sortKeys: [
				{
					value: 'id',
					label: '用户id',
				},
				{
					value: 'userName',
					label: '用户名',
				},
				{
					value: 'company',
					label: '单位/公司',
				},
				{
					value: 'email',
					label: '邮箱',
				},
				{
					value: 'address',
					label: '地址',
				},
			],
			clientData: [
				{
					id: "c001",
					userName: "李华",
					company: "企业1",
					email: "123@123.com",
					address: "西安市122国道112号",
				},
				{
					id: "c002",
					userName: "张三",
					company: "罗翔说刑法",
					email: "zhangsan@qq.com",
					address: "北京三环12号",
				},
				{
					id: "c003",
					userName: "喜羊羊",
					company: "羊村",
					email: "xiyangyang@qq.com",
					address: "青青草原",
				},
				{
					id: "c004",
					userName: "御坂美琴",
					company: "常盘台",
					email: "bilibili@qq.com",
					address: "东京学员都市",
				},
				{
					id: "c001",
					userName: "李华",
					company: "企业1",
					email: "123@123.com",
					address: "西安市122国道112号",
				},
				{
					id: "c002",
					userName: "张三",
					company: "罗翔说刑法",
					email: "zhangsan@qq.com",
					address: "北京三环12号",
				},
				{
					id: "c003",
					userName: "喜羊羊",
					company: "羊村",
					email: "xiyangyang@qq.com",
					address: "青青草原",
				},
				{
					id: "c004",
					userName: "御坂美琴",
					company: "常盘台",
					email: "bilibili@qq.com",
					address: "东京学员都市",
				},
				{
					id: "c001",
					userName: "李华",
					company: "企业1",
					email: "123@123.com",
					address: "西安市122国道112号",
				},
				{
					id: "c002",
					userName: "张三",
					company: "罗翔说刑法",
					email: "zhangsan@qq.com",
					address: "北京三环12号",
				},
				{
					id: "c003",
					userName: "喜羊羊",
					company: "羊村",
					email: "xiyangyang@qq.com",
					address: "青青草原",
				},
				{
					id: "c004",
					userName: "御坂美琴",
					company: "常盘台",
					email: "bilibili@qq.com",
					address: "东京学员都市",
				},
				{
					id: "c001",
					userName: "李华",
					company: "企业1",
					email: "123@123.com",
					address: "西安市122国道112号",
				},
				{
					id: "c002",
					userName: "张三",
					company: "罗翔说刑法",
					email: "zhangsan@qq.com",
					address: "北京三环12号",
				},
				{
					id: "c003",
					userName: "喜羊羊",
					company: "羊村",
					email: "xiyangyang@qq.com",
					address: "青青草原",
				},
				{
					id: "c004",
					userName: "御坂美琴",
					company: "常盘台",
					email: "bilibili@qq.com",
					address: "东京学员都市",
				},
				{
					id: "c001",
					userName: "李华",
					company: "企业1",
					email: "123@123.com",
					address: "西安市122国道112号",
				},
				{
					id: "c002",
					userName: "张三",
					company: "罗翔说刑法",
					email: "zhangsan@qq.com",
					address: "北京三环12号",
				},
				{
					id: "c003",
					userName: "喜羊羊",
					company: "羊村",
					email: "xiyangyang@qq.com",
					address: "青青草原",
				},
				{
					id: "c004",
					userName: "御坂美琴",
					company: "常盘台",
					email: "bilibili@qq.com",
					address: "东京学员都市",
				},
				{
					id: "c001",
					userName: "李华",
					company: "企业1",
					email: "123@123.com",
					address: "西安市122国道112号",
				},
				{
					id: "c002",
					userName: "张三",
					company: "罗翔说刑法",
					email: "zhangsan@qq.com",
					address: "北京三环12号",
				},
				{
					id: "c003",
					userName: "喜羊羊",
					company: "羊村",
					email: "xiyangyang@qq.com",
					address: "青青草原",
				},
				{
					id: "c004",
					userName: "御坂美琴",
					company: "常盘台",
					email: "bilibili@qq.com",
					address: "东京学员都市",
				},
				{
					id: "c001",
					userName: "李华",
					company: "企业1",
					email: "123@123.com",
					address: "西安市122国道112号",
				},
				{
					id: "c002",
					userName: "张三",
					company: "罗翔说刑法",
					email: "zhangsan@qq.com",
					address: "北京三环12号",
				},
				{
					id: "c003",
					userName: "喜羊羊",
					company: "羊村",
					email: "xiyangyang@qq.com",
					address: "青青草原",
				},
				{
					id: "c004",
					userName: "御坂美琴",
					company: "常盘台",
					email: "bilibili@qq.com",
					address: "东京学员都市",
				},
				{
					id: "c001",
					userName: "李华",
					company: "企业1",
					email: "123@123.com",
					address: "西安市122国道112号",
				},
				{
					id: "c002",
					userName: "张三",
					company: "罗翔说刑法",
					email: "zhangsan@qq.com",
					address: "北京三环12号",
				},
				{
					id: "c003",
					userName: "喜羊羊",
					company: "羊村",
					email: "xiyangyang@qq.com",
					address: "青青草原",
				},
				{
					id: "c004",
					userName: "御坂美琴",
					company: "常盘台",
					email: "bilibili@qq.com",
					address: "东京学员都市",
				},
				{
					id: "c001",
					userName: "李华",
					company: "企业1",
					email: "123@123.com",
					address: "西安市122国道112号",
				},
				{
					id: "c002",
					userName: "张三",
					company: "罗翔说刑法",
					email: "zhangsan@qq.com",
					address: "北京三环12号",
				},
				{
					id: "c003",
					userName: "喜羊羊",
					company: "羊村",
					email: "xiyangyang@qq.com",
					address: "青青草原",
				},
				{
					id: "c004",
					userName: "御坂美琴",
					company: "常盘台",
					email: "bilibili@qq.com",
					address: "东京学员都市",
				},
				{
					id: "c001",
					userName: "李华",
					company: "企业1",
					email: "123@123.com",
					address: "西安市122国道112号",
				},
				{
					id: "c002",
					userName: "张三",
					company: "罗翔说刑法",
					email: "zhangsan@qq.com",
					address: "北京三环12号",
				},
				{
					id: "c003",
					userName: "喜羊羊",
					company: "羊村",
					email: "xiyangyang@qq.com",
					address: "青青草原",
				},
				{
					id: "c004",
					userName: "御坂美琴",
					company: "常盘台",
					email: "bilibili@qq.com",
					address: "东京学员都市",
				},
			],
		};
	},
	computed: {
		pageCount() {
			var count = Math.floor(this.clientData.length / 10)
			if (this.clientData.length % 10 !== 0) {
				count += 1
			}
			return count
		},
		currentItemList() {
			var end = this.page * 10
			var start = end - 10
			if (end > this.clientData.length) {
				end = this.clientData.length
			}
			console.log(start, end)
			return this.clientData.slice(start, end)
		}
	},
	methods: {
		pickClient(id) {
			this.$router.push({
				name: 'clientDetailForAdmin',
				query: {
					clientId: id
				}
			})
		},
		handlePageChange(curpage) {
			this.$router.push({
				name: 'clientTable',
				query: { page: curpage }
			})
		}
	},

};
</script>

<style scoped>
.table {
	width: 94%;
	margin-top: 2%;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
	padding: 5%;
}
</style>
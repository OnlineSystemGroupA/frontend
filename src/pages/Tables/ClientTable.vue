<template>
	<div class="table">
		<div style="width: 50%">
			<el-input placeholder="请输入关键字" prefix-icon="el-icon-search" v-model="keyword">
				<el-button slot="append" icon="el-icon-search"></el-button>
			</el-input>
		</div>
		<br />
		<el-table :data="clientData" border style="width: 100%; height: auto;">
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
	</div>
</template>

<script>
export default {
	name: "ClientTable",
	data() {
		return {
			keyword: "",
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
			],
		};
	},
	methods: {
		pickClient(id) {
			this.$router.push({
				name: 'clientDetailForAdmin',
				query: {
					clientId: id
				}
			})
		}
	}
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
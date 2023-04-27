<template>
  <div class="clientTable">
    <div style="width: 30%">
      <el-input placeholder="请输入关键字" prefix-icon="el-icon-search" v-model="keyword">
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </div>
    <br />
    <el-table :data="clientData" height="600" border style="width: 100%">
      <el-table-column prop="id" label="id" width="180"> </el-table-column>
      <el-table-column prop="userName" label="用户名" width="180">
      </el-table-column>
      <el-table-column prop="company" label="单位/公司" width="180">
      </el-table-column>
      <el-table-column prop="email" label="邮箱" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址" width="180">
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
};
</script>

<style scoped>
.clientTable {
  width: 800px;
  align-items: center;
  border-radius: 30px;
  margin: 30px;
  padding: 50px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
</style>
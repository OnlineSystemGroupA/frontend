<template>
  <div class="login">
    <el-form :label-position="labelPosition" label-width="80px" :model="userInfo">
      <el-form-item label="账号或者邮箱">
        <el-input v-model="userInfo.username" placeholder="请输入账号" clearable></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="userInfo.password" placeholder="请输入密码" show-password></el-input>
      </el-form-item>
      <el-form-item>
        <el-radio-group v-model="logType">
          <el-radio label = "client">客户</el-radio>
          <el-radio label = "employee">员工</el-radio>
          <el-radio label = "admin">管理员</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">登录</el-button>
        <el-button @click="userRegister">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
  data() {
    return {
      labelPosition: "top",
      logType:"client",
      userInfo: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    onSubmit() {
      if (this.userInfo.username.length === 0) {
        alert("请输入账号或邮箱")
      } 
      else if (this.userInfo.password.length === 0) {
        alert("请输入密码")
      } 
      else if (this.logType === "client") {
        this.axios.post('/api/login', this.userInfo).then(res=>{
          if(res.data.code === 600){
            this.$router.push({
              name:'client'
            })
          }
          else if(res.data.code === 601){
            alert("不存在该用户")
          }
          else if(res.data.code === 602){
            alert("账号已封禁")
          }
          else if(res.data.code === 603){
            alert("账号或密码错误")
          }
          else{
            alert("参数错误")
          }
        },err=>{
          console.log(err)
        })
      } 
      else if(this.logType === "admin"){
        this.$router.push({
          name: "admin",
        });
      }
      else if(this.logType === "employee"){
        this.$router.push({
          name: "employee",
        });
      }
    },
    userRegister() {
      this.$router.push({
        name: "register",
      });
    },
  },
};
</script>

<style scoped>
.login {
  width: 400px;
  align-items: center;
  border-radius: 30px;
  margin: 30px;
  padding: 50px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
</style>
<template>
    <div class="login">
      <el-form :label-position="labelPosition" label-width="80px" :model="userInfo">
        <el-form-item label="账号或者邮箱">
          <el-input v-model="userInfo.account" placeholder="请输入账号" clearable></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="userInfo.password" placeholder="请输入密码" show-password></el-input>
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
      userInfo: {
        account: "",
        password: "",
      },
    };
  },
  methods: {
    onSubmit() {
      if (this.userInfo.account.length === 0) {
        alert("请输入账号或邮箱");
      } else if (this.userInfo.password.length === 0) {
        alert("请输入密码");
      }
      else if(this.userInfo.account === 'client'){
        this.$router.push({
          name:'client'
        })
        this.$bus.$emit('login',true)
        sessionStorage.setItem('logInfo','true')
      }
      else{
        this.$router.push({
          name: "employee",
        })
        this.$bus.$emit('login',true)
        sessionStorage.setItem('logInfo','true')
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
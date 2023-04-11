<template>
  <div class="app">
    <div v-if="!logInfo" class="app">
      <LoginHeader></LoginHeader>
      <el-row>
        <el-button type="primary" @click="login">登录界面</el-button>
        <el-button type="primary" @click="regist">注册界面</el-button>
      </el-row>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import LoginHeader from "./components/LoginHeader.vue";

export default {
  name: "App",
  components: {
    LoginHeader,
  },
  data() {
    return {
      logInfo:false,
    }
  },
  methods: {
    regist() {
      this.$router.push({
        name: 'regist',
      })
    },
    login(){
      this.$router.push({
        name:'login',
      })
    }
  },
  mounted(){
    this.$bus.$on('login',(temp)=>{
      this.logInfo = temp
    })
    const temp = sessionStorage.getItem('logInfo')
    if(temp==='true'){
      this.logInfo = true
    }
    else{
      this.logInfo = false
    }
  },
  beforeDestroy(){
    this.$bus.$off('login')
  }
};
</script>

<style scoped>
.app {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.mainpage {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 1200px;
}
</style>

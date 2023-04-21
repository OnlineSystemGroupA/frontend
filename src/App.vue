<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: "App",
  components: {
  },
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

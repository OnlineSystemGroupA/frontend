<template>
    <div class="header">
        <img src="../assets/nju.webp">
        <h1>欢迎使用我们的测试系统</h1>
    </div>
</template>

<script>
export default {
    name:'LoginHeader',
}
</script>

<style scoped>
.header{
    width: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

img{
    width: 40%;
}
</style>
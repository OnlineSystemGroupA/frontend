<template>
    <div class="header">
        <img src="../../assets/img/logo.png" style="width:20%">
        <img src="../../assets/img/title.png">
    </div>
</template>

<script>
export default {
    name:'LoginHeader',
}
</script>

<style scoped>
.header{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

img{
    width: 40%;
}
</style>
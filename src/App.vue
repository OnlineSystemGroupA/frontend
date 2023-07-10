<template>
    <div class="app">
        <router-view></router-view>
    </div>
</template>

<script>

export default {
    name: "App",
    components: {},
};
</script>

<style scoped lang="less">
.app {
    --theme-color: #3086D0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

/deep/ h1 {
    font-size: 2em;
}
</style>

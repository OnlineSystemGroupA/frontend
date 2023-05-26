<template>
    <div class="layout">
        <el-container>
            <el-header class="header">Header</el-header>
            <el-container>
                <el-aside width="13%" class="aside">
                    <slot name="menu"></slot>
                </el-aside>
                <el-container class="main-container">
                    <el-main>
                        <div class="main">
                            <router-view>
                            </router-view>
                        </div>
                    </el-main>
                </el-container>
            </el-container>
        </el-container>
    </div>
</template>

<script>

export default {
    name: 'UserLayout',
    components: {
    }
}
</script>

<style scoped>
.layout {
    width: 100%;
    height: 100vh;
}

.main-container {
    height: calc(100vh - 60px);
    overflow-y: auto;
}

.main {
    width: 85%;
    margin-left: 2%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.aside {
    height: calc(100vh - 60px);
    overflow-y: auto;
}
</style>
<template>
    <div class="layout">
        <el-container>
            <el-header class="user-header">
                <UserHeader>
                    <template #detail-button>
                        <slot name="detail-button"></slot>
                    </template>
                </UserHeader>
            </el-header>
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

import UserHeader from "@/components/Headers/UserHeader.vue";

export default {
    name: 'UserLayout',
    components: {
        UserHeader
    }
}
</script>

<style scoped lang="less">
.layout {
    width: 100%;
    height: 100vh;
}

.user-header {
    padding-left: 5px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: var(--theme-color);
    z-index: 10;
    box-shadow: 0 0 5px 0 #000000;
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
    z-index: 5;
    box-shadow: 0 0 5px 0 #000000;

    /deep/ .el-menu {
        border-right: 0;
    }
}
</style>
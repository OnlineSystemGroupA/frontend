<template>
    <div class="layout">
        <el-container>
            <el-header>Header</el-header>
            <el-container>
                <el-container>
                    <el-aside style="width: auto;">
                        <slot name="menu"></slot>
                    </el-aside>
                    <el-main>
                        <div class="main">
                            <router-view>
                            </router-view>
                        </div>
                    </el-main>
                </el-container>
                <el-footer style="height: auto;">
                    <PageFooter></PageFooter>
                </el-footer>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import PageFooter from '../../components/Footers/PageFooter.vue'

export default {
    name: 'UserLayout',
    components: {
        PageFooter
    }
}
</script>

<style scoped>
.layout {
    width: 100%;
    height: 100%;
    padding: 5%;
}

.main {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
</style>
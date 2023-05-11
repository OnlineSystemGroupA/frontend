<template>
    <div class="client">
        <el-container>
            <el-header>Header</el-header>
            <el-container>
                <el-aside style="height: 100%;">
                    <ClientMenu></ClientMenu>
                </el-aside>

                <el-main>
                    <div class="main">
                        <router-view>
                        </router-view>
                    </div>
                </el-main>
            </el-container>
            <page-footer></page-footer>
        </el-container>
    </div>
</template>

<script>
import ClientMenu from '../../components/Menus/ClientMenu.vue'
import PageFooter from '../../components/Footers/PageFooter.vue'
export default {
    name: 'ClientPage',
    components: {
        ClientMenu,
        PageFooter
    }
}
</script>

<style scoped>
.client {
    width: 100%;
    height: 100%;
    padding: 50px;
}

.main {
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
</style>
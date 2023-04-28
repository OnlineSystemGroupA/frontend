<template>
    <div class="client">
        <el-container>
            <el-header>Header</el-header>
            <el-container>
                <el-container>
                    <el-aside style="width: auto;">
                        <ClientMenu></ClientMenu>
                    </el-aside>
                    <el-main>
                        <div style="{width:1000px}">
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
    width: 1200px;
    margin: 30px;
    padding: 50px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
</style>
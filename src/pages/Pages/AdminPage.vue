<template>
    <div class="admin">
        <el-container>
            <el-header>Header</el-header>
            <el-container>
                <el-container>
                    <el-aside style="width: auto;">
                        <AdminMenu></AdminMenu>
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
import AdminMenu from '../../components/Menus/AdminMenu'
import PageFooter from '../../components/Footers/PageFooter.vue'
export default {
    name: 'AdminPage',
    components: {
        AdminMenu,
        PageFooter
    }
}
</script>

<style scoped>
.admin {
    width: 100%;
    height: 100%;
    padding: 50px;
}

.main {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
</style>
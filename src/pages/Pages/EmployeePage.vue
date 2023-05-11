<template>
    <div class="employee">
        <el-container>
            <el-header fixed>Header</el-header>
            <el-container>
                <el-container>
                    <el-aside style="width: auto;">
                        <EmployeeMenu>
                        </EmployeeMenu>
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
import EmployeeMenu from '../../components/Menus/EmployeeMenu.vue';
import PageFooter from '../../components/Footers/PageFooter.vue';
export default {
    name: 'EmployeePage',
    components: {
        EmployeeMenu,
        PageFooter
    }
}
</script>

<style scoped>
.employee {
    width: 100%;
    height:100%;
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
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
    width: 1200px;
    margin: 30px;
    padding: 50px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
</style>
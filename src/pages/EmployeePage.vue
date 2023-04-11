<template>
  <div class="employee">
        <el-container>
            <el-header>Header</el-header>
            <el-container>
                <el-aside width="200px">
                    <EmployeeMenu>
                    </EmployeeMenu>
                </el-aside>
                <el-container>
                    <el-main>
                        <div style="{width:1000px}">
                            <router-view>
                            </router-view>
                        </div>
                    </el-main>
                    <el-footer>Footer</el-footer>
                </el-container>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import EmployeeMenu from '@/components/EmployeeMenu.vue';
export default {
    name:'EmployeePage',
    components:{
        EmployeeMenu
    }
}
</script>

<style scoped>
.employee{
    width: 1200px;
    margin: 30px;
    padding: 50px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
</style>
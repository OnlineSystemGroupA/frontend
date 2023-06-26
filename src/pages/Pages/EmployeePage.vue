<template>
    <UserLayout>
        <template #menu>
            <EmployeeMenu></EmployeeMenu>
        </template>
        <template #detail-button>
            <el-button @click="employeeDetail" circle size="medium" class="header-button" type="text"
                       icon="el-icon-user"></el-button>
        </template>
    </UserLayout>
</template>

<script>
import UserLayout from "@/components/Layout/UserLayout.vue";
import EmployeeMenu from "@/components/Menus/EmployeeMenu.vue";

export default {
    name: 'EmployeePage',
    components: {
        UserLayout,
        EmployeeMenu
    },

    methods: {
        employeeDetail() {
            this.$router.push({
                name: 'employeeDetail'
            })
        }
    }
}
</script>

<style scoped>
</style>
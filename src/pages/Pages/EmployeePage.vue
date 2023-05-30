<template>
    <UserLayout>
        <template #menu>
            <EmployeeMenu></EmployeeMenu>
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
    }
}
</script>

<style scoped>
</style>
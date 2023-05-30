<template>
    <UserLayout>
        <template #menu>
            <AdminMenu></AdminMenu>
        </template>
    </UserLayout>
</template>

<script>
import UserLayout from "@/components/Layout/UserLayout.vue";
import AdminMenu from "@/components/Menus/AdminMenu.vue";

export default {
    name: 'AdminPage',
    components: {
        UserLayout,
        AdminMenu
    }
}
</script>

<style scoped>
</style>
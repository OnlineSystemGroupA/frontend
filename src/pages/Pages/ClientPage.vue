<template>
    <UserLayout>
        <template #menu>
            <ClientMenu></ClientMenu>
        </template>
    </UserLayout>
</template>

<script>
import UserLayout from "@/components/Layout/UserLayout.vue";
import ClientMenu from "@/components/Menus/ClientMenu.vue";

export default {
    name: 'ClientPage',
    components: {
        UserLayout,
        ClientMenu
    }
}
</script>

<style scoped>
</style>
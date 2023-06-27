<template>
    <UserLayout>
        <template #menu>
            <ClientMenu></ClientMenu>
        </template>
        <template #detail-button>
            <el-button @click="clientDetail" circle size="medium" class="header-button" type="text"
                       icon="el-icon-user"></el-button>
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
    },

    methods: {
        clientDetail() {
            this.$router.push({
                name: 'clientDetail'
            })
        },
    }
}
</script>

<style scoped>
</style>
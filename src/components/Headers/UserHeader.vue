<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item
                v-for="bread in breads"
                :key="bread.title"
                :to="bread.to"
                class="breadcrumb">
                {{ bread.title }}
            </el-breadcrumb-item>

        </el-breadcrumb>
    </div>
</template>

<script>
export default {
    data() {
        return {
            breads: []
        }
    },

    methods: {
        updateBreads() {
            this.breads = this.$route.matched.map((v) => {
                return {to: v.path, title: v.meta.title}
            });
        }
    },

    watch: {
        "$route.path"() {
            this.updateBreads();
        },
    },

    created() {
        this.updateBreads();
    }
}
</script>

<style scoped lang="less">
.breadcrumb {
    /deep/ .el-breadcrumb__inner {
        color: #FFFFFF !important;
    }

    /deep/ .el-breadcrumb__inner:hover {
        color: #FFFFFF !important;
    }
}
</style>
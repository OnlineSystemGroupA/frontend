<template>
    <div class="header">
        <img src="../../assets/img/title.png" class="img-title">
        <el-breadcrumb class="breadcrumb" separator-class="el-icon-arrow-right" style="width: 50%">
            <el-breadcrumb-item
                v-for="bread in breads"
                :key="bread.title"
                :to="bread.to"
                class="breadcrumb-item">
                {{ bread.title }}
            </el-breadcrumb-item>
        </el-breadcrumb>
        <slot name="detail-button"></slot>
        <el-button @click="logOut" circle size="medium" class="header-button" type="text"
                   icon="iconfont icon-tuichu1"></el-button>
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
        },

        logOut() {
            if (sessionStorage.getItem('tokenHead')) {
                sessionStorage.removeItem('tokenHead')
            }
            if (sessionStorage.getItem('tokenStr')) {
                sessionStorage.removeItem('tokenStr')
            }
            if (sessionStorage.getItem('logType')) {
                sessionStorage.removeItem('logType')
            }
            this.$router.replace({
                name: 'index'
            })
        }
    },

    watch: {
        "$route.path"() {
            this.updateBreads();
        }
    },

    created() {
        this.updateBreads();
    }
}
</script>

<style scoped lang="less">
.header {
    display: flex;
    justify-content: center;
    flex-direction: row;
}

.breadcrumb {
    display: flex;
    align-items: center;
}

.header-button {
    margin-left: auto;
    color: white;
}

.breadcrumb-item {
    /deep/ .el-breadcrumb__inner {
        color: #FFFFFF !important;
    }

    /deep/ .el-breadcrumb__inner:hover {
        color: gold !important;
    }
}

.img-title{
    width: 200px;
    object-fit: contain;
    margin-right: 10px;
}
</style>
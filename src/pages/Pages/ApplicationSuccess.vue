<template>
    <div class="success">
        <br>
        <br>
        <i class="el-icon-circle-check" style="font-size: 90px; color: #5eb234;"></i>
        <h2 style="font-size: 50px;">成功提交申请</h2>
        <br/>
        <el-button type="primary" @click="clientItemTable">查看项目列表</el-button>
    </div>
</template>

<script>
export default {
    name: 'ApplicationSuccess',
    data() {
        return {
            
        }
    },
    methods: {
        clientItemTable() {
            this.$router.push(
                {
                    name: 'clientItemTable',
                    query: {
                        page: 1
                    }
                }
            )
        }
    }
}
</script>

<style scoped>
.success {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 94%;
    margin-top: 2%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    padding: 5%;
}
</style>
<template>
    <div class="clientAuthority">
        <el-table :data="authorityItem">
            <el-table-column prop="title" label="权限" style="width: 25%;"></el-table-column>
            <el-table-column prop="description" align="center" label="描述" style="width: 50%;"></el-table-column>
            <el-table-column prop="state" align="center" label="状态" style="width: 25%;"></el-table-column>
            <el-table-column label="操作" align="center" style="width: 25%;">
                <template slot-scope="scope">
                    <el-button-group>
                        <el-button size="mini" @click="authorize(scope.row.title)">授权</el-button>
                        <el-button size="mini" @click="ban(scope.row.title)">封禁</el-button>
                    </el-button-group>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    name: 'ClientAuthorityTable',
    props: ['clientId'],
    data() {
        return {
            authorityItem: [
                {
                    title: '登录',
                    description: '用户能否登录网页',
                    state: '已授权',
                },
            ]
        }
    },
    methods: {
        authorize(title) {
            console.log(title)
        },
        ban(title) {
            console.log(title)
        }
    },
    created() {
        this.axios.get('/api/account/clients/' + this.clientId).then(
            (res) => {
                if (res.status === 200) {
                    if (res.isNonLocked) {
                        this.authorityItem[0].state = '已授权'
                    } else {
                        this.authorityItem[0].state = '被封禁'
                    }
                }
            },
            (err) => {
                if (err.status === 404) {
                    this.$message('不存在当前用户')
                }
            }
        )
    }
}
</script>

<style>
.clientAuthority {
    align-items: center;
    border-radius: 30px;
    margin: 30px;
    padding: 50px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
</style>
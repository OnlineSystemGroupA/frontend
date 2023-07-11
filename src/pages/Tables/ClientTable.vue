<template>
    <div class="table">
        <div>
            <h2>用户表格</h2>
        </div>
        <div style="width: 50%">
            <h4>查找关键字</h4>
            <el-input placeholder="请输入关键字" prefix-icon="el-icon-search" v-model="keyword">
                <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
        </div>
        <div>
            <br>
            <span>排序</span>
            <br>
            <el-radio-group v-model="sortKey">
                <el-radio v-for="(sort, index) in sortKeys" :key="index" :label="sort.value">{{ sort.label }}</el-radio>
            </el-radio-group>
        </div>
        <br/>
        <el-table :data="currentItemList" border style="width: 100%; height: auto;">
            <el-table-column prop="uid" label="uid" style="width: 16%; height: auto;">
                <template slot-scope="scope">
                    <p @click="pickClient(scope.row.uid)">{{ scope.row.uid }}</p>
                </template>
            </el-table-column>
            <el-table-column prop="username" label="用户名" style="width: 16%; height: auto;">
            </el-table-column>
            <el-table-column prop="company" label="单位/公司" style="width: 16%; height: auto;">
            </el-table-column>
            <el-table-column prop="email" label="邮箱" style="width: 16%; height: auto;">
            </el-table-column>
            <el-table-column prop="companyAddress" label="地址" style="width: 16%; height: auto;">
            </el-table-column>
            <el-table-column label="操作" style="width:20%">
                <template slot-scope="scope">
                   <el-tooltip class="item" effect="light" content="查看用户" placement="bottom">
                            <el-button @click="pickClient(scope.row.uid)" icon="el-icon-search" size="small"
                                       type="primary" circle></el-button>
                        </el-tooltip>

                        <el-tooltip class="item" effect="light" content="删除用户" placement="bottom">
                            <el-button @click="deleteClient(scope.row.uid)" icon="el-icon-delete" size="small"
                                       type="danger" circle></el-button>
                        </el-tooltip>
                </template>
            </el-table-column>
        </el-table>
        <div class="block">
            <br>
            <el-pagination layout="prev, pager, next" background :current-page="page" :page-count="pageCount"
                           v-on:current-change="(curpage) => { handlePageChange(curpage) }">
            </el-pagination>
        </div>
    </div>
</template>

<script>
export default {
    name: "ClientTable",
    props: ['page'],
    data() {
        return {
            keyword: "",
            sortKey: 'id',
            sortKeys: [
                {
                    value: 'id',
                    label: '用户id',
                },
                {
                    value: 'userName',
                    label: '用户名',
                },
                {
                    value: 'company',
                    label: '单位/公司',
                },
                {
                    value: 'email',
                    label: '邮箱',
                },
                {
                    value: 'address',
                    label: '地址',
                },
            ],
            clientData: [],
        };
    },
    computed: {
        pageCount() {
            var count = Math.floor(this.clientData.length / 10)
            if (this.clientData.length % 10 !== 0) {
                count += 1
            }
            return count
        },
        currentItemList() {
            var end = this.page * 10
            var start = end - 10
            if (end > this.clientData.length) {
                end = this.clientData.length
            }
            console.log(start, end)
            return this.clientData.slice(start, end)
        },
       
    },
    methods: {
        pickClient(id) {
            this.$router.push({
                name: 'clientDetailForAdmin',
                query: {
                    clientId: id
                }
            })
        },
        deleteClient(id) {
            this.$confirm('此操作将永久删除该用户' + id + ', 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning',
                center: true
            }).then(() => {
                this.axios.delete('/api/account/clients/' + id).then(
                    (res) => {
                        if (res.status === 200) {
                            this.$message({
                                type: 'success',
                                message: '删除成功'
                            });
                             this.$router.push({
                                name: 'clientTable',
                                query: { page: 1 }
                            })
                        }
                    },
                    (err) => {
                        if (err.status === 404) {
                            this.$message({
                                type: 'warning',
                                message: '不存在该用户'
                            });
                        }
                    }
                )
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });
            });
        },
        handlePageChange(curpage) {
            this.$router.push({
                name: 'clientTable',
                query: { page: curpage }
            })
        },
        handleRes(res) {
            if (res.status === 200) {
                this.clientData = res.data
            }
        },
        handleErr(err) {
            alert(err.status)
        }
    },
    created() {
        this.axios.get('/api/account/clients').then(this.handleRes, this.handleErr)
    }
};
</script>

<style scoped>
.table {
    width: 94%;
    margin-top: 2%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    padding: 5%;
}
</style>
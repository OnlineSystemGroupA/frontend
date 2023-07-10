<template>
    <div class="table">
        <div>
            <h2>项目表格</h2>
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
        <br />
        <el-table :data="itemList" border style="width: 100%; height: auto;">
            <el-table-column prop="processId" label="项目号" style="width: 14%">
                <template slot-scope="scope">
                    <p @click="checkItemDetail(scope.row.processId)">{{ scope.row.processId }}</p>
                </template>
            </el-table-column>
            <el-table-column prop="title" label="项目名称" style="width: 14%"></el-table-column>
            <el-table-column prop="startDate" label="创建时间" style="width: 14%"></el-table-column>
            <el-table-column prop="assignee" label="负责人" style="width: 14%"></el-table-column>
            <el-table-column prop="startUser" label="申请人" style="width: 14%"></el-table-column>
            <el-table-column prop="taskName" label="项目状态" style="width: 14%"></el-table-column>
            <el-table-column label="操作" style="width:16%">
                <template slot-scope="scope">
                    <el-tooltip class="item" effect="light" content="查看项目详情" placement="bottom">
                        <el-button @click="checkItemDetail(scope.row.processId)" icon="el-icon-search" size="small"
                                   type="primary" circle></el-button>
                    </el-tooltip>

                    <el-tooltip class="item" effect="light" content="删除当前项目" placement="bottom">
                        <el-button @click="deleteItem(scope.row.processId)" icon="el-icon-delete" size="small" type="danger"
                                   circle></el-button>
                    </el-tooltip>
                </template>
            </el-table-column>
        </el-table>
        <div class="block">
            <br>
            <el-pagination layout="prev, pager, next" background :current-page="currentPage" :page-count="pageCount"
                           v-on:current-change="(curpage) => { handlePageChange(curpage) }">
            </el-pagination>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AdminItemTable',
    props: ['page'],
    data() {
        return {
            keyword: '',
            sortKey: 'recordId',
            sortKeys: [
                {
                    value: 'recordId',
                    label: '项目号',
                },
                {
                    value: 'title',
                    label: '项目名称',
                },
                {
                    value: 'startDate',
                    label: '创建时间',
                },
                {
                    value: 'assignee',
                    label: '负责人',
                },
                {
                    value: 'taskName',
                    label: '项目状态',

                },
                {
                    value: 'startUser',
                    label: '申请人',
                }
            ],
            itemList: [
                {
                    processId: '001',
                    title: '网购平台后台测试',
                    startDate: '2022-12-04',
                    startUser: '罗翔',
                    assignee: '张三',
                    endDate: '2022-12-04',
                },
                {
                    processId: '002',
                    title: '网页游戏测试',
                    startDate: '2022-11-05',
                    startUser: '亚瑟',
                    assignee: '梅林',
                    endDate: '2022-12-04',
                },
                {
                    processId: '003',
                    title: '专用数据库',
                    startDate: '2022-10-15',
                    startUser: '德布劳内',
                    assignee: '麦克劳德',
                    endDate: '2022-12-04',
                },
                {
                    processId: '004',
                    title: '证券交易平台',
                    startDate: '2022-7-15',
                    startUser: '明日香',
                    assignee: '莫德雷德',
                    endDate: '2022-12-04',
                },],
            itemCount: 0,
        }
    },
    computed: {
        pageCount() {
            var count = Math.floor(this.itemCount / 10)
            if (this.itemCount % 10 !== 0) {
                count += 1
            }
            return count
        },
        currentPage() {
            var p = parseInt(this.page);
            return p
        }
    },
    watch: {
        sortKey: {
            immediate: true,
            handler(newValue, oldValue) {
                console.log("原来的关键字是", oldValue, "，现在的关键字是", newValue)
                //this.axios.get('/api/workflow/processes/count').then(this.handleCount, this.handleError)
                //this.axios.get('/api/workflow/processes?pageIndex=' + this.page + '&numPerPage=10&' + 'orderBy=' + this.sortKey).then(this.handleResult, this.handleError)
            }
        }
    },
    methods: {
        checkItemDetail(processId) {
            this.$router.push({
                name: 'adminItemDetail',
                query: { processId: processId }
            })
        },
        handleResult(res) {
            if (res.status === 200) {
                this.itemList = res.data
                console.log(res.data)
            }
        },
        handleError(err) {
            console.log(err.response.data)
            alert(err.response.data)
        },
        handleCount(count) {
            this.itemCount = count.data
            console.log(this.itemCount)
        },
        handlePageChange(curpage) {
            //this.axios.get('/api/workflow/processes/count').then(this.handleCount, this.handleError)
            //this.axios.get('/api/workflow/processes?pageIndex=' + curpage + '&numPerPage=10&' + 'orderBy=' + this.sortKey).then(this.handleResult, this.handleError)
            this.$router.push({
                name: 'adminItemTable',
                query: { page: curpage }

            })
        },
        contractEmployee(assignee) {
            this.$router.push({
                name: 'contactEmployee',
                query: {
                    employeeId: assignee
                }
            })
        },
        deleteItem(id) {
            console.log(id)
            this.$confirm('确认是否删除此项目' + id + '?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$message({
                    type: 'success',
                    message: '删除成功!'
                });
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });
            });
        },
        stopItem(id) {
            console.log(id)
            this.$confirm('确认是否暂停此项目' + id + '?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$message({
                    type: 'success',
                    message: '暂停成功!'
                });
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消暂停'
                });
            });
        },
    },
    created() {
        //this.axios.get('/api/workflow/processes/count').then(this.handleCount, this.handleError)
        //this.axios.get('/api/workflow/processes?pageIndex=' + this.page + '&numPerPage=10&' + 'orderBy=' + this.sortKey).then(this.handleResult, this.handleError)
    }
}
</script>

<style scoped>
.table {
    width: 94%;
    margin-top: 2%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    padding: 5%;
}
</style>
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
        <br>
        <el-table :data="itemList" border style="width: 100%; height: auto;">
            <el-table-column prop="projectId" label="项目号" style="width: 16%">
                <template slot-scope="scope">
                    <p @click="itemArrange(scope.row.processId)">{{ scope.row.projectId }}</p>
                </template>
            </el-table-column>
            <el-table-column prop="title" label="项目名称" style="width: 16%"></el-table-column>
            <el-table-column prop="startDate" label="创建时间" style="width: 16%"></el-table-column>
            <el-table-column prop="startUser" label="申请人" style="width: 16%"></el-table-column>
            <el-table-column prop="taskName" label="项目状态" style="width: 16%"></el-table-column>
            <el-table-column label="操作" style="width:20%">
                <template slot-scope="scope">
                    <el-button @click="itemArrange(scope.row.processId)" icon="el-icon-search" size="small"
                               type="primary">分配任务
                    </el-button>
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
    name: "ItemForArrange",
    props: ['page'],
    data() {
        return {
            keyword: "",
            itemList: [],
            sortKey: 'projectId',
            sortKeys: [
                {
                    value: 'projectId',
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
                    value: 'taskName',
                    label: '项目状态',
                },
                {
                    value: 'startUser',
                    label: '申请人',
                }
            ],
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
                this.axios.get('/api/workflow/processes/count').then(this.handleCount, this.handleError)
                this.axios.get('/api/workflow/processes?pageIndex=' + this.page + '&numPerPage=10&' + 'orderBy=' + this.sortKey).then(this.handleResult, this.handleError)
            }
        }
    },
    methods: {
        itemArrange(id) {
            this.$router.push(
                {
                    name: 'arrangeMission',
                    query: {
                        processId: id
                    }
                }
            )
        },
        handleResult(res) {
            if (res.status === 200) {
                this.itemList = res.data
                console.log(res.data)
            }
        },
        handleError(err) {
            console.log(err.response.data)
            this.$message.error(err.response.data)
        },
        handleCount(count) {
            this.itemCount = count.data
            console.log(this.itemCount)
        },
        handlePageChange(curpage) {
            this.axios.get('/api/workflow/processes/count').then(this.handleCount, this.handleError)
            this.axios.get('/api/workflow/processes?pageIndex=' + curpage + '&numPerPage=10&' + 'orderBy=' + this.sortKey).then(this.handleResult, this.handleError)
            this.$router.push({
                name: 'arrangeItem',
                query: { page: curpage }
            })
        },
    },
    created() {
        this.axios.get('/api/workflow/processes/count').then(this.handleCount, this.handleError)
        this.axios.get('/api/workflow/processes?pageIndex=' + this.page + '&numPerPage=10&' + 'orderBy=' + this.sortKey).then(this.handleResult, this.handleError)
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
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
        <el-table :data="currentItemList" border style="width: 100%; height: auto;">
            <el-table-column prop="processId" label="项目号" style="width: 16%">
                <template slot-scope="scope">
                    <p @click="checkItemDetail(scope.row.processId)">{{ scope.row.processId }}</p>
                </template>
            </el-table-column>
            <el-table-column prop="title" label="项目名称" style="width: 16%"> </el-table-column>
            <el-table-column prop="startDate" label="创建时间" style="width: 16%"> </el-table-column>
            <el-table-column prop="assignee" label="负责人" style="width: 16%"> </el-table-column>
            <el-table-column prop="taskName" label="项目状态" style="width: 16%"> </el-table-column>
            <el-table-column label="操作" style="width:20%">
                <template slot-scope="scope">
                    <el-tooltip class="item" effect="light" content="查看项目详情" placement="bottom">
                        <el-button @click="checkItemDetail(scope.row.processId)" icon="el-icon-search" size="small"
                            type="primary" circle></el-button>
                    </el-tooltip>

                    <el-tooltip class="item" effect="light" content="联系负责人" placement="bottom">
                        <el-button @click="contractEmployee(scope.row.assignee)" icon="el-icon-user" size="small"
                            type="primary" circle></el-button>
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
    name: "ClientItemTable",
    props: ['page'],
    data() {
        return {
            keyword: '',
            sortKey: 'processId',
            sortKeys: [
                {
                    value: 'processId',
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
                }
            ],
            itemList: [
                {
                    processId: '001',
                    title: '网购平台后台测试',
                    startDate: '2022-12-04',
                    assignee: '张三',
                    taskName: '审核中',
                },
                {
                    processId: '002',
                    title: '网页游戏测试',
                    startDate: '2022-11-05',
                    assignee: '梅林',
                    taskName: '进行中',
                },
                {
                    processId: '003',
                    title: '专用数据库',
                    startDate: '2022-10-15',
                    assignee: '麦克劳德',
                    taskName: '已完成',
                },
                {
                    processId: '004',
                    title: '证券交易平台',
                    startDate: '2022-7-15',
                    assignee: '莫德雷德',
                    taskName: '已完成',
                },
                {
                    processId: '001',
                    title: '网购平台后台测试',
                    startDate: '2022-12-04',
                    assignee: '张三',
                    taskName: '审核中',
                },
                {
                    processId: '002',
                    title: '网页游戏测试',
                    startDate: '2022-11-05',
                    assignee: '梅林',
                    taskName: '进行中',
                },
                {
                    processId: '003',
                    title: '专用数据库',
                    startDate: '2022-10-15',
                    assignee: '麦克劳德',
                    taskName: '已完成',
                },
                {
                    processId: '004',
                    title: '证券交易平台',
                    startDate: '2022-7-15',
                    assignee: '莫德雷德',
                    taskName: '已完成',
                },
                {
                    processId: '001',
                    title: '网购平台后台测试',
                    startDate: '2022-12-04',
                    assignee: '张三',
                    taskName: '审核中',
                },
                {
                    processId: '002',
                    title: '网页游戏测试',
                    startDate: '2022-11-05',
                    assignee: '梅林',
                    taskName: '进行中',
                },
                {
                    processId: '003',
                    title: '专用数据库',
                    startDate: '2022-10-15',
                    assignee: '麦克劳德',
                    taskName: '已完成',
                },
                {
                    processId: '004',
                    title: '证券交易平台',
                    startDate: '2022-7-15',
                    assignee: '莫德雷德',
                    taskName: '已完成',
                },
                {
                    processId: '001',
                    title: '网购平台后台测试',
                    startDate: '2022-12-04',
                    assignee: '张三',
                    taskName: '审核中',
                },
                {
                    processId: '002',
                    title: '网页游戏测试',
                    startDate: '2022-11-05',
                    assignee: '梅林',
                    taskName: '进行中',
                },
                {
                    processId: '003',
                    title: '专用数据库',
                    startDate: '2022-10-15',
                    assignee: '麦克劳德',
                    taskName: '已完成',
                },
                {
                    processId: '004',
                    title: '证券交易平台',
                    startDate: '2022-7-15',
                    assignee: '莫德雷德',
                    taskName: '已完成',
                },
                {
                    processId: '001',
                    title: '网购平台后台测试',
                    startDate: '2022-12-04',
                    assignee: '张三',
                    taskName: '审核中',
                },
                {
                    processId: '002',
                    title: '网页游戏测试',
                    startDate: '2022-11-05',
                    assignee: '梅林',
                    taskName: '进行中',
                },
                {
                    processId: '003',
                    title: '专用数据库',
                    startDate: '2022-10-15',
                    assignee: '麦克劳德',
                    taskName: '已完成',
                },
                {
                    processId: '004',
                    title: '证券交易平台',
                    startDate: '2022-7-15',
                    assignee: '莫德雷德',
                    taskName: '已完成',
                },
                {
                    processId: '001',
                    title: '网购平台后台测试',
                    startDate: '2022-12-04',
                    assignee: '张三',
                    taskName: '审核中',
                },
                {
                    processId: '002',
                    title: '网页游戏测试',
                    startDate: '2022-11-05',
                    assignee: '梅林',
                    taskName: '进行中',
                },
                {
                    processId: '003',
                    title: '专用数据库',
                    startDate: '2022-10-15',
                    assignee: '麦克劳德',
                    taskName: '已完成',
                },
                {
                    processId: '004',
                    title: '证券交易平台',
                    startDate: '2022-7-15',
                    assignee: '莫德雷德',
                    taskName: '已完成',
                },
                {
                    processId: '001',
                    title: '网购平台后台测试',
                    startDate: '2022-12-04',
                    assignee: '张三',
                    taskName: '审核中',
                },
                {
                    processId: '002',
                    title: '网页游戏测试',
                    startDate: '2022-11-05',
                    assignee: '梅林',
                    taskName: '进行中',
                },
                {
                    processId: '003',
                    title: '专用数据库',
                    startDate: '2022-10-15',
                    assignee: '麦克劳德',
                    taskName: '已完成',
                },
                {
                    processId: '004',
                    title: '证券交易平台',
                    startDate: '2022-7-15',
                    assignee: '莫德雷德',
                    taskName: '已完成',
                },
                {
                    processId: '001',
                    title: '网购平台后台测试',
                    startDate: '2022-12-04',
                    assignee: '张三',
                    taskName: '审核中',
                },
                {
                    processId: '002',
                    title: '网页游戏测试',
                    startDate: '2022-11-05',
                    assignee: '梅林',
                    taskName: '进行中',
                },
                {
                    processId: '003',
                    title: '专用数据库',
                    startDate: '2022-10-15',
                    assignee: '麦克劳德',
                    taskName: '已完成',
                },
                {
                    processId: '004',
                    title: '证券交易平台',
                    startDate: '2022-7-15',
                    assignee: '莫德雷德',
                    taskName: '已完成',
                },
                {
                    processId: '001',
                    title: '网购平台后台测试',
                    startDate: '2022-12-04',
                    assignee: '张三',
                    taskName: '审核中',
                },
                {
                    processId: '002',
                    title: '网页游戏测试',
                    startDate: '2022-11-05',
                    assignee: '梅林',
                    taskName: '进行中',
                },
                {
                    processId: '003',
                    title: '专用数据库',
                    startDate: '2022-10-15',
                    assignee: '麦克劳德',
                    taskName: '已完成',
                },
                {
                    processId: '004',
                    title: '证券交易平台',
                    startDate: '2022-7-15',
                    assignee: '莫德雷德',
                    taskName: '已完成',
                },
                {
                    processId: '001',
                    title: '网购平台后台测试',
                    startDate: '2022-12-04',
                    assignee: '张三',
                    taskName: '审核中',
                },
                {
                    processId: '002',
                    title: '网页游戏测试',
                    startDate: '2022-11-05',
                    assignee: '梅林',
                    taskName: '进行中',
                },
                {
                    processId: '003',
                    title: '专用数据库',
                    startDate: '2022-10-15',
                    assignee: '麦克劳德',
                    taskName: '已完成',
                },
                {
                    processId: '004',
                    title: '证券交易平台',
                    startDate: '2022-7-15',
                    assignee: '莫德雷德',
                    taskName: '已完成',
                },
            ],
        }
    },
    computed: {
        pageCount() {
            var count = Math.floor(this.itemList.length / 10)
            if (this.itemList.length % 10 !== 0) {
                count += 1
            }
            return count
        },
        currentItemList() {
            var end = this.page * 10
            var start = end - 10
            if (end > this.itemList.length) {
                end = this.itemList.length
            }
            return this.itemList.slice(start, end)
        }
    },
    methods: {
        checkItemDetail(processId) {
            this.$router.push({
                name: 'clientItemDetail',
                query: { itemId: processId }
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
        handlePageChange(curpage) {
            this.$router.push({
                name: 'clientItemTable',
                query: { page: curpage }
            })
        },
        contractEmployee(assignee) {
            this.$router.push({
                name: 'contactEmployee',
                query:{
                    employeeId:assignee
                }
            })
        }
    },
    mounted() {
        this.axios.get('/api/workflow/processes').then(this.handleResult, this.handleError)
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
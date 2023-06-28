<template>
    <div class="table">
        <div>
            <h2>结束项目</h2>
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
            <el-table-column prop="processId" label="项目号" style="width: 14%">
                <template slot-scope="scope">
                    <p @click="checkItemDetail(scope.row.processId)">{{ scope.row.processId }}</p>
                </template>
            </el-table-column>
            <el-table-column prop="title" label="项目名称" style="width: 14%"></el-table-column>
            <el-table-column prop="startDate" label="创建时间" style="width: 14%"></el-table-column>
            <el-table-column prop="endDate" label="结束时间" style="width: 14%"></el-table-column>
            <el-table-column prop="assignee" label="负责人" style="width: 14%"></el-table-column>
            <el-table-column prop="startUser" label="申请人" style="width: 14%"></el-table-column>
            <el-table-column label="操作" style="width:16%">
                <template slot-scope="scope">
                    <el-button @click="checkItemDetail(scope.row.processId)" icon="el-icon-search" size="small"
                               type="primary">查看项目
                    </el-button>
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
    name: 'FinishedItemTable',
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
                    value: 'endDate',
                    label: '结束时间',

                },
                {
                    value: 'assignee',
                    label: '负责人',
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
                },
                {
                    processId: '005',
                    title: '网购平台后台测试',
                    startDate: '2022-12-04',
                    startUser: '罗翔',
                    assignee: '张三',
                    endDate: '2022-12-04',
                },
                {
                    processId: '006',
                    title: '网页游戏测试',
                    startDate: '2022-11-05',
                    startUser: '亚瑟',
                    assignee: '梅林',
                    endDate: '2022-12-04',
                },
                {
                    processId: '007',
                    title: '专用数据库',
                    startDate: '2022-10-15',
                    startUser: '德布劳内',
                    assignee: '麦克劳德',
                    endDate: '2022-12-04',
                },
                {
                    processId: '008',
                    title: '证券交易平台',
                    startDate: '2022-7-15',
                    startUser: '明日香',
                    assignee: '莫德雷德',
                    endDate: '2022-12-04',
                },
                {
                    processId: '009',
                    title: '编译平台',
                    startDate: '2022-7-15',
                    startUser: '福尔摩斯',
                    assignee: '冲田总司',
                    endDate: '2022-12-04',
                },
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
                },
                {
                    processId: '005',
                    title: '网购平台后台测试',
                    startDate: '2022-12-04',
                    startUser: '罗翔',
                    assignee: '张三',
                    endDate: '2022-12-04',
                },
                {
                    processId: '006',
                    title: '网页游戏测试',
                    startDate: '2022-11-05',
                    startUser: '亚瑟',
                    assignee: '梅林',
                    endDate: '2022-12-04',
                },
                {
                    processId: '007',
                    title: '专用数据库',
                    startDate: '2022-10-15',
                    startUser: '德布劳内',
                    assignee: '麦克劳德',
                    endDate: '2022-12-04',
                },
                {
                    processId: '008',
                    title: '证券交易平台',
                    startDate: '2022-7-15',
                    startUser: '明日香',
                    assignee: '莫德雷德',
                    endDate: '2022-12-04',
                },
                {
                    processId: '009',
                    title: '编译平台',
                    startDate: '2022-7-15',
                    startUser: '福尔摩斯',
                    assignee: '冲田总司',
                    endDate: '2022-12-04',
                },
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
                },
                {
                    processId: '005',
                    title: '网购平台后台测试',
                    startDate: '2022-12-04',
                    startUser: '罗翔',
                    assignee: '张三',
                    endDate: '2022-12-04',
                },
                {
                    processId: '006',
                    title: '网页游戏测试',
                    startDate: '2022-11-05',
                    startUser: '亚瑟',
                    assignee: '梅林',
                    endDate: '2022-12-04',
                },
                {
                    processId: '007',
                    title: '专用数据库',
                    startDate: '2022-10-15',
                    startUser: '德布劳内',
                    assignee: '麦克劳德',
                    endDate: '2022-12-04',
                },
                {
                    processId: '008',
                    title: '证券交易平台',
                    startDate: '2022-7-15',
                    startUser: '明日香',
                    assignee: '莫德雷德',
                    endDate: '2022-12-04',
                },
                {
                    processId: '009',
                    title: '编译平台',
                    startDate: '2022-7-15',
                    startUser: '福尔摩斯',
                    assignee: '冲田总司',
                    endDate: '2022-12-04',
                },
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
                },
                {
                    processId: '005',
                    title: '网购平台后台测试',
                    startDate: '2022-12-04',
                    startUser: '罗翔',
                    assignee: '张三',
                    endDate: '2022-12-04',
                },
                {
                    processId: '006',
                    title: '网页游戏测试',
                    startDate: '2022-11-05',
                    startUser: '亚瑟',
                    assignee: '梅林',
                    endDate: '2022-12-04',
                },
                {
                    processId: '007',
                    title: '专用数据库',
                    startDate: '2022-10-15',
                    startUser: '德布劳内',
                    assignee: '麦克劳德',
                    endDate: '2022-12-04',
                },
                {
                    processId: '008',
                    title: '证券交易平台',
                    startDate: '2022-7-15',
                    startUser: '明日香',
                    assignee: '莫德雷德',
                    endDate: '2022-12-04',
                },
                {
                    processId: '009',
                    title: '编译平台',
                    startDate: '2022-7-15',
                    startUser: '福尔摩斯',
                    assignee: '冲田总司',
                    endDate: '2022-12-04',
                },
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
                },
                {
                    processId: '005',
                    title: '网购平台后台测试',
                    startDate: '2022-12-04',
                    startUser: '罗翔',
                    assignee: '张三',
                    endDate: '2022-12-04',
                },
                {
                    processId: '006',
                    title: '网页游戏测试',
                    startDate: '2022-11-05',
                    startUser: '亚瑟',
                    assignee: '梅林',
                    endDate: '2022-12-04',
                },
                {
                    processId: '007',
                    title: '专用数据库',
                    startDate: '2022-10-15',
                    startUser: '德布劳内',
                    assignee: '麦克劳德',
                    endDate: '2022-12-04',
                },
                {
                    processId: '008',
                    title: '证券交易平台',
                    startDate: '2022-7-15',
                    startUser: '明日香',
                    assignee: '莫德雷德',
                    endDate: '2022-12-04',
                },
                {
                    processId: '009',
                    title: '编译平台',
                    startDate: '2022-7-15',
                    startUser: '福尔摩斯',
                    assignee: '冲田总司',
                    endDate: '2022-12-04',
                },
            ]
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
            if (sessionStorage.getItem('logType')) {
                var path = sessionStorage.getItem('logType') + 'FinishedItemDetail'
                this.$router.push({
                    name: path,
                    query: { itemId: processId }
                })
            }
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
            /*this.$router.push({
                name: 'adminItemTable',
                query: { page: curpage }
            })*/

            if (sessionStorage.getItem('logType')) {
                var path = sessionStorage.getItem('logType') + 'FinishedItemTable'
                this.$router.push({
                    name: path,
                    query: { page: curpage }
                })
            }
            //console.log(curpage)
        }
    },
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
<template>
    <div class="employee">
        <h2>员工管理</h2>

        <table style="width:90%; text-align: center;" class="pure-table" rules=all>
            <tr>
                <th>员工号</th>
                <td>{{ userInfo.employeeId }}</td>
                <th>真实姓名</th>
                <td>{{ userInfo.realName }}</td>
            </tr>

            <tr>
                <th>联系电话</th>
                <td>{{ userInfo.telephone }}</td>
                <th>电子邮箱</th>
                <td>{{ userInfo.e_mail }}</td>
            </tr>

            <tr>
                <th>部门</th>
                <td>{{ userInfo.department }}</td>
                <th>职位</th>
                <td>{{ userInfo.position }}</td>
            </tr>
        </table>

        <div style="width: 90%;align-items: left;">
            <h3>负责项目</h3>
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
        </div>

        <br>
        <el-table :data="itemList" border style="width: 90%; height: auto;">
            <el-table-column prop="processId" label="项目号" style="width: 16%">
                <template slot-scope="scope">
                    <p @click="checkItemDetail(scope.row.processId)">{{ scope.row.processId }}</p>
                </template>
            </el-table-column>
            <el-table-column prop="title" label="项目名称" style="width: 16%"> </el-table-column>
            <el-table-column prop="startDate" label="创建时间" style="width: 16%"> </el-table-column>
            <el-table-column prop="startUser" label="申请人" style="width: 16%"> </el-table-column>
            <el-table-column prop="taskName" label="项目状态" style="width: 16%"> </el-table-column>
            <el-table-column label="操作" style="width:20%">
                <template slot-scope="scope">
                    <el-tooltip class="item" effect="light" content="查看项目详情" placement="bottom">
                        <el-button @click="checkItemDetail(scope.row.processId)" icon="el-icon-search" size="small"
                            type="primary" circle></el-button>
                    </el-tooltip>
                    <el-tooltip class="item" effect="light" content="删除员工任务" placement="bottom">
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
    name: 'ItemOfEmployee',
    props: ['employeeId', 'page'],
    data() {
        return {
            sortKey: 'recordId',
            keyword: '',
            userInfo: {
                employeeId: 'e001',
                realName: '绫波丽',
                e_mail: 'eva@163.com',
                telephone: '123456789',
                department: '测试部',
                position: '测试员',
            },
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
                    value: 'taskName',
                    label: '项目状态',
                },
                {
                    value: 'startUser',
                    label: '申请人',
                }
            ],
            itemList: [{
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
                name: 'employeeItemDetail',
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
        handleCount(count) {
            this.itemCount = count.data
            console.log(this.itemCount)
        },
        handlePageChange(curpage) {
            console.log(curpage)
            //this.axios.get('/api/workflow/processes/count').then(this.handleCount, this.handleError)
            //this.axios.get('/api/workflow/processes?pageIndex=' + curpage + '&numPerPage=10&' + 'orderBy=' + this.sortKey).then(this.handleResult, this.handleError)
            /*this.$router.push({
                name: 'employeeItemTable',
                query: { page: curpage }

            })*/
        },
        deleteItem(id) {
            console.log(id)
            this.$confirm('确认是否删除员工此任务'+id +'?', '提示', {
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
        }
    },
    created() {
        console.log(this.employeeId)
        this.userInfo.employeeId = this.employeeId
    }
}
</script>

<style scoped>
.pure-table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    empty-cells: show;
    border: 1px solid #cbcbcb;
}

.pure-table caption {
    color: #000;
    font: italic 85%/1 arial, sans-serif;
    padding: 1em 0;
    text-align: center;
}

.pure-table td,
.pure-table th {
    font-size: inherit;
    margin: 0;
    overflow: visible;
    padding: .5em 1em;
}

.pure-table thead {
    background-color: #e0e0e0;
    color: #000;
    text-align: left;
    vertical-align: bottom;
}

.pure-table td {
    background-color: transparent;
}

.employee {
    width: 94%;
    margin-top: 2%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    padding: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
</style>
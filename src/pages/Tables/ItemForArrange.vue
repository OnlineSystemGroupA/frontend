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
            <el-table-column prop="processId" label="项目号" style="width: 16%">
                <template slot-scope="scope">
                    <p @click="itemArrange(scope.row.processId)">{{ scope.row.processId }}</p>
                </template>
            </el-table-column>
            <el-table-column prop="title" label="项目名称" style="width: 16%"> </el-table-column>
            <el-table-column prop="startDate" label="创建时间" style="width: 16%"> </el-table-column>
            <el-table-column prop="startUser" label="申请人" style="width: 16%"> </el-table-column>
            <el-table-column prop="taskName" label="项目状态" style="width: 16%"> </el-table-column>
            <el-table-column label="操作" style="width:20%">
                <template slot-scope="scope">
                    <el-button @click="itemArrange(scope.row.processId)" icon="el-icon-search" size="small"
                        type="primary">分配任务</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    name: "ItemForArrange",
    data() {
        return {
            keyword: "",
            itemList: [
                {
                    processId: '001',
                    title: '网购平台后台测试',
                    startDate: '2022-12-04',
                    startUser: '张三',
                    taskName: '审核中',
                },
                {
                    processId: '002',
                    title: '网页游戏测试',
                    startDate: '2022-11-05',
                    startUser: '梅林',
                    taskName: '进行中',
                },
                {
                    processId: '003',
                    title: '专用数据库',
                    startDate: '2022-10-15',
                    startUser: '麦克劳德',
                    taskName: '已完成',
                },
                {
                    processId: '004',
                    title: '证券交易平台',
                    startDate: '2022-7-15',
                    startUser: '莫德雷德',
                    taskName: '已完成',
                },
            ],
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
                    value: 'taskName',
                    label: '项目状态',
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
        }
    },
    methods: {
        itemArrange(id) {
            this.$router.push(
                {
                    name: 'arrangeMission',
                    query: {
                        itemId: id
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
            alert(err.response.data)
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
<template>
    <div style="width: 80%">
        <div style="width: 30%">
            <el-input placeholder="请输入关键字" prefix-icon="el-icon-search" v-model="keyword">
                <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
        </div>
        <br />
        <el-table :data="itemList" border style="width: 100%; height: auto;">
            <el-table-column prop="processId" label="项目号" style="width: 14%">
                <template slot-scope="scope">
                    <p @click="checkItemDetail(scope.row.processId)">{{ scope.row.processId }}</p>
                </template>
            </el-table-column>
            <el-table-column prop="title" label="项目名称" style="width: 14%"> </el-table-column>
            <el-table-column prop="startDate" label="创建时间" style="width: 14%"> </el-table-column>
            <el-table-column prop="assignee" label="负责人" style="width: 14%"> </el-table-column>
            <el-table-column prop="startUser" label="申请人" style="width: 14%"> </el-table-column>
            <el-table-column prop="taskName" label="项目状态" style="width: 14%"> </el-table-column>
            <el-table-column label="操作" style="width:16%">
                <template slot-scope="scope">
                    <el-button @click="checkItemDetail(scope.row.processId)" icon="el-icon-search" size="small"
                        type="primary">查看项目</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    name: 'AdminItemTable',
    data() {
        return {
            keyword: '',
            itemList: [
                {
                    processId: '001',
                    title: '网购平台后台测试',
                    startDate: '2022-12-04',
                    startUser: '罗翔',
                    assignee: '张三',
                    taskName: '审核中',
                },
                {
                    processId: '002',
                    title: '网页游戏测试',
                    startDate: '2022-11-05',
                    startUser: '亚瑟',
                    assignee: '梅林',
                    taskName: '进行中',
                },
                {
                    processId: '003',
                    title: '专用数据库',
                    startDate: '2022-10-15',
                    startUser: '德布劳内',
                    assignee: '麦克劳德',
                    taskName: '已完成',
                },
                {
                    processId: '004',
                    title: '证券交易平台',
                    startDate: '2022-7-15',
                    startUser: '明日香',
                    assignee: '莫德雷德',
                    taskName: '已完成',
                },
            ]
        }
    },
    methods: {
        checkItemDetail(processId) {

            this.$router.push({
                name: 'adminItemDetail',
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
        }
    },
    mounted() {
        this.axios.get('/api/workflow/processes').then(this.handleResult, this.handleError)
    }
}
</script>

<style></style>
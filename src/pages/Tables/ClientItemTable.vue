<template>
    <div style="width: 80%">
        <div style="width: 30%">
            <el-input placeholder="请输入关键字" prefix-icon="el-icon-search" v-model="keyword">
                <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
        </div>
        <br />
        <el-table :data="itemList" border style="width: 100%; height: auto;">
            <el-table-column prop="id" label="项目号" style="width: 16%">
                <template slot-scope="scope">
                    <p @click="checkItemDetail(scope.row.id)">{{ scope.row.id }}</p>
                </template>
            </el-table-column>
            <el-table-column prop="title" label="项目名称" style="width: 16%"> </el-table-column>
            <el-table-column prop="date" label="创建时间" style="width: 16%"> </el-table-column>
            <el-table-column prop="personInCharge" label="负责人" style="width: 16%"> </el-table-column>
            <el-table-column prop="state" label="项目状态" style="width: 16%"> </el-table-column>
            <el-table-column label="操作" style="width:20%">
                <template slot-scope="scope">
                    <el-button @click="checkItemDetail(scope.row.id)" icon="el-icon-search" size="small"
                        type="primary">查看项目</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    name: "ClientItemTable",
    props: ['mission'],
    data() {
        return {
            keyword: '',
            itemList: [
                {
                    id: '001',
                    title: '网购平台后台测试',
                    date: '2022-12-04',
                    personInCharge: '张三',
                    state: '审核中',
                },
                {
                    id: '002',
                    title: '网页游戏测试',
                    date: '2022-11-05',
                    personInCharge: '梅林',
                    state: '进行中',
                },
                {
                    id: '003',
                    title: '专用数据库',
                    date: '2022-10-15',
                    personInCharge: '麦克劳德',
                    state: '已完成',
                },
                {
                    id: '004',
                    title: '证券交易平台',
                    date: '2022-7-15',
                    personInCharge: '莫德雷德',
                    state: '已完成',
                },
            ]
        }
    },
    methods: {
        checkItemDetail(id) {

            this.$router.push({
                name: 'clientItemDetail',
                query: { itemId: id }
            })

        },
        handleResult(res) {
            if (res.status === 200) {
                console.log(res.data)
            }
        },
        handleError(err) {
            console.log(err.response.data)
            alert(err.response.data)
        }
    },
    mounted(){
        this.axios.get('/api/workflow/tasks').then(this.handleResult,this.handleError)
    }
}
</script>

<style></style>
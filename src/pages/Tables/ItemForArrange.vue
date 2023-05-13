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
                    <p @click="itemArrange(scope.row.id)">{{ scope.row.id }}</p>
                </template>
            </el-table-column>
            <el-table-column prop="title" label="项目名称" style="width: 16%"> </el-table-column>
            <el-table-column prop="tester" label="测试负责人" style="width: 16%"> </el-table-column>
            <el-table-column prop="verifier" label="审核负责人" style="width: 16%"> </el-table-column>
            <el-table-column prop="state" label="项目状态" style="width: 16%"> </el-table-column>
            <el-table-column label="操作" style="width:20%">
                <template slot-scope="scope">
                    <el-button @click="itemArrange(scope.row.id)" icon="el-icon-search" size="small"
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
                    id: '001',
                    title: '网购平台后台测试',
                    tester: '刀哥',
                    verifier: '虎哥',
                    state: '审核中',
                },
                {
                    id: '002',
                    title: '网页游戏测试',
                    tester: '小亮',
                    verifier: '唐老鸭',
                    state: '进行中',
                },
                {
                    id: '003',
                    title: '专用数据库',
                    tester: 'C·罗纳尔多',
                    verifier: '塔利斯卡',
                    state: '已完成',
                },
                {
                    id: '004',
                    title: '证券交易平台',
                    tester: '刘华强',
                    verifier: '高启盛',
                    state: '已完成',
                },
            ]
        }
    },
    methods: {
        itemArrange(id) {
            this.$router.push(
                {
                    name: 'arrangeMission',
                    query: {
                        itemId:id
                    }
                }
            )
        }
    }
}
</script>

<style></style>
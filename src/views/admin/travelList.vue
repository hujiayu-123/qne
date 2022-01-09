<template>
    <div class="travel-list">
        <el-table :data="tableData" stripe style="width: 100%">
            <el-table-column prop="id" label="景点ID">
            </el-table-column>
            <el-table-column prop="avater" label="景点图">
            </el-table-column>
            <el-table-column prop="name" label="景点名">
            </el-table-column>
            <el-table-column prop="TicketPrice" label="票价">
            </el-table-column>
            <el-table-column prop="contacts" label="联系人">
            </el-table-column>
            <el-table-column prop="" label="操作">
                <template slot-scope="scope">
                    <el-button @click="handleToDetail(scope.row.id)" type="text">数据统计</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                tableData: [{
                    id: 1,
                    name: "测试",
                    TicketPrice: 10,
                    contacts: "哈哈哈",
                }]
            }
        },
        methods: {
            handleToDetail(id) {
                let routeUrl = this.$router.resolve({
                    path: "/visualizationDetail",
                    query: {
                        id: id
                    }
                });
                window.open(routeUrl.href, "_blank");
            }
        }
    }
</script>
<style lang="less" scoped>


</style>
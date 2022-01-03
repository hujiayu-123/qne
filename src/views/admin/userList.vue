<template>
    <div class="user-list">
        <el-table :data="tableData" stripe style="width: 100%">
            <el-table-column prop="id" label="用户ID">
            </el-table-column>
            <el-table-column prop="avater" label="头像">
                <template slot-scope="scope">
                    <img class="avatar-img"
                        :src="scope.row.avater?scope.row.avater:require('@/assets/images/avatar.png')" alt="">
                </template>
            </el-table-column>
            <el-table-column prop="account" label="昵称">
            </el-table-column>
            <el-table-column prop="mobile" label="手机号">
            </el-table-column>
            <el-table-column prop="createdAt" label="创建时间">
            </el-table-column>
            <el-table-column prop="updatedAt" label="更新时间">
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
    import api from "@/server/api.js";
    export default {
        data() {
            return {
                tableData: []
            }
        },
        mounted() {
            this.getList()
        },
        methods: {
            getList() {
                api.getUserAll().then((res) => {
                    if (res.code == 0) {
                        this.tableData = res.data
                    }
                })
            }
        }
    }
</script>
<style lang="less" scoped>
    .user-list {
        .avatar-img {
            width: 60px;
        }
    }
</style>
<template>
    <div class="user-info">
        <el-container>
            <el-aside width="200px">

            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>

    </div>
</template>
<script>
    export default {

    }
</script>
<style lang="less" scoped>
    .user-info {
        width: 1000px;
        margin: 0 auto;

        .el-container {
            margin-top: 25px;
        }
    }
</style>
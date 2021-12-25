<template>
    <div>
        <el-dropdown @command="handleToLink">
            <span class="el-dropdown-link">
                admin<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="/orderCenter/order">订单中心</el-dropdown-item>
                <el-dropdown-item command="/userInfo/user">个人中心</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>
<script>
    export default {
        methods: {
            handleToLink(link) {
                this.$router.push({
                    path: link
                })
            }
        }
    }
</script>
<style lang="less" scoped>

</style>
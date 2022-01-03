<template>
    <div class="account-drop">
        <el-dropdown @command="handleToLink">
            <span class="el-dropdown-link">
                <img class="avatar-img" :src="userInfo.avater?userInfo.avater:require('@/assets/images/avatar.png')"
                    alt="">
                {{userInfo.account}}<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="/orderCenter/order">订单中心</el-dropdown-item>
                <el-dropdown-item command="/userInfo/user">个人中心</el-dropdown-item>
                <el-dropdown-item command="/login">退出登录</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                userInfo: {}
            }
        },
        mounted() {
            this.userInfo = JSON.parse(localStorage.getItem('userInfo'))
        },
        methods: {
            handleToLink(link) {
                if (link == '/login') {
                    localStorage.clear()
                }
                this.$router.push({
                    path: link
                })
            }
        }
    }
</script>
<style lang="less">
    .account-drop {
        .avatar-img {
            width: 30px;
            border-radius: 50%;
            margin-right: 5px;
        }
    }
</style>
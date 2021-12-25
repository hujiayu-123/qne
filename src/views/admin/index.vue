<template>
    <div class="admin">
        <el-header>
            <div class="flex-b">
                <div class="logo-img">
                    <img class="logo-img" :src="require('@/assets/images/logo.png')" alt="logo" />
                </div>
                <div>
                    <el-dropdown @command="handleToLink">
                        <span class="el-dropdown-link">
                            admin<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="/home">返回前台</el-dropdown-item>
                            <el-dropdown-item command="/login">退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </div>
        </el-header>
        <el-container>
            <el-aside width="200px">
                <el-row>
                    <el-col :span="24">
                        <el-menu default-active="0" class="el-menu-vertical-demo" background-color="#545c64"
                            text-color="#fff" active-text-color="#8CBE1C" router>

                            <el-menu-item index="/admin/release">
                                <i class="el-icon-menu"></i>
                                <span slot="title">发布</span>
                            </el-menu-item>
                            <el-menu-item index="/admin/travelList">
                                <i class="el-icon-menu"></i>
                                <span slot="title">景点列表</span>
                            </el-menu-item>
                            <el-menu-item index="/admin/userList">
                                <i class="el-icon-setting"></i>
                                <span slot="title">用户列表</span>
                            </el-menu-item>
                        </el-menu>
                    </el-col>
                </el-row>
            </el-aside>
            <el-container>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
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
<style lang="less">
    .admin {
        .el-header {
            background-color: #545c64;
            padding: 0 20px;

            .el-dropdown {
                color: #fff;

                .el-dropdown-link {
                    cursor: pointer;
                }

                .el-icon-arrow-down {
                    font-size: 12px;
                }
            }
        }

        .el-menu-vertical-demo {
            height: calc(100vh - 60px);
        }

        .logo-img {
            width: 45px;
        }
    }
</style>
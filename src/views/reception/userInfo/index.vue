<template>
    <div class="user-info">
        <el-container>
            <el-aside width="200px">
                <div class="nav-list">
                    <router-link tag="div" to="/userInfo/user" class="nav-item flex-m">
                        <i class="iconfont icon-wodexinxi_jibenxinxi"></i>
                        我的信息
                    </router-link>
                    <router-link tag="div" to="/userInfo/avatar" class="nav-item flex-m">
                        <i class="iconfont icon-touxiang"></i>
                        我的头像
                    </router-link>
                    <router-link tag="div" to="/userInfo/security" class="nav-item flex-m">
                        <i class="iconfont icon-suo"></i>
                        账号安全
                    </router-link>
                    <router-link tag="div" to="/userInfo/sns" class="nav-item flex-m">
                        <i class="iconfont icon-binding"></i>
                        绑定设置
                    </router-link>
                </div>

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

            .router-link-active {
                background-color: @theme-color;
                color: #fff;
            }

            .nav-list {
                .nav-item {
                    line-height: 45px;
                    padding: 0 20px;
                    cursor: pointer;
                    border-radius: 3px;
                    margin-bottom: 10px;



                    .iconfont {
                        margin-right: 10px;
                        font-size: 18px;
                    }
                }

                &>div:not(.router-link-active):hover {
                    background-color: @hover-color;

                }
            }

            .el-main {
                padding: 0 20px;
            }
        }
    }
</style>
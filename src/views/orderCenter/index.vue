<template>
    <div class="order-center">
        <div class="order-header flex-b">
            <div class="order-header-wrap flex-b">
                <div class="flex-m">
                    <div>
                        <img class="logo-img" :src="require('@/assets/images/logo.png')" alt="logo" />
                    </div>
                    <div class="nav-list flex-m">
                        <router-link tag="div" to="/home" class="nav-item nav-item-style-b flex-m">
                            首页
                        </router-link>
                    </div>
                </div>
                <AccountDropDown />
            </div>

        </div>

        <div class="order-con">
            <div class="order-bg"></div>
            <div class="order-info-wrap">
                <div class="order-info  flex-b">
                    <div class="mart-100 flex-m">
                        <img class="avatar-img" :src="require('@/assets/images/avatar.png')" alt="avatar" />
                        <div>admin</div>
                    </div>
                    <div class="order-nav flex-m">
                        <router-link tag="div" to="/orderCenter/order" class="order-nav-item flex-m">
                            我的订单
                        </router-link>
                        <router-link tag="div" to="/orderCenter/collection" class="order-nav-item flex-m">
                            我的收藏
                        </router-link>
                        <router-link tag="div" to="/orderCenter/evaluate" class="order-nav-item flex-m">
                            我的点评
                        </router-link>
                        <router-link tag="div" to="/orderCenter/footprint" class="order-nav-item flex-m">
                            我的足迹
                        </router-link>
                    </div>
                </div>


            </div>
            <div class="order-con-view">
                <router-view></router-view>
            </div>

        </div>

    </div>
</template>
<script>
    import AccountDropDown from "../../components/AccountDropDown";
    export default {
        components: {
            AccountDropDown
        },
    }
</script>
<style lang="less">
    .order-center {
        overflow: hidden;
        background-color: #efefef;
        min-height: 100vh;

        .order-header {
            height: 46px;
            width: 100%;
            background-color: rgba(34, 35, 36, 0.95);
            position: fixed;

            .order-header-wrap {
                width: 1200px;
                margin: 0 auto;
            }

            .logo-img {
                width: 40px;
            }

            .el-dropdown {
                color: #fff;
            }

            .nav-list {
                margin-left: 20px;
                color: #fff;

                .nav-item {
                    cursor: pointer;
                    padding: 0 15px;

                    &:hover {
                        background-color: #000;

                    }
                }
            }
        }

        .order-con-view {
            width: 1000px;
            margin: 20px auto;
            background-color: #fff;
            min-height: 400px;
            border: 1px solid #e2e2e2;
            padding: 20px;
        }

        .order-bg {
            width: 100%;
            height: 250px;
            background: url(../../assets/images/order-bg.jpg)no-repeat;
        }

        .order-info-wrap {
            width: 100%;
            height: 60px;
            background-color: rgba(255, 255, 255, 0.95);
            border-bottom: #d6d6d6 1px solid;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.12);

            .order-info {
                width: 1000px;
                margin: 0 auto;
                color: #fff;

                .avatar-img {
                    width: 120px;
                    border-radius: 50%;
                    margin-right: 15px;
                }

                .mart-100 {
                    margin-top: -100px;
                }

                .order-nav {
                    color: @primary-color;
                    font-size: 18px;

                    .order-nav-item {
                        padding: 0 15px;
                        cursor: pointer;

                        &:hover {
                            color: @theme-color;
                        }
                    }

                    .router-link-active {
                        color: @theme-color;
                    }
                }
            }
        }

        .order-con {
            margin-top: 46px;

        }
    }
</style>
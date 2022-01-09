<template>
    <div>
        <div class="header-wrap">
            <div class="header flex-b">
                <div class="nav flex-m">
                    <div class="logo flex-m">
                        <img class="logo-img" :src="require('@/assets/images/logo-2.png')" alt="logo" />
                    </div>
                    <div class="nav-list flex-m">
                        <router-link tag="div" to="/home" class="nav-item nav-item-style-b flex-m">
                            首页
                        </router-link>
                        <router-link tag="div" to="/sales" class="nav-item nav-item-style-t select-list flex-m">
                            <div>去旅行
                                <i class="iconfont icon-xiala"></i>
                            </div>
                            <div class="nav-item-list" v-if="isList">
                                <div v-for="(item,index) in typeList" :key="index" @click="handleToList(item.value)">
                                    {{item.name}}
                                    <i v-if="index==0" class="iconfont icon-hot"></i>
                                </div>
                            </div>
                        </router-link>
                    </div>
                </div>
                <div v-if="isSearch" :class="isSearchStyle?'header-search header-search-a':'header-search'">
                    <el-input @focus="handleFocus" @blur="handleBlur" v-model="keyword" class="input-with-select"
                        @keyup.enter.native="handleToList('','scenicName')">
                    </el-input>
                    <i class="iconfont icon-sousuo"></i>
                </div>
                <div class="user flex-m">
                    <AccountDropDown v-if="isLogin" />
                    <template v-else>
                        <div @click="handleToLink('/login')">登录</div>
                        <span class="hr"></span>
                        <div @click="handleToLink('/register')">注册</div>
                    </template>
                    <template v-if="userInfo.role == 2">
                        <span class="hr"></span>
                        <div @click="handleToLink('/admin')">管理中心</div>
                    </template>
                </div>
            </div>

            <div class="shadow"></div>
        </div>

        <router-view></router-view>
    </div>
</template>
<script>
    import AccountDropDown from "../../components/AccountDropDown";
    import {
        typeList
    } from "@/utils/filter.js";
    export default {
        components: {
            AccountDropDown
        },
        data() {
            return {
                isLogin: false,
                userInfo: {},
                isList: true,
                typeList: typeList,
                keyword: '',
                isSearchStyle: false,
                isSearch: true
            }
        },
        watch: {
            $route: {
                handler() {
                    this.handleIsRoute()
                },
                deep: true
            }
        },
        mounted() {
            this.handleIsRoute()
            let token = localStorage.getItem('token')
            this.userInfo = JSON.parse(localStorage.getItem('userInfo')) || {}
            if (token) {
                this.isLogin = true
            } else {
                this.isLogin = false
            }
        },
        methods: {
            handleIsRoute() {
                let routeInfo = this.$route
                this.keyword = routeInfo.query.scenicName
                if (routeInfo.path == '/sales') {
                    this.isList = false
                } else {
                    this.isList = true
                }
                if (routeInfo.path == '/home') {
                    this.isSearch = false
                } else {
                    this.isSearch = true
                }
            },
            handleFocus() {
                this.isSearchStyle = true
            },
            handleBlur() {
                this.isSearchStyle = false
            },
            handleToList(type, name) {
                let routeUrl = this.$router.resolve({
                    path: "/sales",
                    query: {
                        grade: type,
                        scenicName: name == 'scenicName' ? this.keyword : ''
                    }
                });
                window.open(routeUrl.href, "_blank");
            },
            handleToLink(link) {
                this.$router.push({
                    path: link
                })
            }
        }
    }
</script>
<style lang="less">
    .header-wrap {
        height: 68px;
        position: relative;

        .header {
            width: 1200px;
            margin: 0 auto;

            .logo {
                font-size: 25px;

                .logo-img {
                    width: 160px;
                }

                .logo-txt {
                    width: 100px;
                }

            }

            .nav {
                .nav-list {
                    margin-left: 20px;

                    &>div:not(.router-link-active):hover {
                        color: @theme-color;
                    }
                }

                .nav-item {
                    padding: 0 16px;
                    cursor: pointer;
                    position: relative;
                }

                .nav-item-style-b:hover {
                    &::after {
                        width: 100%;
                        height: 2.5px;
                        content: '';
                        background-color: @theme-color;
                        position: absolute;
                        bottom: 0;
                        left: 0;
                    }
                }

                .nav-item-style-t:hover {
                    border-left: 1px solid #eaeaea;
                    border-right: 1px solid #eaeaea;

                    &::after {
                        width: 100%;
                        height: 2.5px;
                        content: '';
                        background-color: @theme-color;
                        position: absolute;
                        top: 0;
                        left: 0;
                    }
                }

                .select-list {
                    &:hover {

                        .nav-item-list {
                            height: 122px;
                            border: 1px solid #eaeaea;
                            border-top: 0;
                        }

                    }

                    .nav-item-list {
                        height: 0;
                        z-index: 99;
                        overflow: hidden;
                        transition: height .2s;
                        position: absolute;
                        width: 200%;
                        top: 68px;
                        left: -1px;
                        background-color: rgba(255, 255, 255, .95);
                        font-size: 14px;
                        color: @primary-color;

                        &::after {
                            content: '';
                            width: 50%;
                            position: absolute;
                            top: 0;
                            right: 0;
                            height: 1px;
                            background-color: #eaeaea;
                        }

                        .icon-hot {
                            color: red;
                            font-size: 22px;
                        }

                        div {
                            line-height: 40px;
                            padding-left: 20px;

                            &:hover {
                                background-color: #eee;
                            }
                        }
                    }
                }

                .router-link-active {
                    background: @theme-color;
                    color: #fff;
                }
            }

            .header-search {
                position: relative;
                width: 150px;
                transition: width .8s;

                .el-input__inner {
                    border: 1px solid #efefef;
                    background-color: #efefef;
                }

                .iconfont {
                    position: absolute;
                    right: 10px;
                    font-size: 25px;
                    line-height: 40px;
                    color: #999;
                    font-weight: bold;
                }
            }

            .header-search-a {
                width: 350px;

                .el-input__inner {
                    border-color: @theme-color;
                    box-shadow: 0 0 3px rgba(140, 190, 28, 0.2);
                    background-color: #fff;
                }

                .iconfont {
                    color: @theme-color;
                }

            }

            .user {
                font-size: 14px;
                color: @theme-color;

                div {
                    cursor: pointer;
                }
            }

            .hr {
                width: 1px;
                height: 14px;
                background-color: #c9c9c9;
                margin: 0 10px;
            }
        }

        .shadow {
            position: absolute;
            left: 0;
            bottom: -2px;
            right: 0;
            width: 100%;
            height: 2px;
            background-color: rgba(0, 0, 0, .06);
            overflow: hidden;
            z-index: 97;
        }
    }
</style>
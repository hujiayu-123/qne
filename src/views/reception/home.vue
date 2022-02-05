<template>
    <div class="home">
        <div class="swiper">
            <el-carousel :interval="4000" direction="vertical" :height="swiperHeight">
                <el-carousel-item v-for="item in 6" :key="item">
                    <img @load="item==1?loadImg():''" :src="require('@/assets/images/banner1.jpg')" alt="banner" />
                </el-carousel-item>
            </el-carousel>
            <div class="search">
                <div class="type-radio">
                    <el-radio v-model="type" :label="0">全部</el-radio>
                    <el-radio v-for="(item,index) in typeList" :key="index" v-model="type" :label="item.value">
                        {{item.name}}</el-radio>
                </div>
                <el-input placeholder="请输入内容" v-model="keyword" class="input-with-select"
                    @keyup.enter.native="handleToList('','scenicName')">
                    <el-button class="search-btn" slot="append" icon="el-icon-search"
                        @click="handleToList('','scenicName')"></el-button>
                </el-input>
            </div>
        </div>
        <div class="home-list flex-b">
            <div class="list-l">
                <div v-for="i in typeList" :key="i.key">
                    <div class="list-item">
                        <div class="item-name">
                            {{i.name}}
                        </div>
                        <div class="item-list flex-b">
                            <div class="item-box" v-for="item in homeList[i.key]" :key="item.id"
                                @click="handleToDetail(item.scenicName)">
                                <div class="item-box-img">
                                    <img :src="item.sceneryImgPath" alt="item.sceneryAddress">
                                </div>
                                <div class="item-box-info flex-b">
                                    <div class="item-box-name">
                                        {{item.scenicName}}
                                    </div>
                                    <div class="item-box-price">
                                        ￥{{item.ticketsAmount}}
                                        <span class="info-color">起</span>
                                    </div>
                                </div>
                                <div class="city">
                                    {{item.cityName}}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="list-r">
                <div class="list-r-name">
                    热门城市
                </div>
                <div class="list-r-list flex-m">
                    <div class="list-txt" v-for="item in homeList.ccityList" :key="item"
                        @click="handleToList(item,'cityName')">
                        {{item}}
                    </div>
                </div>
                <div class="list-r-name">
                    主题活动
                </div>
                <div class="list-r-list flex-m">
                    <div class="list-txt" v-for="item in homeList.summaryList" :key="item"
                        @click="handleToList(item,'summary')">
                        {{item}}
                    </div>
                </div>
                <div class="notice flex-m">
                    <div class="notice-img">
                        <img :src="require('@/assets/images/notice.png')" alt="">
                    </div>
                    <div>
                        <div>快乐童心</div>
                        <div class="info-color">陪孩子看世界</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {
        typeList
    } from "@/utils/filter.js";
    import api from "@/server/api.js";
    export default {
        data() {
            return {
                swiperHeight: "0px",
                keyword: "",
                type: 0,
                homeList: {},
                typeList: typeList
            }
        },
        mounted() {
            this.getList()
        },
        methods: {
            getList() {
                api.homeList().then((res) => {
                    if (res.code == 0) {
                        this.homeList = res.data
                        localStorage.setItem('cityHot', JSON.stringify(res.data.ccityList))
                    }
                })
            },
            loadImg() {
                var height = document.querySelector(".swiper img").height
                this.swiperHeight = height + 'px'
            },
            handleToList(keyWord, name) {
                let routeUrl = this.$router.resolve({
                    path: "/sales",
                    query: {
                        summary: name == 'summary' ? keyWord : '',
                        cityName: name == 'cityName' ? keyWord : '',
                        scenicName: name == 'scenicName' ? this.keyword : '',
                        grade: name == 'scenicName' ? this.type : ''
                    }
                });
                window.open(routeUrl.href, "_blank");
            },
            handleToDetail(id) {
                let routeUrl = this.$router.resolve({
                    path: "/detail",
                    query: {
                        id: id
                    }
                });
                window.open(routeUrl.href, "_blank");
            }
        }
    }
</script>
<style lang="less">
    .home {
        .swiper {
            position: relative;

            .search {
                position: absolute;
                width: 500px;
                left: 50%;
                margin-left: -250px;
                bottom: 10%;
                background-color: rgba(0, 0, 0, .6);
                border-radius: 4px;
                padding: 15px;
                z-index: 99;

                .type-radio {
                    margin-bottom: 10px;

                    .el-radio {
                        color: #fff;
                    }

                }

            }
        }

        .home-list {
            width: 1200px;
            margin: 10px auto;
            align-items: flex-start;

            .list-l {
                width: 970px;

                .list-item {
                    margin-top: 10px;
                }

                .item-name {
                    font-size: 28px;
                    font-weight: bold;
                }

                .item-list {
                    flex-wrap: wrap;

                    .item-box {
                        width: 220px;
                        height: 160px;
                        border: 1px solid #eee;
                        margin: 10px 0;
                        cursor: pointer;
                        position: relative;

                        img {
                            transition: all .6s;
                        }

                        &:hover {
                            box-shadow: 0 1px 10px rgba(0, 0, 0, .13);

                            img {
                                transform: scale(1.5);
                            }
                        }

                        .item-box-info {
                            margin: 0 10px;
                            height: 20%;
                        }

                        .item-box-img {
                            height: 80%;
                            overflow: hidden;
                        }

                        .item-box-name {
                            overflow: hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                        }

                        .item-box-price {
                            flex-shrink: 0;
                            color: @error-color;
                            font-size: 20px;
                        }

                        .city {
                            position: absolute;
                            top: 0;
                            left: 0;
                            background: rgba(0, 0, 0, .4);
                            color: #fff;
                            font-size: 12px;
                            padding: 2px 6px;
                        }
                    }
                }
            }

            .list-r {
                width: 200px;
                margin-left: 20px;
                background-color: rgba(140, 190, 28, 0.2);
                border-top: 2px solid @theme-color;
                margin-top: 57px;
                padding: 0 20px 20px 20px;

                .list-r-name {
                    font-size: 14px;
                    font-weight: bold;
                    margin-top: 20px;
                }

                .list-r-list {
                    font-size: 12px;
                    color: @info-color;
                    margin: 0 -10px;
                    flex-wrap: wrap;
                    margin-top: 5px;

                    .list-txt {
                        margin: 2px 10px;
                        cursor: pointer;

                        &:hover {
                            text-decoration: underline;
                        }
                    }
                }

                .notice {
                    padding-top: 10px;

                    .notice-img {
                        margin-right: 10px;
                    }

                    .info-color {
                        margin-top: 5px;
                    }
                }

            }
        }

        .info-color {
            font-size: 12px;
            color: @info-color;
        }
    }
</style>
<style lang="less">
    .el-input-group__append {
        background-color: @theme-color;
        color: #fff;
        text-align: center;
        cursor: pointer;
    }
</style>
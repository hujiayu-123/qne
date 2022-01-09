<template>
    <div class="sales">
        <div class="sales-tabs flex-m">
            <div :class="filterParams.grade==''?'tab-active':''" @click="handleGrade('')">全部</div>
            <div v-for="item in typeList" :key="item.value" :class="item.value==filterParams.grade?'tab-active':''"
                @click="handleGrade(item.value)">
                {{item.name}}
            </div>
        </div>
        <div class="sales-wrap">
            <div class="sales-search">
                <div class="sales-search-item flex-m">
                    <div class="sales-search-item-name">地区</div>
                    <div class="city">{{filterParams.cityName?filterParams.cityName:'不限'}}
                        <i class="iconfont icon-arrow_down"></i>
                        <div class="city-list scroll-bar">
                            <div class="city-list-wrap">
                                <div class="city-list-tabs flex-b">
                                    <div :class="item.value==cityActive?'city-active':''" v-for="item in cityType"
                                        :key="item.value" @click="handleCityType(item.value)">
                                        {{item.name}}
                                    </div>
                                </div>
                                <div class="city-list-con">
                                    <div v-if="cityActive==0" class="city-hot flex-m">
                                        <div v-for="i in cityHot" :key="i" @click="handleCity(i)">{{i}}</div>
                                    </div>
                                    <div v-else class="con-item flex-m" v-for="item in cityListCurr" :key="item.title">
                                        <div class="con-item-name">{{item.title}}</div>
                                        <div class="con-item-list flex-m">
                                            <div v-for="i in item.lists" :key="i" @click="handleCity(i)">{{i}}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="sales-search-item flex-m">
                    <div class="sales-search-item-name">价格区间</div>
                    <div>
                        <el-radio v-model="price" label="0">不限</el-radio>
                        <el-radio v-model="price" label="1">100-500</el-radio>
                        <el-radio v-model="price" label="2">500-1000</el-radio>
                        <el-radio v-model="price" label="3">1000-2000</el-radio>
                        <el-radio v-model="price" label="4">≥2000</el-radio>
                    </div>
                </div>
            </div>
            <div v-if="dataList.length" class="list flex-b">
                <div class="list-l">
                    <div class="list-l-condition flex-m">
                        <div @click="handleSort(0)" :class="filterParams.sort==0?'condition-a':''">综合排序</div>
                        <div @click="handleSort(1)" :class="filterParams.sort==1?'condition-a':''">近期销量优先</div>
                        <div :class="filterParams.sort==2?'condition-a':''">
                            <el-dropdown @command="handlePriceSort">
                                <span class="el-dropdown-link">
                                    {{priceSort?priceSort:"价格"}}<i class="el-icon-arrow-down el-icon--right"></i>
                                </span>
                                <el-dropdown-menu slot="dropdown" class="condition-price-list">
                                    <el-dropdown-item command="价格从低到高">价格从低到高</el-dropdown-item>
                                    <el-dropdown-item command="价格从高到低">价格从高到低</el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </div>
                    </div>
                    <div class="list-l-con">
                        <div class="list-l-con-item flex-m" v-for="item in dataList" :key="item.id"
                            @click="handleToDetail(item.id)">
                            <img :src="item.sceneryImgPath" alt="">
                            <div class="item-info">
                                <div class="count">已售5000</div>
                                <div class="item-name">
                                    {{item.scenicName}}
                                </div>
                                <div class="flex-b">
                                    <div class="price-txt">
                                        ￥{{item.ticketsAmount}}
                                        <span class="info-color">
                                            起
                                        </span>
                                    </div>
                                    <div class="buy-btn">
                                        立即预定
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="list-r">
                    <div class="list-r-title">
                        本周热卖
                    </div>
                </div>
            </div>
            <div class="no-data flex-c" v-else>
                <img :src="require('@/assets/images/null.png')" alt="">
            </div>
        </div>
        <el-backtop target=".page-component__scroll .el-scrollbar__wrap"></el-backtop>
    </div>
</template>
<script>
    import api from "@/server/api.js";
    import mixin from "@/mixin/downLoading";
    import {
        typeList
    } from "@/utils/filter.js";
    import cityList from "@/utils/city.js";
    export default {
        mixins: [mixin],
        data() {
            return {
                filterParams: {
                    scenicName: '', // 景点名称
                    summary: '', //主题
                    cityName: '', // 城市
                    grade: '', // 类型
                    pageNum: 1,
                    pageSize: 20,
                    sort: 0,
                    total: 0
                },
                price: "0",
                cityActive: "0",
                dataList: [],
                typeList: typeList,
                cityList: cityList,
                priceSort: '',
                cityType: [{
                        name: '热门城市',
                        value: '0'
                    },
                    {
                        name: 'ABCDEF',
                        value: '1'
                    },
                    {
                        name: 'GHJKLM',
                        value: '2'
                    },
                    {
                        name: 'NOPQRS',
                        value: '3'
                    },
                    {
                        name: 'TUWXYZ',
                        value: '4'
                    }
                ],
                cityListCurr: [],
                cityHot: []
            }
        },
        mounted() {
            let routerParam = this.$route.query
            this.filterParams = {
                ...this.filterParams,
                ...routerParam
            }
            this.cityHot = JSON.parse(localStorage.getItem('cityHot'))
            this.getList()
        },
        methods: {
            // 获取列表数据
            getList() {
                api.getScenicAll(this.filterParams).then((res) => {
                    if (res.code == 0) {
                        this.dataList.push(...res.data.list)
                        this.filterParams.total = res.data.total
                    }
                })
            },
            // 下拉加载
            getLoad() {
                if (this.dataList.length != this.filterParams.total) {
                    this.filterParams.pageNum++
                    this.getList()
                }
            },
            // 切换城市筛选
            handleGrade(val) {
                this.filterParams.grade = val
                this.getList()
            },
            // 获取城市数据
            handleCityType(val) {
                if (val != 0) {
                    this.cityListCurr = this.cityList.slice((val - 1) * 6, (val - 1) * 6 + 6)
                }
                this.cityActive = val
            },
            // 切换城市筛选
            handleCity(val) {
                this.filterParams.cityName = val
                this.getList()
            },
            // 价格排序
            handlePriceSort(val) {
                this.priceSort = val
                this.filterParams.sort = 2
            },
            // 列表排序
            handleSort(val) {
                this.filterParams.sort = val
                this.priceSort = ""
            },
            // 调整详情
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
    .condition-price-list {
        .el-dropdown-menu__item {
            font-size: 12px;
        }
    }

    .sales {
        .sales-tabs {
            justify-content: center;
            font-size: 14px;

            &>div {
                margin: 20px;
                position: relative;
                cursor: pointer;
            }

            .tab-active::before {
                content: '';
                position: absolute;
                width: 100%;
                height: 3px;
                border-radius: 2px;
                background: @theme-color;
                bottom: -5px;
                left: 0;
            }
        }

        .sales-wrap {
            width: 1000px;
            margin: 0 auto;

            .sales-search {
                padding: 10px 20px;
                border: 1px solid #e5e5e5;
                font-size: 12px;
                color: @info-color;

                .iconfont {
                    font-size: 12px;
                }

                .sales-search-item {
                    margin: 10px 0;

                    .el-radio__label {
                        font-size: 12px;
                    }
                }

                .sales-search-item-name {
                    width: 80px;
                }

                .city {
                    position: relative;
                    cursor: pointer;

                    &:hover {
                        text-decoration: underline;

                        .city-list {
                            height: 400px;
                        }
                    }
                }

                .city-list {
                    width: 400px;
                    height: 0;
                    overflow: hidden;
                    transition: height .2s;
                    top: 16px;
                    left: 0;
                    z-index: 99;
                    background: #fff;
                    box-shadow: 0 0 8px 0 #ccc;
                    position: absolute;
                    overflow: auto;

                    .city-list-wrap {
                        padding: 20px;

                        .city-list-tabs {

                            border-bottom: 1px solid #eee;

                            &>div {
                                position: relative;
                                padding-bottom: 10px;
                                cursor: pointer;
                            }

                            .city-active::after {
                                content: '';
                                position: absolute;
                                bottom: -0;
                                left: 0;
                                width: 100%;
                                height: 2px;
                                background: @theme-color;

                            }
                        }

                        .city-list-con {
                            .city-hot {
                                margin-top: 10px;
                                flex-wrap: wrap;

                                &>div {
                                    margin: 5px 10px;
                                    cursor: pointer;

                                    &:hover {
                                        text-decoration: underline;
                                    }
                                }
                            }

                            .con-item {
                                margin-top: 10px;
                                align-items: flex-start;
                            }

                            .con-item-name {
                                color: @error-color;
                                font-size: 14px;
                                font-weight: bold;
                                flex-shrink: 0;
                                margin-right: 10px;
                                margin-top: 3px;
                            }

                            .con-item-list {
                                flex-wrap: wrap;

                                &>div {
                                    margin: 2px 5px;
                                    cursor: pointer;

                                    &:hover {
                                        text-decoration: underline;

                                    }
                                }
                            }
                        }
                    }
                }
            }

            .list {
                margin-top: 20px;
                align-items: flex-start;

                .list-l {
                    width: 70%;

                    .list-l-condition {
                        line-height: 40px;
                        border-bottom: 1px solid #e5e5e5;
                        font-size: 12px;

                        &>div {
                            padding: 0 20px;
                            cursor: pointer;

                            .el-dropdown {
                                font-size: 12px;
                            }

                        }

                        .condition-a {
                            border: 1px solid #e5e5e5;
                            border-bottom: 0;
                            color: @theme-color;

                            .el-dropdown {
                                color: @theme-color;
                            }
                        }
                    }

                    .list-l-con {
                        .list-l-con-item {
                            padding: 20px 0;
                            padding-right: 20px;
                            cursor: pointer;

                            img {
                                width: 30%;
                                margin-right: 10px;
                                flex-shrink: 0;
                            }

                            .item-info {
                                width: 100%;
                            }

                            .count {
                                color: @info-color;
                                font-size: 12px;
                                margin-bottom: 10px;
                            }

                            .item-name {
                                font-size: 18px;
                                font-weight: bold;
                            }

                            .price-txt {
                                color: @error-color;
                                font-size: 28px;
                                margin-top: 10px;

                                .info-color {
                                    font-size: 12px;
                                }
                            }

                            .buy-btn {
                                padding: 4px 15px;
                                border: 1px solid @theme-color;
                                font-size: 16px;
                                border-radius: 3px;
                                color: @theme-color;
                            }

                            &:hover {
                                background-color: #f9f9f9;

                                .buy-btn {
                                    background-color: @theme-color;
                                    color: #fff;
                                }
                            }
                        }
                    }
                }

                .list-r {
                    width: 28%;

                    .list-r-title {
                        font-size: 18px;
                    }
                }
            }
        }

        .no-data {
            margin-top: 8%;

            img {
                width: 60%;
            }
        }
    }
</style>
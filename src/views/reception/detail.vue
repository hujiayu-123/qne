<template>
    <div class="detail-wrap">
        <div class="detail">
            <div class="detail-info flex-b">
                <div class="detail-info-img">
                    <el-image class="img-big" :src="imgUrl"></el-image>
                    <div class="img-list flex-b">
                        <el-image @mouseover="handleMuseOver(require('@/assets/images/test.jpg'))"
                            :src="require('@/assets/images/test.jpg')" :preview-src-list="[srcList[0]]">
                        </el-image>
                        <el-image @mouseover="handleMuseOver(require('@/assets/images/test1.jpg'))"
                            :src="require('@/assets/images/test1.jpg')" :preview-src-list="[srcList[1]]">
                        </el-image>
                        <el-image @mouseover="handleMuseOver(require('@/assets/images/test2.jpg'))"
                            :src="require('@/assets/images/test2.jpg')" :preview-src-list="[srcList[2]]">
                        </el-image>
                        <el-image @mouseover="handleMuseOver(require('@/assets/images/test3.jpg'))"
                            :src="require('@/assets/images/test3.jpg')" :preview-src-list="[srcList[3]]">
                        </el-image>
                        <div class="more-img flex-m">
                            更多相册
                            <i class="iconfont icon-xiangyou1"></i>
                            <el-image :src="require('@/assets/images/test3.jpg')" :preview-src-list="srcList">
                            </el-image>
                        </div>
                    </div>
                </div>
                <div class="detail-info-des">
                    <div class="info-des-title">
                        八大处公园
                        <span class="font-color">AAAA景区</span>
                    </div>
                    <div class="info-des-summ flex-m">
                        山地佛教寺庙园林
                        <div class="des-summ-label">
                            祈福
                        </div>
                    </div>
                    <div class="info-des-address">
                        <span class="des-title">景点地址：</span>
                        北京西山风景区南麓八大处公园
                        <span class="font-color">
                            <i class="iconfont icon-ditu"></i>
                            地图
                        </span>
                    </div>
                    <div class="info-des-time">
                        <span class="des-title">开放时间：</span>
                        <el-tooltip class="item" effect="light" content="Bottom Center 提示文字" placement="bottom">
                            <el-button>3月16日至8月31日 06:00-18:30 <i class="iconfont icon-arrow_down"></i> </el-button>
                        </el-tooltip>
                    </div>
                    <div class="info-des-eva">
                        <span class="des-title">精彩点评：</span>
                        今天休息来八大处打卡，还是人生中的第一次来，山不是很高，爬上去还行。不累，主要是上班太压抑，出来顺便散散心，门票10元
                    </div>
                    <div class="info-des-eva-num">
                        <i class="iconfont icon-dianping"></i>
                        368条用户点评
                        <span class="font-color">查看</span>
                    </div>
                    <div class="order-btn">
                        马上下单
                    </div>
                    <div class="info-des-price flex-c">
                        <div> <span class="font-25">￥</span><span class="font-40">45</span> 起 </div>
                        <div class="font">票面价：<span class="text-onu">￥45</span></div>
                    </div>
                </div>
            </div>
            <div class="detail-con flex-b">
                <div class="detail-con-l">
                    <div :class="isFixed?'flex-m con-tabs con-tabs-fixed':'flex-m con-tabs'">
                        <div :class="activeIndex==0?'active':''" @click="handleLink('link-1',0)">预定须知</div>
                        <div :class="activeIndex==1?'active':''" @click="handleLink('link-2',1)">景点简介</div>
                        <div :class="activeIndex==2?'active':''" @click="handleLink('link-3',2)">游客点评</div>
                        <div :class="activeIndex==3?'active':''" @click="handleLink('link-4',3)">交通指南</div>
                    </div>
                    <div class="con-cons">
                        <div id="link-1">
                            <div class="title">
                                <div class="icon">
                                    <i class="iconfont icon-xuzhi"></i>
                                </div>
                                预定须知
                            </div>
                            <div class="con"></div>
                        </div>
                        <div id="link-2">
                            <div class="title">
                                <div class="icon">
                                    <i class="iconfont icon-jianjie"></i>
                                </div>

                                景点简介
                            </div>
                            <div class="con"></div>
                        </div>
                        <div id="link-3">
                            <div class="title">
                                <div class="icon">
                                    <i class="iconfont icon-dianping"></i>
                                </div>

                                游客点评
                            </div>
                            <div class="con"></div>
                        </div>
                        <div id="link-4">
                            <div class="title">
                                <div class="icon">
                                    <i class="iconfont icon-jiaotong"></i>
                                </div>

                                交通指南
                            </div>
                            <div class="con"></div>
                        </div>
                    </div>
                </div>
                <div class="detail-con-r">
                    <div class="con-r-title">
                        周边推荐
                    </div>
                    <div class="con-r-list">
                        <div class="list-item">
                            <div class="img-wrap">
                                <img :src="require('@/assets/images/test.jpg')" alt="">
                            </div>
                            <div class="item-name">古武当山景区</div>
                            <div class="flex-b">
                                <div class="price">￥40<span class="font-color">起</span></div>
                                <div class="detail-btn">去看看</div>
                            </div>
                        </div>
                        <div class="list-item">
                            <div class="img-wrap">
                                <img :src="require('@/assets/images/test.jpg')" alt="">
                            </div>
                            <div class="item-name">古武当山景区</div>
                            <div class="flex-b">
                                <div class="price">￥40<span class="font-color">起</span></div>
                                <div class="detail-btn">去看看</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
    export default {
        data() {
            return {
                imgUrl: require('@/assets/images/test.jpg'),
                srcList: [
                    'https://pic5.40017.cn/02/000/ee/50/rBLkCFsFIJyAME9fAAKS5I6DEEY886_540x304_00.jpg',
                    'https://pic5.40017.cn/01/001/ee/49/rBLkBVsFIJuADniIAAH1BNAsZPU157_540x304_00.jpg',
                    'https://pic5.40017.cn/02/000/ed/c5/rBANDFsFIJqADHc9AAJ05SyAUlA098_540x304_00.jpg',
                    'https://pic5.40017.cn/02/000/ee/50/rBLkCFsFIJmAQzVcAAJL166pWRM537_540x304_00.jpg'
                ],
                activeIndex: 0,
                isFixed: false
            }
        },
        mounted() {
            window.addEventListener("scroll", this.scrollEvent);
        },
        methods: {
            // 监听滚动条
            scrollEvent() {
                var scrollTop =
                    window.pageYOffset ||
                    document.documentElement.scrollTop ||
                    document.body.scrollTop;
                this.getScrollTop(scrollTop);
            },
            // 锚点定位
            handleLink(dom, index) {
                this.activeIndex = index
                document.getElementById(dom).scrollIntoView(false)
            },
            // 图片效果
            handleMuseOver(url) {
                this.imgUrl = url
            },
            // 滚动条 分类标签样式切换
            getScrollTop(val) {
                if (val >= 500) {
                    this.isFixed = true;
                } else {
                    this.isFixed = false;
                }

            },
        }
    }
</script>
<style lang="less">
    .detail-wrap {
        background: #f6f6f6;
        overflow: hidden;
    }

    .detail {
        width: 1200px;
        margin: 20px auto;

        .detail-info {
            background: #fff;
            padding: 20px;
            align-items: flex-start;

            .detail-info-img {
                width: 45%;

                .img-big {
                    height: 294px;
                }

                .img-list {
                    &>div {
                        width: 19%;
                        height: 55px;
                    }

                    .more-img {
                        background: #f6f6f6;
                        color: #666;
                        padding: 10px;
                        box-sizing: border-box;
                        font-size: 14px;
                        cursor: pointer;
                        position: relative;

                        .el-image {
                            position: absolute;
                            width: 100%;
                            height: 100%;
                            opacity: 0;
                            top: 0;
                            left: 0;
                        }
                    }
                }

            }

            .detail-info-des {
                width: 53%;
                font-size: 14px;
                position: relative;

                .des-title {
                    font-weight: bold;
                }

                .info-des-title {
                    font-size: 28px;
                    font-weight: bold;

                    .font-color {
                        margin-left: 5px;
                        font-size: 16px;
                        font-weight: 400;
                    }
                }

                .info-des-summ {
                    color: @info-color;
                    margin: 15px 0 10px 0;

                    .des-summ-label {
                        padding: 0 5px;
                        border: 1px solid @error-color;
                        border-radius: 4px;
                        font-size: 12px;
                        margin: 0 10px;
                        color: @error-color;
                    }
                }

                .info-des-address {
                    margin: 10px 0;

                    .font-color {
                        margin-left: 5px;
                        cursor: pointer;
                    }
                }

                .info-des-eva {
                    padding: 10px 20px;
                    background: rgba(140, 190, 28, 0.2);
                    border-radius: 4px;
                    margin: 13px 0;
                }

                .info-des-eva-num {
                    margin-top: 20px;

                    .iconfont {
                        color: @theme-color;
                    }
                }

                .order-btn {
                    padding: 5px 20px;
                    font-size: 20px;
                    border-radius: 4px;
                    border: 1px solid @theme-color;
                    display: inline-block;
                    color: @theme-color;
                    margin-top: 15px;
                    cursor: pointer;

                    &:hover {
                        background: @theme-color;
                        color: #fff;
                    }
                }

                .info-des-price {
                    position: absolute;
                    right: -20px;
                    top: 23%;
                    background: @error-color;
                    border-top-left-radius: 60px;
                    border-bottom-left-radius: 60px;
                    padding: 10px 10px 10px 60px;
                    color: #fff;
                    align-items: flex-end;

                    .font-40 {
                        font-size: 40px;
                        font-weight: bold;
                    }

                    .font-25 {
                        font-size: 25px;
                        font-weight: bold;
                    }

                    .font {
                        color: #ffd4be;
                        margin-top: -5px;
                    }

                    .text-onu {
                        text-decoration: line-through;
                    }
                }

                .info-des-time {
                    margin: 10px 0;

                    .el-button {
                        padding: 0;
                        border: 0;
                    }
                }
            }
        }

        .detail-con {
            margin-top: 20px;
            align-items: flex-start;

            .detail-con-l {
                width: 78%;
                background: #fff;

                .con-tabs {
                    width: 100%;
                    background: #3F4447;
                    color: #fff;
                    height: 45px;

                    &>div {
                        padding: 0 30px;
                        height: 100%;
                        line-height: 45px;
                        cursor: pointer;
                    }

                    .active {
                        background: #fff;
                        color: @primary-color;
                    }
                }

                .con-tabs-fixed {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    background: #3F4447;
                    color: #fff;
                    height: 45px;
                    padding: 0 9%;
                    z-index: 99;
                }

                .con-cons {
                    padding: 20px;

                    &>div {

                        .title {
                            position: relative;
                            line-height: 40px;
                            border-bottom: 1px dashed #ddd;
                            color: @theme-color;
                            margin-left: 30px;

                            .icon {
                                position: absolute;
                                top: 1px;
                                width: 40px;
                                height: 40px;
                                line-height: 40px;
                                left: -48px;
                                border-radius: 50%;
                                background: #f6f6f6;
                                text-align: center;

                                i {
                                    font-size: 22px;

                                    line-height: 30px;
                                }
                            }
                        }

                        .con {
                            height: 400px;
                            border-left: 3px solid #eceff2;
                            padding: 0 20px;
                        }
                    }
                }
            }

            .detail-con-r {
                width: 20%;
                background: #fff;
                padding: 10px;
                box-sizing: border-box;

                .con-r-title {
                    font-size: 20px;
                    font-weight: bold;
                }

                .list-item {
                    margin-top: 10px;
                    padding-bottom: 10px;
                    border: 1px solid #f0f0f0;
                    box-sizing: border-box;
                    cursor: pointer;
                    font-size: 14px;

                    &:hover {
                        img {
                            transform: scale(1.2);
                            transition: all .6s;
                        }
                    }

                    .img-wrap {
                        width: 100%;
                        height: 122px;
                        overflow: hidden;
                    }

                    .item-name {
                        margin: 5px 0;
                        padding: 0 10px;
                    }

                    .flex-b {
                        padding: 0 10px;
                    }

                    .price {
                        color: @error-color;
                        font-size: 18px;
                    }

                    .detail-btn {
                        font-size: 12px;
                        background: @theme-color;
                        color: #fff;
                        padding: 1px 10px;
                        border-radius: 4px;
                    }

                    .font-color {
                        color: @info-color;
                        font-size: 12px;
                    }
                }
            }
        }
    }

    .el-image-viewer__canvas {
        img {
            width: auto;
        }
    }
</style>
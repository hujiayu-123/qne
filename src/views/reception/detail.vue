<template>
    <div class="detail-wrap">
        <div class="detail">
            <div class="detail-info flex-b">
                <div class="detail-info-img" v-if="dataDetail.images.length">
                    <el-image class="img-big" :src="imgUrl?imgUrl:dataDetail.images[0]"></el-image>
                    <div class="img-list flex-b">
                        <el-image v-for="item in dataDetail.images.slice(0,4)" :key="item"
                            @mouseover="handleMuseOver(item)" :src="item" :preview-src-list="[item]">
                        </el-image>
                        <div class="more-img flex-m">
                            更多相册
                            <i class="iconfont icon-xiangyou1"></i>
                            <el-image :src="dataDetail.images[0]" :preview-src-list="dataDetail.images">
                            </el-image>
                        </div>
                    </div>
                </div>
                <div class="detail-info-img flex-c no-img" v-else>
                    暂无上传图片
                </div>
                <div class="detail-info-des">
                    <div class="info-des-title">
                        {{dataDetail.scenicName}}
                        <span class="font-color">{{dataDetail.grade}}</span>
                    </div>
                    <div class="info-des-summ flex-m">
                        {{dataDetail.summary}}
                        <!-- <div class="des-summ-label">
                            {{dataDetail.summary}}
                        </div> -->
                    </div>
                    <div class="info-des-address">
                        <span class="des-title">景点地址：</span>
                        {{dataDetail.sceneryAddress}}
                        <span class="font-color" @click="handleLink('link-4',3)">
                            <i class="iconfont icon-ditu"></i>
                            地图
                        </span>
                    </div>
                    <div class="info-des-time">
                        <span class="des-title">开放时间：</span>
                        {{dataDetail.openTimeStart}} - {{dataDetail.openTimeEnd}}
                    </div>
                    <div class="info-des-eva">
                        <span class="des-title">精彩点评：</span>
                        今天休息来八大处打卡，还是人生中的第一次来，山不是很高，爬上去还行。不累，主要是上班太压抑，出来顺便散散心，门票10元
                    </div>
                    <div class="info-des-eva-num" @click="handleLink('link-3',2)">
                        <i class="iconfont icon-dianping"></i>
                        368条用户点评
                        <span class="font-color">查看</span>
                    </div>
                    <div class="order-btn" @click="handleToOrder">
                        马上下单
                    </div>
                    <div class="info-des-price flex-c">
                        <div> <span class="font-25">￥</span><span class="font-40">{{dataDetail.ticketsAmount}}</span> 起
                        </div>
                        <div class="font">票面价：<span class="text-onu">￥{{dataDetail.ticketsAmount}}</span></div>
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
                        <div class="link">
                            <div class="link-wrap" id="link-1"></div>
                            <div class="title">
                                <div class="icon">
                                    <i class="iconfont icon-xuzhi"></i>
                                </div>
                                预定须知
                            </div>
                            <div class="con">
                                <div class="notice flex-m">
                                    <div>
                                        <img :src="require('@/assets/images/stop.png')" alt="">
                                        <div>停车场</div>
                                    </div>
                                    <div>
                                        <img :src="require('@/assets/images/no-cat.png')" alt="">
                                        <div>禁止宠物入园</div>
                                    </div>
                                    <div>
                                        <img :src="require('@/assets/images/wc.png')" alt="">
                                        <div>公厕</div>
                                    </div>
                                    <div>
                                        <img :src="require('@/assets/images/shop.png')" alt="">
                                        <div>商店</div>
                                    </div>
                                </div>
                                <div class="notice-tab flex-m">
                                    <div class="notice-tab-title">{{title}}预定须知</div>
                                    <div class="notice-tab-con">
                                        <div class="martb10">
                                            <div class="tab-title">
                                                特惠政策
                                            </div>
                                        </div>
                                        <div class="martb10">
                                            <div class="tab-title">
                                                温馨提示
                                            </div>
                                            <div class="mart5">
                                                ①
                                                {{title}}现已启动分时段全网预约，{{title}}限制一张身份证每个入园日最多可预订四张全价成人票，两张半价老人优惠票，两张学生/儿童优惠票，一张优惠对象预约票，且成人票、老人票或者学生/儿童票不可在一个订单中预订，且只能预订包括当天在内的7天的门票。给您带来不便，敬请谅解；
                                            </div>
                                            <div class="mart5">
                                                ② 为保证入园顺利，预订时请务必填写真实姓名、手机号码号等信息；
                                            </div>
                                            <div class="mart5">
                                                ③ 网络门票预订成功后，不得改期；如需改期，请申请取消订单后重新预订；
                                            </div>
                                            <div class="mart5">
                                                ④ 网络预订票仅预约当天有效，游客可持预售登记的身份证及预订成功后收到的短信二维码快速入园。预订门票一经使用不可退订；
                                            </div>
                                            <div class="mart5">
                                                ⑤ 预售门票在未使用的情况下，可申请退单。退单需整单退订，不得退订整单中部分门票；
                                            </div>
                                            <div class="mart5">
                                                ⑥ 同一张身份证预订多笔订单的，建议使用短信二维码入园；
                                            </div>
                                            <div class="mart5">
                                                ⑦ {{title}}门票价格严格执行国家价格规定， 为了您的合法权益，请从正规渠道购买景区门票，切勿相信景区门口黄牛及野导；
                                            </div>
                                            <div class="mart5">
                                                ⑧ 淡季为1-3月、6月、11-12月；旺季为4-5月、7-10月；
                                            </div>
                                            <div class="mart5">
                                                ⑨ 网上预订{{title}}门票不提供自动导游器，如有游客需要请到景区租赁，需自费。景区每逢半点和整点都有免费讲解服务。
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="link">
                            <div class="link-wrap" id="link-2"></div>
                            <div class="title">
                                <div class="icon">
                                    <i class="iconfont icon-jianjie"></i>
                                </div>

                                景点简介
                            </div>
                            <div class="con">
                                <div v-if="dataDetail.descImages.length">
                                    <div class="pdl20 marb20" v-for="(item,index) in dataDetail.descImages"
                                        :key="index">
                                        <div>
                                            <img :src="item.image" alt="">
                                        </div>
                                        <div class="mart5">
                                            {{item.desc}}
                                        </div>
                                    </div>
                                </div>
                                <div class="no-des" v-else>
                                    暂无简介
                                </div>
                            </div>
                        </div>
                        <div class="link">
                            <div class="link-wrap" id="link-3"></div>
                            <div class="title">
                                <div class="icon">
                                    <i class="iconfont icon-dianping"></i>
                                </div>

                                游客点评
                            </div>
                            <div class="con">
                                <div class="comment-score flex-m">
                                    <div class="text-c">
                                        <div class="score">98%</div>
                                        <div class="score-tips">
                                            满意度
                                        </div>
                                        <div class="score-tips font-h">(好评+中评)/总评</div>
                                    </div>
                                    <div class="comment-rate">
                                        <div class="flex-m">
                                            好评率：<el-progress color="#f60" :percentage="50"></el-progress>

                                        </div>
                                        <div class="flex-m">
                                            中评率：<el-progress color="#f60" :percentage="50"></el-progress>

                                        </div>
                                        <div class="flex-m">
                                            差评率：<el-progress color="#f60" :percentage="50"></el-progress>

                                        </div>
                                    </div>
                                    <div>
                                        <div class="impression-tips">
                                            游客印象
                                        </div>
                                        <div class="flex-m impression-list">
                                            <div class="impression-item">
                                                整体不错（58）
                                            </div>
                                            <div class="impression-item">
                                                整体不错（58）
                                            </div>
                                            <div class="impression-item">
                                                整体不错（58）
                                            </div>
                                            <div class="impression-item">
                                                整体不错（58）
                                            </div>
                                            <div class="impression-item">
                                                整体不错（58）
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div class="comment-tabs">
                                    <el-radio v-model="commentType" label="1">全部（100）</el-radio>
                                    <el-radio v-model="commentType" label="2">最新（500）</el-radio>
                                    <el-radio v-model="commentType" label="3">好评（500）</el-radio>
                                    <el-radio v-model="commentType" label="4">中评（500）</el-radio>
                                    <el-radio v-model="commentType" label="5">差评（500）</el-radio>
                                    <el-radio v-model="commentType" label="6">有图（500）</el-radio>
                                </div>
                                <div class="comment-list">
                                    <div class="comment-list-items">
                                        <div class="items-name flex-m">
                                            <i class="iconfont icon-haoping"> </i>
                                            <span class="marlr10">好评</span>
                                            <span class="font-h">KK1021</span>
                                        </div>
                                        <div class="items-con">
                                            去了苏州很多次，终于有一次可以去苏州园林逛逛了，很典型的苏式园林风格，慢慢走，慢慢悠，租个讲解慢慢听，很有意思
                                        </div>
                                        <div class="items-imgs flex-m">
                                            <el-image @mouseover="handleMuseOver(require('@/assets/images/test.jpg'))"
                                                :src="require('@/assets/images/test.jpg')"
                                                :preview-src-list="[srcList[0]]">
                                            </el-image>
                                        </div>
                                    </div>
                                    <div class="comment-list-items">
                                        <div class="items-name flex-m">
                                            <i class="iconfont icon-zhongping"> </i>
                                            <span class="marlr10">中评</span>
                                            <span class="font-h">KK1021</span>
                                        </div>
                                        <div class="items-con">
                                            去了苏州很多次，终于有一次可以去苏州园林逛逛了，很典型的苏式园林风格，慢慢走，慢慢悠，租个讲解慢慢听，很有意思
                                        </div>
                                    </div>
                                    <div class="comment-list-items">
                                        <div class="items-name flex-m">
                                            <i class="iconfont icon-chaping"> </i>
                                            <span class="marlr10">差评</span>
                                            <span class="font-h">KK1021</span>
                                        </div>
                                        <div class="items-con">
                                            去了苏州很多次，终于有一次可以去苏州园林逛逛了，很典型的苏式园林风格，慢慢走，慢慢悠，租个讲解慢慢听，很有意思
                                        </div>
                                    </div>
                                    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                                        :current-page="currentPage" :page-sizes="[20, 50, 100]" :page-size="20"
                                        layout="total, sizes, prev, pager, next, jumper" :total="400">
                                    </el-pagination>
                                </div>
                            </div>
                        </div>
                        <div class="link">
                            <div class="link-wrap" id="link-4"></div>
                            <div class="title">
                                <div class="icon">
                                    <i class="iconfont icon-jiaotong"></i>
                                </div>
                                交通指南
                            </div>
                            <div class="con">
                                <div id="allmap" ref="allmap"></div>
                                <div class="traffic">
                                    <div v-if="metroList.length || transitList.length" class="traffic-items">
                                        <div class="traffic-txt">
                                            <span class="font-bg">公</span> 公共交通
                                        </div>
                                        <div v-if="metroList.length" class="traffic-items-i">
                                            ① {{metroList[0].title}}。
                                        </div>
                                        <div v-if="transitList.length" class="traffic-items-i">
                                            ② {{transitList[0].title}}站：{{transitList[0].address}}。
                                        </div>
                                    </div>
                                    <div class="traffic-items" v-if="parkingLotList.length">
                                        <div class="traffic-txt">
                                            <span class="font-bg">P</span> 周边停车场
                                        </div>
                                        <div class="traffic-items-i font-weight">
                                            {{parkingLotList[0].title}}
                                        </div>
                                        <div class="traffic-items-i">
                                            参考价：¥6/小时 库位：50
                                        </div>
                                        <div class="traffic-items-i">
                                            地址：{{parkingLotList[0].address}}
                                        </div>
                                    </div>
                                    <div class="tips">
                                        以上信息仅供参考。
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="detail-con-r" v-if="dataDetail.rim.length">
                    <div class="con-r-title">
                        周边推荐
                    </div>
                    <div class="con-r-list">
                        <div class="list-item" v-for="item in dataDetail.rim" :key="item.id"
                            @click="handleToDetail(item.sceneryName)">
                            <div class="img-wrap">
                                <img :src="item.sceneryImg" alt="">
                            </div>
                            <div class="item-name flex-b">
                                <div class="name">{{item.sceneryName}}</div>
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
    import api from "@/server/api.js";
    export default {
        data() {
            return {
                imgUrl: "",
                srcList: [
                    'https://pic5.40017.cn/02/000/ee/50/rBLkCFsFIJyAME9fAAKS5I6DEEY886_540x304_00.jpg',
                    'https://pic5.40017.cn/01/001/ee/49/rBLkBVsFIJuADniIAAH1BNAsZPU157_540x304_00.jpg',
                    'https://pic5.40017.cn/02/000/ed/c5/rBANDFsFIJqADHc9AAJ05SyAUlA098_540x304_00.jpg',
                    'https://pic5.40017.cn/02/000/ee/50/rBLkCFsFIJmAQzVcAAJL166pWRM537_540x304_00.jpg'
                ],
                activeIndex: 0,
                isFixed: false,
                commentType: "1",
                currentPage: 1,
                transitList: [], // 公交
                metroList: [], // 地铁
                parkingLotList: [], // 停车场
                title: "",
                dataDetail: {},
                commentList: [] // 评价数据
            }
        },
        mounted() {
            window.addEventListener("scroll", this.scrollEvent);
            this.getDataList()
        },
        methods: {
            // 跳转详情
            handleToDetail(id) {
                let routeUrl = this.$router.resolve({
                    path: "/detail",
                    query: {
                        id: id
                    }
                });
                window.open(routeUrl.href, "_blank");
            },
            // 获取详情数据
            getDataList() {
                let param = {
                    scenicName: this.$route.query.id
                }
                api.getScenicDetail(param).then((res) => {
                    if (res.code == "0") {
                        this.dataDetail = res.data
                        this.getComment()
                        this.$nextTick(() => {
                            this.map()
                        })
                    }
                })
            },
            // 获取评价数据
            getComment() {
                api.getComment({
                    sericId: this.dataDetail.id
                }).then((res) => {
                    if (res.code == "0") {
                        this.commentList = res.data
                    }
                })
            },
            // 跳转订单页面
            handleToOrder() {
                let token = localStorage.getItem('token')
                if (token) {
                    let detail = {
                        scenicName: this.dataDetail.scenicName,
                        sceneryImgPath: this.dataDetail.sceneryImgPath,
                        ticketsAmount: this.dataDetail.ticketsAmount,
                        id: this.dataDetail.id,
                    }
                    this.$router.push({
                        path: "/order",
                        query: {
                            detail: encodeURI(JSON.stringify(detail))
                        }
                    })
                } else {
                    this.$message({
                        type: "warning",
                        message: "登录后才可下单"
                    })
                }
            },
            // 加载地图
            map() {
                let {
                    latitude,
                    longitude,
                    scenicName,
                    sceneryAddress
                } = this.dataDetail
                var map = new window.BMapGL.Map('allmap');
                var point = new window.BMapGL.Point(longitude, latitude);
                map.centerAndZoom(point, 15);
                var opts = {
                    width: 200,
                    height: 100,
                    title: scenicName
                };
                var marker = new window.BMapGL.Marker(point); // 创建标注
                map.addOverlay(marker); // 将标注添加到地图中
                var infoWindow = new window.BMapGL.InfoWindow('地址：' + sceneryAddress, opts);
                map
                    .openInfoWindow(infoWindow, point);
                marker.addEventListener("click", function () {
                    map.openInfoWindow(infoWindow, point); //开启信息窗口
                });
                var local = new window.BMapGL.LocalSearch(map);
                local.searchNearby(["公交", "地铁", "停车场"], point,
                    500);
                local.setSearchCompleteCallback(this.mySearchCompleteCallback);

                map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
            },
            // 获取周边公交地铁停车场
            mySearchCompleteCallback(local) {
                local.map((item) => {
                    if (item.keyword == "公交") {
                        this.transitList = item._pois
                    }
                    if (item.keyword == "地铁") {
                        this.metroList = item._pois
                    }
                    if (item.keyword == "停车场") {
                        this.parkingLotList = item._pois
                    }
                })
            },
            // 切换当前第几页
            handleCurrentChange() {

            },
            // 切换一页显示条数
            handleSizeChange() {

            },
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
                document.getElementById(dom).scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                })
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

            .no-img {
                margin-top: 10%;
                color: #999;
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
                    padding: 5px 30px;
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
                    background: #666;
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

                    .link {
                        position: relative;

                        .link-wrap {
                            position: absolute;
                            top: -100px;
                            left: 0;
                        }
                    }

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
                            min-height: 400px;
                            border-left: 3px solid #eceff2;
                            padding: 20px;
                            font-size: 14px;

                            .no-des {
                                padding: 20px;
                                color: #999;
                            }

                            .comment-score {
                                padding: 0 40px;
                                height: auto;

                                .comment-rate {
                                    font-size: 12px;
                                    flex-shrink: 0;

                                    &>div {
                                        padding: 5px 0;
                                    }
                                }

                                &>div {
                                    margin-right: 30px;
                                }

                                &>div:last-child {
                                    margin-right: 0;
                                }

                                .text-c {
                                    text-align: center;
                                }

                                .el-progress {
                                    width: 200px;

                                    .el-progress__text {
                                        font-size: 12px !important;
                                        color: #f60;
                                    }
                                }


                                .score {
                                    color: #f60;
                                    font-weight: bold;
                                    font-size: 46px;
                                }

                                .score-tips,
                                .impression-tips {
                                    font-size: 12px;
                                }

                                .impression-list {
                                    flex-wrap: wrap;
                                }

                                .impression-item {
                                    padding: 2px 5px;
                                    border-radius: 4px;
                                    color: #f60;
                                    border: 1px solid #f60;
                                    font-size: 12px;
                                    margin: 5px 5px 5px 0;
                                }
                            }

                            .comment-tabs {
                                margin: 20px;
                                background: #f6f6f6;
                                border-top: 1px solid #e5e5e5;
                                padding: 10px;

                                .el-radio {
                                    margin-right: 10px;
                                }
                            }

                            .comment-list {
                                margin: 0 20px;

                                .comment-list-items {
                                    padding-bottom: 20px;
                                    border-bottom: 1px solid #e5e5e5;
                                    margin: 10px 0;

                                    .items-name {
                                        font-size: 14px;

                                        .iconfont {
                                            font-size: 28px;
                                            font-weight: bold;
                                        }

                                        .icon-haoping {
                                            color: #BD6040;
                                        }

                                        .icon-zhongping {
                                            color: gold;
                                        }

                                        .icon-chaping {
                                            color: #9A9591;
                                        }
                                    }

                                    .items-imgs {
                                        margin-top: 10px;

                                        .el-image {
                                            width: 100px;
                                            height: 100px;
                                        }
                                    }
                                }
                            }

                            .font-h {
                                color: #999;
                            }

                            #allmap {
                                width: 100%;
                                height: 400px;
                            }

                            .traffic {
                                .traffic-txt {
                                    color: #ff9b26;
                                    border: 1px solid #ff9b26;
                                    display: inline-block;
                                    border-radius: 4px;
                                    padding-right: 10px;
                                    height: 20px;
                                    line-height: 20px;

                                    .font-bg {
                                        display: inline-block;
                                        background: #ff9b26;
                                        color: #fff;
                                        padding: 0 10px;
                                    }
                                }

                                .traffic-items {
                                    margin: 20px 0;

                                    .traffic-items-i {
                                        margin-top: 5px;
                                    }
                                }

                                .tips {
                                    color: #ff9b26;
                                }
                            }

                            .notice {
                                img {
                                    width: 60px;
                                }

                                &>div {
                                    text-align: center;
                                    margin: 0 20px;
                                }
                            }

                            .notice-tab {
                                border: 1px solid #eceff2;
                                margin-top: 20px;

                                .notice-tab-title {
                                    width: 200px;
                                    text-align: center;

                                }

                                .tab-title {
                                    border-left: 4px solid @theme-color;
                                    padding: 0 10px;
                                    font-weight: bold;
                                }

                                .notice-tab-con {
                                    padding: 20px;
                                    border-left: 1px solid #eceff2;
                                }
                            }
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
                    border: 1px solid #f0f0f0;
                    box-sizing: border-box;
                    cursor: pointer;
                    font-size: 14px;

                    img {
                        transition: all .6s;
                    }

                    &:hover {
                        img {
                            transform: scale(1.2);
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

                    .name {
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                    }

                    .detail-btn {
                        font-size: 12px;
                        background: @theme-color;
                        color: #fff;
                        padding: 1px 10px;
                        border-radius: 4px;
                        flex-shrink: 0;
                    }

                    .font-color {
                        color: @info-color;
                        font-size: 12px;
                    }
                }
            }
        }
    }
</style>
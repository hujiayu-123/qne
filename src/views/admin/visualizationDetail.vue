<template>
    <div class="visualization-detail">
        <div class="detail-title">
            <img :src="require('@/assets/images/dp-title.png')" alt="">
            <div class="detail-title-txt">
                景区流量统计
            </div>
        </div>
        <div class="wrap-pd">
            <div class="flex-m wrap">
                <div class="total-wrap flex-c">
                    <img class="left-line line" :src="require('@/assets/images/dp-left-line.png')" alt="">
                    <div class="flex-m red">
                        <div>
                            <i class="iconfont icon-dingdanshuju"></i>
                        </div>
                        <div class="total-num">
                            <div>今日订单数</div>
                            <div class="font-weight">123</div>
                        </div>
                    </div>
                    <div class="flex-m blue">
                        <div>
                            <i class="iconfont icon-zhangdan_xinzeng_o"></i>
                        </div>
                        <div class="total-num">
                            <div>较昨日新增</div>
                            <div class="font-weight">23</div>
                        </div>
                    </div>
                    <div class="flex-m yellow">
                        <div>
                            <i class="iconfont icon-zengchangshuai"></i>
                        </div>
                        <div class="total-num">
                            <div>增值率</div>
                            <div class="font-weight">23%</div>
                        </div>
                    </div>
                    <img class="right-line line" :src="require('@/assets/images/dp-right-line.png')" alt="">
                </div>
                <div class="Statistics-wrap">
                    <img class="left-line line" :src="require('@/assets/images/dp-left-line.png')" alt="">
                    <div class="flex-b">
                        <div class="flex-c">
                            <div>今日收入</div>
                            <div>￥5224</div>
                        </div>
                        <img class="hr" :src="require('@/assets/images/dp-hr.png')" alt="">
                        <div class="flex-c">
                            <div>
                                较昨日新增
                            </div>
                            <div>￥324</div>
                        </div>
                        <img class="hr" :src="require('@/assets/images/dp-hr.png')" alt="">
                        <div class="flex-c">
                            <div>
                                本周总收入
                            </div>
                            <div>￥589425</div>
                        </div>

                    </div>
                    <img class="right-line line" :src="require('@/assets/images/dp-right-line.png')" alt="">
                </div>
                <div class="pie-wrap">
                    <div class="title">景区游客画像</div>
                    <img class="left-line line" :src="require('@/assets/images/dp-left-line.png')" alt="">
                    <div class="flex-b">
                        <div id="pie-1"></div>
                        <div id="pie-2"></div>
                    </div>

                    <img class="right-line line" :src="require('@/assets/images/dp-right-line.png')" alt="">
                </div>
            </div>

            <div class="flex-m wrap wrap-height">
                <div class="pies-wrap flex-m">
                    <img class="left-line line" :src="require('@/assets/images/dp-left-line.png')" alt="">
                    <div id="pie-3"></div>
                    <div class="eva-list flex-c">
                        <div class="list-item flex-m">
                            <div>
                                <img :src="require('@/assets/images/avatar.png')" alt="">
                            </div>
                            <div class="item-txt">景区环境真的棒，好评</div>
                        </div>
                        <div class="list-item flex-m">
                            <div>
                                <img :src="require('@/assets/images/avatar.png')" alt="">
                            </div>
                            <div class="item-txt">好评</div>
                        </div>
                        <div class="list-item flex-m">
                            <div>
                                <img :src="require('@/assets/images/avatar.png')" alt="">
                            </div>
                            <div class="item-txt">景区环境真的棒，服务也很好，好评</div>
                        </div>
                    </div>
                    <img class="right-line line" :src="require('@/assets/images/dp-right-line.png')" alt="">
                </div>
                <div class="line-wrap">
                    <img class="left-line line" :src="require('@/assets/images/dp-left-line.png')" alt="">
                    <div id="line-1"></div>
                    <img class="right-line line" :src="require('@/assets/images/dp-right-line.png')" alt="">
                </div>
                <div class="table-wrap">
                    <img class="left-line line" :src="require('@/assets/images/dp-left-line.png')" alt="">
                    <div class="title">当天值班人员</div>
                    <table class="table" width="100%" align="center" cellspacing="0">
                        <thead>
                            <tr>
                                <td>日期</td>
                                <td>值班人员</td>
                                <td>联系电话</td>
                            </tr>
                        </thead>

                        <tr>
                            <td>2022-01-02</td>
                            <td>张三</td>
                            <td>110</td>
                        </tr>
                        <tr>
                            <td>2022-01-02</td>
                            <td>张三</td>
                            <td>110</td>
                        </tr>
                        <tr>
                            <td>2022-01-02</td>
                            <td>张三</td>
                            <td>110</td>
                        </tr>
                        <tr>
                            <td>2022-01-02</td>
                            <td>张三</td>
                            <td>110</td>
                        </tr>
                        <tr>
                            <td>2022-01-02</td>
                            <td>张三</td>
                            <td>110</td>
                        </tr>
                    </table>
                    <img class="right-line line" :src="require('@/assets/images/dp-right-line.png')" alt="">
                </div>
            </div>
        </div>

    </div>
</template>
<script>
    import * as echarts from 'echarts';
    export default {
        data() {
            return {
                tableData: []
            }
        },
        mounted() {
            this.handlePie()
            this.handleLine()
            window.onresize = function () {
                this.handleSetRem()
            }
        },
        methods: {
            handleSetRem() {
                var clientWidth = document.body.clientWidth
                let scale = 0
                if (clientWidth > 1960) {
                    scale = (1960 / 1495) * 16
                } else {
                    scale = (clientWidth / 1495) * 16
                }
                document.querySelector('.visualization-detail').style.fontSize = scale + 'px'
            },
            handlePie() {
                var myChart = echarts.init(document.getElementById('pie-1'));
                myChart.setOption({
                    title: {
                        text: '年\n龄\n统\n计',
                        x: "left",
                        y: "center",
                        textStyle: {
                            color: "#c0c0c0",
                            fontWeight: "normal",
                            fontSize: "16"
                        }
                    },
                    tooltip: {
                        trigger: 'item'
                    },
                    series: [{
                        name: '年龄统计',
                        type: 'pie',
                        radius: ['40%', '70%'],
                        avoidLabelOverlap: false,
                        label: {
                            show: false,
                            position: 'center',
                            normal: {
                                show: false,
                                position: 'center',
                                formatter: [
                                    '{b}',
                                    '{c}人'
                                ].join('\n'),
                            }
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: '25',
                                fontWeight: 'bold'
                            }
                        },
                        labelLine: {
                            show: false
                        },
                        data: [{
                                value: 120,
                                name: '中年'
                            },
                            {
                                value: 735,
                                name: '青年'
                            },
                            {
                                value: 580,
                                name: '老年'
                            },
                            {
                                value: 484,
                                name: '少年'
                            }
                        ]
                    }]
                })
                var myChart1 = echarts.init(document.getElementById('pie-2'));
                myChart1.setOption({
                    title: {
                        text: '性\n别\n统\n计',
                        x: "left",
                        y: "center",
                        textStyle: {
                            color: "#c0c0c0",
                            fontWeight: "normal",
                            fontSize: "16"
                        }
                    },
                    tooltip: {
                        trigger: 'item'
                    },
                    series: [{
                        name: '性别统计',
                        type: 'pie',
                        radius: ['40%', '70%'],
                        avoidLabelOverlap: false,
                        label: {
                            show: false,
                            position: 'center',
                            normal: {
                                show: false,
                                position: 'center',
                                formatter: [
                                    '{b}',
                                    '{c}%'
                                ].join('\n'),
                            }
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: '25',
                                fontWeight: 'bold'
                            }
                        },
                        labelLine: {
                            show: false
                        },
                        data: [{
                                value: 60,
                                name: '女性'
                            },
                            {
                                value: 40,
                                name: '男性'
                            }
                        ]
                    }]
                })
                var myChart2 = echarts.init(document.getElementById('pie-3'));
                myChart2.setOption({
                    title: {
                        text: '景区舆情监测',
                        textStyle: {
                            color: "#fff",
                            fontWeight: "normal",
                            fontSize: "20"
                        }
                    },
                    series: [{

                        name: '景区舆情监测',
                        type: 'pie',
                        radius: [20, 70],
                        center: ['50%', '50%'],
                        roseType: 'area',
                        data: [{
                                value: 40,
                                name: '负面'
                            },
                            {
                                value: 38,
                                name: '中性'
                            },
                            {
                                value: 32,
                                name: '正面'
                            }
                        ]
                    }]
                })

                let pieArr = [myChart, myChart1, myChart2]
                pieArr.map((item) => {
                    let index = 0
                    //设置默认选中高亮部分
                    item.dispatchAction({
                        type: 'highlight',
                        seriesIndex: 0,
                        dataIndex: 0
                    });
                    item.on("mouseover", function (e) {
                        if (e.dataIndex != index) {
                            item.dispatchAction({
                                type: "downplay",
                                seriesIndex: 0,
                                dataIndex: index
                            });
                        }
                    });
                    item.on("mouseout", function (e) {
                        index = e.dataIndex;
                        item.dispatchAction({
                            type: "highlight",
                            seriesIndex: 0,
                            dataIndex: e.dataIndex
                        });
                    });
                })
                window.onresize = function () {
                    pieArr.map((item) => {
                        item.resize();
                    })
                }
            },
            handleLine() {
                var myChart = echarts.init(document.getElementById('line-1'));
                myChart.setOption({
                    title: {
                        text: '本周订单数趋势图',
                        textStyle: {
                            color: "#fff",
                            fontWeight: "normal",
                            fontSize: "20"
                        }
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                            label: {
                                backgroundColor: '#6a7985'
                            }
                        }
                    },
                    legend: {
                        data: ['总订单数', '实际消费数', '退单数'],
                        bottom: 0,
                        textStyle: {
                            color: "#c0c0c0"
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '10%',
                        containLabel: true
                    },
                    xAxis: [{
                        type: 'category',
                        boundaryGap: false,
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#c0c0c0'
                            }
                        },
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    }],
                    yAxis: [{
                        type: 'value',
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#c0c0c0'
                            }
                        },
                    }],
                    series: [{
                            name: '总订单数',
                            type: 'line',
                            stack: 'Total',
                            areaStyle: {},
                            emphasis: {
                                focus: 'series'
                            },
                            data: [120, 132, 101, 134, 90, 230, 210]
                        },
                        {
                            name: '实际消费数',
                            type: 'line',
                            stack: 'Total',
                            areaStyle: {},
                            emphasis: {
                                focus: 'series'
                            },
                            data: [220, 182, 191, 234, 290, 330, 310]
                        },
                        {
                            name: '退单数',
                            type: 'line',
                            stack: 'Total',
                            areaStyle: {},
                            emphasis: {
                                focus: 'series'
                            },
                            data: [150, 232, 201, 154, 190, 330, 410]
                        }
                    ]
                })
                let lineArr = [myChart]
                window.onresize = function () {
                    lineArr.map((item) => {
                        item.resize();
                    })
                }
            }
        }
    }
</script>
<style lang="less" scoped>
    #main {
        width: 30%;
        height: 30%;
    }

    .visualization-detail {
        width: 100%;
        height: 100vh;
        background: url(../../assets/images/dp-bg.png)no-repeat;
        background-size: 100% 100%;
        font-size: 16px;


        .wrap-pd {
            padding: 1.25em;
        }

        .wrap {
            align-items: flex-start;

            &>div {
                margin: 0 .625em;
            }
        }

        .wrap-height {
            height: 40vh;
            margin-top: 5vh;

            .line-wrap {
                width: 30%;
                height: 100%;
                padding: .75em .9375em;
                box-sizing: border-box;
                position: relative;

                #line-1 {
                    width: 100%;
                    height: 100%;
                }
            }

            .pies-wrap {
                width: 40%;
                height: 100%;
                padding: .75em .9375em;
                box-sizing: border-box;
                position: relative;

                #pie-3 {
                    width: 50%;
                    height: 100%;
                }

                .eva-list {
                    align-items: flex-start;

                    .list-item {
                        padding: .3125em;
                        padding-right: 1.875em;
                        border-radius: 1.875em;
                        border: 2px solid #0C3468;
                        box-shadow: 0px 0px 1.0625em #0C3468 inset;
                        margin: .3125em 0;

                        &:nth-child(2) {
                            margin-left: 1.875em;
                        }

                        img {
                            width: 2.1875em;
                            border-radius: 50%;
                            margin-right: .3125em;
                            border: 1px solid #0C3468;
                        }

                        color: #fff;
                        font-size: .75em;
                    }
                }

            }

            .table-wrap {
                width: 30%;
                height: 100%;
                padding: .4375em .9375em;
                box-sizing: border-box;
                position: relative;

                .table {
                    text-align: center;
                    border-top: 1px solid #0C3468;
                    border-left: 1px solid #0C3468;
                    margin-top: 1.25em;

                    thead {

                        background: #0C3468;

                    }

                    td {
                        border-bottom: 1px solid #0C3468;
                        border-right: 1px solid #0C3468;
                        height: 2.5em;
                        font-size: .875em;
                        color: #fff;
                        padding: 0;
                    }
                }
            }

        }

        .detail-title {
            width: 100%;
            position: relative;

            .detail-title-txt {
                height: 100%;
                display: flex;
                align-items: center;
                position: absolute;
                color: #fff;
                font-weight: bold;
                font-size: 1.875em;
                left: 10%;
                top: 0;
            }
        }

        .total-wrap {
            position: relative;
            width: 18%;
            padding: .4375em .9375em;
            height: 40vh;
            box-sizing: border-box;

            &>div {
                width: 100%;
                height: 30%;
                padding-left: 1.25em;
                margin: .625em 0;
                box-sizing: border-box;

                i {
                    color: #fff;
                    font-size: 1.875em;
                    margin-right: .625em;
                }

                .total-num {
                    color: #fff;
                    font-size: 1.25em;
                    line-height: 1.5625em;
                }
            }

            .red {
                background: #D9523F;
            }

            .blue {
                background: #13D0B2;
            }

            .yellow {
                background: #F6A645;
            }
        }

        .Statistics-wrap {
            width: 45%;
            height: 40vh;
            position: relative;
            padding: .4375em .9375em;
            box-sizing: border-box;

            &>div {
                &>div {
                    width: 30%;
                    color: #fff;
                    line-height: 2.1875em;
                    font-size: 1.25em;
                }
            }

            .hr {
                width: auto;
                height: auto;
            }

        }

        .pie-wrap {
            width: 45%;
            height: 40vh;
            padding: .4375em .9375em;
            position: relative;
            box-sizing: border-box;

            #pie-1 {
                width: 50%;
                height: 100%;
            }

            #pie-2 {
                width: 50%;
                height: 100%;
            }
        }

        .title {
            color: #fff;
            font-size: 1.25em;
            margin-top: .3125em;
        }

        .line {
            position: absolute;
            width: auto;
            height: auto;
        }

        .left-line {
            left: 0;
            top: 0;
        }

        .right-line {
            right: 0;
            bottom: 0;
        }
    }
</style>
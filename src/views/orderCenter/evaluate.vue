<template>
    <div class="orderCenter-evaluate">
        <div class="list">
            <div class="item flex-b">
                <el-popconfirm title="确认要删除此条评价吗？" @confirm="handleDel">
                    <el-button>删除</el-button>
                    <div class="del" slot="reference">删除</div>
                </el-popconfirm>

                <div class="left">
                    <div class="con-txt">
                        去了苏州很多次，终于有一次可以去苏州园林逛逛了，很典型的苏式园林风格，慢慢走，慢慢悠，租个讲解慢慢听，很有意思
                    </div>
                    <div class="con-imgs flex-m mart5">
                        <el-image :src="require('@/assets/images/test.jpg')" :preview-src-list="[srcList[0]]">
                        </el-image>
                        <el-image :src="require('@/assets/images/test.jpg')" :preview-src-list="[srcList[0]]">
                        </el-image>
                    </div>
                </div>
                <div class="right" @click="handleToDetail">
                    <img :src="require('@/assets/images/test.jpg')" alt="">
                    <div class="con">
                        <div class="flex-b mart5">
                            <div>古武当山景区</div>
                            <div class="money">￥40</div>
                        </div>
                        <div class="flex-b date mart5">
                            <div class="font-h">评价日期</div>
                            <div>2022-01-05</div>
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
                srcList: ['https://pic5.40017.cn/01/001/ee/49/rBLkBVsFIJuADniIAAH1BNAsZPU157_540x304_00.jpg', ]
            }
        },
        methods: {
            // 跳转详情页
            handleToDetail() {

            },
            // 删除评价
            handleDel() {
                console.log(2121)
            }
        }
    }
</script>
<style lang="less" scoped>
    .orderCenter-evaluate {
        .list {
            .item {
                font-size: 14px;
                padding-bottom: 20px;
                border-bottom: 1px solid #e5e5e5;
                align-items: flex-start;
                margin: 10px 0;
                position: relative;

                .del {
                    position: absolute;
                    left: 0;
                    bottom: 20px;
                    color: #999;
                    cursor: pointer;
                }

                .left {
                    width: 75%;

                    .con-imgs {
                        .el-image {
                            width: 100px;
                            height: 100px;
                            margin-right: 5px;
                        }
                    }
                }

                .right {
                    width: 23%;
                    border: 1px solid #f0f0f0;
                    cursor: pointer;

                    .con {
                        padding: 0 10px 10px 10px;

                        .date {
                            font-size: 12px;
                        }

                        .font-h {
                            color: #999;
                        }

                        .money {
                            color: #ff685d;
                            font-size: 18px;
                        }
                    }
                }
            }
        }
    }
</style>
<template>
    <div class="orderCenter-footprint">
        <div class="list flex-m" v-if="dataList.length">
            <div class="item" @click="handleToDetail">
                <div class="img">
                    <img :src="require('@/assets/images/test.jpg')" alt="">
                </div>
                <div class="con">
                    <div class="name">古武当山景区</div>
                    <div class="money flex-b">
                        <div class="num">￥40</div>
                        <div class="btn">去看看</div>
                    </div>
                </div>
            </div>
        </div>
        <Empty v-else />
    </div>
</template>
<script>
    import Empty from "../../components/Empty";
    export default {
        components: {
            Empty
        },
        data() {
            return {
                dataList: []
            }
        },
        methods: {
            handleToDetail() {

            }
        }
    }
</script>
<style lang="less" scoped>
    .orderCenter-footprint {
        .list {
            flex-wrap: wrap;
            font-size: 14px;

            .item {
                border: 1px solid #f0f0f0;
                margin: 9px;
                width: 23%;
                cursor: pointer;

                .con {
                    padding: 0 10px 10px 10px;

                    &>div {
                        margin-top: 5px;
                    }

                    .date {
                        font-size: 12px;
                    }

                    .font-h {
                        color: #999;
                    }

                    .num {
                        color: #ff685d;
                        font-size: 18px;
                    }

                    .btn {
                        font-size: 12px;
                        background: #8CBE1C;
                        color: #fff;
                        padding: 1px 10px;
                        border-radius: 4px;
                        cursor: pointer;
                    }
                }

                img {}
            }
        }

    }
</style>
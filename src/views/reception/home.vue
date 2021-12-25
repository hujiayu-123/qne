<template>
    <div class="swiper">
        <el-carousel :interval="4000" direction="vertical" :height="swiperHeight">
            <el-carousel-item v-for="item in 6" :key="item">
                <img @load="item==1?loadImg():''" :src="require('@/assets/images/banner1.jpg')" alt="banner" />
            </el-carousel-item>
        </el-carousel>
        <div class="search">
            <el-input placeholder="请输入内容" v-model="keyword" class="input-with-select">
                <el-button class="search-btn" slot="append" icon="el-icon-search"></el-button>
            </el-input>
        </div>
    </div>

</template>
<script>
    export default {
        data() {
            return {
                swiperHeight: "0px",
                keyword: ""
            }
        },
        methods: {
            loadImg() {
                var height = document.querySelector(".swiper img").height
                this.swiperHeight = height + 'px'
                console.log(this.swiperHeight)
            }
        }
    }
</script>
<style lang="less" scoped>
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
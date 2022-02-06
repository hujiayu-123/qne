<template>
    <div class="orderCenter-order">
        <div class="list flex-m" v-if="dataList.length">
            <div class="item" v-for="item in dataList" :key="item.id">
                <div class="img">
                    <img :src="item.dataValues.sceneryImgPath" alt="">
                </div>
                <div class="con">
                    <div class="name">{{item.dataValues.scenicName}}</div>
                    <div class="date flex-b">
                        <div class="font-h">出行日期</div>
                        <div>{{item.dataValues.date}}</div>
                    </div>
                    <div class="money flex-b">
                        <div class="num">￥{{item.dataValues.amount}}</div>
                        <div class="btn" @click="handleShowEvaDialog(item.id,item.sericId)">去评价</div>
                    </div>
                </div>
            </div>
        </div>
        <Empty v-else />
        <el-dialog :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
            <span slot="title" class="dialog-title">
                <img :src="require('@/assets/images/eva-bg.jpg')" alt="">
            </span>
            <span>
                <el-rate show-text :texts="texts" v-model="formValue.rate" :colors="colors">
                </el-rate>
                <el-input class="mart10" :rows="3" type="textarea" placeholder="评价内容" v-model="formValue.context"
                    maxlength="100" show-word-limit>
                </el-input>
                <el-upload class="upload-demo mart10" ref="upload" action="#" :http-request="handleProgress"
                    :on-change="fileChange" :on-remove="handleRemove" :file-list="fileList" list-type="picture-card">
                    <i class="el-icon-plus"></i>
                </el-upload>
            </span>
            <span slot="footer" class="dialog-footer">
                <div class="eva-btn" @click="handleEva">
                    马上评价
                </div>
            </span>
        </el-dialog>
    </div>
</template>
<script>
    import api from "@/server/api.js";
    import Empty from "../../components/Empty";
    export default {
        components: {
            Empty
        },
        data() {
            return {
                dialogVisible: false,
                colors: ['#99A9BF', '#F7BA2A', '#FF9900'],
                texts: ["差评", "差评", "中评", "好评", "好评"],
                formValue: {
                    orderId: "",
                    sericId: "",
                    rate: 5,
                    context: ""
                },
                fileList: [],
                dataList: []
            }
        },
        mounted() {
            this.getDataList()
        },
        methods: {
            getDataList() {
                api.getOrderList().then((res) => {
                    if (res.code == "0") {
                        this.dataList = res.data
                    }
                })
            },
            // 评价
            handleEva() {
                let {
                    context
                } = this.formValue
                if (!context) {
                    this.$message({
                        type: "warning",
                        message: "请填写评价文字"
                    })
                    return
                }
                let params = this.formValue
                params.image = []
                this.fileList.map((item) => {
                    params.image.push(item.url)
                })
                if (params.rate >= 1 && params.rate <= 2) {
                    params.rate = 1
                } else if (params.rate == 3) {
                    params.rate = 2
                } else if (params.rate >= 4 && params.rate <= 5) {
                    params.rate = 3
                }
                api.createComment(params).then((res) => {
                    if (res.code == "0") {
                        this.handleClose()
                        this.getDataList()
                    }
                })
            },
            // 删除图片
            handleRemove(file, fileList) {
                this.fileList = fileList;
            },
            // 上传图片
            handleProgress(file) {
                let formData = new FormData();
                formData.append("file", file.file);
                api.upload(formData).then(res => {
                    if (res.code == "0") {
                        let obj = {
                            name: file.file.name,
                            url: api.url + res.data
                        };
                        this.fileList.push(obj);
                    }
                });
            },
            fileChange() {
                /**
                 * 1. 清除文件对象
                 * */
                this.$refs.upload.clearFiles();
            },
            // 打开弹窗
            handleShowEvaDialog(orderId, sericId) {
                this.formValue.orderId = orderId
                this.formValue.sericId = sericId
                this.dialogVisible = true
            },
            // 关闭弹窗
            handleClose() {
                this.dialogVisible = false
            },
        }
    }
</script>
<style lang="less">
    .orderCenter-order {
        .list {
            flex-wrap: wrap;
            font-size: 14px;

            .item {
                border: 1px solid #f0f0f0;
                margin: 9px;
                width: 23%;

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

        .el-dialog__header {
            padding: 0;
        }

        .el-dialog__body {
            padding: 30px 40px;
        }

        .el-dialog__footer {
            padding: 0 40px 20px;
        }

        .eva-btn {
            width: 100%;
            height: 40px;
            line-height: 40px;
            background: @theme-color;
            border-radius: 4px;
            color: #fff;
            text-align: center;
            cursor: pointer;
        }

        .el-upload-list--picture-card .el-upload-list__item {
            width: 100px;
            height: 100px;
        }

        .el-upload--picture-card {
            width: 100px;
            height: 100px;
            line-height: 113px;
        }
    }
</style>
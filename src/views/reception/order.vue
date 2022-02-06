<template>
    <div class="order">
        <div class="order-wrap">
            <div class="order-wrap-info flex-b">
                <div class="order-l">
                    <el-steps :active="step" finish-status="success">
                        <el-step title="提交订单"></el-step>
                        <el-step title="确认支付"></el-step>
                        <el-step title="完成购买"></el-step>
                    </el-steps>
                    <div class="step-1" v-if="step==0">
                        <div class="write-order-name">
                            出行人信息（<span class="font-h">用于安排出行人行程</span>）
                        </div>
                        <el-form :model="ruleForm1" status-icon :rules="rules1" ref="ruleForm1" lass="demo-ruleForm">
                            <el-form-item prop="name">
                                <el-input placeholder="中文姓名" v-model="ruleForm1.name"></el-input>
                            </el-form-item>
                            <el-form-item prop="idNumber">
                                <el-input placeholder="证件号码" v-model="ruleForm1.idNumber"></el-input>
                            </el-form-item>
                            <el-form-item prop="phone">
                                <el-input placeholder="联系电话" v-model.number="ruleForm1.phone"></el-input>
                            </el-form-item>
                            <el-form-item prop="date">
                                <el-date-picker value-format="yyyy-MM-dd" v-model="ruleForm1.date" type="date"
                                    placeholder="出行日期">
                                </el-date-picker>
                            </el-form-item>
                        </el-form>
                        <div class="write-order-name">
                            预定人信息（<span class="font-h">用于接受订单反馈</span>）
                        </div>
                        <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" lass="demo-ruleForm">
                            <el-form-item prop="name">
                                <el-input placeholder="中文姓名" v-model="ruleForm2.name"></el-input>
                            </el-form-item>
                            <el-form-item prop="idNumber">
                                <el-input placeholder="证件号码" v-model="ruleForm2.idNumber"></el-input>
                            </el-form-item>
                            <el-form-item prop="phone">
                                <el-input placeholder="联系电话" v-model.number="ruleForm2.phone"></el-input>
                            </el-form-item>
                            <el-form-item prop="email">
                                <el-input placeholder="邮箱" v-model="ruleForm2.email"></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-input placeholder="备注" type="textarea" v-model="ruleForm2.remark"></el-input>
                            </el-form-item>
                        </el-form>
                    </div>
                    <div class="step-2" v-if="step==1">
                        <div class="step-2-name">
                            <i class="iconfont icon-chenggong"></i>
                            您的订单提交成功！
                        </div>
                        <div class="mart20">
                            <span>订单号：</span>
                            {{orderId}}
                        </div>
                        <div class="mart20">
                            <span>应付金额：</span>
                            <span class="font-big">
                                <span class="font-small">￥</span>{{detail.ticketsAmount}}
                            </span>
                        </div>
                        <div class="step-2-title">
                            支付方式
                        </div>
                        <div class="step-2-list">
                            <el-radio v-model="payment" label="1">
                                <img :src="require('@/assets/images/zfb.png')" alt="">
                            </el-radio>
                            <el-radio v-model="payment" label="2">
                                <img :src="require('@/assets/images/wx.png')" alt="">
                            </el-radio>
                        </div>
                    </div>
                    <div class="step-3" v-if="step==2">
                        扫码支付
                    </div>
                    <div class="step-4" v-if="step==3">
                        <div class="step-4-name">
                            <i class="iconfont icon-chenggong"></i>订单支付成功!
                        </div>
                        <div class="mart5">
                            {{second}}s后返回首页
                        </div>

                    </div>
                </div>
                <div class="order-r">
                    <img :src="detail.sceneryImgPath" alt="">
                    <div class="order-con">
                        {{detail.scenicName}}
                        <div class="order-info">
                            <div class="flex-b">
                                <div class="font-h">出行日期</div>
                                <div>{{ruleForm1.date}}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="order-info-btn" v-if="step==0">
                <div class="flex-b mart5">
                    <div>使用商家优惠券</div>
                    <div>产品金额：
                        <span class="wd100">￥{{detail.ticketsAmount}}</span>
                    </div>
                </div>
                <div class="flex-b mart5">
                    <div>使用去哪儿优惠券</div>
                    <div>支付总金额：
                        <span class="wd100 total-money"><span class="font-small">￥</span>{{detail.ticketsAmount}}</span>
                    </div>
                </div>
            </div>
            <div class="flex-b order-wrap-btn" v-if="step!=3">
                <div>
                    <el-checkbox v-model="checked" v-if="step==0">我已阅读并同意 《去哪儿平台服务协议》、《旅游安全须知》</el-checkbox>
                </div>
                <div class="prder-btn" @click="handleNext">{{step == 0? '提交订单':'确认支付'}}</div>
            </div>
        </div>

    </div>
</template>
<script>
    import api from "@/server/api.js";
    export default {
        data() {
            var valiphone1 = (rule, value, callback) => {
                let myreg = /^[1][3,4,5,7,8][0-9]{9}$/; // 验证手机号是否正确
                if (value === '') {
                    callback(new Error('请输入手机号码'));
                } else if (!myreg.test(value)) {
                    callback(new Error('请输入正确的手机号'));
                } else {
                    callback();
                }
            };
            var valiphone2 = (rule, value, callback) => {
                let myreg = /^[1][3,4,5,7,8][0-9]{9}$/; // 验证手机号是否正确
                if (value === '') {
                    callback(new Error('请输入手机号码'));
                } else if (!myreg.test(value)) {
                    callback(new Error('请输入正确的手机号'));
                } else {
                    callback();
                }
            };
            return {
                step: 0,
                ruleForm1: {
                    name: "",
                    idNumber: "",
                    phone: "",
                    date: ""
                },
                ruleForm2: {
                    name: "",
                    phone: "",
                    idNumber: "",
                    email: "",
                    remark: ""
                },
                rules1: {
                    name: [{
                        required: true,
                        message: '请输入中文姓名',
                        trigger: 'blur'
                    }],
                    idNumber: [{
                        required: true,
                        message: '请输入证件号码',
                        trigger: 'blur'
                    }],
                    phone: [{
                        required: true,
                        validator: valiphone1,
                        trigger: 'blur'
                    }],
                    date: [{
                        required: true,
                        message: '请选择出行日期',
                        trigger: 'blur'
                    }],
                },
                rules2: {
                    name: [{
                        required: true,
                        message: '请输入中文姓名',
                        trigger: 'blur'
                    }],
                    idNumber: [{
                        required: true,
                        message: '请输入证件号码',
                        trigger: 'blur'
                    }],
                    phone: [{
                        required: true,
                        validator: valiphone2,
                        trigger: 'blur'
                    }],
                    email: [{
                            required: true,
                            message: '请输入邮箱地址',
                            trigger: 'blur'
                        },
                        {
                            type: 'email',
                            message: '请输入正确的邮箱地址',
                            trigger: ['blur', 'change']
                        }
                    ]
                },
                checked: false,
                payment: "1",
                second: 4,
                detail: {},
                orderId: ""
            }
        },
        mounted() {
            this.detail = JSON.parse(decodeURI(this.$route.query.detail))
        },
        methods: {
            handleNext() {
                if (this.step == 0) {
                    this.$refs.ruleForm1.validate(valid => {
                        if (valid) {
                            this.$refs.ruleForm2.validate(valid => {
                                if (valid) {
                                    if (!this.checked) {
                                        this.$message({
                                            type: "warning",
                                            message: "请勾选协议"
                                        })
                                        return
                                    }
                                    let cxr = {
                                        name: this.ruleForm1.name,
                                        idNumber: this.ruleForm1.idNumber,
                                        phone: this.ruleForm1.phone
                                    }
                                    let params = {
                                        sericId: this.detail.id,
                                        cxr: JSON.stringify(cxr),
                                        amount: this.detail.ticketsAmount,
                                        user: JSON.stringify(this.ruleForm2),
                                        status: "1",
                                        date: this.ruleForm1.date
                                    }
                                    api.creatOrder(params).then((res) => {
                                        if (res.code == "0") {
                                            this.step++
                                            this.orderId = res.data
                                        }
                                    })
                                }
                            })
                        }
                    })
                }
                if (this.step == 1) {
                    if (this.payment == "2") {
                        this.$message({
                            type: "warning",
                            message: "该功能暂未开发 ~~"
                        })
                        return
                    }
                    let params = {
                        uuid: new Date().getTime(),
                        amount: this.detail.ticketsAmount,
                        scenicId: this.detail.id,
                        orderId: this.orderId
                    }
                    api.pcpay(params).then((res) => {
                        if (res.code == "0") {
                            window.location.href = res.data
                        }
                    })
                }
                if (this.step == 2) {
                    this.handleCountDown()
                }
                // if (this.step != 0 && (this.step != 1) {
                //     this.step++
                // }
            },
            handleCountDown() {
                this.second--
                if (this.second == 0) {
                    this.$router.push({
                        path: '/'
                    })
                } else {
                    setTimeout(() => {
                        this.handleCountDown()
                    }, 1000)
                }
            }
        }
    }
</script>
<style lang="less">
    .order {
        background: #f6f6f6;
        overflow: hidden;
        min-height: calc(100vh - 68px);

        .order-wrap {
            width: 1200px;
            margin: 20px auto;
            background: #fff;
            padding: 20px;

            .order-wrap-info {
                align-items: flex-start;
            }

            .order-l {
                width: 70%;

                .el-step__title.is-process {
                    color: @theme-color;
                }

                .el-step__head.is-process {
                    color: @theme-color;
                    border-color: @theme-color;
                }

                .step-2 {
                    padding: 40px;

                    .font-big {
                        color: #ff4a26;
                        font-weight: bold;
                        font-size: 32px;
                    }

                    .font-small {
                        font-size: 22px;
                        font-weight: 400;
                    }

                    .step-2-title {
                        font-size: 18px;
                        font-weight: bold;
                        margin: 30px 0 10px 0;
                    }

                    .step-2-list {
                        border: 1px solid #e5e5e5;
                        padding: 35px 30px;

                        img {
                            width: 100px;
                        }
                    }
                }

                .step-4 {
                    text-align: center;
                    padding: 40px;

                    .step-4-name {
                        color: #ff9d00;
                        font-weight: bold;
                        font-size: 22px;

                        .icon-chenggong {
                            font-size: 40px;
                        }
                    }
                }

                .step-2-name {
                    color: #ff9d00;
                    font-weight: bold;
                    font-size: 22px;
                }

                .icon-chenggong {
                    font-size: 40px;
                }

                .step-1 {
                    .write-order-name {
                        font-weight: bold;
                        font-size: 18px;
                        margin: 20px 0;

                        .font-h {
                            color: #999;
                        }
                    }

                    .el-input {
                        width: 300px;
                    }

                    .el-textarea {
                        width: 500px;
                    }
                }
            }

            .order-r {
                width: 28%;
                border: 1px solid #e5e5e5;

                .order-con {
                    padding: 10px 20px;

                    .order-info {
                        margin-top: 10px;
                        border-top: 1px solid #e5e5e5;
                        font-size: 14px;
                        padding-top: 10px;

                        .font-h {
                            color: #999;
                        }
                    }
                }
            }

            .order-info-btn {
                border-top: 1px solid #e5e5e5;
                border-bottom: 1px solid #e5e5e5;
                padding: 10px 0;

                .wd100 {
                    width: 200px;
                    display: inline-block;
                    text-align: right;
                }

                .total-money {
                    font-size: 30px;
                    color: #f60;
                    font-weight: bold;

                    .font-small {
                        font-weight: 400;
                        font-size: 20px;
                    }
                }
            }

            .order-wrap-btn {
                margin-top: 20px;

                .prder-btn {
                    padding: 10px 30px;
                    background: #ff9d00;
                    color: #fff;
                    cursor: pointer;
                }
            }
        }
    }
</style>
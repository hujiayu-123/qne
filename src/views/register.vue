<template>
    <div class="register flex-m">
        <div class="box-wrap flex-m">
            <div class="box-l">
                <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
                    <el-form-item prop="userName">
                        <el-input v-model="ruleForm.userName" placeholder="您的手机号"></el-input>
                    </el-form-item>
                    <el-form-item prop="code" class="code-box">
                        <el-input v-model="ruleForm.code" placeholder="您的验证码"></el-input>
                        <div :class="isSend?'code-btn':'code-btn cur'" @click="isSend?'':handleSendCode()">
                            {{isSend?timer+'s':'获取验证码'}}
                        </div>
                    </el-form-item>
                    <el-form-item prop="passWord">
                        <el-input type="password" v-model="ruleForm.passWord" placeholder="您的密码"></el-input>
                    </el-form-item>
                    <el-form-item prop="okPassWord">
                        <el-input type="password" v-model="ruleForm.okPassWord" placeholder="确认您的密码"></el-input>
                    </el-form-item>
                    <div class="box-tips">
                        注册视为同意《去哪儿用户使用协议》
                    </div>
                    <el-form-item>
                        <div class="box-btn" @click="handleRegister">
                            注 册
                        </div>
                    </el-form-item>
                </el-form>

                <el-divider content-position="left">其他方式</el-divider>
                <div class="other flex-a">
                    <i @click="handleClick" class="iconfont icon-zhifubao"></i>
                    <i @click="handleClick" class="iconfont icon-weibo-copy"></i>
                    <i @click="handleClick" class="iconfont icon-weixin"></i>
                </div>
            </div>
            <div class="box-r flex-c">
                <img class="logo-img" :src="require('@/assets/images/logo.png')" alt="logo" />
                <div class="font-weight-title">旅游之前，先上去哪儿</div>
                <div>已经注册？<span @click="handleToLogin" class="font-color font-weight">马上登录</span></div>
                <i @click="handleToLogin" class="iconfont icon-xiangyou2"></i>
            </div>
        </div>
    </div>
</template>
<script>
    import api from "@/server/api.js";
    export default {
        data() {
            var validatePass = (rule, value, callback) => {
                if (value === "") {
                    callback(new Error("请再次输入密码"));
                } else if (value !== this.ruleForm.passWord) {
                    callback(new Error("两次输入密码不一致!"));
                } else {
                    callback();
                }
            };
            var validatePhone = (rule, value, callback) => {
                let myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
                if (value === "") {
                    callback(new Error("请输入您的手机号"));
                } else if (!myreg.test(value)) {
                    callback(new Error("请输入正确的手机号"));
                } else {
                    callback();
                }
            };
            return {
                ruleForm: {
                    userName: '',
                    code: '',
                    paddWord: '',
                    okPassWord: ''
                },
                timer: 60,
                isSend: false,
                verificationCode: '',
                rules: {
                    userName: [{
                        validator: validatePhone,
                        trigger: 'blur'
                    }, ],
                    code: [{
                        required: true,
                        message: '请输入您的验证码',
                        trigger: 'blur'
                    }, ],
                    passWord: [{
                        required: true,
                        message: '请输入您的密码',
                        trigger: 'blur'
                    }, ],
                    okPassWord: [{
                        validator: validatePass,
                        trigger: "blur"
                    }],
                }
            }
        },
        methods: {
            handleClick() {
                this.$message({
                    type: 'warning',
                    message: '该功能暂未开发 ~'
                })
            },
            // 接收验证码
            handleSendCode() {
                let {
                    userName
                } = this.ruleForm
                this.$refs.ruleForm.validateField('userName', (valid) => {
                    if (!valid) {
                        this.isSend = true
                        this.handleCountDown()
                        api.getCode({
                            mobile: userName
                        }).then((res) => {
                            if (res.code == 0) {
                                this.verificationCode = res.data
                            }
                        })
                    }
                })

            },
            // 获取验证码倒计时
            handleCountDown() {
                let second = this.timer
                second = Number(second) - 1
                setTimeout(() => {
                    this.timer = second
                    if (second === -1) {
                        this.isSend = false
                        this.timer = 60
                    } else {
                        this.handleCountDown()
                    }
                }, 1000)
            },
            handleRegister() {
                this.$refs.ruleForm.validate(valid => {
                    if (valid) {
                        let {
                            userName,
                            code,
                            okPassWord
                        } = this.ruleForm
                        if (code == this.verificationCode) {
                            api.register({
                                mobile: userName,
                                password: okPassWord,
                                role: 1
                            }).then((res) => {
                                if (res.code == 0) {
                                    this.$message({
                                        type: 'warning',
                                        message: res.msg
                                    })
                                    this.handleToLogin()
                                }
                            })
                        }
                    }
                })
            },
            handleToLogin() {
                this.$router.push({
                    path: '/login'
                })
            }
        }
    }
</script>
<style lang="less">
    .register {
        width: 100%;
        height: 100vh !important;
        background: url(../assets/images/register-bg.jpg)no-repeat;
        background-size: cover;
    }

    .box-wrap {
        width: 730px;
        height: 434px !important;
        background-color: #fff;
        border-radius: 8px;
        box-shadow: 0 3px 3px rgba(0, 0, 0, .4);
        margin: 0 auto;
        overflow: hidden;

        .box-l {
            width: 60%;
            padding: 20px 50px;
            box-sizing: border-box;

            .box-title {
                text-align: center;
                color: rgba(113, 115, 118, 1);
                font-size: 18px;
                margin-bottom: 40px;
                border-bottom: 1px solid #f6f7f9;
                line-height: 40px;
                position: relative;

                &::after {
                    content: '';
                    position: absolute;
                    width: 50px;
                    height: 4px;
                    background-color: @theme-color ;
                    border-radius: 4px;
                    left: 50%;
                    margin-left: -25px;
                    bottom: 0;
                }
            }

            .box-tips {
                text-align: right;
                color: @info-color;
                font-size: 12px;
                margin-top: -15px;
                cursor: pointer;

                &:hover {
                    text-decoration: underline;
                    color: @primary-color;
                }
            }

            .other {
                .iconfont {
                    cursor: pointer;
                    margin: 0 10px;
                    font-size: 20px;
                }

                .icon-zhifubao {
                    color: #00aaee;
                }

                .icon-weibo-copy {
                    color: #d32f2f;
                }

                .icon-weixin {
                    color: #00d20d;
                }
            }

            .box-btn {
                text-align: center;
                line-height: 42px;
                background: linear-gradient(135deg, rgb(140, 190, 20) 0, rgb(127, 170, 27) 100%);
                border-radius: 6px;
                font-size: 20px;
                font-weight: 500;
                color: #fff;
                margin-top: 10px;
                cursor: pointer;
            }

            .code-box {
                .el-input {
                    width: 72%;
                }

                .code-btn {
                    width: 90px;
                    height: 40px;
                    background: @theme-color;
                    color: #fff;
                    float: right;
                    text-align: center;
                    border-radius: 4px;
                    opacity: .8;
                }

                .cur {
                    cursor: pointer;
                    opacity: 1;
                }
            }

            .el-divider__text {
                color: @info-color;
                font-size: 12px;
            }
        }

        .box-r {
            width: 40%;
            height: 100%;
            background: url(../assets/images/box-bg.jpg)no-repeat;
            background-size: cover;
            text-align: center;
            position: relative;

            .logo-img {
                width: 100px;
            }

            .font-weight-title {
                font-weight: bold;
                font-size: 20px;
                margin: 10px 0;
            }

            .iconfont {
                position: absolute;
                font-size: 30px;
                right: 20px;
                bottom: 20px;
                color: @theme-color;
                font-weight: bold;
                cursor: pointer;
            }
        }
    }
</style>
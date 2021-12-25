<template>
    <div class="login flex-m">
        <div class="box-wrap flex-m">
            <div class="box-l">
                <div class="box-title">
                    密码登录
                </div>
                <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
                    <el-form-item prop="userName">
                        <el-input v-model="ruleForm.userName" placeholder="您的手机号"></el-input>
                    </el-form-item>
                    <el-form-item prop="passWord">
                        <el-input type="password" v-model="ruleForm.passWord" placeholder="您的密码"></el-input>
                    </el-form-item>
                    <div class="box-tips">
                        忘记密码
                    </div>
                    <el-form-item>
                        <div class="box-btn" @click="handleLogin">
                            登 录
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
                <div>还没有账号？<span @click="handleToRegister" class="font-color font-weight">马上注册</span></div>
                <i @click="handleToRegister" class="iconfont icon-xiangyou2"></i>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                ruleForm: {
                    userName: '',
                    paddWord: ''
                },
                rules: {
                    userName: [{
                        required: true,
                        message: '请输入您的手机号',
                        trigger: 'blur'
                    }, ],
                    passWord: [{
                        required: true,
                        message: '请输入您的密码',
                        trigger: 'blur'
                    }, ],
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
            handleLogin() {
                // this.$refs.ruleForm.validate(valid => {
                //     if (valid) {}
                // })
            },
            handleToRegister() {
                this.$router.push({
                    path: '/register'
                })
            }
        }
    }
</script>
<style lang="less">
    .login {
        width: 100%;
        height: 100vh !important;
        background: url(../assets/images/login-bg.jpg)no-repeat;
        background-size: cover;
    }

    .box-wrap {
        width: 730px;
        height: 434px;
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

            .el-divider__text {
                color: @info-color;
                font-size: 12px;
            }
        }

        .box-r {
            width: 40%;
            height: 100%;
            background: url(../assets/images/box-bg.jpeg)no-repeat;
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
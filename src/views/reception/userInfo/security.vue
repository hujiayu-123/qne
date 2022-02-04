<template>
    <div class="userinfo-security">
        <div class="title">账号安全</div>
        <div class="con">
            <el-form label-width="120px">
                <el-form-item label="密码：">
                    <span class="click" @click="handleShowDialog">修改密码</span>
                </el-form-item>
                <el-form-item label="绑定邮箱：">
                    <span class="click" @click="handleNotYet">设置邮箱</span>
                </el-form-item>
                <el-form-item label="绑定手机号：">
                    <span class="click" @click="handleNotYet">更换号码</span>
                </el-form-item>
                <el-form-item class="mart30" label="账号注销：">
                    <span class="click" @click="handleNotYet">申请注销</span>
                </el-form-item>
                <el-form-item>
                    <ul>
                        <li @click="handleNotYet">注销账号有哪些影响？</li>
                        <li @click="handleNotYet">注销账号的条件有哪些？
                        <li @click="handleNotYet">已完成商家入驻，是否可以注销？</li>
                        <li @click="handleNotYet">攻略号是否可以注销？</li>
                        <li @click="handleNotYet">手机号未绑定可以注销账号吗？</li>
                        <li @click="handleNotYet">绑定的手机号已更换，如何注销账号？</li>
                        <li @click="handleNotYet">申请了注销是否还能撤销？</li>
                        <li @click="handleNotYet">账号注销后，是否可以重新注册新账号？</li>
                        <li @click="handleNotYet">注销账户申请的审核时间是多久？</li>
                    </ul>
                </el-form-item>
            </el-form>
        </div>
        <el-dialog title="修改密码" :visible.sync="dialogVisible" width="25%" :before-close="handleClose">
            <span>
                <el-form label-width="100px" :model="ruleForm" status-icon :rules="rules" ref="ruleForm"
                    lass="demo-ruleForm">
                    <el-form-item label="原密码：" prop="pwd">
                        <el-input type="password" v-model="ruleForm.pwd" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="新密码：" prop="pass">
                        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item class="marb0" label="确认密码：" prop="checkPass">
                        <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
                    </el-form-item>
                </el-form>
            </span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="handleSubmit">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
    export default {
        data() {
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入新密码'));
                } else {
                    if (this.ruleForm.checkPass !== '') {
                        this.$refs.ruleForm.validateField('checkPass');
                    }
                    callback();
                }
            };
            var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.ruleForm.pass) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return {
                dialogVisible: false,
                ruleForm: {
                    pwd: "",
                    pass: "",
                    checkPass: ""
                },
                rules: {
                    pwd: [{
                        required: true,
                        message: '请输入原密码',
                        trigger: 'blur'
                    }],
                    pass: [{
                        required: true,
                        validator: validatePass,
                        trigger: 'blur'
                    }],
                    checkPass: [{
                        required: true,
                        validator: validatePass2,
                        trigger: 'blur'
                    }],
                }
            }
        },
        methods: {
            handleSubmit() {
                console.log(this.ruleForm)

            },
            handleShowDialog() {
                this.dialogVisible = true
            },
            handleClose() {
                this.dialogVisible = false
            },
            handleNotYet() {
                this.$message({
                    type: "warning",
                    message: "该功能暂未开发 ~~"
                })
            }
        }
    }
</script>
<style lang="less">
    .userinfo-security {
        .title {
            font-size: 24px;
            border-bottom: 1px solid #eee;
            padding-bottom: 20px;
        }

        .con {
            padding-top: 20px;

            .el-form-item {
                margin-bottom: 0;
            }

            .click {
                color: @theme-color;
                cursor: pointer;
            }

            ul li {
                line-height: 30px;
                color: #606266;
                cursor: pointer;

                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }
</style>
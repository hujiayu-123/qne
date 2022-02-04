<template>
    <div class="userinfo-user">
        <div class="title flex-m">我的信息
            <div class="flex-m progress">
                资料完善度
                <el-progress :text-inside="true" color="#8CBE1C" :stroke-width="18" :percentage="50" status="success">
                </el-progress>
            </div>
        </div>
        <div class="con">
            <el-form ref="ruleForm" label-width="120px" :model="formValue" :rules="rules">
                <el-form-item label="昵称：" prop="name">
                    <el-input v-model="formValue.name"></el-input>
                </el-form-item>
                <el-form-item label="性别：">
                    <el-radio-group v-model="formValue.gender">
                        <el-radio label="男"></el-radio>
                        <el-radio label="女"></el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="居住城市：">
                    <el-input v-model="formValue.city"></el-input>
                </el-form-item>
                <el-form-item label="出生日期：">
                    <el-date-picker value-format="yyyy-MM-dd" v-model="formValue.date" type="date"
                        placeholder="请选择出生日期">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="个人简介：">
                    <el-input :rows="4" placeholder="例：摄影师/旅居澳洲/潜水爱好者" type="textarea" v-model="formValue.introduction">
                    </el-input>
                </el-form-item>
                <el-form-item label="">
                    <el-button @click="handleSubmit" type="primary">保 存</el-button>
                </el-form-item>
            </el-form>
        </div>

    </div>
</template>
<script>
    export default {
        data() {
            return {
                formValue: {
                    name: "",
                    gender: "男",
                    date: "",
                    city: "",
                    introduction: ""
                },
                rules: {
                    name: [{
                        required: true,
                        message: '请输入昵称',
                        trigger: 'blur'
                    }],
                }
            }
        },
        methods: {
            handleSubmit() {
                this.$refs.ruleForm.validate(valid => {
                    if (valid) {
                        console.log(this.formValue)
                    }
                })
            }
        }
    }
</script>
<style lang="less">
    .userinfo-user {
        .title {
            font-size: 24px;
            border-bottom: 1px solid #eee;
            padding-bottom: 20px;
            align-items: flex-end;

            .progress {
                font-size: 14px;
                color: #999;
                margin-left: 20px;

                .el-progress {
                    width: 150px;
                    margin-left: 10px;

                    .el-progress-bar__outer {
                        background-color: rgba(140, 190, 28, 0.4);
                    }
                }
            }
        }

        .con {
            padding-top: 20px;
        }

        .el-input {
            width: 240px;
        }

        .el-textarea {
            width: 400px;
        }
    }
</style>
<template>
    <div class="userinfo-avatar">
        <div class="title">我的头像</div>
        <div class="con">
            <el-upload class="upload-demo mart10" ref="upload" action="#" :http-request="handleProgress"
                :on-change="fileChange" :on-remove="handleRemove" :file-list="fileList" list-type="picture-card">
                <i class="el-icon-plus"></i>
                <div slot="tip" class="el-upload__tip mart10">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                fileList: [],
            }
        },
        methods: {
            // 删除图片
            handleRemove(file, fileList) {
                this.fileList = fileList;
            },
            // 上传图片
            handleProgress(file) {
                console.log(file.file)
                // let formData = new FormData();
                // formData.append("file", file.file);
                // api.upload(formData).then(res => {
                //     if (res.code === 200) {
                //         let obj = {
                //             name: file.file.name,
                //             url: "https://3g7096967c.qicp.vip/" + res.data
                //         };
                //         this.fileList.push(obj);
                //     }
                // });
            },
            fileChange() {
                /**
                 * 1. 清除文件对象
                 * */
                this.$refs.upload.clearFiles();
            },
        }
    }
</script>
<style lang="less" scoped>
    .userinfo-avatar {
        .title {
            font-size: 24px;
            padding-bottom: 20px;
            border-bottom: 1px solid #eee;
        }

        .con {
            padding-top: 20px;
        }
    }
</style>
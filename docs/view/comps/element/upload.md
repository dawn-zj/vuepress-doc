# Upload 上传

## 上传图片
:::demo
```html
<template>
    <div class="app-container">
        <el-form class="form" ref="form" :model="form" :rules="rules" >
            <el-form-item v-if="showUpload" label="图片" prop="photoDataB64">
                <el-input v-show="false" v-model="form.photoDataB64"/>
                <el-upload
                        ref="upload"
                        action="#"
                        accept=".bmp,.gif,.jpeg,.jpg,.png"
                        :limit="1"
                        :auto-upload="false"
                        list-type="picture-card"
                        :file-list="fileList"
                        :on-remove="handleRemove"
                        :on-change="uploadChange"
                        :class="{hide:hideUpload}"
                >
                    <i slot="default" class="el-icon-plus"/>
                </el-upload>
            </el-form-item>

            <el-form-item v-if="!showUpload && url " label="图片" prop="photoDataB64">
                <el-image :src="url" fit="fill"/>
                <el-button type="text" @click="reUpload">重新上传</el-button>
            </el-form-item>
            <div class="form-footer">
                <el-button type="primary" @click="handleConfirm">提交</el-button>
            </div>
        </el-form>


    </div>
</template>

<script>
    const fileUtil = require("../../../utils/file");
    export default {
        name: "index",
        data() {
            return {
                form: {
                    photoDataB64: ''
                },
                showUpload: true,
                hideUpload: false,
                imageUrl: '',
                limitCount: 1,
                fileList: [],
                rules: {
                    photoDataB64: [
                        {required: true, message: '请上传图片', trigger: 'change'}
                    ]
                }
            }
        },
        created() {
        },
        methods: {
            handleConfirm() {
                this.$refs['form'].validate((valid) => {
                    if (valid) {
                        if (this.form.photoDataB64 == '') {
                            this.$message('请上传文件');
                            return;
                        }
                        console.log(this.form)
                        // todo 在此调用接口
                            this.$message('操作成功, 清除数据');
                            this.form = {
                                photoDataB64: ''
                            }
                            this.reUpload()

                    }
                })

            },
            // 图片删除
            handleRemove(file, fileList) {
                // 显示上传框，清空图片base64
                this.hideUpload = fileList.length >= this.limitCount
                this.form.photoDataB64 = ''
            },
            //校验
            uploadChange(file, fileList) {
                // 获取base64
                fileUtil.getBase64(file.raw).then(res => {
                    this.form.photoDataB64 = res
                    // 回显印模图片，隐藏上传框
                    this.url = 'data:image/png;base64,' + res
                    this.$refs['form'].clearValidate(['photoDataB64'])
                    this.showUpload = false
                })
            },
            reUpload() {
                this.showUpload = true
                this.form.photoDataB64 = ''
                this.hideUpload = false
            },
        }
    }
</script>

```
:::


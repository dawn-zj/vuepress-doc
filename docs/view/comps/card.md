# Card 卡片

将信息聚合在卡片容器中展示。
## 基础用法
:::demo
```html
<template>
    <card-component
                    title="测试"
                    :show-button="true"
                    button-text="操作"
                    @function="optFunction"
                  >
    正文
    </card-component>
</template>
<script>
    export default {
        data() {
            return {
            };
        },
        methods: {
            optFunction() {
                this.$message('已点击按钮')
                // todo 具体操作代码在此处编写
            }
        }
    };
</script>
```
:::



## 编辑
:::demo
```html
<template>
    <card-component
                    title="测试"
                    :show-button="showButton"
                    button-text="编辑"
                    @function="optFunction"
                  >
        <el-form ref="form" :model="loginForm" label-width="100px">
            <el-form-item label="手机号">
                <el-input v-model="loginForm.phone" :readonly="showButton">
                </el-input>
            </el-form-item>
            <el-form-item v-if="!showButton">
                <el-button type="primary" size="medium" @click="onSubmit">提交</el-button>
                <el-button size="medium" @click="cancel">取消</el-button>
            </el-form-item>
        </el-form>
    </card-component>
</template>
<script>
    export default {
        data() {
            return {
                showButton: true,
                originForm: {
                    phone: '15712345678'
                },
                loginForm: {
                    phone: '15712345678'
                }
            };
        },
        methods: {
            optFunction() {
                this.showButton = false
            },
            onSubmit() {
                this.$message('提交')
                this.showButton = true
            },
            cancel() {
                this.loginForm.phone = this.originForm.phone
                this.showButton = true
            }
        }
    };
</script>
```
:::


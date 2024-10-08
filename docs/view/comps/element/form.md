# Form 表单

由输入框、选择器、单选框、多选框等控件组成，用以收集、校验、提交数据
## 手机验证码
:::demo
```html
<template>
    <el-form ref="form" :model="loginForm" label-width="100px">
        <el-form-item label="手机号">
            <el-input v-model="loginForm.phone">
            </el-input>
        </el-form-item>
        <el-form-item label="短信验证码">
            <el-input v-model="loginForm.code">
                <template slot="suffix">
                  <div v-if="disabledSms">{{countDown}}秒后重新获取</div>
                  <el-button v-else type="text" @click="sendCode">获取验证码</el-button>
                </template>
            </el-input>
        </el-form-item>
    </el-form>


</template>

<script>
export default {
    data() {
        return {
          disabledSms: false,
          countDown: 60,
          loginForm: {
            phone: '',
            code: ''
          }
        }
    },
    created() {
    },
    methods: {
        sendCode() {
            this.$message.success('发送成功')
            this.disabledSms = true // 禁用按钮
            const timer = setInterval(() => {
              if (this.countDown > 0) {
                this.countDown--
              } else {
                clearInterval(timer)
                this.disabledSms = false// 启用按钮
                this.countDown = 60 // 重置倒计时时间
              }
            }, 1000)
        },
    }
}
</script>

```
:::


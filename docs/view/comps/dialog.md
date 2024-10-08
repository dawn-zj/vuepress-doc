# Dialog 对话框

在保留当前页面状态的情况下，告知用户并承载相关操作。
## 基础用法
Dialog 弹出一个对话框，适合需要定制性更大的场景。
:::demo
```html
<template>
    <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>

    <dialog-component
          title="预览" 
          :open.sync="dialogVisible"
    >
正文
</dialog-component>
</template>
<script>
  export default {
    data() {
      return {
        dialogVisible: false
      };
    },
    methods: {
    }
  };
</script>
```
:::

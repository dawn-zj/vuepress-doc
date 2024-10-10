# Cascader 级联选择器

## 动态加载
当选中某一级时，动态加载该级下的选项，并支持选中任意一级。
:::demo
```html
<template>
    <div class="app-container">
        <el-cascader
                ref="elCascader"
                :props="props"
                @change="handleChange"
        ></el-cascader>
    </div>
</template>

<script>
    let id = 0
    export default {
        name: "index",
        data() {
            return {
                props: {
                    lazy: true, // 懒加载
                    checkStrictly: true, // 可选择任意一级
                    lazyLoad (node, resolve) {
                        const { level } = node;
                        console.log(level)
                        setTimeout(() => {
                            const nodes = Array.from({ length: level + 1 })
                                    .map(item => ({
                                        value: ++id,
                                        label: `选项${id}`,
                                        leaf: level >= 2
                                    }));
                            // 通过调用resolve将子节点数据返回，通知组件数据加载完成
                            resolve(nodes);
                        }, 1000);
                    }
                }
            };
        },
        created() {
        },
        methods: {
            handleChange() {
                const node = this.$refs.elCascader.getCheckedNodes()
                console.log(node)
                this.$message.info('已选择：' + node[0].label)
            }
        }
    }
</script>

```
:::


# Table 选择器

## 基础用法
用于展示多条结构类似的数据，可对数据进行排序、筛选、对比或其他自定义操作。

:::demo
```html
<template>
    <table-component
          :table-header="tableHeader"
          :table-data="tableData"
          :selection-change="handleSelectionChange"
    />
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      tableHeader: [
        {
          visible: true,
          englishName: 'id',
          chineseName: 'id'
        },
        {
          visible: true,
          englishName: 'date',
          chineseName: '日期'
        },
        {
          visible: true,
          englishName: 'name',
          chineseName: '姓名'
        },
        {
          visible: true,
          englishName: 'sex',
          chineseName: '性别'
        },
        {
          visible: false,
          englishName: 'address',
          chineseName: '地址'
        }
      ],
      tableData: [
        {
          id: 1,
          date: '2016-05-02',
          name: '王小虎',
          sex: 1,
          address: '上海市普陀区金沙江路 1518 弄'
        }
      ]
    }
  },
  methods: {
    // 多选框选中数据
    handleSelectionChange(selection) {
      let ids = selection.map((item) => item.id)
      this.$message('已选择：' + ids.length + '条')
    }
  }

}
</script>
```
:::

## 自定义操作栏

自定义操作栏。

:::demo
```html
<template>
    <table-component
      :table-header="tableHeader"
      :table-data="tableData"
      :table-action="tableAction"
      :selection-change="handleSelectionChange"
      :show-action="true"
      @function1="handleDetails"
    />


</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      tableHeader: [
        {
          visible: true,
          englishName: 'id',
          chineseName: 'id'
        },
        {
          visible: true,
          englishName: 'date',
          chineseName: '日期'
        },
        {
          visible: true,
          englishName: 'name',
          chineseName: '姓名'
        },
        {
          visible: true,
          englishName: 'sex',
          chineseName: '性别'
        },
        {
          visible: false,
          englishName: 'address',
          chineseName: '地址'
        }
      ],
      tableData: [
        {
          id: 1,
          date: '2016-05-02',
          name: '王小虎',
          sex: 1,
          address: '上海市普陀区金沙江路 1518 弄'
        }
      ],
      tableAction: [
        {
          name: '查看',
          functionName: 'function1'
        },
        {
          name: '查看2',
          functionName: 'function1'
        }
      ]
    }
  },
  methods: {
    // 多选框选中数据
    handleSelectionChange(selection) {
      this.ids = selection.map((item) => item.id)
      this.$message('已选择：' + this.ids.length + '条')
    },
    handleDetails(data) {
      console.log(data)
      this.$message('查看')
    }
  }

}
</script>
```
:::
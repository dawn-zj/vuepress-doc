# Select 选择器

当选项过多时，使用下拉菜单展示并选择内容。

## 基础用法

适用广泛的基础单选

:::demo
```html
<template>
  <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</template>

<script>
  export default {
    data() {
      return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }],
        value: ''
      }
    }
  }
</script>
```
:::

## 三级联动
:::demo
```html
<template>
    <el-form class="form" ref="form" :model="form" :rules="rules" label-width="50px">
        <el-form-item label="省份" prop="provinceId" provinceList>
          <el-select v-model="form.provinceId" placeholder="请选择" style="width: 70%" @change="handleChangeProvince(form.provinceId)">
            <el-option
              v-for="item in provinceList"
              :key="item" :label="item" :value="item"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="城市" prop="cityId" provinceList>
          <el-select v-model="form.cityId" placeholder="请选择" style="width: 70%" @change="handleChangeCity(form.cityId)">
            <el-option
              v-for="item in cityList"
              :key="item" :label="item" :value="item"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="地区" prop="areaId" provinceList>
          <el-select v-model="form.areaId" placeholder="请选择" style="width: 70%" @change="handleChangeArea(form.areaId)">
            <el-option
              v-for="item in areaList"
              :key="item" :label="item" :value="item"
            />
          </el-select>
        </el-form-item>

        <div class="form-footer">
          <el-button type="primary" @click="handleConfirm">提交</el-button>
        </div>
      </el-form>
</template>
<script>
    export default {
        name: "index",
        data() {
            return {
                provinceList: [],
                cityList: [],
                areaList: [],
                form: {
                    provinceId: '',
                    cityId: '',
                    areaId: '',
                },
                rules: {
                    provinceId: [
                        { required: true, message: '请选择', trigger: 'blur' }
                    ],
                    cityId: [
                        { required: false, message: '请选择', trigger: 'blur' }
                    ],
                    areaId: [
                        { required: false, message: '请选择', trigger: 'blur' }
                    ]
                }
            }
        },
        created() {
            this.listProvince()
        },
        methods: {
            listProvince() {
                // todo 在此调用接口
                this.provinceList = ['河南省', '河北省']
            },
            handleChangeProvince(provinceId) {
                this.form.cityId = ''
                this.areaList = []
                this.form.areaId = ''
                // todo 在此调用接口
                if (provinceId == '河南省') {
                    this.cityList = ['郑州市', '南阳市']
                } else {
                    this.cityList = ['市1', '市2']
                }
                
            },
            handleChangeCity(cityId) {
                this.form.areaId = ''
                // todo 在此调用接口
                if (cityId == '郑州市') {
                    this.areaList = ['二七区', '金水区']
                } else {
                    this.areaList = ['区1', '区2']
                }
            },
            handleChangeArea(areaId) {
                this.$message('已选择：' + areaId)
            },
            handleConfirm() {
                this.$refs['form'].validate((valid) => {
                    if (valid) {
                        // todo 在此调用接口
                        this.$message('操作成功');
                        this.form = {
                            provinceId: '',
                            cityId: '',
                            areaId: '',
                        }
                        this.cityList = []
                        this.areaList = []

                    }
                })

            }
        }
    }
</script>
```
:::
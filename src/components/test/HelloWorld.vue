<template>
  <div class="hello-world">
    <div class="lang-check-btn">
      <div class="lang-check-btn-block">
        <div @click="lang = 'zh'" :class="{'select-btn':lang === 'zh'}">中文</div>
        <div @click="lang = 'en'" :class="{'select-btn':lang === 'en'}">英文</div>
      </div>
    </div>
    <h1>{{ $t('HelloWorld.msg') }}</h1>
    <el-button type="primary">主要按钮自定义主题测试</el-button>
    <p style="font-size:20px">element-ui 组件的国际化测试</p>
    <el-table
      border
      class="h-w-table"
      :data="tableData">
      <el-table-column
        prop="date"
        :label="$t('HelloWorld.table.tableDate')"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        :label="$t('HelloWorld.table.tableName')"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        :label="$t('HelloWorld.table.tableAddress')">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
// import { test } from '@/api/test'
export default {
  name: 'HelloWorld',
  data () {
    return {
      tableData: [],
      msg: 'Welcome to Your Vue.js App',
      test: 'test'
    }
  },
  methods: {
  },
  computed: {
    lang: {
      get () {
        return this.$i18n.locale
      },
      set (lang) {
        // 使用单文件i18n时 切记：此处是 ._root.locale
        // this.$i18n.locale = lang
        this.$i18n._root.locale = lang
      }
    }
  },
  created () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.hello-world{
  // height: 100%;
  margin-top: 100px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  &>.lang-check-btn{
    display: inline-block;
    width: 100px;
    height: 34px;
    //background: skyblue;
    &>.lang-check-btn-block{
      font-size: 14px;
      height: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      border: 1px solid #eee;
      border-radius: 4px;
      &>div{
        cursor: pointer;
        flex: 1;
        text-align: center;
        line-height: 34px;
      }
      &>.select-btn{
        color: #fff;
        height: 100%;
        background: #41b883;
      }
    }
  }
  .h-w-table{
    width: 500px;
    height: 100px;
    margin: 0 auto;
    font-size: 14px;
  }
}
</style>
<i18n>
{
  "zh": {
    "HelloWorld": {
      "msg": "欢迎来到您的Vue.js应用程序",
      "table": {
        "tableDate": "日期",
        "tableName": "姓名",
        "tableAddress": "地址"
      }
    }
  },
  "en": {
    "HelloWorld": {
      "msg": "Welcome to Your Vue.js App",
      "table": {
        "tableDate": "date",
        "tableName": "name",
        "tableAddress": "address"
      }
    }
  }
}
</i18n>

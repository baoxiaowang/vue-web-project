/*
  vuex 相关文档链接：http://vuex.vuejs.org/zh-cn/
*/
import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
Vue.use(Vuex)

const state = {
}

export default new Vuex.Store({
  state,
  modules: {
    user
  }
})

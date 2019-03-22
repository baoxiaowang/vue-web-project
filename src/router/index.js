/*
 * @Author: pengpeng.zhu
 * @LastEditors: xuwang.bao
 * @Description: 路由总入口
 * @Props:
 * @Emit:
 * @Date: 2019-02-20 10:21:40
 * @LastEditTime: 2019-03-22 23:26:52
 */

import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/test/HelloWorld'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    }
    // {
    //   path: '/login',
    //   name: 'login',
    //   meta: {
    //     pathName: '用户登录'
    //   },
    //   component: () => import('@/views/login/')
    // },
    // {
    //   path: '/test',
    //   name: 'test',
    //   meta: {
    //     pathName: '测试路由'
    //   },
    //   component: () => import('@/components/test/')
    // }
  ]
})

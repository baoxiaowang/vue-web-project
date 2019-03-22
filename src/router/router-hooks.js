/*
 * @Author: xuwang.bao
 * @Date: 2019-01-21 16:28:25
 * @LastEditors: xuwang.bao
 * @LastEditTime: 2019-03-22 23:24:53
 * @Description: 路由
 * @$emit:
 */
import router from './index'
// import store from '@/store'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'// progress bar style

// import utils from '@/utils/'
// const { CK } = utils
NProgress.configure({ showSpinner: false })// NProgress Configuration
router.beforeEach((to, from, next) => {
  NProgress.done()
  NProgress.start() // start progress bar
  next()
  // NProgress.done()
  // return false
  // /*
  // * 1.启用NProgress进度条
  // * 2.如果用户信息cookie 并且在登录页面 ，在直接跳转到应用页面
  // */

  // // const notInterceptName = [] // 不需要拦截的路由
  // let name = to.name
  // let userId = '' // CK.get('userId') // 因为暂时没有签证 暂时以cookie中的userid 作为签证 
  // let userInfo = store.state.user.userInfo
  // // 如果目标页面需要(登录拦截)
  // // if (!notInterceptName.includes(name)) {
  // // 如果待进入页面是登录页面
  // if (name === 'login') {
  //   // 如果已经登录
  //   if (userId) {
  //     // 判断用户详细是否拉取完毕
  //     // 如果已经拉取直接进入主页
  //     if (userInfo) {
  //       next('/')
  //     } else {
  //       // 否则拉取个人基本信息
  //       store.dispatch('getUserInfo').then(() => {
  //         next('/')
  //         NProgress.done()
  //       })
  //     }
  //   } else {
  //     next()
  //     NProgress.done()
  //   }
  // } else {
  //   // 如果没有签证
  //   if (!userId) {
  //     next('/login')
  //   } else {
  //     if (userInfo) {
  //       next()
  //       NProgress.done()
  //     } else {
  //       // 否则拉取个人基本信息
  //       store.dispatch('getUserInfo').then(() => {
  //         next(vm => {
  //           NProgress.done()
  //         })
  //       })
  //         .catch(() => {
  //           next('/login')
  //         })
  //     }
  //   }
  // }
  NProgress.done()
})

router.afterEach(() => {
  NProgress.done() // finish progress bar
})

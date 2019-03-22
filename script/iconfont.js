/*
 * @Author: kai.yang
 * @Date: 2019-01-14 19:24:12
 * @LastEditors: xuwang.bao
 * @LastEditTime: 2019-03-14 16:43:59
 * @Description: 批量生成iconfont className脚本
 */

const http = require('http')
const fs = require('fs')

/**
 * @description 获取iconfont数据
 * @param {String} path 线上css路径
 */
function getFontData (path, type) {
  const options = {
    hostname: 'at.alicdn.com',
    port: 80,
    path,
    method: 'GET'
  }

  const req = http.request(options, (res) => {
    // ...
    let str = ''
    let timeout = null
    res.on('data', (chunk) => {
      clearTimeout(timeout)
      str += chunk
      timeout = setTimeout(() => {
        parseCss(str, type)
      }, 300)
    })
    res.on('end', () => { })
  })

  req.end()
}

/**
 * @description 过滤出所有的className
 * @param {String} cssData 获取的iconfont css数据
 */
function parseCss (cssData, type) {
  // 过滤'.icon'开头的className，如果不是.icon开头，请修改下面的正则
  let reg
  if (type === 'icon') {
    reg = /\.(icon-.+):before/g
  } else {
    reg = /\.(web-icon-.+):before/g
  }
  const filterArr = cssData.match(reg)
  const result = filterArr.map(className => className.replace(reg, '$1'))
  const formatResult = JSON.stringify(result).replace(/"/g, '\'').replace(/,/g, ', ')
  if (type === 'icon') {
    iconList = formatResult
  } else {
    webIconList = formatResult
  }
  if (iconList.length && webIconList.length) exportFile()
}

/**
 * @description 导出文件
 * @param {*} file 导出文件地址
 * @param {*} content 写入内容
 */
function exportFile () {
  const d = (new Date()).toLocaleString()
  const comment = `// UpdateTime: ${d}\n`
  const formatContent = `${comment}export default {iconList: ${iconList}, webIconList: ${webIconList}}\n`
  fs.writeFile(exportPath, formatContent, function (err) {
    if (err) {
      return console.error(err)
    }
    console.log('文件导出地址：', exportPath)
    console.log('数据导出成功')
  })
}

const cssPath = '/t/font_1020340_5ratwqvam3r.css' // 线上web-pro的css地址
const cssWebPath = '/t/font_1020343_aibb7w49syr.css' // 线上web-pro-web地址
const exportPath = './static/font-class-name.js' // 导出文件路径
let iconList = []
let webIconList = []
getFontData(cssPath, 'icon')
getFontData(cssWebPath, 'web-icon')

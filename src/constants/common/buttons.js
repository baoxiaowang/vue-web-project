/*
 * @Author: pengpeng.zhu
 * @Date: 2019-01-28 19:59:02
 * @LastEditors: pengpeng.zhu
 * @LastEditTime: 2019-03-07 16:58:39
 * @Description: 按钮的枚举
 * @Props:
 * @Emit:
 */
// 表格中的操作列按钮
const tableButtons = {
  option_look: { // 查看
    type: '',
    icon: ''
  },
  option_red: {
    type: 'danger',
    icon: ''
  },
  option_del: { // 删除
    type: 'danger',
    icon: ''
  }
}

// 列表页头部按钮
const headButtons = {
  add: { // 新建
    type: 'primary',
    icon: ''
  }
}

// 列表底部批量按钮
const footerButtons = {
  archiveBatch: { // 归档
    type: 'danger',
    icon: 'download'
  },
  cancelArchive: { // 取消归档
    type: 'danger',
    icon: 'upload2'
  }
}
// 按钮对应信息
export default {
  ...tableButtons,
  ...headButtons,
  ...footerButtons,
  // 下面是公共的按钮
  del: { // 删除
    type: 'danger',
    icon: 'delete'
  },
  edit: { // 编辑
    type: 'primary',
    icon: 'edit'
  }
  // recall: {
  //   name: '撤回',
  //   type: 'warning'
  // },
  // cancel: {
  //   name: '作废',
  //   icon: 'delete',
  //   type: 'primary'
  // },
  // revertCancel: {
  //   name: '还原',
  //   icon: 'time'
  // },
  // print: {
  //   name: '打印',
  //   icon: 'printer'
  // },
  // getCustomer: {
  //   name: '捞取',
  //   type: 'primary'
  // },
  // copy: {
  //   name: '复制',
  //   icon: 'document'
  // },
  // red: {
  //   name: '红冲',
  //   type: 'danger',
  //   icon: 'refresh'
  // },
  // badDebt: {
  //   name: '坏账',
  //   type: 'danger',
  //   icon: 'remove'
  // },
  // paid: {
  //   name: '添加回款单',
  //   type: 'primary'
  // },
  // pay: {
  //   name: '添加付款单',
  //   type: 'primary'
  // },
  // invoice: {
  //   name: '开发票',
  //   type: 'primary'
  // },
  // return: {
  //   name: '还原',
  //   icon: 'time'
  // },
  // purchase: {
  //   name: '一键采购',
  //   type: 'primary'
  // },
  // produce: {
  //   name: '一键生产',
  //   type: 'primary'
  // },
  // online: {
  //   name: '上架',
  //   type: 'warning'
  // },
  // offline: {
  //   name: '下架',
  //   type: 'primary'
  // },
  // finish: {
  //   name: '完成',
  //   type: 'primary',
  //   icon: 'check'
  // },
  // restart: {
  //   name: '重启',
  //   type: 'danger'
  // },
  // close: {
  //   name: '关闭',
  //   type: 'danger',
  //   icon: 'close'
  // },
  // paySheetNum: {
  //   name: '条付款单',
  //   type: 'primary'
  // },
  // termination: {
  //   name: '终止',
  //   type: 'danger'
  // },
  // instock: {
  //   name: '入库',
  //   type: 'primary'
  // },
  // outstock: {
  //   name: '出库',
  //   type: 'primary'
  // }
}

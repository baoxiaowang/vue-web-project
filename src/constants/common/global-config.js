/*
 * @Author: pengpeng.zhu
 * @Date: 2019-01-15 15:11:18
 * @LastEditors: pengpeng.zhu
 * @LastEditTime: 2019-01-24 19:40:12
 * @Description: 全局的字典信息，按钮，模块对应关系
 * @Props:
 * @Emit:
 */
// 存储通用配置信息

// 按钮对应信息
export const menuType = {
  edit: {
    name: '编辑',
    type: 'primary',
    icon: 'edit'
  },
  del: {
    name: '删除',
    type: 'danger',
    icon: 'delete'
  },
  add: {
    name: '新建'
  },
  recall: {
    name: '撤回',
    type: 'warning'
  },
  cancel: {
    name: '作废',
    icon: 'delete',
    type: 'primary'
  },
  revertCancel: {
    name: '还原',
    icon: 'time'
  },
  print: {
    name: '打印',
    icon: 'printer'
  },
  archiveBatch: {
    name: '归档',
    icon: 'download'
  },
  cancelArchive: {
    name: '取消归档',
    icon: 'upload2'
  },
  getCustomer: {
    name: '捞取',
    type: 'primary'
  },
  copy: {
    name: '复制',
    icon: 'document'
  },
  red: {
    name: '红冲',
    type: 'danger',
    icon: 'refresh'
  },
  badDebt: {
    name: '坏账',
    type: 'danger',
    icon: 'remove'
  },
  paid: {
    name: '添加回款单',
    type: 'primary'
  },
  pay: {
    name: '添加付款单',
    type: 'primary'
  },
  invoice: {
    name: '开发票',
    type: 'primary'
  },
  return: {
    name: '还原',
    icon: 'time'
  },
  purchase: {
    name: '一键采购',
    type: 'primary'
  },
  produce: {
    name: '一键生产',
    type: 'primary'
  },
  online: {
    name: '上架',
    type: 'warning'
  },
  offline: {
    name: '下架',
    type: 'primary'
  },
  finish: {
    name: '完成',
    type: 'primary',
    icon: 'check'
  },
  restart: {
    name: '重启',
    type: 'danger'
  },
  close: {
    name: '关闭',
    type: 'danger',
    icon: 'close'
  },
  paySheetNum: {
    name: '条付款单',
    type: 'primary'
  },
  termination: {
    name: '终止',
    type: 'danger'
  },
  instock: {
    name: '入库',
    type: 'primary'
  },
  outstock: {
    name: '出库',
    type: 'primary'
  }
}

// 模块和模块名的对应关系
export const moduleMap = {
  'supplier': '供应商',
  'purchase': '采购合同',
  'returnedPurchase': '采购退货单',
  'inventory': '盘点单',
  'instock': '入库单',
  'outstock': '出库单',
  'transfer': '调拨单',
  'payPlan': '付款计划',
  'paymentApi': '回款',
  'productStock': '库存查询',
  'supplierContact': '供应商联系人',
  'customerContact': '客户联系人',
  'customerApi': '客户',
  'opportunityApi': '销售机会',
  'contractApi': '合同订单',
  'contactApi': '联系人',
  'stageFeedbackApi': '阶段反馈',
  'communicateApi': '跟进记录',
  'assemble': '装配单',
  'invoice': '发票',
  'customerInvoice': '发票信息',
  'customerExpress': '客户寄送信息',
  'approvalApi': '审批',
  'paymentSheetApi': '回款单',
  'workReportApi': '工作报告',
  'waitPurchaseApi': '待采购',
  'bomBill': 'BOM清单',
  'productionOrder': '生产单',
  'productApi': '产品',
  'workOrder': '工单',
  'refund': '退货退款',
  'communicatePlan': '访客计划',
  'signInApi': '签到'
}

// 顶部控制按钮对应关系
export const topMap = {
  'add': {
    name: '新 建',
    type: '',
    icon: ''
  },
  'import': {
    name: '导 入',
    type: '',
    icon: ''
  },
  'export': {
    name: '导 出',
    type: '',
    icon: ''
  },
  'checkRepeat': {
    name: '查 重',
    type: '',
    icon: ''
  },
  'waitProduce': {
    name: '待生产',
    type: '',
    icon: ''
  },
  'waitPurchase': {
    name: '待采购',
    type: '',
    icon: ''
  },
  'waitInstock': {
    name: '待入库',
    type: '',
    icon: ''
  },
  'waitOutstock': {
    name: '待出库',
    type: '',
    icon: ''
  }
}

// 底部控制按钮对应关系
export const bottomMap = {
  'distribution': {
    name: '分配',
    type: '',
    icon: ''
  },
  'userPortion': {
    name: '分配员工',
    type: '',
    icon: ''
  },
  'depPortion': {
    name: '分配部门',
    type: '',
    icon: ''
  },
  'online': {
    name: '上架',
    type: '',
    icon: ''
  },
  'offline': {
    name: '下架',
    type: '',
    icon: ''
  },
  'purchase': {
    name: '一键采购',
    type: '',
    icon: ''
  },
  'finish': {
    name: '完成',
    type: '',
    icon: ''
  },
  'handover': {
    name: '移交',
    type: '',
    icon: ''
  },
  'backCustomer': {
    name: '退回公海池',
    type: '',
    icon: ''
  },
  'addVisitPlan': {
    name: '加入访客计划',
    type: '',
    icon: ''
  },
  'editCustomerStatus': {
    name: '修改客户状态',
    type: '',
    icon: ''
  },
  'addTeamPerson': {
    name: '添加协同人',
    type: '',
    icon: ''
  },
  'archiveBatch': {
    name: '归档',
    type: '',
    icon: ''
  },
  'del': {
    name: '删除',
    type: '',
    icon: ''
  },
  'batchPrint': {
    name: '打印',
    type: '',
    icon: ''
  },
  'communicateNotify': {
    name: '跟进提醒',
    type: '',
    icon: ''
  },
  'sendSMS': {
    name: '发送短信',
    type: '',
    icon: ''
  },
  'getCustomer': {
    name: '捞取',
    type: '',
    icon: ''
  },
  'revertBatch': {
    name: '还原',
    type: '',
    icon: ''
  },
  'revertCancel': { //  发票还原
    name: '还原',
    type: '',
    icon: ''
  },
  'removeCompletely': {
    name: '彻底删除',
    type: '',
    icon: ''
  },
  'setPaid': {
    name: '设置为已收款',
    type: '',
    icon: ''
  },
  'cancel': {
    name: '作废',
    type: '',
    icon: ''
  },
  'batchEdit': {
    name: '编辑',
    type: '',
    icon: ''
  },
  'mInvoice': {
    name: '合并开票',
    type: '',
    icon: ''
  }
}

// 文件导出类型
export const exportMap = {
  'paymentApi': -1,
  'productApi': 5,
  'customerApi': 1,
  'opportunityApi': 2,
  'contractApi': 3,
  'contactApi': 4,
  'productStock': -5,
  'communicateApi': 6,
  'communicatePlan': -8,
  'workReportDayApi': 8,
  'workReportWeekApi': 9,
  'workReportMonthApi': 10,
  'invoice': 16,
  'purchase': 101,
  'returnedPurchase': 102,
  'instock': 103,
  'outstock': 104,
  'transfer': 105,
  'inventory': 106,
  'supplier': 107,
  'assemble': 110,
  'waitInstockPurchase': 101,
  'waitOutstock': 3,
  'bomBill': 117,
  'productionOrder': 118,
  'signInApi': -2,
  'workOrder': 22
}

// 接口名与模块名的对应管理
export const moduleApi = {
  'customerApi': 'customer',
  'contractApi': 'contract',
  'opportunityApi': 'opportunity',
  'supplier': 'supplier',
  'purchase': 'purchase',
  'bomBill': 'bomBill',
  'productionOrder': 'productionOrder',
  'workOrder': 'workOrder'
}

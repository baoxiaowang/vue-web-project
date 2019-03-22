/*
 * @Author: xiaocheng.wang
 * @Date: 2019-02-01 09:21:08
 * @LastEditors: pengpeng.zhu
 * @LastEditTime: 2019-03-11 19:35:29
 * @Description: 业务类型枚举
 */
export default {
  SYSTEM: 0, // 系统
  CRM: 1, // CRM
  JXC: 2, // JXC
  UNKNOWN: 404, // 未知对象类型
  CUSTOMER_MANAGEMENT: 100, // 客户管理
  CUSTOMER: 101, // 客户
  CUSTOMER_FOCUS: 102, // 重点客户
  CUSTOMER_DEAL: 103, // 成交客户
  CUSTOMER_FOLLOW: 104, // 跟进客户
  CUSTOMER_PUBLIC: 105, // 客户公海池
  CUSTOMER_RECYCLE: 106, // 客户回收站
  CUSTOMER_NEARBY: 107, // 附近客户
  CUSTOMER_STAGE: 108, // 客户阶段
  CUSTOMER_DUPLICATE: 109, // 客户查重
  CUSTOMER_BACK_REMIND: 110, // 客户退回公海池提醒
  CUSTOMER_REMIND: 111, // 客户自定义提醒
  CONTRACT: 201, // 合同订单
  REFUND: 202, // 退货退款
  CONTRACT_REMIND: 203, // 合同到期提醒
  SALES_OPPORTUNITY: 301, // 销售机会
  ALL_OPPORTUNITY: 302, // 全部机会
  KEY_OPPORTUNITY: 303, // 重点机会
  SALE_STAGE: 304, // 销售阶段
  CONTACT: 401, // 联系人
  CUSTOMER_COMMUNICATE: 501, // 跟进记录
  SUPPLIER_CUSTOMER_COMMUNICATE: 502, // 供应商跟进记录
  COMMUNICATE_PLAN: 601, // 访客计划
  PAYMENTAPI: 701, // 回款计划
  PAYMENT_SHEET: 702, // 回款单
  RED_PAYMENT_SHEET: 703, // 红冲回款单
  BAD_DEBT: 704, // 坏账
  PAYMENT_REMIND: 705, // 未回款提醒
  PAYMENT_OVERDUE: 706, // 逾期回款提醒
  PAYPLAN: 801, // 付款计划
  PAY_SHEET: 802, // 付款单
  INVOICE: 901, // 发票
  RED_INVOICE: 902, // 红冲发票
  SUPPLIER: 1001, // 供应商
  SUPPLIER_CONTACT: 1002, // 供应商联系人
  PURCHASE_MANAGEMENT: 1100, // 采购管理
  PURCHASE: 1101, // 采购合同
  WAIT_PURCHASE: 1102, // 待采购
  RETURNED_PURCHASE: 1201, // 采购退货单
  RETURNEDPURCHASE_PRODUCT: 1202, // 采购退货单单关联产品
  INVENTORY_MANAGEMENT: 1300, // 库存管理
  ASSEMBLE: 1301, // 装配出入库单
  ASSEMBLE_PRODUCT: 1302, // 装配出入库单关联产品
  ASSEMBLE_INPRODUCTS: 1303, // 装配出入库单入库产品
  INSTOCK: 1401, // 入库单
  INSTOCK_PRODUCT: 1402, // 入库单关联产品
  WAIT_INSTOCK_PURCHASE: 1403, // 待入库
  OUTSTOCK: 1501, // 出库单
  OUTSTOCK_PRODUCT: 1502, // 出库单关联产品
  WAIT_OUTSTOCK: 1503, // 待出库
  TRANSFER: 1601, // 调拨单
  TRANSFER_PRODUCT: 1602, // 调拨单关联产品
  INVENTORY: 1701, // 盘点单
  INVENTORY_PRODUCT: 1702, // 盘点单关联产品
  WAREHOUSE: 1801, // 仓库
  WAREHOUSE_PRODUCT: 1802, // 仓库关联产品
  STOCK_SEARCH: 1901, // 库存查询
  WARNING_SEARCH: 1902, // 预警查询
  GUARANTEE_SEARCH: 1903, // 保质期查询
  SIGNIN: 2001, // 签到
  WORK_REPORT: 2101, // 工作报告
  WORKREPORT_DAILY: 2102, // 日报
  WORKREPORT_WEEKLY: 2103, // 周报
  WORKREPORT_MONTHLY: 2104, // 月报
  APPROVAL: 2201, // 审批
  WORK_ORDER: 2301, // 工单
  PRODUCTSAPI: 2401, // 产品
  PRODUCTSTOCK: 2501, // 库存产品
  BOMBILL: 2601, // BOM清单
  BOMBILL_PRODUCT: 2602, // BOM清单关联产品
  SIMULATED_PRODUCTION: 2701, // 模拟生产
  PRODUCTION_MANAGEMENT: 2800, // 生产管理
  PRODUCTIONORDER: 2801, // 生产单
  PRODUCTIONORDER_PRODUCT: 2802, // 生产单关联产品
  WAIT_PRODUCE: 2802, // 待生产
  STATISTICS: 2901, // 统计服务
  SALES_REPORT_ENTITY: 3201, // 销售简报
  GROUP_MESSAGE: 33, // 短信群发
  SEND_MESSAGE: 3301, // 发送短信
  RECORD_VIEW: 3302, // 记录查看
  CONFIG_INFORMATION: 3303, // 配置信息
  RECHARGE_RECORD: 3304, // 充值记录
  SFA: 3401, // 销售自动化
  APP_STORE: 3501, // 应用中心
  CALL_CENTER: 3601, // 呼叫中心
  CALL_CENTER_DU_YAN: 3602, // 度言
  CALL_CENTER_DINGTALK: 3603, // 钉钉智能办公电话
  CALL_CENTER_COMMON_CALL: 3604, // 普通通话
  CALL_CENTER_XBB: 3605, // 销帮帮
  EXPORT: 3701, // 导出
  EXPORT_FAIL: 3702, // 导出失败
  FUND_MANAGEMENT: 3900, // 资金管理
  SET_MEAL: 4000 // 套餐
}

// 业务枚举，暂时不确定有么有用
// const businessType = {
//   customer: {
//     attr: 'customer',
//     name: '全部客户',
//     query: {
//       businessType: 101,
//       saasMark: 1,
//       appId: 1804
//     }
//   },
//   customerFocus: {
//     attr: 'customerFocus',
//     name: '重点客户',
//     query: {
//       businessType: 102,
//       saasMark: 1,
//       appId: 1804
//     }
//   },
//   customerDeal: {
//     attr: 'customerDeal',
//     name: '成交客户',
//     query: {
//       businessType: 103,
//       saasMark: 1,
//       appId: 1804
//     }
//   },
//   customerFollow: {
//     attr: 'customerFollow',
//     name: '跟进客户',
//     query: {
//       businessType: 104,
//       saasMark: 1,
//       appId: 1804
//     }
//   },
//   customerPublic: {
//     attr: 'customerPublic',
//     name: '客户公海池',
//     query: {
//       businessType: 105,
//       saasMark: 1,
//       appId: 1804
//     }
//   },
//   customerRecycle: {
//     attr: 'customerRecycle',
//     name: '客户回收站',
//     query: {
//       businessType: 106,
//       saasMark: 1,
//       appId: 1804
//     }
//   },
//   customerNearby: {
//     attr: 'customerNearby',
//     name: '附近客户',
//     query: {
//       businessType: 107,
//       saasMark: 1,
//       appId: 1804
//     }
//   },
//   contact: {
//     attr: '',
//     name: '联系人',
//     query: {
//       businessType: 401,
//       saasMark: 1,
//       appId: 1832
//     }
//   },
//   communicate: {
//     attr: '',
//     name: '跟进记录',
//     query: {
//       businessType: 501,
//       saasMark: 1,
//       appId: 1832
//     }
//   }
// }

// export {
//   businessType
// }

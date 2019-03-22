/*
 * @Author: xiaocheng.wang
 * @Date: 2019-02-21 11:26:11
 * @LastEditors: xiaocheng.wang
 * @LastEditTime: 2019-02-21 11:30:12
 * @Description: 特殊查重枚举
 */

export default {
  PHONE: {
    type: 1,
    name: 'phone',
    desc: '电话查重'
  },
  CUSTOMER_NAME: {
    type: 2,
    name: 'customerName',
    desc: '客户名称查重'
  },
  CONTRACT_NAME: {
    type: 3,
    name: 'contractName',
    desc: '合同名称查重'
  },
  FINISHED_PRODUCT_VERSION: {
    type: 4,
    name: 'finishedProductVersion',
    desc: 'bom版本查重'
  }
}

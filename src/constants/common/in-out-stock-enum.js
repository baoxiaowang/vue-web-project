/*
 * @Author: xiaocheng.wang
 * @LastEditors: xiaocheng.wang
 * @Description: 出入库类型枚举
 * @Date: 2019-03-01 21:46:08
 * @LastEditTime: 2019-03-21 11:09:34
 */
import BUSINESS_TYPE from '@/constants/common/business-type'

const INSTOCK = {
  PURCHASE: '1', // 采购入库
  RED_CONTRACT: '2', // 合同订单退货入库
  INVENTORY: '3', // 盘盈入库
  TRANSFER: '4', // 调拨入库
  OTHER: '5', // 其他入库
  ASSEMBLE: '6', // 装配入库
  FINSHED_PRODUCT: '7', // 生产成品入库
  RETURNED_MATERIEL: '8' // 退料入库
}
const OUTSTOCK = {
  RETURNED_PURCHASE: '1', // 采购退货出库
  CONTRACT: '2', // 销售出库
  INVENTORY: '3', // 盘亏出库
  TRANSFER: '4', // 调拨出库
  OTHER: '5', // 其他出库
  ASSEMBLE: '6', // 装配出库
  WORK_ORDER: '7', // 工单出库
  MATERIEL: '8' // 生产物料出库
}
export default {
  INSTOCK,
  OUTSTOCK,

  // 获取出入库类型相对应的业务类型
  getBusinessType ({type, businessType}) {
    if (businessType === BUSINESS_TYPE.INSTOCK) {
      // 获取入库类型对应的业务
      switch (type) {
        case INSTOCK.PURCHASE:
          return BUSINESS_TYPE.PURCHASE
        case INSTOCK.RED_CONTRACT:
          return BUSINESS_TYPE.CONTRACT
        case INSTOCK.INVENTORY:
          return BUSINESS_TYPE.INVENTORY
        case INSTOCK.TRANSFER:
          return BUSINESS_TYPE.TRANSFER
        case INSTOCK.ASSEMBLE:
          return BUSINESS_TYPE.ASSEMBLE
        case INSTOCK.FINSHED_PRODUCT:
          return BUSINESS_TYPE.PRODUCTIONORDER
        case INSTOCK.RETURNED_MATERIEL:
          return BUSINESS_TYPE.PRODUCTIONORDER
      }
    } else if (businessType === BUSINESS_TYPE.OUTSTOCK) {
      // 获取出库类型对应的业务
      switch (type) {
        case OUTSTOCK.RETURNED_PURCHASE:
          return BUSINESS_TYPE.RETURNED_PURCHASE
        case OUTSTOCK.CONTRACT:
          return BUSINESS_TYPE.CONTRACT
        case OUTSTOCK.INVENTORY:
          return BUSINESS_TYPE.INVENTORY
        case OUTSTOCK.TRANSFER:
          return BUSINESS_TYPE.TRANSFER
        case OUTSTOCK.ASSEMBLE:
          return BUSINESS_TYPE.ASSEMBLE
        case OUTSTOCK.WORK_ORDER:
          return BUSINESS_TYPE.WORK_ORDER
        case OUTSTOCK.MATERIEL:
          return BUSINESS_TYPE.PRODUCTIONORDER
      }
    }
  }
}

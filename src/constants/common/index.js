/**
 * 公共的一个map 工具 key === 字段 fieldType
 * componentsName 动态组件名称
 * defaultVal 默认值
 */
const passfieldsMap = {
  1: {
    componentsName: 'InputText',
    defaultVal () {
      return ''
    }
  },
  2: {
    componentsName: 'InputNumber',
    defaultVal () {
      return null
    }
  },
  3: {
    componentsName: 'SelectRadio',
    defaultVal () {
      return ''
    }
  },
  4: {
    componentsName: 'InputDate',
    defaultVal () {
      return null
    }
  },
  6: {
    componentsName: 'PictureUpload',
    defaultVal () {
      return []
    }
  },
  7: {
    componentsName: 'InputTextArea',
    defaultVal () {
      return null
    }
  },
  8: {
    componentsName: 'FileUpload',
    defaultVal () {
      return []
    }
  },
  9: {
    componentsName: 'InputCheckbox',
    defaultVal () {
      return []
    }
  },
  12: {
    componentsName: 'InputAddress',
    defaultVal () {
      return {
        city: '', // 沈阳市
        address: '', // 辽宁省沈阳市大东区错么
        district: '', // 大东区
        province: '' // 辽宁省
      }
    }
  },
  15: {
    // 开关组件,没有传时，默认关闭
    componentsName: 'ConfigSwitch',
    defaultVal: 0
  },
  10000: {
    componentsName: 'InputRadio',
    defaultVal () {
      return ''
    }
  },
  10001: {
    componentsName: 'SelectCheckbox',
    defaultVal () {
      return []
    }
  },
  10002: {
    componentsName: 'SegmentingLine',
    defaultVal () {
      return null
    }
  },
  10003: {
    componentsName: 'Location',
    defaultVal () {
      return null
    }
  },
  10004: {
    componentsName: 'DescribeText',
    defaultVal () {
      return null
    }
  },
  10005: {
    componentsName: 'InputLink',
    defaultVal () {
      return null
    }
  },
  10007: {
    componentsName: 'RelationQuery',
    defaultVal () {
      return null
    }
  },
  10006: {
    componentsName: 'SubForm',
    defaultVal () {
      return []
    }
  },
  10008: {
    componentsName: 'RelationData',
    defaultVal () {
      return ''
    }
  },
  10009: {
    componentsName: 'UserRadio',
    defaultVal () {
      return ''
    }
  },
  10010: {
    componentsName: 'UserCheckbox',
    defaultVal () {
      return []
    }
  },
  10011: {
    componentsName: 'DeptRadio',
    defaultVal () {
      return ''
    }
  },
  10012: {
    componentsName: 'DeptCheckbox',
    defaultVal () {
      return []
    }
  },
  10013: {
    componentsName: 'UserRadio',
    defaultVal () {
      return ''
    }
  },
  10014: {
    componentsName: 'InputDate',
    defaultVal () {
      return null
    }
  },
  10015: {
    componentsName: 'InputDate',
    defaultVal () {
      return null
    }
  },
  10016: {
    componentsName: 'DeptRadio',
    defaultVal () {
      return ''
    }
  },
  10017: {
    componentsName: 'UserRadio',
    defaultVal () {
      return ''
    }
  },
  10018: {
    componentsName: 'UserCheckbox',
    defaultVal () {
      return []
    }
  },
  10019: {
    componentsName: 'SerialNumber',
    defaultVal () {
      return ''
    }
  }
  // saas---------------

}

const saasFieldsMap = {
  20001: { // 关联选择（单选）
    componentsName: 'linkTable',
    defaultVal () {
      return ''
    }
  },
  20002: { // 关联选择（多选）
    componentsName: 'linkTable',
    defaultVal () {
      return ''
    }
  },
  20003: {
    // 联系电话，
    componentsName: 'SubForm'
  },
  20004: {
    // 产品
    componentsName: 'linkProduct'
  },
  20005: {
    // 执行人
    componentsName: 'InputText'
  },
  20006: {
    // 跟进业务
    componentsName: 'FollowUpBusiness'
  },
  20007: {
    // 今日计划
    componentsName: 'PlanToday'
  },
  20008: {
    // 规格
    componentsName: 'specAndStock'
  },
  // 20009: {
  //   // 库存
  //   componentsName: 'InputText'
  // },
  // 库存2009是在规格组件里一起控制的，不单独控制
  20010: {
    // 带勾
    componentsName: 'InputWithCheckbox'
  },
  20011: {
    // 富文本
    componentsName: 'quillEditor'
  },
  37: {
    // 生日
    componentsName: 'birthday'
  },
  10: {
    // 星级
    componentsName: 'RateField'
  },
  14: {
    // 音频
    componentsName: 'InputText'
  },
  15: {
    // 开关
    componentsName: 'SwitchField'
  },
  20013: {
    // 关联表单新建
    componentsName: 'LinkForm'
  },
  20014: {
    // 单条子表单
    componentsName: 'SingleSubForm'
  }
}

const fieldsMap = {
  ...passfieldsMap,
  ...saasFieldsMap
}
const btnMap = {
  'delete': 'el-icon-delete',
  'print': 'el-icon-printer',
  'update': 'el-icon-edit'
}
export { fieldsMap, btnMap }

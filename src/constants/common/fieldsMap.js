/*
 * @Author: qianqian.zhao
 * @Date: 2018-12-18 11:14:16
 * @LastEditors: qianqian.zhao
 * @LastEditTime: 2019-02-12 16:26:43
 * @Description: 全部字段的组件名称map结构
 */

const fieldsMap = {
  1: {
    componentsName: 'text-attr',
    fieldsEchoComponents: 'basic-text',
    attrName: '单行文本',
    attrType: 'text',
    filterSelectComponents: 'widget-input',
    filterSelectType: 'single'
  },
  7: {
    componentsName: 'text-area-attr',
    fieldsEchoComponents: 'basic-textarea',
    attrName: '多行文本',
    attrType: 'text',
    filterSelectComponents: 'widget-input',
    filterSelectType: 'single'
  },
  2: {
    componentsName: 'number-attr',
    fieldsEchoComponents: 'basic-number',
    attrName: '数字',
    attrType: 'num',
    filterSelectComponents: 'widget-input',
    filterSelectType: 'multiple'
  },
  4: {
    componentsName: 'datetime-attr',
    fieldsEchoComponents: 'basic-date',
    attrName: '日期',
    attrType: 'date',
    filterSelectComponents: 'widget-time',
    filterSelectType: 'multiple'
  },
  10000: {
    componentsName: 'radio-group-attr',
    fieldsEchoComponents: 'basic-radio',
    attrName: '单选按钮',
    attrType: 'text',
    filterSelectComponents: 'widget-select',
    filterSelectType: 'single'
  },
  9: {
    componentsName: 'checkbox-group-attr',
    fieldsEchoComponents: 'basic-checkbox',
    attrName: '复选框组',
    attrType: 'array',
    filterSelectComponents: 'widget-select',
    filterSelectType: 'multiple'
  },
  3: {
    componentsName: 'combo-attr',
    fieldsEchoComponents: 'basic-dropdown',
    attrName: '下拉框',
    attrType: 'text',
    filterSelectComponents: 'widget-select',
    filterSelectType: 'single'
  },
  10001: {
    componentsName: 'combo-check-attr',
    fieldsEchoComponents: 'basic-dropdown-checkbox',
    attrName: '下拉复选框',
    attrType: 'array',
    filterSelectComponents: 'widget-select',
    filterSelectType: 'multiple'
  },
  10002: {
    componentsName: 'separator-attr',
    fieldsEchoComponents: 'basic-separator',
    attrName: '分割线',
    attrType: 'other'
  },
  12: {
    componentsName: 'address-attr',
    fieldsEchoComponents: 'basic-address',
    attrName: '地址',
    attrType: 'text'
  },
  10003: {
    componentsName: 'location-attr',
    fieldsEchoComponents: 'basic-location',
    attrName: '定位',
    attrType: 'geo'
  },
  6: {
    componentsName: 'image-attr',
    fieldsEchoComponents: 'basic-image',
    attrName: '图片',
    attrType: 'file'
  },
  8: {
    componentsName: 'attachment-attr',
    fieldsEchoComponents: 'basic-attachment',
    attrName: '附件',
    attrType: 'file'
  },
  10004: {
    componentsName: 'memo-attr',
    fieldsEchoComponents: 'basic-memo',
    attrName: '描述文本',
    attrType: 'text'
  },
  10005: {
    componentsName: 'href-attr',
    fieldsEchoComponents: 'basic-href',
    attrName: '超链接',
    attrType: 'file'
  },
  10006: {
    componentsName: 'subform-attr',
    fieldsEchoComponents: 'complex-subform',
    attrName: '子表单',
    attrType: 'subForm'
  },
  10007: {
    componentsName: 'linkquery-attr',
    fieldsEchoComponents: 'complex-linkquery',
    attrName: '关联查询',
    attrType: 'text'
  },
  10008: {
    componentsName: 'linkdata-attr',
    fieldsEchoComponents: 'complex-linkdata',
    attrName: '关联数据',
    attrType: 'text'
  },
  10009: {
    componentsName: 'user-attr',
    fieldsEchoComponents: 'complex-user',
    attrName: '成员单选',
    attrType: 'text'
  },
  10010: {
    componentsName: 'usergroup-attr',
    fieldsEchoComponents: 'complex-usergroup',
    attrName: '成员多选',
    attrType: 'array'
  },
  10011: {
    componentsName: 'dept-attr',
    fieldsEchoComponents: 'complex-dept',
    attrName: '部门单选',
    attrType: 'text'
  },
  10012: {
    componentsName: 'deptgroup-attr',
    fieldsEchoComponents: 'complex-deptgroup',
    attrName: '部门多选',
    attrType: 'array'
  },
  10013: {
    componentsName: 'creator-attr',
    fieldsEchoComponents: 'system-creator',
    attrName: '创建者',
    attrType: 'text'
  },
  10014: {
    componentsName: 'createtime-attr',
    fieldsEchoComponents: 'system-createtime',
    attrName: '创建时间',
    attrType: 'date',
    filterSelectType: 'multiple'
  },
  10015: {
    componentsName: 'updatetime-attr',
    fieldsEchoComponents: 'system-updatetime',
    attrName: '修改时间',
    attrType: 'date',
    filterSelectType: 'multiple'
  },
  10016: {
    componentsName: 'userdept-attr',
    fieldsEchoComponents: 'system-userdept',
    attrName: '所属部门',
    attrType: 'text'
  },
  10017: {
    componentsName: 'owner-attr',
    fieldsEchoComponents: 'system-owner',
    attrName: '负责人',
    attrType: 'text'
  },
  10018: {
    componentsName: 'synergetic-attr',
    fieldsEchoComponents: 'system-synergetic',
    attrName: '协同人',
    attrType: 'text'
  },
  10019: {
    componentsName: 'serialnum-attr',
    fieldsEchoComponents: 'system-serialnum',
    attrName: '流水号',
    attrType: 'text',
    filterSelectType: 'single'
  }
}
export { fieldsMap }

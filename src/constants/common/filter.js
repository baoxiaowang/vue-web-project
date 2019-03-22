/*
 * @Author: qianqian.zhao
 * @Date: 2018-11-23 16:25:02
 * @LastEditors: pengpeng.zhu
 * @LastEditTime: 2019-03-19 16:49:08
 * @Description: 筛选字段合集
 */
// case 1: 'InputText' // 单行文本
// case 2: 'InputNumber' // 数组输入
// case 3: 'InputSelect' // 下拉框
// case 4: 'InputDate' // 日期
// case 7: 'InputTextArea' // 多行文本
// case 9: 'InputCheckbox' // 复选框
// case 12: 'InputAddress' // 地址
// case 10000: 'InputRadio' // 单选按钮
// case 10001: 'SelectCheckbox' // 下拉复选框
// case 10003: 'InputAddress' // 地址
// case 10009: 'UserRadio' // 用户单选
// case 10010: 'UserCheckbox' // 用户多选
// case 10011: 'DeptRadio' // 组织单选
// case 10012: 'DeptCheckbox' // 组织多选
// case 10013: 'UserRadio' // 创建者
// case 10014: 'InputDate' // 创建时间
// case 10015: 'InputDate' // 修改时间
// case 10016: 'DeptRadio' // 所属部门
// case 10017: 'UserRadio' // 负责人
// case 10019: 'InputText' // 流水号
// 20001: 关联客户（ 成员单选）
// 20003: 联系电话（ 单行文本）
// 20004: 产品（ 下拉复选）
// 20005: 执行人（ 成员 / 部门多选）
// 20006: 跟进业务无高级筛选
// 20007: 今日计划无高级筛选
// 20008: 规格（ 单行文本）
// 20009: 库存 //
// 20010: 带勾
// 20011: 富文本（ 多行文本）
// 37: 生日（ 日期）
// 10: 星级（ 数字）
// 14: 音频
// 15: 开关 无高级筛选
// 20013: 关联表单新建 无高级筛选
// 20014: 单条子表单 无高级筛选
// 列表页不可进行“筛选”的字段: 分割线、超链接、描述文本、子表单、关联查询、关联数据、图片、附件、定位
// const notfilterList = [10002, 10005, 10004, 10006, 10007, 10008, 6, 8, 10003]
// 列表页可进行“ 筛选” 的字段:
const filterList = [1, 2, 3, 4, 7, 9, 12, 10000, 10001, 10003,
  10009, 10010, 10011, 10012, 10013, 10014, 10015, 10016, 10017, 10019,
  20001, 20004, 37]

// 列表页不可进行“排序”的字段: 复选框组、下拉框复选、分割线、定位、图片、附件、描述文本、超链接、子表单、关联查询、关联数据、成员多选、部门多选、协同人
const sortFilterList = [9, 10001, 10002, 10003, 6, 8, 10004, 10005, 10006, 10007, 10008, 10010, 10012, 10018]

// 列表页可进行“快速编辑”的字段: 单行文本、多行文本、数字、日期、单选按钮、复选框、下拉单选、下拉多选、超链接
const immediateEditList = [1, 7, 2, 4, 10000, 9, 3, 10001, 10005]

// 子表单中关联数据字段需过滤的字段
const linkWeightFilterList = [10006, 10007, 10008]

// 文档地址 https://xbb.yuque.com/xbb/vsf9sv/rhg0l6/edit
const canLinkFieldAttrs = [1, 7, 2, 4, 10000, 9, 3, 10001, 12, 10003, 6, 8, 10006, 10019, 10009, 10010, 10011, 10012] // base 层可关联字段
const canLinkFieldAttrSub = [1, 2, 4, 10000, 9, 3, 10001, 12, 10003, 6, 8, 10019] // sub 层可关联字段
export {
  filterList,
  sortFilterList,
  immediateEditList,
  linkWeightFilterList,
  canLinkFieldAttrs,
  canLinkFieldAttrSub
}

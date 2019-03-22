/*
 * @Author: qianqian.zhao
 * @Date: 2018-11-27 19:22:10
 * @LastEditors: qianqian.zhao
 * @LastEditTime: 2018-11-27 20:23:38
 * @Description: 列表页的权限按钮配置信息
 */
const bottomPermissions = {
  batchUpdate: {
    name: '编辑',
    type: ''
  },
  batchDelete: {
    name: '删除',
    type: 'danger',
    color: '#E05353'
  },
  batchRecovery: {
    name: '恢复',
    type: ''
  },
  batchDeleteComplete: {
    name: '彻底删除',
    type: 'danger'
  }
}
const topPermissions = {
  create: {
    name: '新建',
    type: 'primary'
  },
  imports: {
    name: '导入',
    type: ''
  },
  export: {
    name: '导出',
    type: ''
  },
  dataTrash: {
    name: '数据回收站',
    type: '',
    icon: 'el-icon-delete'
  }
}
export { bottomPermissions, topPermissions }

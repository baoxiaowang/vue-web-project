/*
 * @Author: qianqian.zhao
 * @Date: 2018-11-28 18:45:16
 * @LastEditors: qianqian.zhao
 * @LastEditTime: 2018-11-28 20:01:10
 * @Description:  审批页的tab枚举
 */

const approveTab = {
  giveToFlow: {
    name: '提交给我的',
    processType: 'todo',
    getProcess: 'getTodoList',
    filter: ['commitUser', 'appId', 'menuId', 'taskType', 'commitTime']
  },
  creatFlow: {
    name: '我提交的',
    processType: 'create',
    getProcess: 'getCreateList',
    filter: ['appId', 'menuId', 'taskType', 'commitTime']
  },
  noticeToFlow: {
    name: '抄送给我的',
    processType: 'cc',
    getProcess: 'getCcList',
    filter: ['commitUser', 'appId', 'menuId', 'commitTime']
  },
  allFlow: {
    name: '全部',
    processType: 'all',
    getProcess: 'getAllProcess',
    filter: ['commitUser', 'appId', 'menuId', 'taskType', 'commitTime']
  }
}
export { approveTab }

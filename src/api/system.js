/*
*  DESC: 这是系统基础数据模块api
* */
import request from '@/axios/'
// 角色列表
export function roleList (data) {
  return request({
    url: '/role/list',
    method: 'post',
    data
  })
}

// 角色对应的应用权限清单
export function roleAppDetail (data) {
  return request({
    url: '/role/appDetail',
    method: 'post',
    data
  })
}

// 角色+应用对应的表单/报表权限清单
export function roleModuleDetail (data) {
  return request({
    url: '/role/moduleDetail',
    method: 'post',
    data
  })
}
// 新建角色
export function roleAdd (data) {
  return request({
    url: '/role/add',
    method: 'post',
    data
  })
}
// 删除角色
export function roleDelete (data) {
  return request({
    url: '/role/delete',
    method: 'post',
    data
  })
}
// 编辑角色权限
export function roleSave (data) {
  return request({
    url: '/role/save',
    method: 'post',
    data
  })
}
// 获取组织架构 （部门列表）
export function departmentList (data) {
  return request({
    url: '/department/list',
    method: 'post',
    data
  })
}
// 获取组织架构 (表单权限设置）
export function departmentSimpleList (data) {
  return request({
    url: '/department/simpleList',
    method: 'post',
    data
  })
}
// 员工列表
export function userList (data) {
  return request({
    url: '/user/list',
    method: 'post',
    data
  })
}

// 员工列表，用户列表按字母排序，dropbox里
export function userTreeAjax (data) {
  return request({
    url: '/user/letterList',
    method: 'post',
    data
  })
}

// 员工增加角色
export function userAddRole (data) {
  return request({
    url: '/user/addRole',
    method: 'post',
    data
  })
}
// 同步组织架构
export function departmentRefresh (data) {
  return request({
    url: '/department/refresh',
    method: 'post',
    data
  })
}
// 登录用户信息
export function getUserInfo (data) {
  return request({
    url: '/user/info',
    method: 'post',
    data
  })
}
// 查询组织架构是否同步完成
export function departmentRefreshStatus (data) {
  return request({
    url: '/department/refreshStatus',
    method: 'post',
    data
  })
}
// 批量增加角色
export function userRoleBatchAdd (data) {
  return request({
    url: '/user/roleBatchAdd',
    method: 'post',
    data
  })
}
// 批量删除角色
export function userRoleBatchDel (data) {
  return request({
    url: '/user/roleBatchDel',
    method: 'post',
    data
  })
}
// 查询当天组织架构同步剩余次数
export function departmentGetRefreshTimes (data) {
  return request({
    url: '/department/getRefreshTimes',
    method: 'post',
    data
  })
}
// role/copy
export function roleCopy (data) {
  return request({
    url: '/role/copy',
    method: 'post',
    data
  })
}
// 编辑角色名
export function roleEditName (data) {
  return request({
    url: '/role/editName',
    method: 'post',
    data
  })
}

// 根据ID查询用户
export function getUserById (data) {
  return request({
    url: '/user/info/get',
    method: 'post',
    data
  })
}

// 部门id列表获取部门数据列表
export function getDeptsByIds (data) {
  return request({
    url: '/department/get',
    method: 'post',
    data
  })
}

// 获取平铺结构部门列表（无层级）
export function getDeptsFlatList (data) {
  return request({
    url: '/department/flatList',
    method: 'post',
    data
  })
}

// 修改角色数据权限
export function editDataPermission (data) {
  return request({
    url: '/role/editDataPermission',
    data
  })
}

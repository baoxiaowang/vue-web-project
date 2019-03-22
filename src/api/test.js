import http from '@/axios/'

// 角色列表
export function test (data) {
  return http({
    url: '/role/list',
    method: 'post',
    data
  })
}

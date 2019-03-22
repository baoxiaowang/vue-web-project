/**
 * 用于维护项目localStorage枚举
 * 入参：
 * 'coomon.test' or ['common', 'test']
 * 使用示例：
 * utils.LS.set('common.test', test)
 * utils.LS.get('common.test')
 * utils.LS.remove('common.test')
 * Errors:
 * Error in incoming parameter: 入参错误
 * No corresponding parameters can be found: 未找到匹配的参数
 */

const params = {
  common: {
    'test': 'VUE_TEST_localStorage', // 示例
    'sidemenu': 'VUE-sidemenu-status', // 是否固定左侧菜单
    'strategyCurIndex': 'VUE-strategy-curIndex' // 销售自动化当前自动化
  },
  performance: {
    'fiscalYear': 'VUE-performance-fiscal-year', // 财年
    'permissionsButton': 'VUE-performance-permissions-button'
  }
}

export default params

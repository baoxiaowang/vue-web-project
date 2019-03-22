/**
 * 用于维护项目cookie枚举
 * 入参：
 * 'coomon.test' or ['common', 'test']
 * 使用示例：
 * utils.CK.set('common.test', test)
 * utils.CK.get('common.test')
 * utils.CK.remove('common.test')
 * utils.CK.isKey('common.test')
 * Errors:
 * Error in incoming parameter: 入参错误
 * No corresponding parameters can be found: 未找到匹配的参数
 */

const params = {
  common: {
    'test': 'VUE_TEST_cookie' // 示例
  },
  'theme': 'theme', // 主题颜色,此处兼容之前使用
  't': 't', // 在utils/utils-url.js中使用，暂不清楚作用，此处兼容之前使用
  'nonce': 'nonce' // 在utils/utils-url.js中使用，暂不清楚作用，此处兼容之前使用
}

export default params

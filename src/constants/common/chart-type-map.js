/*
 * @Author: qianqian.zhao
 * @Date: 2019-01-16 09:32:02
 * @LastEditors: qianqian.zhao
 * @LastEditTime: 2019-02-26 14:47:49
 * @Description: 图表类型枚举
 */
const chartTypeMap = {
  1: {
    chartName: '数据查询表',
    type: 'dataQuery',
    chartType: 'custom',
    iconName: 'web-icon-queryTable'
  },
  2: {
    chartName: '数据统计表',
    type: 'datastatic',
    chartType: 'custom',
    iconName: 'web-icon-statisticsTable'
  },
  3: {
    chartName: '柱形图',
    type: 'bar',
    componentsName: 'base-graph',
    chartType: 'custom',
    iconName: 'web-icon-bar'
  },
  4: {
    chartName: '折线图',
    type: 'line',
    componentsName: 'base-graph',
    chartType: 'custom',
    iconName: 'web-icon-line'
  },
  5: {
    chartName: '面积图',
    type: 'area',
    componentsName: 'base-graph',
    chartType: 'custom',
    iconName: 'web-icon-area'
  },
  6: {
    chartName: '雷达图',
    type: 'radar',
    componentsName: 'radar',
    chartType: 'custom',
    iconName: 'web-icon-radar'
  },
  7: {
    chartName: '饼图',
    type: 'pie',
    componentsName: 'pie',
    chartType: 'custom',
    iconName: 'web-icon-pie'
  },
  8: {
    chartName: '仪表盘',
    type: 'gauge',
    componentsName: 'gauge',
    chartType: 'system'
  },
  11: {
    chartName: '堆叠图',
    type: 'pile',
    componentsName: 'base-graph',
    chartType: 'system'
  },
  12: {
    chartName: '地图',
    type: 'map',
    componentsName: 'map-graph',
    chartType: 'system'
  },
  13: {
    chartName: '普通漏斗',
    type: 'funnel',
    componentsName: 'funnel',
    chartType: 'system'
  },
  14: {
    chartName: '复杂漏斗',
    type: 'funnel',
    componentsName: 'funnel',
    chartType: 'system'
  },
  20: {
    chartName: '环形图',
    type: 'loop',
    componentsName: 'pie',
    chartType: 'custom',
    iconName: 'web-icon-pie'
  },
  99: {
    chartName: '查询条件',
    chartType: 'custom',
    iconName: 'web-icon-queryCondition'
  }
}
export { chartTypeMap }

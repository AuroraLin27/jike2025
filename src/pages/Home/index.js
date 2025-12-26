import React, { useEffect, useRef } from 'react'
import * as echarts from 'echarts'

export default function Home() {
  const chartRef = useRef(null)
  useEffect(()=>{
    // 1. 获取渲染图表的dom节点
    const chartDom = chartRef.current
    // 2. 初始化生成图表实例对象
    const myChart = echarts.init(chartDom);
    // 3. 图标参数
    const option = {
      xAxis: {
        type: 'category',
        data: ['Vue', 'React', 'Angular']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [10, 40, 70],
          type: 'bar'
        }
      ]
    };
    // 4. 使用图标参数完成渲染
    option && myChart.setOption(option);
  })
  return (
    <div>
      {/* 容器需要有宽高 */}
      <div ref={chartRef} style={{width: '500px', height: '400px'}}></div>
    </div>
  )
}
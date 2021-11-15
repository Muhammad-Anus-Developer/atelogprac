import React from 'react'
import { Chart } from 'react-charts'
 
export default function MyChart() {
  const data = React.useMemo(
    () => [
      {
        label: 'Series 1',
        data: [[0, 1], [1, 4], [2, 4], [3, 2], [4, 7]]
      },
      {
        label: 'Series 2',
        data: [[0, 3], [1, 5], [2, 5], [3, 6], [4, 4]]
      }
    ],
    []
  )
 
  const axes = React.useMemo(
    () => [
      { primary: true, type: 'linear', position: 'bottom' },
      { type: 'linear', position: 'left' }
    ],
    []
  )
 
  
    // A react-chart hyper-responsively and continuously fills the available
    // space of its parent element automatically
    return (<div
      style={{
        width: '500px',
        height: '400px'
      }}
    >
      <Chart data={data} axes={axes} />
    </div>)
    
  
}
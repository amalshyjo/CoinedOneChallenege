import React from 'react';
import { defaults, Radar } from 'react-chartjs-2';

defaults.maintainAspectRatio = false;

const RadarChart = ({Label,Value,Value2}) => {

  
  const data = {
    labels: Label,
    datasets: [{
      label: 'Today',
      data: Value,
      fill: true,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      pointBackgroundColor: 'rgb(255, 99, 132)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)'
    }, {
      label: 'Yesterday',
      data: Value2,
      fill: true,
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgb(54, 162, 235)',
      pointBackgroundColor: 'rgb(54, 162, 235)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(54, 162, 235)'
    }]
  };


  return(
  <div className='wt-100 ht-100'>
    <Radar data={data}
    options={{
        plugins: {
            legend: {
                labels: {
                    font: {
                        size: 15
                    }
                }
            }
        },
        options: {
          elements: {
            line: {
              borderWidth: 2
            }
          }
        },
    }}
    />
  </div>
)};

export default RadarChart;
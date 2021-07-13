import React from 'react';
import { defaults, Doughnut } from 'react-chartjs-2';

defaults.maintainAspectRatio = false;

const DoughnutChart = ({Label,Value,TitleValue,Title}) => {

  
  const Data = {
    labels: Label,
    datasets: [{
      label: 'Screen Time',
      data: Value,
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(75, 192, 192)',
        'rgb(255, 205, 86)',
        'rgb(201, 203, 207)',
        'rgb(54, 162, 235)'
      ]
    }]
  };
  const plugins = [{
    beforeDraw: function(chart) {
      var width = chart.width,
        height = chart.height,
        ctx = chart.ctx;
      ctx.restore();
      var fontSize = (width / 300).toFixed(2);
      ctx.font = fontSize + "em sans-serif";
      ctx.textBaseline = "middle";

      var title = Title,
          titletextX = Math.round((width - ctx.measureText(title).width) / 2),
          titletextY = height / 1.9;
      var value = `${TitleValue} mins`,
          valuetextX = Math.round((width - ctx.measureText(value).width) / 2),
          valuetextY = height / 1.7;

      ctx.fillText(title, titletextX, titletextY);
      ctx.fillText(value, valuetextX, valuetextY);
      ctx.save();
    } 
  }]

  return(
  <div className='inner'>
    <Doughnut data={Data}
    plugins={plugins} 
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
    }}
    />
  </div>
)};

export default DoughnutChart;
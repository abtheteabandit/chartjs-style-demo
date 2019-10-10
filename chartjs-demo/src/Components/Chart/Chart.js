import React from 'react';
import {Line} from 'react-chartjs-2';
import './Chart.css';



function Chart() {


  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [{
        label: "My First dataset",
        fillColor: "rgba(220,220,220,0.5)",
        strokeColor: "rgba(220,220,220,0.8)",
        highlightFill: "rgba(220,220,220,0.75)",
        highlightStroke: "rgba(220,220,220,1)",
        showTooltip: false, //NEW OPTION DON"T NEED TO INCLUDE IT IF YOU WANT TO DISPLAY BUT WON"T HURT IF YOU DO
        data: [15, 10, 10, 10, 10, 10, 10]
    }, {
        label: "My second dataset",
        fillColor: "rgba(255,100,0,0.5)",
        strokeColor: "rgba(255,100,0,0.8)",
        highlightFill: "rgba(235,80,0,0.75)",
        highlightStroke: "rgba(235,80,0,1)",
        showTooltip: false, //NEW OPTION DON"T NEED TO INCLUDE IT IF YOU WANT TO DISPLAY BUT WON"T HURT IF YOU DO
        data: [100, 40, 2, 92, 59, 44, 30]
    }, {
        label: "My third dataset",
        fillColor: "rgba(151,187,205,0.5)",
        strokeColor: "rgba(151,187,205,0.8)",
        highlightFill: "rgba(151,187,205,0.75)",
        highlightStroke: "rgba(151,187,205,1)",
        data: [28, 48, 40, 19, 86, 27, 90]
    }]
  }

  const options = {
    maintainAspectRatio: false	// Don't maintain w/h ratio
  }


  return (
    <div className={"chart-container"}>
      < Line data={data} className={'a-chart'} options={options}/>
    </div>
  );
}

export default Chart;

import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';




function SensorChart(props) {

    console.log(props, "props")

    const options = {
        title: {
            display: true,
            text: "Chart Title"
        },
        scales: {
            yAxes: [
                {
                    ticks: {
                        suggestedMin: 20,
                        suggestedMax: 50
                    }
                }
            ]
        }
    };

    const legend = {

        display: true,
        position: "bottom",
        reverse: true,
        labels: {
            fontColor: "#323130",
            fontSize: 14
        }
    };
    
    const data = {
        labels: props.labels,
        datasets: [
            {
                label: "Humidity",
                borderColor: "rgb(9,0,192)",
                data: props.humidity
            },
            {
                label: "Temperature",
                borderColor: "red",
                data: props.temperature
            }
        ]
    }



    return (
        <div>
            <Line data={data} legend={legend} options={options} />
        </div>
    );

}

export default SensorChart;
import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';


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

class SensorChart extends Component {


    constructor(props) {
        super(props);
        this.chartReference = React.createRef()
        this.state = {
            data: {
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
        }
    }


    componentDidMount() {
        console.log(this.chartReference); // returns a Chart.js instance reference
        console.log(this.props.labels)
        console.log(this.props.temperature)
        console.log(this.props.humidity)
        console.log(this.state.data)
        console.log(this.state.data.datasets[0].data)
        console.log(this.state.data.datasets[1].data)
    }


    render() {
        return (
            <div>
                <h5>Line Example</h5>
                <Line ref={this.chartReference} data={this.state.data} legend={legend} options={options}/>
            </div>
        );
    }

}

export default SensorChart;
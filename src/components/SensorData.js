import React from 'react';
import Icon from '@mdi/react'
import { mdiThermometer, mdiWaterPercent, mdiCalendarRange } from '@mdi/js';
import './SensorData.css';
import SensorChart from "./SensorChart";

function SensorData() {


    const [humi, setHumi] = React.useState("");
    const [temp, setTemp] = React.useState("");
    const [date, setDate] = React.useState("");
    const [done, isDone] = React.useState(false);


    const [labels, setLabels] = React.useState([]);
    const [humidity, setHumidity] = React.useState([]);
    const [temperature, setTemperature] = React.useState([]);

    let labelsTemp = [];
    let humidityTemp = [];
    let temperatuerTemp = [];

    const fetchData = async () => {
        await fetch('https://asema.herokuapp.com/datalist/100')
            .then(response => response.json())
            .then(responseData => {
                setDate(responseData[0].stringTime);
                setHumi(responseData[0].humidity);
                setTemp(responseData[0].temperature);


                for (let i = 0; i < 100; i++) {
                    labelsTemp.push(responseData[i].stringTime)
                    humidityTemp.push(responseData[i].humidity)
                    temperatuerTemp.push(responseData[i].temperature)
                }
                setLabels(labelsTemp)
                setHumidity(humidityTemp)
                setTemperature(temperatuerTemp)
                isDone(true)
            })
    }

    React.useEffect(() => {
        fetchData();
    }, []);


    if(!isDone){
        return <h1>Loading....</h1>
    }else {
        return (
            <div className="App">
                <h1>Sensor data</h1>
    
                <h3><Icon path={mdiWaterPercent} /> Humidity: {humi}%</h3>
                <h3><Icon path={mdiThermometer} />Temperature: {temp}°C</h3>
                <h3><Icon path={mdiCalendarRange} />Time: {date}</h3>
                <div className="Chart">
                    <SensorChart labels={labels} humidity={humidity} temperature={temperature} />
                </div>
            </div>
        );
    }

}

export default SensorData;

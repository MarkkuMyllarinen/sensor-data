import React from 'react';

function SensorData() {


    const [humi,setHumi] = React.useState("");
    const [temp,setTemp] = React.useState("");
    const [date,setDate] = React.useState("");

    function fetchData() {
        fetch('https://asema.herokuapp.com/datalist/1')
            .then(response => response.json())
            .then(responseData => {
                setDate(responseData[0].stringTime);
                setHumi(responseData[0].humidity);
                setTemp(responseData[0].temperature);
            })
    }

    React.useEffect(() => {
        fetchData();
    },[]);


    return (
        <div className="App">
            <h1>Sensor data</h1>

            <h3>Humidity: {humi}</h3>
            <h3>Temperature: {temp}</h3>
            <h3>Time: {date}</h3>

        </div>
    );
}

export default SensorData;

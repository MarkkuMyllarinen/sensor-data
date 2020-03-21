import React from 'react';
import 'react-table-v6/react-table.css';
import ReactTable from "react-table-v6";

function SensorTable() {

    const [listItems, setListItems] = React.useState([]);


    function fetchData() {
        fetch('https://asema.herokuapp.com/datalist')
            .then(response => response.json())
            .then(responseData => {
                setListItems(responseData);
            })
    }

    React.useEffect(() => {
        fetchData();
    },[]);


    const columns = [{
        Header: 'Date',
        accessor: 'date'
    }, {
        Header: 'Temperature',
        accessor: 'temperature',
    }, {
        Header: 'Humidity',
        accessor: 'humidity',
    }];

    return (
        <div className="App">
            <ReactTable data={listItems}
                        columns={columns} sortable={false}
                        defaultPageSize={15}/>
        </div>
    );
}

export default SensorTable;

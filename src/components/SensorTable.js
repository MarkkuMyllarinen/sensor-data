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
    }, []);


    const columns = [{
        Header: 'Date',
        accessor: 'stringTime'
    }, {
        Header: 'Temperature',
        accessor: 'temperature',
    }, {
        Header: 'Humidity',
        accessor: 'humidity',
    }];

    const defaultSorted = [{
        id: "stringTime",
        desc: true
    }];

    return (
        <div className="App">
            <ReactTable data={listItems}
                        columns={columns} sortable={true}
                        defaultPageSize={20}
                        defaultSorted={defaultSorted}/>
        </div>
    );
}

export default SensorTable;

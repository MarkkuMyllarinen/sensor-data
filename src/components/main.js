import React from 'react';
import SensorData from "./SensorData";
import {Route, Switch} from 'react-router-dom';
import SensorTable from "./SensorTable";

const Main  = () => (
    <Switch>
        <Route exact path="/" component={SensorTable}/>
        <Route path="/data" component={SensorData}/>
        <Route path="/sensortable" component={SensorTable}/>
    </Switch>
);

export default Main;

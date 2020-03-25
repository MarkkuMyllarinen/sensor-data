import React from 'react';
import './App.css';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { Layout, Header, Navigation, Drawer,Content } from 'react-mdl';
import Main from "./components/main";
import {Link} from "react-router-dom";

function App() {

    return (

    <div>
        <Layout fixedHeader>
            <Header title={<span><span style={{ color: '#ddd' }}>DHT11 Data </span><strong></strong></span>}>
                <Navigation>
                    <Link to="/data">Data</Link>
                    <Link to="/sensortable">Sensor table</Link>
                </Navigation>
            </Header>
            <Drawer title="Valikko">
                <Navigation>
                    <Link to="/data">Data</Link>
                    <Link to="/sensortable">Sensor table</Link>
                </Navigation>
            </Drawer>
            <Main/>
            <Content />
        </Layout>
    </div>

    );
}

export default App;

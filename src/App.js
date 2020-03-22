import React from 'react';
import './App.css';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { Layout, Header, Navigation, Drawer,Content } from 'react-mdl';
import Main from "./components/main";

function App() {

    return (

    <div>
        <Layout fixedHeader>
            <Header title={<span><span style={{ color: '#ddd' }}>Area / </span><strong>The Title</strong></span>}>
                <Navigation>
                    <a href="/data">Data</a>
                    <a href="/sensortable">Sensor table</a>
                    <a href="/">Link</a>
                    <a href="/">Link</a>
                </Navigation>
            </Header>
            <Drawer title="Title">
                <Navigation>
                    <a href="/">Link</a>
                    <a href="/">Link</a>
                    <a href="/">Link</a>
                    <a href="/">Link</a>
                </Navigation>
            </Drawer>
            <Main/>
            <Content />
        </Layout>
    </div>

    );
}

export default App;

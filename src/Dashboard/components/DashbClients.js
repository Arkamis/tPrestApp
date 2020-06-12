import React from "react";
import 'antd/dist/antd.css';
import '../styles/Dashboard.css'
import { Layout } from 'antd';
import HeaderNav from './headerNav'
import SiderNav from './siderNav'

class DashClients extends React.Component {
    render(){
        return(
            <Layout>
                <HeaderNav/>
                <SiderNav />
            </Layout>
        )
    }
}

export default DashClients
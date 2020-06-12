import React from "react";
import 'antd/dist/antd.css';
import '../styles/Dashboard.css'
import HeaderNav from './headerNav'
import SiderNav from './siderNav'
import { Layout } from 'antd';

class DashDebts extends React.Component {
    
    render(){
        return(
            <Layout>
                <HeaderNav/>
                <SiderNav />
            </Layout>
        )
    }
}

export default DashDebts
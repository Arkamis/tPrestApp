import React from "react";
import 'antd/dist/antd.css';
import '../../Styles/Dashboard.css'
import { Layout } from 'antd';
import HeaderNav from '../HeaderNav'
import SiderNav from '../SiderNavC'

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
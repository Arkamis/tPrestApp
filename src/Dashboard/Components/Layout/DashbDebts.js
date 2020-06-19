import React from "react";
import 'antd/dist/antd.css';
import '../../Styles/Dashboard.css'
import HeaderNav from '../HeaderNav'
import SiderNav from '../SiderNavD'
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
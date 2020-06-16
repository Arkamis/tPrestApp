import React from "react";
import 'antd/dist/antd.css';
import '../../Styles/Dashboard.css'
import HeaderNav from '../HeaderNav'
import SiderNav from '../SiderNavP'
import { Layout } from 'antd';


class DashPays extends React.Component {
    
    render(){
        return(
            <Layout>
                <HeaderNav/>
                <SiderNav />
            </Layout>
        )
    }
}

export default DashPays
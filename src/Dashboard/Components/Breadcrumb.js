import React from 'react'
import { Breadcrumb } from 'antd';

class BreadCrumbs extends React.Component{
    render(){
        return(
            <Breadcrumb style={{ margin: '16px 0'}}>
                <Breadcrumb.Item className = "text-white" >Home</Breadcrumb.Item>
                <Breadcrumb.Item className = "text-white">List</Breadcrumb.Item>
                <Breadcrumb.Item className = "text-white">App</Breadcrumb.Item>
            </Breadcrumb>
        )
    }
}

export default  BreadCrumbs
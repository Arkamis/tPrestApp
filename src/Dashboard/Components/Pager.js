import React from 'react'
import { Pagination } from 'antd';

class Pager extends React.Component{
  
    render(){
        return(
            <div>
                <Pagination className = "black-ground white-text center mt-5" defaultCurrent={1} total={10} />
            </div>
        )
    }
}

export default Pager
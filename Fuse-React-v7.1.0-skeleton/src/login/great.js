import React, {Component} from 'react';
import axios from 'axios';
import { Result, Button } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
export default class Great extends Component {
  
render () {
    return(

        
    <div className='Result'>
          <Result
            icon={<SmileOutlined />}
            title="Great, welcome in !"
            extra={<Button type="primary" >Next</Button>}
          />
    </div>
    )
}
}
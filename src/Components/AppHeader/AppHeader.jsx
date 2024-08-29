import * as React from 'react';
import { Avatar} from 'antd';
import { MenuOutlined} from '@ant-design/icons';
import './AppHeader.css'

export default function AppHeader({ handleSideBar }) {
  return (
    <div className='app-header'>
      <div className='app-icon-container'>
        <MenuOutlined className='sidebar-toggle' onClick={() => handleSideBar()} />
        {/* <img
          className="org-logo"
          src={require('../../Assets/1729001882.jpeg')}
          alt="orglogo"
        /> */}
      </div>
      <div className="project-title" >
        Product Management
      </div>
      <div className='profile-container'>
        <Avatar
          style={{
            backgroundColor: '#87d068',
            marginLeft: 10,
          }} 
          size='small'
        >
          SM
        </Avatar>
      </div>
    </div>
  );
}
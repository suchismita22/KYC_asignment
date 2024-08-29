import * as React from 'react';
import './SideBar.css';
import { Menu } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';

//Routes
import { routes } from '../../Routes/RouteConfig';

export default function SideBar() {
  const navigate = useNavigate();
  let location = useLocation();
  let currentPath = location.pathname
  let active = ''

  const goToPage = (path) => {
    if(currentPath === path){
        return null
    } else {
        navigate(path)
    }
  }

  return (
    <Menu className='sidebar-menu' theme="dark" mode="inline" defaultSelectedKeys={['0']}>
      {routes.map((item, key)=>{
        if(currentPath === item.path){
          active = '-active'
        } else {
          active = ''
        }
        return(
          <Menu.Item className = {`sidebar-item${active}`} key={key} onClick={()=>goToPage(item.path)}>
            {item.icon}
            <span>{item.label}</span>
          </Menu.Item>
        )
      })}
    </Menu>
  );
}
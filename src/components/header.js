import React from "react"
import {Layout, Menu} from 'antd';

const { Header} = Layout

const HeaderComponent = (props) => {
  return (
      <Header style={{background: 'white'}}>
        <Menu  style={{width: '100%'}} mode="horizontal" theme='light'>
          <Menu.Item key="events">Events</Menu.Item>
          <Menu.Item key="spaces">Spaces</Menu.Item>
        </Menu>
      </Header>
  )
}



export default HeaderComponent

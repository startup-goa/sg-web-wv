import React from "react"
import {Layout, Row, Col} from 'antd';
import logo from '../images/logo.png'
import { Link } from "gatsby";

const { Header} = Layout

const HeaderComponent = (props) => {
  return (
    <Header style={{ background: "white", padding: 8 }}>
      <Row>
        <Col span={2}>
          <img src={logo} height={50} />
        </Col>
        <Col span={2}>
          <Link to='/events'>Event</Link>
        </Col>
        <Col span={2}>
          <Link>Spaces</Link>
        </Col>
      </Row>
    </Header>
  )
}



export default HeaderComponent

import React from "react"
import {Layout, Row, Col} from 'antd';
import logo from '../images/logo.png'
import { Link } from "gatsby";

const { Header} = Layout

const HeaderComponent = (props) => {
  return (
    <Header style={{ background: "white", padding: 8, marginBottom: 24 }}>
      <Row>
        <Col span={2}>
          <Link to="/">
            <img src={logo} height={50} />
          </Link>
        </Col>
        <Col span={1}>
          <Link to="/events" activeStyle={{ color: "#F3712A" }}>
            Event
          </Link>
        </Col>
        <Col span={1}>
          <Link activeStyle={{ color: "#F3712A" }}>Spaces</Link>
        </Col>
        <Col span={1}>
          <Link activeStyle={{ color: "#F3712A" }} to="/people"> People</Link>
        </Col>
      </Row>
    </Header>
  )
}



export default HeaderComponent

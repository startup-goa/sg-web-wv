import React from "react"
import { Layout, Row, Col } from "antd"
import logo from "../images/logo.png"
import { Link } from "gatsby"

const { Header } = Layout

/**
 * @type {React.CSSProperties}
 */
const navItemStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}

const HeaderComponent = props => {
  return (
    <div style={{ background: "white", padding: "8px 0", marginBottom: 24 }}>
      <Row>
        <Col xs={16} sm={10} md={8} lg={6} xl={5} xxl={4}>
          <Row>
            <Col span={6} style={navItemStyle}>
              <Link to="/">
                <img src={logo} height={50} />
              </Link>
            </Col>
            <Col span={6} style={navItemStyle}>
              <Link to="/events" activeStyle={{ color: "#F3712A" }}>
                Event
              </Link>
            </Col>
            <Col span={6} style={navItemStyle}>
              <Link to="/spaces" activeStyle={{ color: "#F3712A" }}>
                Spaces
              </Link>
            </Col>
            <Col span={6} style={navItemStyle}>
              <Link activeStyle={{ color: "#F3712A" }} to="/people">
                People
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default HeaderComponent

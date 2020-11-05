import React from "react"
import { Layout, Row, Col } from "antd"
import logo from "../images/logo.png"
import { Link } from "gatsby"


const Hero = ()=>{

    return (
      <Row justify="center">
        <Col
          span={24}
          style={{
            textAlign: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: "50vh",
            backgroundImage: "url(" + require("../images/hero.png") + ")",
            paddingTop: "50px",
            alignItems: "center",
          }}
        >
          <Row>
            <img height={100} src={require("../images/hero-logo.png")} />
          </Row>
          <Row>
            <h1 style={{ color: "white" }}>Startup Goa</h1>
          </Row>
        </Col>
      </Row>
    )

}


export default Hero
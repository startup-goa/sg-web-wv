import React from "react"
import { Link } from "gatsby"
import { Row, Col, Tag, Card } from "antd"
import { EnvironmentFilled, PhoneFilled, MailFilled } from "@ant-design/icons"

import "./index.css"

const PeopleCard = props => {
  console.log("people-data", props.data)
  return (
    <Link to={`/people/1`}>
      <Card style={{ color: "#333333", marginBottom: 4 }} hoverable>
        <Row className="event-card">
          <Col md={3}>
            <div className="image-holder"></div>
          </Col>
          <Col md={21}>
            <Row>
              <Col md={6}>
                <b>{props.data.title}</b>
              </Col>
              <Col md={4}>
                <Tag color="blue">{`${props.data.type}`}</Tag>
              </Col>
              <Col md={6}>
                <PhoneFilled style={{ marginRight: 4 }} />
                +91 9673682842
              </Col>
            </Row>
            <Row>
              <Col offset={10} md={6}>
                <MailFilled style={{ marginRight: 4 }} />
                email@startupgoa.org
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <EnvironmentFilled style={{ marginRight: 4 }} />
                Dona Paula
              </Col>
            </Row>
          </Col>
        </Row>
      </Card>
    </Link>
  )
}

export default PeopleCard

import React from "react"
import { Link } from "gatsby"
import { Row, Col, Tag, Card } from "antd"
import {
  EnvironmentFilled,
  LinkedinOutlined,
  MailFilled,
  TwitterOutlined,
} from "@ant-design/icons"

import "./index.css"

const PeopleCard = props => {
  console.log("people-data", props.data)
  return (
    <Link to={`/people/${props.data.slug}`}>
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
              <Col md={props.data.acf_fields.linkedin_ ? 2 : 0}>
                <a
                  onClick={e => {
                    e.preventDefault()
                    window.open(
                      `${props.data.acf_fields.linkedin_}`,
                      "_blank" // <- This is what makes it open in a new window.
                    )
                  }}
                  href={`${props.data.acf_fields.linkedin_}`}
                >
                  <LinkedinOutlined
                    size={100}
                    style={{ marginRight: 4, fontSize: 30 }}
                  />
                </a>
              </Col>
              <Col md={props.data.acf_fields.twitter ? 2 : 0}>
                <a
                  onClick={e => {
                    e.preventDefault()
                    window.open(
                      `${props.data.acf_fields.twitter}`,
                      "_blank" // <- This is what makes it open in a new window.
                    )
                  }}
                  href={`${props.data.acf_fields.twitter}`}
                >
                  <TwitterOutlined style={{ fontSize: 30 }} />
                </a>
              </Col>
            </Row>
            <Row style={{ marginTop: 16 }}>
              <Col md={6}>
                <EnvironmentFilled style={{ marginRight: 4 }} />
                Dona Paula
              </Col>
              <Col md={10}>
                <MailFilled style={{ marginRight: 4 }} />
                {props.data.acf_fields.email
                  ? props.data.acf_fields.email
                  : "-"}
              </Col>
            </Row>
          </Col>
        </Row>
      </Card>
    </Link>
  )
}

export default PeopleCard

import React from "react"
import {Link} from 'gatsby'
import {Row, Col, Tag, Card} from "antd"
import { EnvironmentFilled, PhoneFilled, MailFilled } from "@ant-design/icons"

import './index.css'

const EventCard = props => {
  return (
    <Link to={`/events/${props.data.slug}`}>
      <Card style={{ color: "#333333", marginBottom: 4 }} hoverable>
        <Row className="event-card">
          <Col md={3} sm={24} xs={24}>
            <div className="image-holder"></div>
          </Col>
          <Col md={21}>
            <Row>
              <Col md={6} sm={18} xs={18}>
                <b>{props.data.title}</b>
              </Col>
              <Col md={4} sm={4} xs={4}>
                <Tag color="blue">{`${props.data.type}`}</Tag>
              </Col>
            </Row>
            <Row style={{ marginTop: 4 }}>
              <Col md={8} sm={24} xs={24} className="event-name">
                {props.data.acf_fields.start_date}
              </Col>
            </Row>
            <Row style={{ marginTop: 4 }}>
              <Col md={6}>
                <EnvironmentFilled style={{ marginRight: 8 }} />
                {props.data.location_address}
              </Col>
            </Row>
          </Col>
          <Col span={24}></Col>
        </Row>
      </Card>
    </Link>
  )
}

export default EventCard

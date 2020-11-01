import React from "react"
import {Row, Col, Tag, Card} from "antd"

import './index.css'

const EventCard = props => {
  return (
    <Card style={{ marginTop: 24 }} hoverable>
      <Row className="event-card">
        <Col span={2}>
          <div className="image-holder"></div>
        </Col>
        <Col span={22}>
          <Row>
            <Col span={8}>
              <b>31st Oct 2020</b>
            </Col>
          
              <Col span={8}>
                <Tag color="blue">Tech</Tag>
              </Col>
          </Row>
          <Row>
            <Col className="event-name" span={8}>
              Hackathon
            </Col>
            <Col span={8}></Col>
          </Row>
        </Col>
      </Row>
    </Card>
  )
}

export default EventCard

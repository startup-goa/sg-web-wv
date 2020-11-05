import React, { useEffect, useState } from "react"
import { Link, useStaticQuery } from "gatsby"
import {Row, Col, Menu} from 'antd'
import Layout from "../components/layout"
import EventCard from '../components/EventCard/index'
import SEO from "../components/seo"

const EventsPage = () => {

  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [filter, setFilter] = useState('all')

  useEffect(()=>{
    setData(apiData?.allWordpressWpEvents?.edges)
  },[])

  useEffect(()=>{
    let filteredDataTemp = []
    data.forEach(item=>{
      const currTime = new Date().getTime()
      let endTime = new Date(
        item.node.acf_fields.end_date
          ? item.node.acf_fields.end_date
          : item.node.acf_fields.start_date
      )
      if(filter === 'all'){
        setFilteredData(data)
      }else if(filter === 'past'){
      if (currTime > endTime) {
        filteredDataTemp.push(item)
      }
      }else if(filter === 'upcoming'){
        if(currTime<endTime){
          filteredDataTemp.push(item)
        }
      }
    })
    if(filter!=='all'){
      setFilteredData(filteredDataTemp)
    }
  },[data, filter])

  const handelFilterChange = (filter)=>{
    setFilter(filter.key)
  }

    const apiData = useStaticQuery(graphql`
      query Events {
        allWordpressWpEvents {
          edges {
            node {
              acf_fields {
                end_date
                event_description
                event_link
                location_map
                location_address
                start_date
              }
              title
              wordpress_id
              slug
            }
          }
        }
      }
    `)

return(
  <Layout>
    <Row gutter={16}>
      <Col md={6}>
        <Menu defaultSelectedKeys={['all']} style={{borderRadius: 5, padding: 8}} onSelect={handelFilterChange}>
          <Menu.Item key='all'>All</Menu.Item>
          <Menu.Item key="upcoming">Upcoming</Menu.Item>
          <Menu.Item key="past">Past</Menu.Item>
        </Menu>
      </Col>
      <Col md={18}>
        {
          filteredData.map(item=>{
            return <EventCard data={item.node} />
          })
        }
      </Col>
    </Row>
  </Layout>
)

}

export default EventsPage

import React, { useEffect, useState } from "react"
import { Link, useStaticQuery } from "gatsby"
import {Row, Col} from 'antd'
import PeopleCard from  '../components/PeopleCard/index'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const PeoplePage = () => {

    const [data, setData] = useState([])

    useEffect(()=>{
        setData(apiData?.allWordpressWpPeople?.edges)
    }, [])

        useEffect(() => {
          console.log('seeting people data: ', data)
        }, [data])

  const apiData = useStaticQuery(graphql`
    query People {
      allWordpressWpPeople {
        edges {
          node {
            wordpress_id,
            title,
            type,
            slug
          }
        }
      }
    }
  `)

  console.log("data", data)

  return (
    <Layout>
      <SEO title="People" />
      <Row justify="center">
        <Col span={15}>{
            data.map(item=>{
                console.log('item', item)
                return <PeopleCard data={item.node} />
            })
        }</Col>
      </Row>
    </Layout>
  )
}

export default PeoplePage

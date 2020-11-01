import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import {Layout} from 'antd'
import Header from "./header"

import './layout.css'

const CustomLayout = ({ children, getCurrentPage }) => {
  const { Footer } = Layout
  const [currentTab, setCurrentTab] = useState(null);


  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div style={{height: '100vh'}}>
        <Header
          siteTitle={data.site.siteMetadata?.title || `Title`}
          getCurrentPage={page => getCurrentPage(page)}
        />
        <div>
          <main
            style={{
              paddingLeft: 8,
              marginRight: 8,
            }}
          >
            {children}
          </main>
          <footer className="footer">
            © {new Date().getFullYear()},{` `}
            Startup Goa
          </footer>
        </div>
      </div>
    </>
  )
}

CustomLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default CustomLayout

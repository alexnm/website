import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import ExternalLink from './external-link'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main className="main">{children}</main>
        <footer className="footer">
          <div>
            Find me on:{' '}
            <ExternalLink to="https://twitter.com/alexnmoldovan">
              Twitter
            </ExternalLink>
            , <ExternalLink to="https://github.com/alexnm">GitHub</ExternalLink>
            ,{' '}
            <ExternalLink to="https://www.linkedin.com/in/alex-moldovan-947b215b/">
              LinkedIn
            </ExternalLink>
          </div>
          <div>Alex Moldovan © 2018</div>
        </footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

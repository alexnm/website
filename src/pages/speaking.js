import React, { Fragment } from 'react'
import Layout from '../components/layout'
import conferences from '../data/conferences.json'
import ExternalLink from '../components/external-link'

const SpeakingPage = () => (
  <Layout>
    <h1>Speaking at Events</h1>
    <p>
      I enjoy giving conference talks around Romania and Europe and I'm looking
      forward to expanding my horizons. The main topics I cover are around:{' '}
      <strong>JavaScript</strong>, <strong>React</strong>,{' '}
      <strong>GraphQL</strong>, <strong>Web Performance</strong>,{' '}
      <strong>Web Accessibility</strong>.
    </p>
    <p>Upcoming Events:</p>
    <ul>
      {conferences.upcoming.map(conf => (
        <li key={conf.name}>
          <ExternalLink to={conf.link}>{conf.name}</ExternalLink>
        </li>
      ))}
    </ul>
    <p>Previous Events:</p>
    <ul>
      {conferences.previous.map(conf => (
        <li>
          {conf.name} - {conf.title}
          {conf.slides && (
            <Fragment>
              {': '}
              <ExternalLink to={conf.slides}>Slides</ExternalLink>
            </Fragment>
          )}
          {conf.video && (
            <Fragment>
              {', '}
              <ExternalLink to={conf.video}>Video</ExternalLink>
            </Fragment>
          )}
        </li>
      ))}
    </ul>
  </Layout>
)

export default SpeakingPage

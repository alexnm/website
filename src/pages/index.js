import React from 'react'

import Layout from '../components/layout'
import ExternalLink from '../components/external-link'

const IndexPage = () => (
  <Layout>
    <h1>
      Hi there!{' '}
      <span role="img" aria-label="emoji wave">
        👋
      </span>
    </h1>
    <p>
      My name is Alex, I'm a coder, blogger and tech enthusiast in general.
      People who know me know that I'm always eager to talk about web
      development, javascript and programming in general.
    </p>
    <p>
      I believe that building knowledge is similar to building Legos - which I
      do a lot in my spare time - one block at a time.
    </p>
    <p>Paragraph about JSHeroes.</p>
    <p>
      For the comfort of the geeky mind inside you, this site is built using{' '}
      <ExternalLink to="https://www.gatsbyjs.org/">Gatsby</ExternalLink>.
    </p>
  </Layout>
)

export default IndexPage

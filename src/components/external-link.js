import React from 'react'
import PropTypes from 'prop-types'
import './external-link.css'

const ExternalLink = ({ to, children }) => (
  <a className="link" href={to} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
)

ExternalLink.prototypes = {
  url: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default ExternalLink

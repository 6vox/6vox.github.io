import React from 'react'
import PropTypes from 'prop-types'

import './index.css'

const Small = ({ text }) => <small>{text}</small>

Small.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Small

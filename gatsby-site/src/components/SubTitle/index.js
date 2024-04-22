import React from 'react'
import PropTypes from 'prop-types'

const SubTitle = ({ title, children }) => (
  <h3>
    {title}
    {children}
  </h3>
)

SubTitle.propTypes = {
  title: PropTypes.string.isRequired,
}

export default SubTitle

import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

const Main = ({ id, children }) => (
  <div className="main-container">
    <div className="main wrapper clearfix">
      <article>
        <section id={id}>{children}</section>
      </article>
    </div>
  </div>
)

Main.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Main

import React from 'react'

const LinkAddress = ({ address, url }) => (
  <a className="address" href={url} target="_blank">
    {address}
  </a>
)

export default LinkAddress

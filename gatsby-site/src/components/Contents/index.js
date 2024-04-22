import React from 'react'

const Contents = ({ contents }) =>
  contents.map((content, index) => <p key={index}>{content}</p>)

export default Contents

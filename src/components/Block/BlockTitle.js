import React from 'react'

const BlockTitle = ({ className, children, larger = false }) => (
  larger ?
    <h1 className={className}>
      {children}
    </h1> :
    <h2 className={className}>
      {children}
    </h2>
)

export default BlockTitle;

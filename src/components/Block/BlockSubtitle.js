import React from 'react'

const BlockSubtitle = ({ className, children, larger = false }) => (
  larger ?
    <h5 className={className}>
      {children}
    </h5> :
    <h6 className={className}>
      {children}
    </h6>
)

export default BlockSubtitle

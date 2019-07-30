import React from 'react'

const ContentSubtitle = ({ className, children, larger = false }) => (
  larger ?
    <h5 className={className}>
      {children}
    </h5> :
    <h6 className={className}>
      {children}
    </h6>
)

export default ContentSubtitle

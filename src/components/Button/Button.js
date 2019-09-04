import React from 'react'
import classnames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/pro-light-svg-icons'

import renamePropsWithWarning from 'react-deprecate'

const Button = ({
  size,
  type,
  title,
  onClick
}) => {

  if (type === "dark") {
    type = "outline-dark";
  } else if (type === "light") {
    type = "outline-light";
  } else if (type !== 'link' && type !== 'primary') {
    type = 'primary'
  }

  const classes = classnames(
    'btn',
    size !== '' ? `btn-${size}` : '',
    `btn-${type}`,
    type !== 'link' ? 'text-uppercase' : '',
    'font-weight-bold',
  )

  return (
    <button onClick={onClick} className={classes}>
      {title}
    </button>
  )
}

Button.defaultProps = {
  size: '',
  type: 'primary',
  call: 'default',
  action: () => { }
}


export default renamePropsWithWarning(
  Button,
  { call: 'title', action: 'onClick' },
  ({ componentName, prop, renamedProps }) => `${componentName} warning: ${prop} is deprecated and will be removed in future releases. Please use ${renamedProps}`
)
import React from 'react'
import classnames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/pro-light-svg-icons'

const Button = ({
  size,
  type,
  call,
  action
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
    <button onClick={action} className={classes}>
      {call} {type === 'link' && <FontAwesomeIcon icon={faAngleRight} className="ml-1 mb-0" />}
    </button>
  )
}

Button.defaultProps = {
  size: '',
  type: 'primary',
  call: 'default',
  action: () => { }
}


export default Button
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import renamePropsWithWarning from 'react-deprecate'

const Button = ({
  size,
  type,
  title,
  onClick,
  className
}) => {

  if (type === "dark") {
    type = "outline-dark";
  } else if (type === "light") {
    type = "outline-light";
  } else if (type !== 'link') {
    type = 'primary'
  }

  const classes = classnames(
    'btn',
    size !== '' ? `btn-${size}` : '',
    `btn-${type}`,
    type !== 'link' ? 'text-uppercase' : '',
    'font-weight-bold',
    className
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
  title: 'default',
  onClick: () => { },
  className: ''
}

Button.propTypes = {
  size: PropTypes.string,
  type: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
}


export default renamePropsWithWarning(
  Button,
  { call: 'title', action: 'onClick' },
  ({ componentName, prop, renamedProps }) => `${componentName} warning: ${prop} is deprecated and will be removed in future releases. Please use ${renamedProps}`
)
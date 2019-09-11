import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import renamePropsWithWarning from 'react-deprecate'
import { get } from 'lodash'

const Button = ({
  size,
  type,
  title,
  className,
  ...buttonProps
}) => {
  const btnType = get({
    dark: 'outline-dark',
    light: 'outline-light',
    link: 'link'
  }, type, 'primary')

  const classes = classnames(
    'btn',
    size !== '' ? `btn-${size}` : '',
    `btn-${btnType}`,
    type !== 'link' ? 'text-uppercase' : '',
    className
  )

  return (
    <button
      className={classes}
      {...buttonProps} >
      {title}
    </button>
  )
}

Button.defaultProps = {
  size: '',
  type: 'primary',
  title: 'default',
  className: ''
}

Button.propTypes = {
  size: PropTypes.string,
  type: PropTypes.string,
  title: PropTypes.string,
  className: PropTypes.string,
}


export default renamePropsWithWarning(
  Button,
  { call: 'title', action: 'onClick' },
  ({ componentName, prop, renamedProps }) => `${componentName} warning: ${prop} is deprecated and will be removed in future releases. Please use ${renamedProps}`
)
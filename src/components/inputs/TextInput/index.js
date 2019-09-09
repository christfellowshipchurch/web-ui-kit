import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExclamationCircle, faCheckCircle, faBan, faUser, faTimesCircle } from "@fortawesome/pro-light-svg-icons"

import InputContainer from '../inputContainer'
import InputIcon from '../inputIcon'

const colors = {
  fail: '#d52158',
  success: '#3ac27f',
  focus: '#c5c5c5',
  disable: 'lightgrey'
}

const type = {
  fail: faExclamationCircle,
  success: faCheckCircle,
  focus: faTimesCircle,
  disable: faBan
}

const onChange = (value) => {

}

const TextInput = ({ success, fail, label, helper, placeholder, disabled = false }) => {
  const [focused, setFocused] = useState(false)
  const [hovering, setHovering] = useState(false)

  const [isFocus, setIsFocus] = useState(false)
  const [isHover, setIsHover] = useState(false)
  const [value, setValue] = useState('')

  let focusColor = isFocus ? '#9aa1a6' : 'rgba(0,0,0,0)'

  let icon
  let iconColor
  let disableStyle = ''

  if (success) {
    icon = type.success
    iconColor = colors.success
  }
  else if (fail) {
    icon = type.fail
    iconColor = colors.fail
  }
  else if (disabled) {
    icon = type.disable
    iconColor = colors.disable
    disableStyle = 'disable'
  }
  else {
    icon = type.focus
    iconColor = isFocus ? colors.disable : 'rgba(0,0,0,0)'
  }

  return (
    <InputContainer
      label={label}
      placeholder={placeholder}
      focused={focused}
      hasValue={!!value && value !== ''}
      prefix={<InputIcon icon={faUser} focused={focused || hovering} />}
    >
      <input
        type="text"
        className="w-100 py-0"
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        onChange={(e) => setValue(e.target.value)} />
    </InputContainer>
  )


  return (
    <div className="container d-flex align-items-center justify-content-center">
      <div className='row'>
        <div className='col'>
          <label
            className="d-flex text-left pl-4 mb-0"
            style={{ color: focusColor }}
          >
            {label}
          </label>
          <div className="d-flex align-items-center border-bottom">
            <InputIcon
              icon={faUser}
              isFocus={isFocus}
              isHover={isHover}
              disabled={disabled}
            />
            <input
              className={disableStyle}
              type="text"
              placeholder={placeholder}
              onFocus={() => setIsFocus(!isFocus)}
              onBlur={() => setIsFocus(!isFocus)}
              onMouseEnter={() => setIsHover(!isHover)}
              onMouseLeave={() => setIsHover(!isHover)}
              disabled={disabled}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              style={{ backgroundColor: 'rgba(0,0,0,0)' }}
            />
            <FontAwesomeIcon
              icon={icon}
              size="2x"
              color={iconColor}
              className="p-1"
              onClick={() => setValue('')}
            />
          </div>
          <label
            className="d-flex text-left pl-4 mb-0"
            style={{ color: focusColor }}
          >
            {helper}
          </label>
        </div>
      </div>
    </div>
  );
}
export default TextInput
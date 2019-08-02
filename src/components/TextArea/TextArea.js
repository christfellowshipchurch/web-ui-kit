import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/pro-regular-svg-icons";
import {
  faExclamationCircle,
  faCheckCircle,
  faBan
} from "@fortawesome/pro-light-svg-icons";

const colors = {
  fail: "#d52158",
  success: "#3ac27f",
  focus: "#c5c5c5",
  disable: "lightgrey"
};

const type = {
  fail: faExclamationCircle,
  success: faCheckCircle,
  focus: faTimesCircle,
  disable: faBan
};

const TextArea = ({
  fail,
  label,
  helper,
  placeholder,
}) => {
  const [isFocus, setIsFocus] = useState(false);
  const [isHover, setIsHover] = useState(false);

  let focusColor = isFocus ? "#9aa1a6" : "rgba(0,0,0,0)";

  let icon;
  let iconColor;
  
  if (fail) {
    icon = type.fail;
    iconColor = colors.fail;
  } else {
    iconColor = 'rgba(0,0,0,0)'
  }

  return (
    <div className='d-flex flex-column justify-content-center'>
      <label
        className="d-flex text-left pl-2 mb-0"
        style={{ color: focusColor }}
      >
        {label}
      </label>
      <div className='d-flex'>
         <textarea
        placeholder={placeholder}
        onFocus={() => setIsFocus(!isFocus)}
        onBlur={() => setIsFocus(!isFocus)}
        onMouseEnter={() => setIsHover(!isHover)}
        onMouseLeave={() => setIsHover(!isHover)}
      />

      <FontAwesomeIcon 
        icon={icon}
        color={iconColor}
        size='2x'
        className='p-1'
      />

      </div>
      <label
        className="d-flex text-left pl-2 mt-0"
        style={{ color: focusColor }}
      >
        {helper}
      </label>
    </div>
  );
};
export default TextArea;

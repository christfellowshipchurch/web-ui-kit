import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faAngleUp,
  faAngleDown,
  faCalendarAlt,
  faBan
} from "@fortawesome/pro-light-svg-icons";


const Dropdown = ({ title, items, placeholder }) => {
  // disabled = true

  const [isButtonHover, setIsButtonHover] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isHover, setIsHover] = useState(false)


  let blueHover = isButtonHover || isOpen ? "#00AEEF" : "#8d8d8e";


  let arrow = isOpen ? faAngleUp : faAngleDown;

  const menuClass = `dropdown-menu dropdown-menu border-0 ${
    isOpen ? " show" : ""
  }`;

  return (
    <div className="dropdown">
      {/* Button */}
      <div
        className="d-flex text-left border-bottom align-items-center"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        onMouseEnter={() => setIsButtonHover(!isButtonHover)}
        onMouseLeave={() => setIsButtonHover(!isButtonHover)}
        onClick={() => setIsOpen(!isOpen)}
      >
        <FontAwesomeIcon
          icon={faCalendarAlt}
          size="2x"
          className="p-1"
          color={blueHover}
        />
        <button className="btn text-muted">{title}</button>

        <FontAwesomeIcon
          icon={arrow}
          color="#757575"
          size="3x"
          className="p-1 ml-auto mr-1"
        />
      </div>
      {/* Menu */}
      <div className={menuClass} aria-labelledby="dropdownMenuButton">
        {/* Item */}

        {items.map((n, i) => {

          let hovering = isHover ? "#757575" : "rgba(0,0,0,0)";
          let clicked = isClicked ? "#3ac27f" : hovering;

          return (
            <div
              key={i}
              className="d-flex align-items-center dropdown-item border-bottom text-muted pr-0"
              href={n.action}
              onClick={() => setIsClicked(!isClicked)}
              onMouseEnter={() => setIsHover(!isHover)}
              onMouseLeave={() => setIsHover(!isHover)}
              onChange={(e) => isClicked(e.target.clicked)}
            >
              <p className="mb-0 pl-3">{n.call}</p>
              <FontAwesomeIcon
                icon={faCheckCircle}
                color={clicked}
                className="ml-auto p-1"
                size="2x"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Dropdown;

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faAngleUp,
  faAngleDown,
  faCalendarAlt,
  faBan
} from "@fortawesome/pro-light-svg-icons";


const Dropdown = ({ title, items }) => {

  const [isHover, setisHover] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  let blueHover = isHover || isOpen ? "#00AEEF" : "#8d8d8e";

  let arrow = isOpen ? faAngleUp : faAngleDown;

  const menuClass = `dropdown-menu py-0 dropdown-menu border-0 ${
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
        onMouseEnter={() => setisHover(!isHover)}
        onMouseLeave={() => setisHover(!isHover)}
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
          return (
            n.disable
            ? (
              <div
              key={i}
              className="d-flex align-items-center dropdown-item border-bottom pr-0"
              href={n.action}
            >
              <p 
                className="mb-0 pl-3 disable"
              >
                {n.call}
              </p>
              <FontAwesomeIcon
                icon={faBan}
                color={'lightgrey'}
                className="ml-auto p-1"
                size="2x"
              />
            </div>
            )
            : (<div
              key={i}
              className="d-flex align-items-center dropdown-item border-bottom text-muted pr-0"
              href={n.action}
            >
              <p className="mb-0 pl-3">{n.call}</p>
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="ml-auto p-1 checkbox"
                size="2x"
              />
            </div>)
          );
        })}
      </div>
    </div>
  );
};
export default Dropdown;

import React, { useState } from 'react';
import classnames from 'classnames'
import PropTypes from 'prop-types';
import {
  accordionItem, accordionItemOpen,
  accordionTitle, accordionIcon, accordionBody, accordionButton,
  contentPadding,
} from '../styles/scss/styles.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleUp,
  faAngleDown
} from "@fortawesome/pro-light-svg-icons";

const AccordionItem = ({ id, title, isOpen, onClick, children }) => {

  return (
    <div className={classnames(accordionItem, isOpen ? accordionItemOpen : '')} status={isOpen ? 'open' : 'closed'}>
      <button className={`d-flex align-items-center ${accordionButton}`} onClick={() => onClick(id)}>
        <div className={accordionTitle}>
          {title}
        </div>
        <FontAwesomeIcon
        icon={isOpen ? faAngleUp : faAngleDown}
        size='2x'
        className='ml-auto'
        />
      </button>

      <div className={accordionBody}>
        <div className={contentPadding}>
          {children}
        </div>
      </div>
    </div >
  );
}

const propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isOpen: PropTypes.bool,
  onClick: PropTypes.func
};
const defaultProps = {
  isOpen: false,
  onClick: () => { }
};


AccordionItem.propTypes = propTypes;
AccordionItem.defaultProps = defaultProps;

export default AccordionItem;

import React, { useState } from 'react';
import classnames from 'classnames'
import PropTypes from 'prop-types';
import {
  accordionItem, accordionItemOpen,
  accordionTitle, accordionIcon, accordionBody, accordionButton,
  contentPadding,
} from '../css/styles.module.css'

const AccordionItem = ({ id, title, isOpen, onClick, children }) => {

  return (
    <div className={classnames(accordionItem, isOpen ? accordionItemOpen : '')} status={isOpen ? 'open' : 'closed'}>
      <button className={accordionButton} onClick={() => onClick(id)}>
        <div className={accordionTitle}>
          {title}
        </div>
        <div className={accordionIcon}>
          <span></span>
          <span></span>
        </div>
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

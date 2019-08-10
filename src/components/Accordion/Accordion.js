import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  includes
} from 'lodash';

import AccordionItem from './AccordionItem';

import {
  accordionContainer
 } from '../styles/scss/styles.module.scss'


const ACCORDION_TYPES = {
  Single: 'single',
  SinglePersistent: 'single-persistent',
  Multiple: 'multiple',
  Persistent: 'persistent',
};

const Accordion = ({ blockTitle, blockBody, type, children, textLink }) => {
  const [sections, setSections] = useState([])

  const toggle = (id) => {
    switch (type) {
      case ACCORDION_TYPES.SinglePersistent:
        setSections([id]);
        break
      case ACCORDION_TYPES.Multiple:
        setSections(
          includes(sections, id)
            ? sections.filter(value => value !== id)
            : [...sections, id]
        )
        break
      case ACCORDION_TYPES.Persistent:
        setSections(
          includes(sections, id)
            ? sections
            : [...sections, id]
        )
        break
      default:
        setSections(
          includes(sections, id)
            ? []
            : [id]
        )
        break
    }
  }

  return (
    <div className={`container ${accordionContainer}`}>
      <div className='d-flex flex-column p-2'>
          <h2 className='font-weight-bold text-center'>{blockTitle}</h2>
          <p className='font-weight-light text-center'>{blockBody}</p>
      </div>
      {children.map((child, i) => {
        let itemId = `section-${i}`

        return (          
          <AccordionItem
            id={itemId}
            title={child.props.title}
            isOpen={sections.includes(itemId)}
            onClick={toggle}
            key={i}
          >
            {child}
          </AccordionItem>
        );
      })}

      {textLink &&
      <div className='col-12 py-4 d-flex justify-content-center'>
        <a 
          href={textLink.action} 
          className='text-muted font-weight-bold'
          style={{textDecoration: 'none'}}
        >
          {textLink.call}
        </a>
      </div>
      }

    </div>
  )
}

const propTypes = {
  type: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element).isRequired
};
const defaultProps = {
  type: 'single',
};


Accordion.propTypes = propTypes;
Accordion.defaultProps = defaultProps;

export default Accordion;

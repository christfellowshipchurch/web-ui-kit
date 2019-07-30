import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  includes
} from 'lodash';

import AccordionItem from './AccordionItem';

import {
  accordionContainer
} from '../css/styles.module.css'

const ACCORDION_TYPES = {
  Single: 'single',
  SinglePersistent: 'single-persistent',
  Multiple: 'multiple',
  Persistent: 'persistent',
};

const Accordion = ({ type, children }) => {
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
    <div className={accordionContainer}>
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

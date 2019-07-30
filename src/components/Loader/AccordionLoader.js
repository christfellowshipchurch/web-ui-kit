import React from 'react'

import {
  accordionLoaderContainer, accordionLoaderColumn, accordionLoaderItem
} from '../css/styles.module.css'

const AccordionLoader = () => (
  <div className={accordionLoaderContainer}>
    {[1, 2, 3, 4, 5, 6].map((n) => (
      <div className={accordionLoaderColumn} key={n}>
        <div className={accordionLoaderItem}></div>
      </div>
    ))}
  </div>
)

const propTypes = {}
const defaultProps = {}


AccordionLoader.propTypes = propTypes
AccordionLoader.defaultProps = defaultProps

export default AccordionLoader

import React from 'react'
import {
    ringContainer, ringLoader
} from '../css/styles.module.css'

const RingLoader = () => <div className={ringContainer}><div className={ringLoader}></div></div>

const propTypes = {}
const defaultProps = {}

RingLoader.propTypes = propTypes
RingLoader.defaultProps = defaultProps

export default RingLoader

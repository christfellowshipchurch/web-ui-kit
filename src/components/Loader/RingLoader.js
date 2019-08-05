import React from 'react'
import {
    ringContainer, ringLoader
} from '../styles/scss/styles.module.scss'

const RingLoader = () => <div className={ringContainer}><div className={ringLoader}></div></div>

const propTypes = {}
const defaultProps = {}

RingLoader.propTypes = propTypes
RingLoader.defaultProps = defaultProps

export default RingLoader

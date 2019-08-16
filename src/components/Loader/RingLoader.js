import React from 'react'

const RingLoader = () => (
    <div className="fill d-flex justify-content-center align-items-center">
        <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
        </div>
    </div>
)

const propTypes = {}
const defaultProps = {}

RingLoader.propTypes = propTypes
RingLoader.defaultProps = defaultProps

export default RingLoader

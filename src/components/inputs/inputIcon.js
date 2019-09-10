import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from "@fortawesome/pro-light-svg-icons"

const InputIcon = ({ icon, focused, color }) => (
    <div style={{ fontSize: 24 }} className="d-flex align-items-end">
        <FontAwesomeIcon
            icon={icon}
            size={'1x'}
            color={color}
        />
    </div>
)

InputIcon.defaultProps = {
    icon: faUser,
    focused: false,
    color: 'black'
}

InputIcon.propTypes = {
    icon: PropTypes.object,
    focused: PropTypes.bool,
    color: PropTypes.string
}

export default InputIcon
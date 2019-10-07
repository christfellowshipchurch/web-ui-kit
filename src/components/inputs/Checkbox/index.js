import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/fontawesome-pro-light'

const Checkbox = ({
    checked,
    onClick,
    type,
    label,
    ...buttonProps
}) => {
    return (
        <div className="">
            <button
                onClick={onClick}
                className={classnames(
                    'btn',
                    'btn-checkbox',
                    {
                        [`btn-${type}`]: checked,
                        [`btn-outline-${type}`]: !checked,
                    }
                )}
                {...buttonProps}
            >
                {checked &&
                    <FontAwesomeIcon icon={faCheck} color="white" />
                }
            </button>
            {label &&
                <label
                    className={classnames(
                        'ml-2',
                        'input-label'
                    )}
                >
                    {label}
                </label>
            }
        </div>
    )
}

Checkbox.propTypes = {
    checked: PropTypes.bool,
    onClick: PropTypes.func,
    type: PropTypes.string,
    label: PropTypes.string,
}

Checkbox.defaultProps = {
    checked: false,
    onClick: () => true,
    type: 'dark',
    label: null
}

export default Checkbox
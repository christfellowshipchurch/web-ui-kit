import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

const InputContainer = ({
    prefix,
    suffix,
    border,
    label,
    description,
    children,
    focused,
    placeholder,
    hasValue
}) => {
    const smallLabel = focused || placeholder || hasValue
    return (
        <div>
            <div className={classnames(
                'd-flex',
                'flex-row',
                'align-items-end',
                'border-bottom',
                `border-${focused ? 'primary' : 'light'}`,
                'pb-2',
                'px-1',
            )}>
                {prefix}
                <div className={classnames(
                    'w-100',
                    'form-group',
                    'mb-0',
                    'pt-3',
                    'px-2',
                    'p-relative'
                )} >
                    {label &&
                        <label className={classnames(
                            "m-0",
                            smallLabel ? 'input-label-sm' : 'input-label'
                        )}>
                            {label}
                        </label>}
                    {children}
                </div>
                {suffix}
            </div>
            {description &&
                <small className={classnames(
                    "form-text",
                    "text-muted",
                )}>
                    {description}
                </small>}
        </div>
    )
}

InputContainer.defaultProps = {
    prefix: null,
    suffix: null,
    label: null,
    description: null,
    focused: false,
    placeholder: null,
    hasValue: false,
}

InputContainer.propTypes = {
    prefix: PropTypes.node,
    suffix: PropTypes.node,
    label: PropTypes.string,
    description: PropTypes.string,
    focused: PropTypes.bool,
    placeholder: PropTypes.string,
    hasValue: PropTypes.bool,
    children: PropTypes.element.isRequired
}

export default InputContainer
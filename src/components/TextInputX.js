import React from 'react'
import PropTypes from 'prop-types'

const TextInputX = ({onSubmit, defaultValue, focus}) => (
    React.createElement("form", {onSubmit: (event) => event.preventDefault() || onSubmit(this.input.value)},
        React.createElement("input", {
            type: "text",
            ref: (input => this.input = input),
            defaultValue: defaultValue,
            autoFocus: (focus) ? true : undefined,
        })
    )
)

TextInputX.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    defaultValue: PropTypes.string.isRequired,
}

export default TextInputX

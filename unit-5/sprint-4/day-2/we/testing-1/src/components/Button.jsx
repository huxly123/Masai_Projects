import React from 'react'

function Button({label,onclick}) {
    return (
        <div>
            <button onclick={onclick}>{label}</button>
        </div>
    )
}

export default Button

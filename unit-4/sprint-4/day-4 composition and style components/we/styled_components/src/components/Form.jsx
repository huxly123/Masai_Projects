import React from 'react'

function Form({children,onSubmit}) {
    return (
        <div>
            <form style={{marginTop:50,
            display:'flex',
            flexDirection:"column",
            width:"30%",
           

        }} 
            onSubmit={onSubmit}>
                
{children}
        </form>
        </div>
    )
}

export default Form

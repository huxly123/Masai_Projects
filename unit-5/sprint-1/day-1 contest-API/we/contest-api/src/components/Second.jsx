import React from 'react'
import Third from './Third'
import { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

function Second() {

    const storedvalue = useContext(AppContext)
    console.log(storedvalue);
    return (
        <div>
            <Third />
        </div>
    )
}

export default Second

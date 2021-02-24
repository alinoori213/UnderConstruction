import React from 'react'

import '../styles/Description.css'

export const Description = ({text})=>{
    return(
        <div className='description'>
            <p className='description-text'>{text}</p>
        </div>
    )
}
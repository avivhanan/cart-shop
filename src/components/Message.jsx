import React from 'react'
import './messages.css'
import closeIcon from './icons/xmark-solid.svg'

export default function Message({ id, message, onClearMessage }) {
    return (
        <div className='message' style={{ top: (id * 100) + 10 }}>
            {message}
            <img className='delete-message' onClick={() => onClearMessage(id)} src={closeIcon} alt={'close'} />
        </div>
    )
}

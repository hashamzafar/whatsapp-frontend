import React from 'react'
import './message.css'

function Message({ value }) {


    return (
        <>
            {value ?
                <div id="message">
                    <span className='currentUser'>Hi Joe</span>
                </div> :
                <div id="messageDifferent">
                    <span className='contactMember'>Hi Donald!</span>
                </div>
            }
        </>

    )
}

export default Message

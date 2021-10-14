import React from 'react'
import './singlecontact.css'
import { Row } from 'react-bootstrap'

function SingleContact({ chats }) {
    return (
        <Row id="singleContact">
            <img src={chats.avatar} alt='profileImage' />
            <div className='details'>
                <div>
                    <span>{chats.members[0].username}</span>
                    <span>time</span>
                </div>
                <div>
                    <p>last message</p>
                </div>
            </div>
        </Row>
    )
}

export default SingleContact

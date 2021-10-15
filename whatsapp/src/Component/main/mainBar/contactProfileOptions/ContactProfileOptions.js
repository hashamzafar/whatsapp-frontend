import React from 'react'
import { Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import './contactprofile.css'
import { AiOutlineSearch } from 'react-icons/ai'

import { BsThreeDotsVertical } from 'react-icons/bs'

function ContactProfileOptions() {

    const singleChat = useSelector(state => state.singleChat.chat)

    return (
        <Row id='contactProfile'>
            <div className='d-flex'>
                <img src={singleChat.avatar} alt='profileImage' />
                <div>
                    <span>{singleChat.members && singleChat.members[0].username}</span>
                    <p>last seen</p>
                </div>
            </div>
            <div>
                <span><AiOutlineSearch /></span>
                <span><BsThreeDotsVertical /></span>
            </div>
        </Row>
    )
}

export default ContactProfileOptions

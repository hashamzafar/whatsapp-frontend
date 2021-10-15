import React from 'react'
import { Row } from 'react-bootstrap'
import './contactprofile.css'
import { AiOutlineSearch } from 'react-icons/ai'

import { BsThreeDotsVertical } from 'react-icons/bs'

function ContactProfileOptions({ user }) {



    return (
        <Row id='contactProfile'>
            {
                <div className='d-flex'>
                    <img src={user.members[0].avatar} alt='profileImage' />
                    <div>
                        <span>{user.members[0].username}</span>
                        <p>last seen</p>
                    </div>
                </div>
            }
            <div>
                <span><AiOutlineSearch /></span>
                <span><BsThreeDotsVertical /></span>
            </div>
        </Row>
    )
}

export default ContactProfileOptions

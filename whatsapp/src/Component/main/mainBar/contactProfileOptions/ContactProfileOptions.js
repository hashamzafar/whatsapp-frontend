import React from 'react'
import { Row } from 'react-bootstrap'
import './contactprofile.css'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsThreeDotsVertical } from 'react-icons/bs'

function ContactProfileOptions() {
    return (
        <Row id='contactProfile'>
            <div className='d-flex'>
                <img src='https://picsum.photos/200' alt='profileImage' />
                <div>
                    <span>name and surname</span>
                    <p>last seen</p>
                </div>
            </div>
            <div>
                <span><AiOutlineSearch/></span>
                <span><BsThreeDotsVertical/></span>
            </div>
        </Row>
    )
}

export default ContactProfileOptions

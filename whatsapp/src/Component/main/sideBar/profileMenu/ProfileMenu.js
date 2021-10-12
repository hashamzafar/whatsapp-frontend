import React from 'react'
import { Row } from 'react-bootstrap'
import './ProfileMenu.css'
import { BiMessageDetail, BiDotsVerticalRounded } from 'react-icons/bi'
import { FaCircleNotch } from 'react-icons/fa'

function ProfileMenu() {
    return (
        <Row id='profileMenu'>
            <div>
                <img src='https://picsum.photos/200' alt='profileImage' className="ml-3" />
            </div>
            <div>
                <div>
                    <FaCircleNotch />
                </div>
                <div>
                    <BiMessageDetail />
                </div>
                <div>
                    <BiDotsVerticalRounded />
                </div>
            </div>
        </Row>
    )
}

export default ProfileMenu

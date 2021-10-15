import React, { useEffect } from 'react'
import ProfileMenu from './profileMenu/ProfileMenu.js'
import ContactSearch from './contactSearch/ContactSearch.js'
import ContactBoard from './contactBoard/ContactBoard'
import { useDispatch, useSelector } from 'react-redux'
import { IoIosAddCircle } from 'react-icons/io'
import { Col } from 'react-bootstrap'
import './sidebar.css'
import { chatRoomAction, newChatAction, fillChatDataBaseAction } from '../../../Redux/actions/index.js'

function SideBar() {

    const newChatRoomMember = useSelector(state => state.newChatRoom.members)
    const dispatch = useDispatch()
    let payload = { members: [newChatRoomMember] }

    const addMembers = async () => {
        try {
            const response = await fetch(
                `https://what-s-app.herokuapp.com/chats`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        'Authorization': `Bearer ${window.localStorage.getItem('Token')}`,
                    },
                    body: JSON.stringify(payload),
                }
            )
            if (response.ok) {
                dispatch(chatRoomAction(false))
                dispatch(newChatAction(''))
                dispatch(fillChatDataBaseAction())
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Col id='sidebar'>
            <ProfileMenu />
            <ContactSearch />
            <ContactBoard />
            {
                newChatRoomMember.length > 0 && <div id='addChatButton' onClick={addMembers}><IoIosAddCircle /></div>
            }
        </Col>
    )
}

export default SideBar

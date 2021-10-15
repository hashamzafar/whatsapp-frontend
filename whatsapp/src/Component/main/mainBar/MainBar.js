import React, { useEffect, useState } from 'react'
import { Col } from 'react-bootstrap'
import ContactProfileOptions from './contactProfileOptions/ContactProfileOptions'
import MainChatBoard from './mainChatBoard/MainChatBoard'
import ChatInputArea from './chatInputArea/ChatInputArea'
import { useDispatch, useSelector } from 'react-redux'
import './mainbar.css'

function MainBar() {

    const selectedChatId = useSelector(state => state.selectChatRoom.chats)
    const [user, setUser] = useState([])

    useEffect(() => {
        retrieveChats()
    }, [selectedChatId])

    const retrieveChats = async () => {
        try {
            let response = await fetch(`https://what-s-app.herokuapp.com/chats/${selectedChatId}`, {
                headers: {
                    'Authorization': `Bearer ${window.localStorage.getItem('Token')}`
                }
            })
            if (response.ok) {
                const users = await response.json()
                setUser(users)
                console.log(user);
            }
        } catch (error) {

        }
    }

    return (
        <Col id='mainbar'>
            <ContactProfileOptions user={user} />
            <MainChatBoard user={user} />
            <ChatInputArea />
        </Col>
    )
}

export default MainBar

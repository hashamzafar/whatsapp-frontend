import React from 'react'
import { Col } from 'react-bootstrap'
import ContactProfileOptions from './contactProfileOptions/ContactProfileOptions'
import MainChatBoard from './mainChatBoard/MainChatBoard'
import ChatInputArea from './chatInputArea/ChatInputArea'
import './mainbar.css'

function MainBar() {
    return (
        <Col id='mainbar'>
            <ContactProfileOptions />
            <MainChatBoard />
            <ChatInputArea />
        </Col>
    )
}

export default MainBar

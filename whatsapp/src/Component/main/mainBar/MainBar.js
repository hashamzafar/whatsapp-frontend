import React from 'react'
import {Col} from 'react-bootstrap'
import ContactProfileOptions from './contactProfileOptions/ContactProfileOptions'
import MainChatBoard from './mainChatBoard/MainChatBoard'
import ChatInputArea from './chatInputArea/ChatInputArea'

function MainBar() {
    return (
        <Col>
            <ContactProfileOptions/>
            <MainChatBoard/>
            <ChatInputArea/>
        </Col>
    )
}

export default MainBar

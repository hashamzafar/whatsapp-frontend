import React from 'react'
import {Row} from 'react-bootstrap'
import ContactProfileOptions from './contactProfileOptions/ContactProfileOptions'
import MainChatBoard from './mainChatBoard/MainChatBoard'
import ChatInputArea from './chatInputArea/ChatInputArea'

function MainBar() {
    return (
        <Row className='flex-column'>
            <ContactProfileOptions/>
            <MainChatBoard/>
            <ChatInputArea/>
        </Row>
    )
}

export default MainBar

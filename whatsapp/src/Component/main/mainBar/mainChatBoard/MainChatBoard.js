import React from 'react'
import { Row } from 'react-bootstrap'
import './mainchatboard.css'
import ScrollToBottom from 'react-scroll-to-bottom'
import Message from './message/Message.js'

function MainChatBoard({ messages }) {
    return (
        <Row id="mainchatboard">
            <ScrollToBottom>
                {messages && messages.map((message, i) => <Message key={i} message={message} />)}
                <div id='message'>
                    hi there
                </div>
            </ScrollToBottom>
        </Row>
    )
}

export default MainChatBoard

import React from 'react'
import { Row } from 'react-bootstrap'
import './mainchatboard.css'
import ScrollToBottom from 'react-scroll-to-bottom'
import Message from './message/Message.js'

function MainChatBoard({ user }) {
    return (
        <Row id="mainchatboard">
            <ScrollToBottom className='scrollToBottom' >
                {/* {messages && messages.map((message, i) => <Message key={i} message={message} />)}
                <div id='message'>
                    hi there
                </div> */}
                <Message value={false} user={user} />
                <Message value={false} />
                <Message value={false} />
                <Message value={true} />
                <Message value={true} />
                <Message value={true} />
                <Message value={true} />
                <Message value={true} />
                <Message value={true} />
                <Message value={true} />
                <Message value={true} />
                <Message value={true} />
                <Message value={true} />
                <Message value={true} />
                <Message value={true} />
                <Message value={true} />

            </ScrollToBottom>
        </Row>
    )
}

export default MainChatBoard

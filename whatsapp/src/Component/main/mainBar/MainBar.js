import React, { useEffect, useState } from 'react'
import { Col } from 'react-bootstrap'
import ContactProfileOptions from './contactProfileOptions/ContactProfileOptions'
import MainChatBoard from './mainChatBoard/MainChatBoard'
import ChatInputArea from './chatInputArea/ChatInputArea'
import { useSelector } from 'react-redux'
import './mainbar.css'

function MainBar() {

    const selectedChatId = useSelector(state => state.singleChat.chat)


 
    return (
        <Col id='mainbar'>
            {
                selectedChatId.members ? <>
                    <ContactProfileOptions/>
                    <MainChatBoard/>
                    <ChatInputArea />
                </>
                    : <div id="mainImage"><img src="https://www.tme.net/wp-content/uploads/2020/03/whatsapp-web-e1583922317659.jpg"></img></div>
            }

        </Col>
    )
}

export default MainBar

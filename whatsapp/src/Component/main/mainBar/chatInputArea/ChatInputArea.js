import React from 'react'
import { Row, InputGroup, FormControl } from 'react-bootstrap'
import { BsEmojiSmile, BsFillMicFill } from 'react-icons/bs'
import {ImAttachment} from 'react-icons/im'
import './chatinput.css'


function ChatInputArea() {
    return (
        <Row id='chatInputArea'>
            <div className='inputicons'>
                <BsEmojiSmile />
            </div>
            <div className='inputicons'>
                <ImAttachment/>
            </div>
            <div>
                <InputGroup>
                    <FormControl aria-label="Text input with radio button" />
                </InputGroup>
            </div>
            <div className='inputicons'>
                <BsFillMicFill/>
            </div>
        </Row>
    )
}

export default ChatInputArea

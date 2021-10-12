import React from 'react'
import { Row, Col, InputGroup, FormControl } from 'react-bootstrap'
import { BsEmojiSmile, BsFillMicFill } from 'react-icons/bs'
import { ImAttachment } from 'react-icons/im'
import './chatinput.css'


function ChatInputArea() {
    return (
        <Row id='chatInputArea'>
            <Col  className='inputicons'>
                <BsEmojiSmile />
            </Col>
            <Col  className='inputicons'>
                <ImAttachment />
            </Col>
            <Col xl={10} >
                <InputGroup>
                    <FormControl aria-label="Text input with radio button" />
                </InputGroup>
            </Col>
            <Col  className='inputicons'>
                <BsFillMicFill />
            </Col>
        </Row>
    )
}

export default ChatInputArea

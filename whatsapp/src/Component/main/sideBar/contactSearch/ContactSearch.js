import React from 'react'
import { Row, InputGroup, FormControl } from 'react-bootstrap'
import './contactSearch.css'
import {AiOutlineSearch} from 'react-icons/ai'

function ContactSearch() {
    return (
        <Row id='contactSearch'>
            <InputGroup>
                <InputGroup.Prepend>
                    <InputGroup.Text><AiOutlineSearch/></InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl aria-label="Text input with radio button" placeholder="Search or start new chat" />
            </InputGroup>
        </Row>
    )
}

export default ContactSearch

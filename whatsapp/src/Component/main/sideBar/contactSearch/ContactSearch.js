import React from 'react'
import { Row, InputGroup, FormControl } from 'react-bootstrap'
import './contactSearch.css'

function ContactSearch() {
    return (
        <Row id='contactSearch'>
            <InputGroup>
                <InputGroup.Prepend>
                    <InputGroup.Radio aria-label="Radio button for following text input" />
                </InputGroup.Prepend>
                <FormControl aria-label="Text input with radio button" placeholder="Search or start new chat" />
            </InputGroup>
        </Row>
    )
}

export default ContactSearch

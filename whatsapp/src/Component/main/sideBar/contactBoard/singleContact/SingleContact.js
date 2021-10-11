import React from 'react'
import './singlecontact.css'
import { Row, Col } from 'react-bootstrap'

function SingleContact() {
    return (
        <Row id="singleContact">
            <img src='https://picsum.photos/200' alt='profileImage' />
            <Col sm={9} className='details'>
                <div>
                    <h4>Contact Name</h4>
                    <p>last message</p>
                </div>
                <div>
                    <span>time</span>
                </div>
            </Col>
        </Row>
    )
}

export default SingleContact

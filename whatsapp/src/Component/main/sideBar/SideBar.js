import React from 'react'
import ProfileMenu from './profileMenu/ProfileMenu.js'
import ContactSearch from './contactSearch/ContactSearch.js'
import ContactBoard from './contactBoard/ContactBoard'
import { Container, Row, Col } from 'react-bootstrap'

function SideBar() {
    return (
        <Col>
            <Row className='flex-column'>
                <ProfileMenu/>
                <ContactSearch/>
                <ContactBoard/>
            </Row>
        </Col>
    )
}

export default SideBar

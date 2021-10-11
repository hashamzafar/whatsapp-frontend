import React from 'react'
import ProfileMenu from './profileMenu/ProfileMenu.js'
import ContactSearch from './contactSearch/ContactSearch.js'
import ContactBoard from './contactBoard/ContactBoard'
import { Col } from 'react-bootstrap'
import './sidebar.css'

function SideBar() {
    return (
        <Col xs={5} sm={4} id='sidebar'>
            <ProfileMenu />
            <ContactSearch />
            <ContactBoard />
        </Col>
    )
}

export default SideBar

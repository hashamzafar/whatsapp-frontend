import React from 'react'
import { Container, Row } from 'react-bootstrap'
import SideBar from './sideBar/SideBar.js'
import MainBar from './mainBar/MainBar.js'

function Main() {
    return (
        <Container fluid id='main'>
            <Row>
                <SideBar/>
                <MainBar/>
            </Row>
        </Container>
    )
}

export default Main

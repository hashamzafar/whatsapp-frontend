import React from 'react'
import { Container, Row } from 'react-bootstrap'
import SideBar from './sideBar/SideBar.js'
import MainBar from './mainBar/MainBar.js'

function Main() {
    return (
        <Container>
            <Row>
                <SideBar className='col-4' />
                <MainBar className='col-8' />
            </Row>
        </Container>
    )
}

export default Main

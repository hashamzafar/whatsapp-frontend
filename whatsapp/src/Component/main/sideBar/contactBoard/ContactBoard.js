import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import SingleContact from './singleContact/SingleContact'
import { useDispatch, useSelector } from 'react-redux'
import { fillChatDataBaseAction } from '../../../../Redux/actions/index.js'

function ContactBoard() {

    const dispatch = useDispatch()
    const chats = useSelector(state => state.chat.list)

    useEffect(() => {
        dispatch(fillChatDataBaseAction())
        console.log(chats);
    }, [])

    return (

        <Container>
            {
                chats && chats.map((chat, i) => (
                    <SingleContact key={i} chats={chat} />
                ))
            }
        </Container>
    )
}

export default ContactBoard

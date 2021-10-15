import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import SingleContact from './singleContact/SingleContact'
import SingleUser from './singleContact/SingleUser.js'
import { useDispatch, useSelector } from 'react-redux'
import { fillChatDataBaseAction } from '../../../../Redux/actions/index.js'

function ContactBoard() {

    const dispatch = useDispatch()
    const [users, setUsers] = useState([])
    const chats = useSelector(state => state.chat.list)
    const chatroom = useSelector(state => state.chatRoom.create)
    const newChatRoomMember = useSelector(state => state.newChatRoom.members)
    // const newChatRoomMember = useSelector(state => state.newChatRoom.members)



    useEffect(() => {
        dispatch(fillChatDataBaseAction())
        console.log(chats);
        console.log('chatroom', chatroom);
    }, [])



    useEffect(() => {
        fetchUsers()
        console.log(users);
    }, [chatroom])


    const fetchUsers = async () => {
        try {
            let response = await fetch(`https://what-s-app.herokuapp.com/users`, {
                headers: {
                    'Authorization': `Bearer ${window.localStorage.getItem('Token')}`
                }
            })
            if (response) {
                const users = await response.json()
                setUsers(users)
            }
        } catch (error) {

        }
    }


    return (

        <Container>
            {
                chatroom ?
                    users && users.map((user, i) => (
                        <SingleUser key={i} chats={user} />
                    )) :
                    chats && chats.map((chat, i) => (
                        <SingleContact key={i} chats={chat} />
                    ))
            }
        </Container>
    )
}

export default ContactBoard

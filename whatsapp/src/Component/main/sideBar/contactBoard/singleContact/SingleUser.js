import React from "react";
import "./singlecontact.css";
import { Row } from "react-bootstrap";
import { newChatAction } from '../../../../../Redux/actions/index.js'
import { useDispatch, useSelector } from 'react-redux'
import { ImRadioUnchecked, ImRadioChecked } from 'react-icons/im'

function SingleContact({ chats }) {

    const dispatch = useDispatch()
    const newChatRoomMember = useSelector(state => state.newChatRoom.members)


    return (
        <Row id="singleContact" onClick={() => dispatch(newChatAction(chats._id))}>
            <img src={chats.avatar} alt='profileImage' />
            <div className='details'>
                <div>
                    <span>{chats.username}</span>
                    {newChatRoomMember.includes(chats._id) ?
                        <span><ImRadioChecked /></span> :
                        <span><ImRadioUnchecked /></span>
                    }
                </div>
                <div>
                    <p>last message</p>
                </div>
            </div>
        </Row>
    )
}

export default SingleContact;

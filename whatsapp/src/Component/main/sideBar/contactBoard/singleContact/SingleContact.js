import React from "react";
import "./singlecontact.css";
import { Row } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux'
import { fillChatSingleDataBaseAction, selectChatAction } from '../../../../../Redux/actions/index.js'
function SingleContact({ chats }) {

  const dispatch = useDispatch()

  return (
    <Row id="singleContact" onClick={() => {
      dispatch(selectChatAction(chats._id))
      dispatch(fillChatSingleDataBaseAction())
    }}>
      <img src={chats.members[0].avatar} alt='profileImage' />
      <div className='details'>
        <div>
          <span>{chats.members[0].username}</span>
          <span>time</span>
        </div>
        <div>
          <p>last message</p>
        </div>
      </div>
    </Row >
  )
}

export default SingleContact;

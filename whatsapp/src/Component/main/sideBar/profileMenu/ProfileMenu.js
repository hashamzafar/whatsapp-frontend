import React, { useState } from 'react'
import { Row } from 'react-bootstrap'
import './ProfileMenu.css'
import { BiMessageDetail, BiDotsVerticalRounded } from 'react-icons/bi'
import { FaCircleNotch } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { chatRoomAction } from '../../../../Redux/actions/index.js'
import { withRouter } from "react-router-dom";

function ProfileMenu(props) {

    const [dropDown, setDropDown] = useState(false)
    const dispatch = useDispatch()




    return (
        <Row id='profileMenu'>
            <div>
                <img src='https://picsum.photos/200' alt='profileImage' className="ml-3" />
            </div>
            <div>
                <div>
                    <FaCircleNotch />
                </div>
                <div>
                    <BiMessageDetail />
                </div>
                <div onClick={() => setDropDown(!dropDown)}>
                    <BiDotsVerticalRounded />
                </div>
                {
                    dropDown &&
                    <div id='dropDown'>
                        <div onClick={() => {
                            dispatch(chatRoomAction(true))
                            setDropDown(false)
                        }}> New Group</div>
                        <div onClick={() => {
                            localStorage.removeItem('Token');
                            props.history.push("/")
                        }}> Log Out </div>
                    </div>
                }
            </div>
        </Row >
    )
}

export default withRouter(ProfileMenu)

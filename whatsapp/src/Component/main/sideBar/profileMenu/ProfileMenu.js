import React, { useEffect, useRef, useState } from 'react'
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
    const ref = useRef()

    useEffect(() => {
        const checkIfClickedOutside = e => {
            // If the menu is open and the clicked target is not within the menu,
            // then close the menu
            if (dropDown && ref.current && !ref.current.contains(e.target)) {
                setDropDown(false)
            }
        }

        document.addEventListener("mousedown", checkIfClickedOutside)

        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [dropDown])

    return (
        <Row id='profileMenu' ref={ref}>
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
                            /*  setDropDown(false) */
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

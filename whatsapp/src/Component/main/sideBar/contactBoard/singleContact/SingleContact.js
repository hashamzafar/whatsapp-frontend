import React, { useState } from "react";
import "./singlecontact.css";
import { Row } from "react-bootstrap";

function SingleContact() {
  // const [contact, steContact]= useState([])
  // const fetchUser = async()=>{
  //     try {
  //         const response = await fetch(`https://what-s-app.herokuapp.com/users`, {
  //             headers: {

  //             }
  //         })
  //     } catch (error) {
  //         console.log(error)
  //     }
  // }
  return (
    <Row id="singleContact">
      <img src="https://picsum.photos/200" alt="profileImage" />
      <div className="details">
        <div>
          <span>Contact Name</span>
          <span>time</span>
        </div>
        <div>
          <p>last message</p>
        </div>
      </div>
    </Row>
  );
}

export default SingleContact;

import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import "./mainchatboard.css";
import ScrollToBottom from "react-scroll-to-bottom";
import Message from "./message/Message.js";
import { io } from "socket.io-client";

function MainChatBoard({ messages }) {
  const url = `http://localhost:3003`;
  const socket = io(url, { transports: ["websocket"] });

  useEffect(() => {
    socket.on("connect", () => {
      console.log("connection STARTED");
      console.log(socket.id);
      socket.on("welcome");
    });
  }, []);
  return (
    <Row id="mainchatboard">
      <ScrollToBottom>
        {messages &&
          messages.map((message, i) => <Message key={i} message={message} />)}
        <div id="message">hi there</div>
      </ScrollToBottom>
    </Row>
  );
}

export default MainChatBoard;

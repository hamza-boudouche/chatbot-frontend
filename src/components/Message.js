import React, { useRef, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import botPic from "../assets/bot.png";

import logo from '../assets/user.png';

const Message = ({ message: { local, text }, hidden, end, setBtnVisible }) => {
  const { user } = useAuth0();
  const messageClass = local ? 'sent' : 'received';
  const ref = useRef(null)

  return (
    <div className={`message ${messageClass} ${hidden ? "hidden" : ""}`} id={end ? "end" : ""} ref={ref}>
      <div className="avatar">
        <img
          src={messageClass === "sent" && user?.picture ? user?.picture : botPic}
          alt="avatar"
          style={{
            width: 50,
            height: 50,
            borderRadius: "50%",
          }}
        />
      </div>
      <div className="message-body">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Message;
